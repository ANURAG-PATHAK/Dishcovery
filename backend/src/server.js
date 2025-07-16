import express from "express";
import { PORT } from "./config/constants.js";

const app = express();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});