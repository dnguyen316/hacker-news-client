import { gql } from "@apollo/client";

export const GET_STORIES_BY_TYPE = gql`
  query StoriesConnection($after: String, $first: Int, $type: String) {
    storiesConnection(after: $after, first: $first, type: $type) {
      edges {
        cursor
        node {
          id
          title
          url
          score
          author
          time
          commentsCount
          slug
          type
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;
