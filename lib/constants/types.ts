export type CardTypes = "poll" | "article" | "link";
export interface Story {
  id: number;
  title: string;
  score: number;
  url: string | null;
  author: string;
  time: Date;
  commentsCount: number;
  slug: string;
  type: string;
}

export enum ArticleListType {
  TOP_STORY = "topStories",
  ASK_STORY = "askStories",
  SHOW_STORY = "showStories",
  JOB_STORY = "jobStories",
}

export interface StoryDetail extends Story {
  text?: string;
}

export interface Comment {
  id: number;
  author: string;
  text: string;
  time: string;
  parent: number | null;
  kids: number[];
}

export interface StoryEdge {
  cursor: string;
  node: Story;
}
