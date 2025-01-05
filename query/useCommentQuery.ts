import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  addDoc,
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  QueryDocumentSnapshot,
  startAfter,
  where,
} from "firebase/firestore";
import { firestore } from "../lib/firebase/config";

export interface Comment {
  name: string;
  date: string;
  content: string;
  isSecret: boolean;
}

export const useCommentQuery = () => {
  return useQuery({
    queryKey: ["comments"],
    queryFn: async () => {
      const q = query(
        collection(firestore, "comments"),
        orderBy("date", "desc"),
      );
      const snapshot = await getDocs(q);
      const comments = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Comment),
      }));

      return comments;
    },
  });
};

export const useCreateCommentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newComment: Comment) => {
      const docRef = await addDoc(
        collection(firestore, "comments"),
        newComment,
      );
      return { id: docRef.id, ...newComment };
    },
    onSettled: async () => {
      return await queryClient.invalidateQueries({ queryKey: ["comments"] });
    },
  });
};

export interface CommentPageParam {
  lastDoc?: QueryDocumentSnapshot;
}

export const useInfiniteCommentQuery = (pageSize = 5) => {
  return useInfiniteQuery({
    queryKey: ["comments", "infinite"],
    queryFn: async ({ pageParam }: { pageParam?: CommentPageParam }) => {
      const commentsCollection = collection(firestore, "comments");
      let queryRef = query(
        commentsCollection,
        where("isSecret", "==", false),
        orderBy("date", "desc"),
        limit(pageSize),
      );

      // pageParam에 lastDoc가 있다면 => startAfter로 커서 이동
      if (pageParam?.lastDoc) {
        queryRef = query(
          commentsCollection,
          where("isSecret", "==", false),
          orderBy("date", "desc"),
          startAfter(pageParam.lastDoc),
          limit(pageSize),
        );
      }

      const snapshot = await getDocs(queryRef);

      // 가져온 문서들을 data 배열로 변환
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Comment),
      }));

      // 다음 페이지를 위한 lastDoc 구하기
      const lastDoc = snapshot.docs[snapshot.docs.length - 1];

      return {
        data,
        nextPageCursor: lastDoc,
      };
    },
    initialPageParam: undefined,
    getNextPageParam: (lastPage) => {
      if (lastPage.nextPageCursor) {
        return { lastDoc: lastPage.nextPageCursor };
      }
      // 더 이상 문서가 없으면 undefined 반환 => hasNextPage가 false가 됨
      return undefined;
    },
  });
};
