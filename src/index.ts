import express, { Express, NextFunction, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";

import v1Routes from "./v1/routes";
import { sendError, sendSuccess } from "./utils/response-template";

// Load environment variables from .env file
dotenv.config();

const app: Express = express();
const PORT: number = Number(process.env.PORT) || 3000;

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get(["/", "/v1"], (_, res: Response) => {
  sendSuccess(res, {
    intro: "Welcome to the anime API",
    providers: [
      {
        name: "Gogoanime",
        route: "/v1/gogoanime",
      },
      {
        name: "Marin",
        route: "/v1/marin",
      },
      {
        name: "Animefox",
        route: "/v1/animefox",
      },
      {
        name: "Animepahe",
        route: "/v1/animepahe",
      },
      {
        name: "Animesaturn",
        route: "/v1/animesaturn",
      },
      {
        name: "Crunchyroll",
        route: "/v1/crunchyroll",
      },
      {
        name: "Enime",
        route: "/v1/enime",
      },
      {
        name: "Zoro / Aniwatch",
        route: "/v1/zoro",
      },
    ],
    documentation: "https://docs.consumet.org",
  });
});

app.use("/v1", v1Routes);

app.get("*", (_, res: Response) => {
  sendError(res, "API Path Not Found", 404);
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  sendError(res, "Something went wrong!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
