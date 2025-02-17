import { Story } from "../entities/story";

export class StoryService {
  static sortStoriesByScore(stories: Story[]): Story[] {
    return stories.sort((a, b) => b.score - a.score);
  }
}
