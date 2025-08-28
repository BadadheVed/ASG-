import os from "os";
import express from "express";
export const app = express();

app.get("/", async (req, res) => {
  res.send({ message: "Hello World", route: "/" });
});

app.get("/cpu", (req, res) => {
  for (let i = 0; i < 1000000000; i++) {
    Math.random();
  }
  res.send("CPU intensive task completed");
});

app.get("/memory", (req, res) => {
  res.send(os.hostname());
});
