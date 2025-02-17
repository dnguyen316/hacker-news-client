"use client";

import useFetchStoryList from "@/hooks/use-fetch-story-list";
import CardContent from "../card/content";
import { RefObject, useCallback, useRef, useState } from "react";

interface ArticleListProps {
  type: string;
}

const ArticleList = (props: ArticleListProps) => {
  const { type } = props;
  const { storyList, loading, error, fetchMore, pageInfo } = useFetchStoryList({
    type,
  });
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  const observerRef = useRef(null) as RefObject<HTMLDivElement>;

  const lastItemRef = useCallback(
    (node: HTMLDivElement) => {
      if (loading || isFetchingMore) return;
      if (observerRef.current) {
        const oldObserver = observerRef.current;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (oldObserver as any).disconnect?.();
      }

      if (node) {
        console.log("~ called");
        const observer = new IntersectionObserver(async (entries) => {
          const firstEntry = entries[0];
          if (
            firstEntry.isIntersecting &&
            pageInfo.hasNextPage &&
            !isFetchingMore
          ) {
            setIsFetchingMore(true);
            await fetchMore({
              variables: {
                after: pageInfo.endCursor,
                first: 10,
              },
            });
            setIsFetchingMore(false);
          }
        });
        observer.observe(node);
      }
    },
    [observerRef, loading, isFetchingMore]
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log("~ storyList", storyList);

  return (
    <>
      <CardContent contents={storyList} ref={lastItemRef} />
      {isFetchingMore && <div>Loading More...</div>}
    </>
  );
};
export default ArticleList;
