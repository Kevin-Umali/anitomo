import express, { Request, Response, NextFunction } from "express";
import { ANIME } from "@consumet/extensions";
import { sendError, sendSuccess } from "../../../utils/response-template";

const router = express.Router();

router.get("/", (_, res: Response) => {
  sendSuccess(res, {
    intro: "Welcome to the Crunchyroll provider.",
    routes: ["/:query", "/info?id&mediaType&allSeasons", "/watch?episodeId"],
    documentation: "https://docs.consumet.org/#tag/crunchyroll",
  });
});

router.get("/info", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.query.id as string;
    const mediaType = (req.query.mediaType as string) || "series";
    const allSeasons = req.query.allSeasons === "true" || false;

    const crunchyroll = await ANIME.Crunchyroll.create();

    if (!id || !mediaType) {
      sendError(res, "id and mediaType are required", 400);
      return;
    }

    const result = await crunchyroll.fetchAnimeInfo(id, mediaType, allSeasons);

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

      if (!episodeId) {
        sendError(res, "episodeId is required", 400);
        return;
      }

      const crunchyroll = await ANIME.Crunchyroll.create();

      const result = await crunchyroll.fetchEpisodeSources(episodeId);

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

      const crunchyroll = await ANIME.Crunchyroll.create();
      const result = await crunchyroll.search(query);

      sendSuccess(res, result);
    } catch (error) {
      next(error);
    }
  },
);

export default router;
