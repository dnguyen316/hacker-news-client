import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { Express, RequestHandler } from "express";
import cors from "cors";
import { json } from "body-parser";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { ApolloServerPluginCacheControl } from "@apollo/server/plugin/cacheControl";
import http from "http";
import { storySchema } from "../modules/story/presentation/schema";
import { storyResolver } from "../modules/story/presentation/resolvers";
import { commentResolver } from "../modules/comment/presentation/resolvers/comment-resolver";
import { commentSchema } from "../modules/comment/presentation/schema/comment-schema";

interface MyContext {
  token?: string;
}

export async function initializeApolloServer(app: Express): Promise<void> {
  const httpServer = http.createServer(app);

  const server = new ApolloServer<MyContext>({
    typeDefs: [storySchema, commentSchema],
    resolvers: [storyResolver, commentResolver],
    introspection: true,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginCacheControl({ defaultMaxAge: 5 }),
    ],
  }) as unknown as ApolloServer;

  await server.start();

  // Apply Express middleware for Apollo Server
  app.use(
    "/graphql",
    cors(), // Enable CORS
    json(), // Parse JSON bodies
    expressMiddleware(server, {
      context: async ({ req }) => {
        const token = req.headers.authorization || "";
        return { token };
      },
    }) as unknown as RequestHandler
  );

  // Create HTTP server

  // Start listening on the configured port
  const PORT = process.env.PORT || 4000;
  httpServer.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
  });
}
