import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addDoc,
  collection,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore";
import { firestore } from "../lib/firebase/config";

export interface Comment {
  name: string;
  date: string;
  content: string;
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
