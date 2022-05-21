const { Router } = require('express');
const { GetVideos, GetVideos2, PostVideos, DeleteVideos } = require('./VideosControlador');
const mongoID = require('../mw/mw');

const router = Router();

router.get("/", GetVideos);
router.post("/", PostVideos);
router.get("/:id", mongoID, GetVideos2);
router.delete("/:id", mongoID, DeleteVideos);

module.exports = router;