import express from "express";
import gogoanimeRoutes from "./gogoanime/gogoanime";
import animefoxRoutes from "./animefox/animefox";
import animepaheRoutes from "./animepahe/animepahe";
import animesaturnRoutes from "./animesaturn/animesaturn";
import crunchyrollRoutes from "./crunchyroll/crunchyroll";
import enimeRoutes from "./enime/enime";
import marinRoutes from "./marin/marin";
import zoroRoutes from "./zoro/zoro";

const router = express.Router();

router.use("/gogoanime", gogoanimeRoutes);
router.use("/animefox", animefoxRoutes);
router.use("/animepahe", animepaheRoutes);
router.use("/animesaturn", animesaturnRoutes);
router.use("/crunchyroll", crunchyrollRoutes);
router.use("/enime", enimeRoutes);
router.use("/marin", marinRoutes);
router.use("/zoro", zoroRoutes);

export default router;
