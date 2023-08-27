import express, { Request, Response, NextFunction } from "express";
import { ANIME } from "@consumet/extensions";
import { sendError, sendSuccess } from "../../../utils/response-template";

const router = express.Router();
const animefox = new ANIME.AnimeFox();

router.get("/", (_, res: Response) => {
  sendSuccess(res, {
    intro:
      "Welcome to the animefox provider: check out the provider's website @ https://animefox.tv/",
    routes: [
      "/:query",
      "/info?id",
      "/watch?episodeId",
      "/recent-episodes?page",
    ],
    documentation: "https://docs.consumet.org/#tag/animefox",
  });
});

router.get(
  "/recent-episodes",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const page = parseInt(req.query.page as string) || 1;

      const result = await animefox.fetchRecentEpisodes(page);

      sendSuccess(res, result);
    } catch (error) {
      next(error);
    }
  },
);

router.get(
  "/:query",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const query = req.params.query as string;

      const result = await animefox.search(query);

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

    const result = await animefox.fetchAnimeInfo(id);

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

      if (typeof episodeId === "undefined") {
        sendError(res, "episodeId is required", 400);
        return;
      }

      const result = await animefox.fetchEpisodeSources(episodeId);

      sendSuccess(res, result);
    } catch (error) {
      next(error);
    }
  },
);

export default router;
