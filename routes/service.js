import express from "express";
import data from "./data.js";
const route = express.Router();

route.get("/", (req, res) => {
  res.send("Choose Service:");
});

route.get("/:id", (req, res) => {
  res.send(req.service);
});

route.param("id", (req, res, next, id) => {
  req.service = data[id - 1];
  next();
});

export default route;
