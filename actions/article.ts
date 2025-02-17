import { GET_STORY_DETAIL_BY_ID } from "@/graphql/queries";
import axios from "axios";

export async function getArticleById(id: number) {
  "use server";
  try {
    const { data } = await axios.post(process.env.NEXT_PUBLIC_GRAPHQL_URL!, {
      query: GET_STORY_DETAIL_BY_ID,
      variables: {
        storyDetailByIdId: Number(id),
      },
    });

    return data;
  } catch (error) {
    console.error(error);
  }
}
