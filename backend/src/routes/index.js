import { Router } from "express";
import favoritesRoutes from "./favoritesRoutes.js";

const router = Router();

// Health check route
router.get("/health", (req, res) => {
    res.status(200).json({ status: "OK" });
});

// Mount routes
router.use("/favorites", favoritesRoutes);

export default router;
