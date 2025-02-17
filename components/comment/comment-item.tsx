"use client";

import React, { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { Comment } from "@/lib/constants/types";
import DOMPurity from "dompurify";
import parse from "html-react-parser";
import NestedComment from "./nested-comment";

interface CommentItemProps {
  data: Comment;
  parentId?: number;
}

const CommentItem: React.FC<CommentItemProps> = ({ data, parentId }) => {
  const { id, text, time, author, kids } = data;
  const date = new Date(Number(time));

  const sanitizedContent = DOMPurity.sanitize(text);
  const parsedContent = parse(sanitizedContent);

  const [showChildren, setShowChildren] = useState<boolean>(false);

  const handleToggleChildren = () => {
    setShowChildren((prev) => !prev);
  };

  return (
    <>
      <div className="relative flex items-center">
        {parentId && (
          <span className="absolute h-full w-[12px] -translate-y-[20px] rounded-bl-md border-b border-r-l border-neutral-300 -left-[17px]"></span>
        )}
        {/* header comment */}
        <p className="font-semibold text-sm flex gap-2 mb-2">
          {author} <span>&middot;</span>
          <span className="font-normal text-neutral-600">
            {formatDistanceToNow(date, { addSuffix: true })}
          </span>
        </p>
      </div>
      {/* content comment */}
      <p className="text-sm mb-3">{parsedContent}</p>
      {kids?.length > 0 && (
        <button
          onClick={handleToggleChildren}
          className="text-sm text-neutral-600 font-semibold mt-1"
        >
          {showChildren ? "Hide Replies" : `View ${kids.length} Replies`}
        </button>
      )}
      {showChildren && (
        <NestedComment parentId={id} commentsCount={kids?.length} />
      )}
    </>
  );
};

export default CommentItem;
