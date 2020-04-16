import express from "express";

import rss from "./rss-feed/controller";

const { Router } = express;
const router = Router();

router.use("/rss", rss);

module.exports = router;