const express = require("express");
const app = express();
const PORT = 8080;
const mongoose = require("mongoose");
const bodyParse = require("body-parser");
require("dotenv/config");

app.use(express.json());

// Import routes
const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);

app.get("/", (req, res) => {
  res.send("We are on home");
});

// DB connect
mongoose.connect(process.env.DB_CONNECTION, () =>
  console.log("Connected to DB")
);

app.listen(PORT, () => console.log(`it's alive on http://localhost:${PORT}`));
