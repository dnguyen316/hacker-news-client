export const storySchema = `#graphql
  type Story {
    id: Int
    title: String
    url: String
    score: Int
    author: String
    time: String
    commentsCount: Int
    slug: String
    type: String
  }

  type StoryDetail {
    id: Int
    title: String
    url: String
    score: Int
    author: String
    time: String
    commentsCount: Int
    type: String
    text: String
  }

  type StoryEdge {
    cursor: String
    node: Story
  }

  type PageInfo {
    hasNextPage: Boolean
    endCursor: String
  }

  type StoryConnection {
    edges: [StoryEdge]
    pageInfo: PageInfo
  }

  type Query {
    topStories(limit: Int): [Story]
    askStories(limit: Int): [Story]
    jobStories(limit: Int): [Story]
    showStories(limit: Int): [Story]
    storyDetailById(id: Int): StoryDetail
    storiesConnection(after: String, first: Int = 10, type: String): StoryConnection
  }
`;
