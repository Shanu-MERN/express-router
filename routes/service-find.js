import express from "express";
import data from "./data.js";
const route = express.Router();

route.get("/", (req, res) => {
  res.send("Choose Service:");
});

route.get("/:id", (req, res) => {
  const id = req.params.id;
  const output = data.find((service) => service.id == id);
  console.log(id);
  if (output) {
    res.send("The selected service is " + '"' + output.name + '"');
  } else {
    res.json("Invalid service ID");
  }
});

export default route;
