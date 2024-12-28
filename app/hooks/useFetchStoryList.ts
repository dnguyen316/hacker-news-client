"use client";
import {
  GET_ASK_STORIES,
  GET_JOB_STORIES,
  GET_SHOW_STORIES,
  GET_TOP_STORIES,
} from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import { useMemo } from "react";
import { ArticleListType } from "../_constants/types";

interface StoryListProps {
  type: string;
  limit?: number;
}

const useFetchStoryList = ({ type, limit = 10 }: StoryListProps) => {
  const mappingQueryKey = {
    "top-new": GET_TOP_STORIES,
    ask: GET_ASK_STORIES,
    show: GET_SHOW_STORIES,
    job: GET_JOB_STORIES,
  };

  const mappingData = {
    "top-new": ArticleListType.TOP_STORY,
    ask: ArticleListType.ASK_STORY,
    show: ArticleListType.SHOW_STORY,
    job: ArticleListType.JOB_STORY,
  };

  const { data, loading, error } = useQuery(
    mappingQueryKey[type as keyof typeof mappingQueryKey],
    {
      variables: { limit: limit },
    }
  );

  const storyList = useMemo(() => {
    return (
      data &&
      Object.keys(data).length &&
      data[mappingData[type as keyof typeof mappingData]]
    );
  }, [data]);

  return {
    error,
    loading,
    storyList,
  };
};

export default useFetchStoryList;
