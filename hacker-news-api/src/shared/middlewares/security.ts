import helmet from "helmet";
import cors from "cors";
import { Express } from "express";

export const applySecurityMiddleware = (app: Express): void => {
  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          scriptSrc: [
            "'self'",
            "'unsafe-inline'", // or 'unsafe-inline'
            "https://embeddable-sandbox.cdn.apollographql.com",
            "https://apollo-server-landing-page.cdn.apollographql.com",
          ],
          imgSrc: [
            "'self'",
            "data:",
            "https://apollo-server-landing-page.cdn.apollographql.com",
          ],
          manifestSrc: [
            "'self'",
            "https://apollo-server-landing-page.cdn.apollographql.com",
          ],
          frameSrc: [
            "'self'",
            "https://sandbox.embed.apollographql.com",
            "https://embeddable-sandbox.netlify.app",
          ],

          // ... other directives ...
        },
      },
      crossOriginEmbedderPolicy: false, // if needed for certain setups
    })
  );
  app.use(cors({ origin: "*" }));
};
