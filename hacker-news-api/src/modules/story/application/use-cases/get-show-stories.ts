import { safeExec } from "../../../../shared/core/safe-exec";
import { ServiceResponse } from "../../../../shared/core/service-response";
import { Story } from "../../domain/entities/story";
import { IStoryRepositoryInterface } from "../../domain/repositories/story-interface";

export class GetShowStoriesUseCase {
  constructor(private readonly repo: IStoryRepositoryInterface) {}

  public async execute(limit: number): Promise<ServiceResponse<Story[]>> {
    return safeExec(async () => {
      const showIds = await this.repo.getShowStoryIds();

      const items = await Promise.all(
        showIds.slice(0, limit).map((id: number) => this.repo.getStoryById(id))
      );

      return items;
    });
  }
}
