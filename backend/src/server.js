import express from "express";
import { PORT } from "./config/constants.js";
import apiRoutes from "./routes/index.js";
import { requestLogger, corsHandler } from "./middleware/common.js";
import { errorHandler, notFoundHandler } from "./middleware/errorHandler.js";

const app = express();

// Middleware
app.use(corsHandler);
app.use(requestLogger);
app.use(express.json());

// Routes
app.use("/api", apiRoutes);

// Error handling
app.use(notFoundHandler);
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});