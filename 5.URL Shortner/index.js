import express from "express";
import mongoose from "mongoose";
import path from "path";

import router from "./routers/router_url.js";
import user_router from "./routers/router_users.js";
import Url from "./models/models_url.js";

const app = express();
const PORT = 8001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

mongoose
  .connect("mongodb://127.0.0.1:27017/url-db")
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log("Error in connection", err));

app.use("/url", router);
app.use("/user", user_router);

app.get("/test/:shortId", async (req, res) => {
  const { shortId } = req.params;
  const entry = await Url.findOne({ shortId });

  if (!entry) {
    return res.status(404).send("Short URL not found");
  }

  res.redirect(entry.redirect);
});

app.listen(PORT, () => {
  console.log("Server started on port", PORT);
});
