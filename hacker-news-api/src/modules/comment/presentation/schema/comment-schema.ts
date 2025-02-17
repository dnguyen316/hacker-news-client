export const commentSchema = `#graphql
  type Comment {
    id: Int,
    author: String,
    kids: [Int],
    text: String,
    time: String,
    type: String,
    parent: Int
  }

  type Query {
    articleComments(parentId: Int, page: Int, limit: Int): [Comment]
    articleComment(id: Int): Comment
  }
`;
