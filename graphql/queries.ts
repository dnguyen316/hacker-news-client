import { gql } from "@apollo/client";

export const GET_TOP_STORIES = gql`
  query TopStories($limit: Int!) {
    topStories(limit: $limit) {
      id
      title
      score
      url
      author
      time
      commentsCount
      slug
      type
    }
  }
`;

export const GET_ASK_STORIES = gql`
  query AskStories($limit: Int!) {
    askStories(limit: $limit) {
      id
      title
      score
      url
      author
      time
      commentsCount
      slug
      type
    }
  }
`;
export const GET_JOB_STORIES = gql`
  query JobStories($limit: Int!) {
    jobStories(limit: $limit) {
      id
      title
      score
      url
      author
      time
      commentsCount
      slug
      type
    }
  }
`;

export const GET_SHOW_STORIES = gql`
  query ShowStories($limit: Int!) {
    showStories(limit: $limit) {
      id
      title
      score
      url
      author
      time
      commentsCount
      slug
      type
    }
  }
`;

export const GET_STORY_DETAIL_BY_ID = `
  query StoryDetailById($storyDetailByIdId: Int!) {
    storyDetailById(id: $storyDetailByIdId) {
      id
      title
      url
      score
      author
      time
      commentsCount
      type
      text
    }
  }
`;
