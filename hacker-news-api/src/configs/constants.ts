import * as dotenv from "dotenv";

dotenv.config();

export const CONFIG = {
  PORT: process.env.PORT || "4000",
  BASE_URL: process.env.BASE_URL || "https://hacker-news.firebaseio.com/v0",
  RATE_LIMIT: {
    WINDOW_MS: 15 * 60 * 1000, //15 minutes
    MAX_REQUEST: 100, //Max requests per window per IP
  },
};
