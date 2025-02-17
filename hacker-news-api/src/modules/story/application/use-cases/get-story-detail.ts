import { safeExec } from "../../../../shared/core/safe-exec";
import { ServiceResponse } from "../../../../shared/core/service-response";
import { StoryDetail } from "../../domain/entities/story";
import { IStoryRepositoryInterface } from "../../domain/repositories/story-interface";

export class GetStoryDetailUseCase {
  constructor(private readonly repo: IStoryRepositoryInterface) {}

  public async execute(id: number): Promise<ServiceResponse<StoryDetail>> {
    return safeExec(async () => {
      const res = await this.repo.getStoryDetailById(id);
      return res;
    });
  }
}
