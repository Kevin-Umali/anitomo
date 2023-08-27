import express, { Request, Response, NextFunction } from "express";
import { ANIME } from "@consumet/extensions";
import { sendSuccess } from "../../../utils/response-template";

const router = express.Router();
const animepahe = new ANIME.AnimePahe();

router.get("/", (_, res: Response) => {
  sendSuccess(res, {
    intro:
      "Welcome to the animepahe provider: check out the provider's website @ https://animepahe.com/",
    routes: ["/:query", "/info/:id", "/watch/:episodeId"],
    documentation: "https://docs.consumet.org/#tag/animepahe",
  });
});

router.get(
  "/:query",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const query = req.params.query as string;

      const result = await animepahe.search(query);

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
      const episodePage = parseInt(req.query.episodePage as string) || 1;

      const result = await animepahe.fetchAnimeInfo(id, episodePage);

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

      const result = await animepahe.fetchEpisodeSources(episodeId);

      sendSuccess(res, result);
    } catch (error) {
      next(error);
    }
  },
);

export default router;
