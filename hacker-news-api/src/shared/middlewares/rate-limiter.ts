import rateLimit from "express-rate-limit";
import { CONFIG } from "../../configs/constants";
import { RequestHandler } from "express";

export const rateLimiter = rateLimit({
  windowMs: CONFIG.RATE_LIMIT.WINDOW_MS,
  max: CONFIG.RATE_LIMIT.MAX_REQUEST,
  message: "Too many requests, please try again later",
}) as unknown as RequestHandler;
