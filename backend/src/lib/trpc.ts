import { initTRPC } from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import { Express } from "express";
import { TrpcRouter } from "../router";

export const trpc = initTRPC.create();

export const applyTrpcToExpressApp = (
  expressApp: Express,
  trpcRouter: TrpcRouter,
) => {
  expressApp.use(
    "/trpc",
    trpcExpress.createExpressMiddleware({
      router: trpcRouter,
    }),
  );
};
