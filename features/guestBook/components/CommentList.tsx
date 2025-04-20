"use client";

import {
  type Comment,
  useInfiniteCommentQuery,
} from "@/features/guestBook/query/guestBookQuery"; // Updated query path
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { ChevronDown } from "lucide-react";
import { Fragment } from "react";
import { Button } from "@/components/ui/button"; // Updated UI path
import { useRealtimeDB } from "@/features/guestBook/hooks/useGuestComments"; // Renamed hook import

const GuestCommentList = () => {
  const {
    data: comments,
    hasNextPage,
    fetchNextPage,
    isLoading,
  } = useInfiniteCommentQuery();

  const [parent] = useAutoAnimate();

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  return (
    <ul className="w-full space-y-4" ref={parent}>
      {/* Add types for map parameters and use unique 'id' for key */}
      {comments?.pages.map((page, pageIndex: number) => (
        <Fragment key={`page-${page.data[pageIndex].id}`}>
          {/* Using first comment ID or fallback to index if page is empty */}
          {page.data.map((comment) => (
            <li
              key={comment.id} // Use unique comment ID as key
              className="border-primary space-y-2 rounded-lg border bg-white p-4"
            >
              <h3 className="font-dodum font-bold">{comment.name}</h3>
              <p className="text-gray-700">{comment.content}</p>
              {/* Add delete button logic if needed using useDeleteComment */}
            </li>
          ))}
        </Fragment>
      ))}

      <Button
        variant="outline"
        className="border-secondary hover:bg-secondary/80 w-full rounded-sm"
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage}
      >
        <ChevronDown />
        <span className="self-end">더보기</span>
      </Button>
    </ul>
  );
};

export default GuestCommentList;
