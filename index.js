const { clientUri, mongoUri, nodeEnv, port } = require("./config/config");

const path = require("path");
const cors = require("cors");

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(
  cors({
    credentials: true,
    origin: clientUri,
  })
);

app.use(bodyParser.urlencoded({ extended: false }));

if (nodeEnv === "production") {
  app.use(express.static(path.resolve(__dirname, "..client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
  });
} else {
  app.get("/", (req, res) => res.send("Please set to production"));
}

mongoose
  .connect(mongoUri)
  .then(() => {
    app.listen(port);
  })
  .catch((err) => console.log(err));
