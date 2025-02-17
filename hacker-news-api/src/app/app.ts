import express, { Express } from "express";
import { rateLimiter } from "../shared/middlewares/rate-limiter";
import { applySecurityMiddleware } from "../shared/middlewares/security";

const app: Express = express();

applySecurityMiddleware(app);
app.use(rateLimiter);

export default app;
