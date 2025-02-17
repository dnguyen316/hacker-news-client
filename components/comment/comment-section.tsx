"use client";
import { Comment } from "@/lib/constants/types";
import useArticleComment from "@/hooks/use-article-comment";
import React, { useState } from "react";
import CommentItem from "./comment-item";
import { ArrowDown } from "lucide-react";

interface CommentSectionProps {
  articleId: number;
  commentCounts: number;
}

const CommentSection: React.FC<CommentSectionProps> = (props) => {
  const { articleId, commentCounts } = props;
  const [page, setPage] = useState(1);

  const { comments, isLoadingComment, error, fetchMore } = useArticleComment({
    parentId: articleId,
    page: page,
    limit: 5,
  });

  const handleLoadMorePage = async () => {
    const nextPage = page + 1;
    setPage(nextPage);

    await fetchMore({
      variables: {
        parentId: articleId,
        page: nextPage,
        limit: 5,
      },
    });
  };

  if (error) return <div>Error</div>;

  console.log("~ comment", !!comments && comments);

  return (
    <section className="border-t-neutral-200 border-t-[1px]">
      <h2 className="py-4 font-medium text-lg">
        {commentCounts} comment{commentCounts > 1 && "s"}
      </h2>
      <ul>
        {comments.length > 0 &&
          comments.map((comment: Comment) => (
            <li
              key={comment.id}
              className="[&:not(:last-child)]:border-b-[1px] border-b-neutral-200 py-4"
            >
              <CommentItem data={comment} />
            </li>
          ))}
      </ul>
      {!isLoadingComment && comments.length > 0 && (
        <button
          className="bg-white border-neutral-200 font-medium text-sm text-neutral-900 shadow focus:drop-shadow focus:t hover:text-neutral-950 border-[0.5px] hover:shadow-md transition py-[10px] px-[14px] hover:bg-neutral-200 hover:border-[1px] rounded flex gap-3 items-center"
          onClick={handleLoadMorePage}
        >
          More Comment <ArrowDown size={17} />
        </button>
      )}
      {isLoadingComment && <div>Loading Comment...</div>}
    </section>
  );
};

export default CommentSection;
