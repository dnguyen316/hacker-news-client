export interface Story {
  id: number;
  title: string;
  url: string | null;
  score: number;
  author: string;
  time: string;
  commentsCount: number;
  type: string;
}

export interface PaginatedStories {
  stories: Story[];
  currentPage: number;
  totalPages: number;
}

export enum StoryTypes {
  TOP = "top",
  ASK = "ask",
  JOB = "job",
  SHOW = "show",
}
