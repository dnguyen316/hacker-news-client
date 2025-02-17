import { HNItemTypes } from "../../../../types/hn-types";

export class HNItem {
  constructor(
    public readonly id: number,
    public deleted: boolean,
    public type: HNItemTypes,
    public by: string,
    public time: Date,
    public text: string | null,
    public dead: boolean,
    public parent: number,
    public poll: number,
    public url: string | null,
    public kids: number[],
    public score: number,
    public title: string,
    public parts: number[],
    public descendants: number
  ) {}
}
