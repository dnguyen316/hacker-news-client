"use client";

import { useQuery } from "@apollo/client";
import { useMemo } from "react";
import { GET_STORIES_BY_TYPE } from "@/graphql/queries/story";
import { StoryEdge } from "@/lib/constants/types";

interface StoryListProps {
  type: string;
  limit?: number;
  after?: string;
}

const useFetchStoryList = ({
  type,
  limit = 10,
  after = "",
}: StoryListProps) => {
  const { data, loading, error, fetchMore } = useQuery(GET_STORIES_BY_TYPE, {
    variables: { first: limit, type, after },
  });

  const storyList = useMemo(() => {
    if (data && Object.keys(data).length > 0) {
      const edges = data?.storiesConnection?.edges;
      if (edges.length > 0) {
        const stories = edges.map((edge: StoryEdge) => edge.node);
        return stories;
      }
    }
    return [];
  }, [data, type]);

  const pageInfo = useMemo(() => {
    if (data && Object.keys(data).length > 0) {
      const pageInfo = data?.storiesConnection?.pageInfo;
      return pageInfo ?? {};
    }
  }, [data, type]);

  return {
    error,
    loading,
    pageInfo,
    storyList,
    fetchMore,
  };
};

export default useFetchStoryList;
