import { safeExec } from "../../../../shared/core/safe-exec";
import { ICommentRepository } from "../../domain/repositories/comment-interface";

export class GetArticleCommentUseCase {
  constructor(private readonly commentRepo: ICommentRepository) {}

  public async execute(id: number) {
    return safeExec(async () => {
      return await this.commentRepo.getCommentById(id);
    });
  }
}
