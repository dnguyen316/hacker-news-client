import { safeExec } from "../../../../shared/core/safe-exec";
import { ServiceResponse } from "../../../../shared/core/service-response";
import { Story } from "../../domain/entities/story";
import { IStoryRepositoryInterface } from "../../domain/repositories/story-interface";

export class GetJobStoriesUseCase {
  constructor(private storyRepository: IStoryRepositoryInterface) {}

  public async execute(limit: number): Promise<ServiceResponse<Story[]>> {
    return safeExec(async () => {
      const jobIds = await this.storyRepository.getJobStoryIds();

      const items = await Promise.all(
        jobIds
          .slice(0, limit)
          .map((id) => this.storyRepository.getStoryById(id))
      );

      return items;
    });
  }
}
