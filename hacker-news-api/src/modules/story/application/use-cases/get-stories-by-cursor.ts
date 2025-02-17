import { StoryTypes } from "../../../../types";
import { safeExec } from "../../../../shared/core/safe-exec";
import { ServiceResponse } from "../../../../shared/core/service-response";
import { Story } from "../../domain/entities/story";
import { IStoryRepositoryInterface } from "../../domain/repositories/story-interface";

export class GetStoriesByCursorUseCase {
  constructor(private storyRepository: IStoryRepositoryInterface) {}

  public async execute({
    limit = 10,
    type = StoryTypes.TOP,
    after = "",
  }): Promise<
    ServiceResponse<{
      stories: Story[];
      nextCursor: string | null;
      hasNextPage: boolean;
    }>
  > {
    return safeExec(async () => {
      const result = await this.storyRepository.getStoriesByCursor(
        type,
        after,
        limit
      );

      return result;
    });
  }
}
