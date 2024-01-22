const { clientUri, mongoUri, nodeEnv, port } = require("./config/config");

const { errorHandler } = require("./middleware/errorMiddleware");

const path = require("path");
const cors = require("cors");

const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(
  cors({
    credentials: true,
    origin: clientUri,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/todos", require("./routes/todo"));

if (nodeEnv === "production") {
  // Change later
} else {
  app.get("/", (req, res) => res.send("Please set to production"));
}

app.use(errorHandler);

mongoose
  .connect(mongoUri)
  .then(() => {
    app.listen(port, () => console.log(`Server started on port ${port}`));
  })
  .catch((err) => console.log(err));
