// import express using require
import express, { json } from "express";
import memberRouter from "./routes/members.route.js";
import seedRouter from "./routes/seed.route.js";
import mongoose from "mongoose";

// initialize your express app instance
const app = express();
// define port
const port = 3001;

// conect to mongoDB
mongoose.connect("mongodb://localhost:27017/etb-db");

// middlewares
// 1. parse json
app.use(json());

// routes
app.use("/members", memberRouter);
app.use("/seed", seedRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
