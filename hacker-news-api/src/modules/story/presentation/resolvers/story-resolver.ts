import { GetStoriesByCursorUseCase } from "../../application/use-cases/get-stories-by-cursor";
import { GetAskStoriesUseCase } from "../../application/use-cases/get-ask-stories";
import { GetJobStoriesUseCase } from "../../application/use-cases/get-job-stories";
import { GetShowStoriesUseCase } from "../../application/use-cases/get-show-stories";
import { GetStoryDetailUseCase } from "../../application/use-cases/get-story-detail";
import { GetTopStoriesUseCase } from "../../application/use-cases/get-top-stories";
import { HNStoryRepository } from "../../infrastructure/repository/hn-story";
import { StoryTypes } from "../../../../types";

export const storyResolver = {
  Query: {
    topStories: async (_: unknown, { limit = 10 }: { limit: number }) => {
      const useCase = new GetTopStoriesUseCase(new HNStoryRepository());
      const response = await useCase.execute(limit);
      if (response.ok) return response.data;
    },
    askStories: async (_: unknown, { limit = 10 }: { limit: number }) => {
      const useCase = new GetAskStoriesUseCase(new HNStoryRepository());
      const response = await useCase.execute(limit);
      if (response.ok) return response.data;
    },
    jobStories: async (_: unknown, { limit = 10 }: { limit: number }) => {
      const useCase = new GetJobStoriesUseCase(new HNStoryRepository());
      const response = await useCase.execute(limit);
      if (response.ok) return response.data;
    },
    showStories: async (_: unknown, { limit = 10 }: { limit: number }) => {
      const useCase = new GetShowStoriesUseCase(new HNStoryRepository());
      const response = await useCase.execute(limit);
      if (response.ok) return response.data;
    },
    storyDetailById: async (_: unknown, { id }: { id: number }) => {
      const useCase = new GetStoryDetailUseCase(new HNStoryRepository());
      const response = await useCase.execute(id);

      if (response.ok) return response.data;
    },

    storiesConnection: async (
      _: unknown,
      args: { after?: string; first?: number; type?: StoryTypes }
    ) => {
      const after = args?.after;
      const limit = args?.first;
      const type = args?.type ?? StoryTypes.TOP;

      const useCase = new GetStoriesByCursorUseCase(new HNStoryRepository());
      const response = await useCase.execute({ limit, after, type });

      if (response.ok) {
        const { stories, nextCursor, hasNextPage } = response.data;

        const edges = stories.map((story) => ({
          cursor: String(story.id),
          node: story,
        }));

        return {
          edges,
          pageInfo: {
            hasNextPage,
            endCursor: nextCursor,
          },
        };
      }
    },
  },
};
