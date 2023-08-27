import express, { Request, Response, NextFunction } from "express";
import { ANIME } from "@consumet/extensions";
import { sendSuccess } from "../../../utils/response-template";

const router = express.Router();
const animesaturn = new ANIME.AnimeSaturn();

router.get("/", (_, res: Response) => {
  sendSuccess(res, {
    intro:
      "Welcome to the animesaturn provider: check out the provider's website @ https://animesaturn.tv/",
    routes: [
      "/:query",
      "/info/:id",
      "/watch/:episodeId",
      "/servers/:episodeId",
    ],
    documentation: "https://docs.consumet.org/#tag/animesaturn",
  });
});

router.get(
  "/:query",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const query = req.params.query as string;

      const result = await animesaturn.search(query);

      sendSuccess(res, result);
    } catch (error) {
      next(error);
    }
  },
);

router.get(
  "/info/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = decodeURIComponent(req.params.id as string);

      const result = await animesaturn.fetchAnimeInfo(id);

      sendSuccess(res, result);
    } catch (error) {
      next(error);
    }
  },
);

router.get(
  "/watch/:episodeId",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const episodeId = req.params.episodeId as string;

      const result = await animesaturn.fetchEpisodeSources(episodeId);

      sendSuccess(res, result);
    } catch (error) {
      next(error);
    }
  },
);

router.get(
  "/servers/:episodeId",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const episodeId = req.params.episodeId as string;

      const result = await animesaturn.fetchEpisodeServers(episodeId);

      sendSuccess(res, result);
    } catch (error) {
      next(error);
    }
  },
);

export default router;
