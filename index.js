import express from "express";
import cors from "cors";
import about from "./routes/about.js";
import contact from "./routes/contact.js";
import service from "./routes/service.js";
import serviceFind from "./routes/service-find.js";

const app = express();
app.use("/about", about);
app.use("/contact", contact);
app.use("/service", service);
app.use("/service-find", serviceFind);

const port = 3000;
app.use(cors());

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
