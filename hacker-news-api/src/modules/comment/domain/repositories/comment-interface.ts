import { Comment } from "../entities/comment";

export interface ICommentRepository {
  /**
   * Fetches a paginated list of comments whose "parent" is `parentId`.
   * Used for top-level comments (where parent is the article/story ID)
   * or sub-comments (where parent is another comment).
   */
  getArticleCommentsByParent(
    parentId: number,
    page: number,
    limit: number
  ): Promise<Comment[]>;

  /**
   * If needed, fetch a single comment by ID
   */
  getCommentById(id: number): Promise<Comment | null>;
}
