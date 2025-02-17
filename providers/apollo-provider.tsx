"use client";

import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { relayStylePagination } from "@apollo/client/utilities";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URL || "http://localhost:4000/graphql",
  credentials: "same-origin",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          articleComments: {
            keyArgs: ["parentId"], // which arguments define uniqueness
            merge(existing = [], incoming) {
              return [...existing, ...incoming];
            },
          },
          storiesConnection: relayStylePagination(["type"]),
        },
      },
    },
  }),
});

export default function ApolloContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
