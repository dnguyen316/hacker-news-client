import { ICommentRepository } from "../../domain/repositories/comment-interface";
import { Comment } from "../../domain/entities/comment";
import { HNStoryRepository } from "../../../story/infrastructure/repository/hn-story";

export class HNCommentRepository
  extends HNStoryRepository
  implements ICommentRepository
{
  public async getArticleCommentsByParent(
    parentId: number,
    page: number,
    limit: number
  ): Promise<Comment[]> {
    //1. Fetch Parent data from parent id by HNStoryRepo
    const parentData = await this.getHNItemById(parentId);

    if (!parentData) return [];

    //2. Get kidIds from parent data
    const kidIds: number[] = parentData?.kids ?? [];

    //3. Check if kidIds = null, return []
    if (!kidIds.length) return [];

    //4. pagination kidIds data from offset and limit
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const sliceKidIds = kidIds.slice(startIndex, endIndex);

    //5. Fetch children comments from kids
    //5.1 Create promises from sliced kid ids
    const promises = sliceKidIds.map((id: number) => this.getHNItemById(id));

    //5.2 Fetch all kid comment data parallel
    const children = await Promise.all(promises);

    //6. Tranform into domain Comments
    const comments: Comment[] = children
      .filter((data) => data && data.type === "comment")
      .map(
        (data) =>
          new Comment(
            data.id,
            data.by,
            data.kids,
            data.text,
            data.time,
            data.type,
            data.parent
          )
      );

    return comments;
  }

  public async getCommentById(id: number): Promise<Comment | null> {
    const itemData = await this.getHNItemById(id);
    if (!itemData || itemData.type !== "comment") return null;

    return new Comment(
      itemData.id,
      itemData.by,
      itemData.kids,
      itemData.text,
      itemData.time,
      itemData.type,
      itemData.parent
    );
  }
}
