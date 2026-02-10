import express from "express";
import { generateUrl } from "../controller/url.js";

const router = express.Router();

router.post("/", generateUrl);

export default router;
