import { Router } from "express";
import { postCreateNote, getReadNote, postUpdateNote, postDelateNote } from "../controllers/notes.controlles.js";

const router = Router();

router.post("/Create", postCreateNote);

router.get("/Read", getReadNote);

router.post("/Update", postUpdateNote);

router.post("/Delete", postDelateNote);

export default router;