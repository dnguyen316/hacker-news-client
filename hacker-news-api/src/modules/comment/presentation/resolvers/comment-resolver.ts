import { GetArticleCommentUseCase } from "../../application/use-cases/get-article-comment";
import { GetArticleCommentsUseCase } from "../../application/use-cases/get-article-comments";
import { HNCommentRepository } from "../../infrastructure/repositories/comment";

export const commentResolver = {
  Query: {
    articleComments: async (
      _: unknown,
      {
        parentId,
        page = 1,
        limit = 10,
      }: { parentId: number; page: number; limit: number }
    ) => {
      const useCase = new GetArticleCommentsUseCase(new HNCommentRepository());
      const response = await useCase.execute(parentId, page, limit);
      if (response.ok) return response.data;
    },

    articleComment: async (_: unknown, { id }: { id: number }) => {
      const useCase = new GetArticleCommentUseCase(new HNCommentRepository());
      const response = await useCase.execute(id);
      if (response.ok) return response.data;
    },
  },
};
