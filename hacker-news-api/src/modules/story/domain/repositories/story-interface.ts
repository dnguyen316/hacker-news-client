import { StoryTypes } from "../../../../types";
import { Story, StoryDetail } from "../entities/story";

export interface IStoryRepositoryInterface {
  getTopStoryIds(): Promise<number[]>;
  getAskStoryIds(): Promise<number[]>;
  getJobStoryIds(): Promise<number[]>;
  getShowStoryIds(): Promise<number[]>;

  getStoryById(id: number): Promise<Story>;
  getStoryDetailById(id: number): Promise<StoryDetail>;

  getStoriesByCursor(
    type: StoryTypes,
    after: string | null,
    limit: number
  ): Promise<{
    stories: Story[] | [];
    nextCursor: string | null;
    hasNextPage: boolean;
  }>;
}
