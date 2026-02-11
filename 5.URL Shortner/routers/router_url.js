import express from "express";
import { createUrl , numberOfClicks , analytics } from "../controller/controller_url.js";
const router =express.Router();

router
.route('/')
.post(createUrl);

router.
route('/:shortId')
.get(numberOfClicks);

router
.route('/:shortId/analytics')
.get(analytics);

export default router;