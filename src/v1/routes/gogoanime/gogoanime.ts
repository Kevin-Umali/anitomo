import express, { Request, Response, NextFunction } from "express";
import { ANIME } from "@consumet/extensions";
import { StreamingServers } from "@consumet/extensions/dist/models";
import { sendError, sendSuccess } from "../../../utils/response-template";

const router = express.Router();
const gogoanime = new ANIME.Gogoanime();

router.get("/", (_, res: Response) => {
  sendSuccess(res, {
    intro: "Welcome to the gogoanime provider...",
    routes: [
      "/:query",
      "/info/:id",
      "/watch/:episodeId",
      "/servers/:episodeId",
      "/top-airing",
      "/recent-episodes",
    ],
    documentation: "https://docs.consumet.org/#tag/gogoanime",
  });
});

router.get(
  "/info/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = decodeURIComponent(req.params.id);

      const result = await gogoanime.fetchAnimeInfo(id);

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
      const server = req.query.server as StreamingServers;

      if (server && !Object.values(StreamingServers).includes(server)) {
        sendError(res, "Invalid server", 400);
        return;
      }

      const result = await gogoanime.fetchEpisodeSources(episodeId, server);

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

      const result = await gogoanime.fetchEpisodeServers(episodeId);

      sendSuccess(res, result);
    } catch (error) {
      next(error);
    }
  },
);

router.get(
  "/top-airing",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const page = parseInt(req.query.page as string) || 1;

      const result = await gogoanime.fetchTopAiring(page);

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
      const type = parseInt(req.query.type as string);
      const page = parseInt(req.query.page as string) || 1;

      const result = await gogoanime.fetchRecentEpisodes(page, type);

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
      const page = parseInt(req.query.page as string) || 1;

      const result = await gogoanime.search(query, page);

      sendSuccess(res, result);
    } catch (error) {
      next(error);
    }
  },
);

export default router;
