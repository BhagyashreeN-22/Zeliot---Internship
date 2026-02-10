import { nanoid } from "nanoid";
import Url from "../models/url.js";

export async function generateUrl(req, res) {
  const shortId = nanoid(8);
  const redirectUrl = req.body.url;

  if (!redirectUrl) {
    return res.status(400).json({ error: "URL is required" });
  }

  await Url.create({
    shortId,
    redirect: redirectUrl,
    visitHistory: [],
  });

  return res.json({ shortId });
}
