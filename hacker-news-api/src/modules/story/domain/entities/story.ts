export class Story {
  constructor(
    public readonly id: number,
    public title: string,
    public score: number,
    public url: string | null,
    public author: string,
    public time: Date,
    public commentsCount: number,
    public slug: string,
    public type: string
  ) {}
}

export class StoryDetail extends Story {
  constructor(
    public readonly id: number,
    public title: string,
    public score: number,
    public url: string | null,
    public author: string,
    public time: Date,
    public commentsCount: number,
    public type: string,
    public text: string | null
  ) {
    super(id, title, score, url, author, time, commentsCount, "", type);
  }
}
