import express from "express";
import data from "./data.js";
const route = express.Router();

route.get("/", (req, res) => {
  res.send("Choose Service:");
});

export default route;
