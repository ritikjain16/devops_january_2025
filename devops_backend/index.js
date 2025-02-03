import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

const port = process.env.PORT | 5000;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({ msg: "Hello From Devops Backend. I am RJ16" });
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
