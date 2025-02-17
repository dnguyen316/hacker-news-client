import { safeExec } from "../../../../shared/core/safe-exec";
import { ServiceResponse } from "../../../../shared/core/service-response";
import { Story } from "../../domain/entities/story";
import { IStoryRepositoryInterface } from "../../domain/repositories/story-interface";

export class GetTopStoriesUseCase {
  constructor(private storyRepository: IStoryRepositoryInterface) {}

  public async execute(limit = 10): Promise<ServiceResponse<Story[]>> {
    return safeExec(async () => {
      const topIds = await this.storyRepository.getTopStoryIds();

      const items = await Promise.all(
        topIds
          .slice(0, limit)
          .map((id: number) => this.storyRepository.getStoryById(id))
      );

      return items;
    });
  }
}
