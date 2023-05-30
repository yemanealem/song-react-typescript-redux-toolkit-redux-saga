import express from "express";
import { addSong,deleteSong,getSong,getSongs, getStatics, updateSong } from "../controllers/song.controller.js";
const router = express.Router();

router.post("/", addSong);
router.get("/", getSongs);
router.delete("/delete/:_id",deleteSong)
router.put("/update/:_id",updateSong)
router.get("/getsong/:_id",getSong)
router.post("/getstatics/",getStatics)
// router.get("/single/:id", verifyToken, getSingleConversation);
// router.put("/:id", verifyToken, updateConversation);

export default router;
