import axios from "axios";
import { CONFIG } from "../../../../configs/constants";
import { Story, StoryDetail } from "../../domain/entities/story";
import slugify from "slugify";
import { IStoryRepositoryInterface } from "../../domain/repositories/story-interface";
import { HNItem } from "../../domain/entities/hn-item";
import { StoryTypes } from "../../../../types/story-types";

export class HNStoryRepository implements IStoryRepositoryInterface {
  public async getTopStoryIds(): Promise<number[]> {
    const { data } = await axios.get(`${CONFIG.BASE_URL}/topstories.json`);
    return data;
  }

  public async getAskStoryIds(): Promise<number[]> {
    const { data } = await axios.get(`${CONFIG.BASE_URL}/askstories.json`);
    return data;
  }

  public async getJobStoryIds(): Promise<number[]> {
    const { data } = await axios.get(`${CONFIG.BASE_URL}/jobstories.json`);
    return data;
  }

  public async getShowStoryIds(): Promise<number[]> {
    const { data } = await axios.get(`${CONFIG.BASE_URL}/showstories.json`);
    return data;
  }

  public async getStoryIds(type: StoryTypes): Promise<number[]> {
    const { data } = await axios.get(`${CONFIG.BASE_URL}/${type}stories.json`);
    return data;
  }

  public async getStoryById(id: number): Promise<Story> {
    const { data } = await axios.get(`${CONFIG.BASE_URL}/item/${id}.json`);

    // Handle score type safely
    const score =
      typeof data.score === "number" ? data.score : parseFloat(data.score) || 0;

    const slug =
      slugify(data.title, { lower: true, strict: true }) +
      "-" +
      JSON.stringify(id);

    return new Story(
      data.id,
      data.title,
      score,
      data.url || null,
      data.by,
      new Date(data.time * 1000),
      data.descendants || 0,
      slug,
      data.type
    );
  }
  public async getStoryDetailById(id: number): Promise<StoryDetail> {
    const { data } = await axios.get(`${CONFIG.BASE_URL}/item/${id}.json`);

    // Handle score type safely
    const score =
      typeof data.score === "number" ? data.score : parseFloat(data.score) || 0;

    return new StoryDetail(
      data.id,
      data.title,
      score,
      data.url || null,
      data.by,
      new Date(data.time * 1000),
      data.descendants || 0,
      data.type,
      data?.text ?? null
    );
  }

  public async getHNItemById(id: number): Promise<HNItem> {
    const { data } = await axios.get(`${CONFIG.BASE_URL}/item/${id}.json`);

    const score =
      typeof data.score === "number" ? data.score : parseFloat(data.score) || 0;

    return new HNItem(
      data.id,
      data.deleted,
      data.type,
      data.by,
      new Date(data.time * 1000),
      data.text,
      data.dead,
      data.parent,
      data.poll,
      data.url,
      data.kids,
      score,
      data.title,
      data.parts,
      data.descendants
    );
  }

  public async getStoriesByCursor(
    type: StoryTypes,
    after: string | null,
    limit: number
  ): Promise<{
    stories: Story[] | [];
    nextCursor: string | null;
    hasNextPage: boolean;
  }> {
    const storyType = type;

    const storyIds = await this.getStoryIds(storyType);

    if (!storyIds) return { stories: [], nextCursor: null, hasNextPage: false };

    let startIndex = 0;
    if (after) {
      const afterId = Number(after);

      if (isNaN(afterId)) {
        throw new Error("Invalid cursor provided.");
      }

      const itemIndex = storyIds.findIndex((id) => id === afterId);

      if (itemIndex === -1) {
        startIndex = 0;
      } else {
        startIndex = itemIndex + 1;
      }
    }

    const endIndex = startIndex + limit;
    const slicedStoryIds = storyIds.slice(startIndex, endIndex);

    const itemPromises = slicedStoryIds.map((id) => this.getStoryById(id));
    const fetchedItems = await Promise.all(itemPromises);

    const newStoriesData = fetchedItems.filter(
      (story: Story) => story !== null
    );

    const hasNextPage = endIndex < storyIds.length;
    const nextCursor = hasNextPage
      ? String(newStoriesData[newStoriesData.length - 1].id)
      : null;

    return {
      stories: newStoriesData,
      hasNextPage,
      nextCursor,
    };
  }
}
