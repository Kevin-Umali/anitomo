import express, { Request, Response, NextFunction } from "express";
import { ANIME, StreamingServers } from "@consumet/extensions";
import { sendError, sendSuccess } from "../../../utils/response-template";

const router = express.Router();
const zoro = new ANIME.Zoro();

router.get("/", (_, res: Response) => {
  sendSuccess(res, {
    intro:
      "Welcome to the zoro provider: check out the provider's website @ https://zoro.to/",
    routes: ["/:query", "/info?id", "/watch?episodeId", "/recent-episodes"],
    documentation: "https://docs.consumet.org/#tag/zoro",
  });
});

router.get(
  "/:query",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const query = req.params.query as string;
      const page = parseInt(req.query.page as string) || 1;

      const result = await zoro.search(query, page);

      sendSuccess(res, result);
    } catch (error) {
      next(error);
    }
  },
);

router.get(
  "/recent-episodes",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const page = parseInt(req.query.page as string) || 1;

      const result = await zoro.fetchRecentEpisodes(page);

      sendSuccess(res, result);
    } catch (error) {
      next(error);
    }
  },
);

router.get("/info", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.query.id as string;

    if (typeof id === "undefined") {
      sendError(res, "id is required", 400);
      return;
    }

    const result = await zoro.fetchAnimeInfo(id);

    sendSuccess(res, result);
  } catch (error) {
    next(error);
  }
});

router.get(
  "/watch",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const episodeId = req.query.episodeId as string;
      const server = req.query.server as StreamingServers;

      if (server && !Object.values(StreamingServers).includes(server)) {
        sendError(res, "server is invalid", 400);
        return;
      }

      if (typeof episodeId === "undefined") {
        sendError(res, "id is required", 400);
        return;
      }

      const result = await zoro.fetchEpisodeSources(episodeId, server);

      sendSuccess(res, result);
    } catch (error) {
      next(error);
    }
  },
);

export default router;
