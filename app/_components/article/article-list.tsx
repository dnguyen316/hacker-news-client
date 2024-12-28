"use client";

import useFetchStoryList from "@/app/hooks/useFetchStoryList";
import CardContent from "../card/content";

interface ArticleListProps {
  type: string;
}

const ArticleList = (props: ArticleListProps) => {
  const { type } = props;
  const { storyList, loading, error } = useFetchStoryList({ type });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return <CardContent contents={storyList} />;
};
export default ArticleList;
