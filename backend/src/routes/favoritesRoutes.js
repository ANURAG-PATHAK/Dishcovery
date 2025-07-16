import { Router } from "express";
import { FavoritesController } from "../controllers/favoritesController.js";

const router = Router();

// POST /api/favorites - Create a new favorite
router.post("/", FavoritesController.createFavorite);

// GET /api/favorites - Get all favorites
router.get("/", FavoritesController.getAllFavorites);

// GET /api/favorites/:userId - Get favorites by user ID
router.get("/:userId", FavoritesController.getFavoritesByUser);

// DELETE /api/favorites/:userId/:recipeId - Delete a favorite by user ID and recipe ID
router.delete("/:userId/:recipeId", FavoritesController.deleteFavorite);

export default router;
