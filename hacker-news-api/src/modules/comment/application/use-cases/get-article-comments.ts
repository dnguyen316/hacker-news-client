import { safeExec } from "../../../../shared/core/safe-exec";
import { ICommentRepository } from "../../domain/repositories/comment-interface";

export class GetArticleCommentsUseCase {
  constructor(private commentRepo: ICommentRepository) {}

  public async execute(parentId: number, page: number, limit: number) {
    return safeExec(async () => {
      return await this.commentRepo.getArticleCommentsByParent(
        parentId,
        page,
        limit
      );
    });
  }
}
