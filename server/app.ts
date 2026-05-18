import "react-router";
import cookieParser from "cookie-parser";
import { createRequestHandler } from "@react-router/express";
import express from "express";
import apiRouter from "./router/api.route";
import database from "./config/db";
import { optionalAuthMiddleware } from "./middleware/auth";

declare module "react-router" {
  interface AppLoadContext {
    VALUE_FROM_EXPRESS: string;
  }
}

export const app = express();
app.use(express.json());
app.use(cookieParser());

await database.connect();

app.use('/api',apiRouter)


app.use(optionalAuthMiddleware,
  createRequestHandler({
    build: () => import("virtual:react-router/server-build"),
      getLoadContext(req, res) {
      return {
        VALUE_FROM_EXPRESS: "Hello from Express",
        user: req.user || null, // Add user to context
      };
    },
  }),
);
