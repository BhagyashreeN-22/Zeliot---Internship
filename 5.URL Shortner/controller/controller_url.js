import { nanoid } from "nanoid";
import Url from "../models/models_url.js";

export async function createUrl(req, res) {
  const shorturl = nanoid(8);
  const body = req.body;
  if (!body) res.status(404).send("Bad req ..No url found!");
  await Url.create({
    shortId: shorturl,
    redirect: body.redirectUrl,
    visitHistory: [],
  });
  res.render("index", { id: shorturl });

}

export async function numberOfClicks(req, res) {
  const shortId = req.params.shortId;
  const result = await Url.findOneAndUpdate(
    { shortId: shortId }, 
    {
      $push: { visitHistory: { timestamp: new Date() } },
    },
    { new: true }, 
  );
  res.send(result);
}

export async function analytics(req, res) {
  try {
    const { shortId } = req.params;

    const result = await Url.findOne({ shortId });

    if (!result) {
      return res.status(404).json({ error: "Short URL not found" });
    }

    return res.json({
      totalClicks: result.visitHistory.length,
      analytics: result.visitHistory,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}
