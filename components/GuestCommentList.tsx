"use client";

import { useInfiniteCommentQuery } from "@/query/useCommentQuery";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { ChevronDown } from "lucide-react";
import { Fragment } from "react";
import { Button } from "./ui/button";

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
      {comments?.pages.map((page, index) => (
        <Fragment key={index}>
          {page.data.map(({ content, id, name }) => (
            <li
              key={id}
              className="space-y-2 rounded-lg border border-primary bg-white p-4"
            >
              <h3 className="font-dodum font-bold">{name}</h3>
              <p className="text-gray-700">{content}</p>
            </li>
          ))}
        </Fragment>
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
