"use client";

import { useCommentQuery } from "@/query/useCommentQuery";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const GuestCommentList = () => {
  const { data: comments, isLoading } = useCommentQuery();
  const [parent] = useAutoAnimate();

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  return (
    <ul className="w-full space-y-4" ref={parent}>
      {comments?.map(({ content, id, name }) => (
        <li
          key={id}
          className="space-y-2 rounded-lg border border-primary bg-white p-4"
        >
          <h3 className="font-santokki font-semibold">{name}</h3>
          <p className="text-gray-700">{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default GuestCommentList;
