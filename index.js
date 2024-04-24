require("dotenv").config(); //configuring .env file
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./database/Db");
const postsRoutes = require("./routes/Posts");
const Post = require("./models/Post");
// const config = require("./config/env");

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Connect to Database
connectDB(process.env.MONGO_URI);

// Routes
app.use("/api/posts", postsRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Blog API");
});

app.listen(process.env.PORT, () =>
  console.log(`Server running on http://localhost:${process.env.PORT}`)
);
