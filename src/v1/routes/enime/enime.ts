import express, { Request, Response, NextFunction } from "express";
import { ANIME } from "@consumet/extensions";
import { sendError, sendSuccess } from "../../../utils/response-template";

const router = express.Router();
const enime = new ANIME.Enime();

router.get("/", (_, res: Response) => {
  sendSuccess(res, {
    intro:
      "Welcome to the enime provider: check out the provider's website @ https://enime.com/",
    routes: ["/:query", "/info?id", "/watch?episodeId"],
    documentation: "https://docs.consumet.org/#tag/enime",
  });
});

router.get(
  "/:query",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const query = req.params.query as string;

      const result = await enime.search(query);

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

    const result = await enime.fetchAnimeInfo(id);

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

      const result = await enime.fetchEpisodeSources(episodeId);

      sendSuccess(res, result);
    } catch (error) {
      next(error);
    }
  },
);

export default router;
