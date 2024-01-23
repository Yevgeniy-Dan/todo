const { clientUri, mongoUri, nodeEnv, port } = require("./config/config");

const { errorHandler } = require("./middleware/errorMiddleware");

const path = require("path");
const cors = require("cors");

const express = require("express");
const connectDB = require("./config/db");

const colors = require("colors");

connectDB();

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

// if (nodeEnv === "production") {
//   app.use(express.static(path.join(__dirname, "../frontend/build")));

//   app.get("*", (req, res) =>
//     res.sendFile(
//       path.resolve(__dirname, "../", "frontend", "build", "index.html")
//     )
//   );
// } else {
//   app.get("/", (req, res) => res.send("Please set to production"));
// }

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
