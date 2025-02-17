"use client";

import useArticleComment from "@/hooks/use-article-comment";
import React, { useState } from "react";
import CommentItem from "./comment-item";
import { ArrowDown } from "lucide-react";

interface NestedCommentProps {
  parentId: number;
  commentsCount?: number;
}

const NestedComment: React.FC<NestedCommentProps> = ({
  parentId,
  commentsCount,
}) => {
  const [page, setPage] = useState<number>(1);

  const {
    comments: nestedComments,
    isLoadingComment,
    error,
    fetchMore,
  } = useArticleComment({
    parentId,
    page,
    limit: 5,
  });

  const handleLoadMorePage = async () => {
    const nextPage = page + 1;
    setPage(nextPage);

    await fetchMore({
      variables: {
        parentId: parentId,
        page: nextPage,
        limit: 5,
      },
    });
  };

  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul className="ml-4 pt-4 pl-4 border-l">
      {nestedComments.map((comment) => (
        <li key={comment.id}>
          <CommentItem data={comment} parentId={parentId} />
        </li>
      ))}
      {isLoadingComment && <p>Loading...</p>}
      {!isLoadingComment &&
        commentsCount &&
        nestedComments.length < commentsCount && (
          <button
            className="bg-white border-neutral-200 font-medium text-sm text-neutral-900 shadow py-[10px] px-[14px] flex gap-3 items-center"
            onClick={handleLoadMorePage}
          >
            More Replies <ArrowDown size={"14px"} />
          </button>
        )}
    </ul>
  );
};

export default NestedComment;
