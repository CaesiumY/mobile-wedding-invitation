"use client";

import { Button } from "@/components/ui/button"; // Updated UI path
import { useInfiniteCommentQuery } from "@/features/guestBook/query/guestBookQuery"; // Updated query path
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { ChevronDown } from "lucide-react";

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

  // 모든 댓글을 단일 배열로 병합
  const allComments = comments?.pages.flatMap((page) => page.data) || [];

  return (
    <ul className="w-full space-y-4" ref={parent}>
      {allComments.map((comment) => (
        <li
          key={comment.id}
          className="space-y-2 rounded-lg border border-primary bg-white p-4"
        >
          <h3 className="font-dodum font-bold">{comment.name}</h3>
          <p className="text-gray-700">{comment.content}</p>
        </li>
      ))}

      <Button
        variant="outline"
        className="w-full rounded-sm border-secondary hover:bg-secondary/80"
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
