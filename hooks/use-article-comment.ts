import { GET_COMMENTS_BY_ID } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import { useMemo } from "react";
import { Comment } from "@/lib/constants/types";

const useArticleComment = ({
  parentId,
  page,
  limit,
}: {
  parentId: number;
  page: number;
  limit: number;
}) => {
  const { data, loading, error, fetchMore } = useQuery(GET_COMMENTS_BY_ID, {
    variables: {
      parentId,
      page,
      limit,
    },
  });

  const hasMoreComment = useMemo(() => {
    if (!data || data.length === 0) return false;
    return true;
  }, [data]);

  return {
    error,
    fetchMore,
    hasMoreComment,
    isLoadingComment: loading,
    comments: (data?.articleComments as Comment[]) ?? [],
  };
};

export default useArticleComment;
