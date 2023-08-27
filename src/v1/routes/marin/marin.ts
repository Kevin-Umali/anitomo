import express, { Request, Response, NextFunction } from "express";
import { ANIME } from "@consumet/extensions";
import { sendError, sendSuccess } from "../../../utils/response-template";

const router = express.Router();
const marin = new ANIME.Marin();

router.get("/", (_, res: Response) => {
  sendSuccess(res, {
    intro:
      "Welcome to the animefox provider: check out the provider's website @ https://marin.moe",
    routes: ["/:query", "/info/:id", "/watch/:id/:number", "/recent-episodes"],
    documentation: "https://docs.consumet.org/#tag/marin",
  });
});

router.get(
  "/recent-episodes",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const page = parseInt(req.query.page as string) || 1;

      const result = await marin.recentEpisodes(page);

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

      const result = await marin.search(query);

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
      const id = req.params.id as string;

      if (typeof id === "undefined") {
        sendError(res, "id is required", 400);
        return;
      }

      const result = await marin.fetchAnimeInfo(id);

      sendSuccess(res, result);
    } catch (error) {
      next(error);
    }
  },
);

router.get(
  "/watch/:id/:number",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id as string;
      const number = parseInt(req.params.number as string);

      if (typeof id === "undefined" || isNaN(number)) {
        sendError(res, "id and number are required", 400);
        return;
      }

      const result = await marin.fetchEpisodeSources(`${id}/${number}`);

      sendSuccess(res, result);
    } catch (error) {
      next(error);
    }
  },
);

export default router;
