"use client";

import { useCommentQuery } from "@/query/useCommentQuery";

const GuestCommentList = () => {
  const { data: comments, isLoading } = useCommentQuery();

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  return (
    <div className="w-full space-y-4">
      {comments?.map(({ content, id, name }) => (
        <article
          key={id}
          className="space-y-2 rounded-lg border border-primary bg-white p-4"
        >
          <h3 className="font-santokki font-semibold">{name}</h3>
          <p className="text-gray-700">{content}</p>
        </article>
      ))}
    </div>
  );
};

export default GuestCommentList;
