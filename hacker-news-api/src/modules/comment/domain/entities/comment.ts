export class Comment {
  constructor(
    public readonly id: number,
    public author: string,
    public kids: number[],
    public text: string | null,
    public time: Date,
    public type: string,
    public parent?: number
  ) {}
}
