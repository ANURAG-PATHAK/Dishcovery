import { FavoritesService } from "../services/favoritesService.js";

export class FavoritesController {
    static async createFavorite(req, res) {
        try {
            const { userId, recipeId, title, image, cookTime, servings } = req.body;

            // Validation
            if (!userId || !recipeId || !title) {
                return res.status(422).json({
                    error: "User ID, Recipe ID, and Title fields are required"
                });
            }

            const favorite = await FavoritesService.createFavorite({
                userId,
                recipeId,
                title,
                image,
                cookTime,
                servings
            });

            res.status(201).json(favorite);
        } catch (error) {
            console.error("Error adding favorite:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }

    static async deleteFavorite(req, res) {
        try {
            const { userId, recipeId } = req.params;

            // Validate IDs
            if (!userId) {
                return res.status(400).json({ error: "user ID not provided" });
            }
            if (!recipeId || isNaN(parseInt(recipeId))) {
                return res.status(400).json({ error: "Invalid recipe ID" });
            }

            const result = await FavoritesService.deleteFavorite(userId, parseInt(recipeId));

            if (result.length === 0) {
                return res.status(404).json({ error: "Favorite not found" });
            }

            res.status(200).json({ message: "Favorite deleted successfully" });
        } catch (error) {
            console.error("Error deleting favorite:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }

    static async getFavoritesByUser(req, res) {
        try {
            const { userId } = req.params;

            if (!userId) {
                return res.status(400).json({ error: "User ID is required" });
            }

            const favorites = await FavoritesService.getFavoritesByUserId(userId);
            res.status(200).json(favorites);
        } catch (error) {
            console.error("Error fetching user favorites:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }

    static async getAllFavorites(req, res) {
        try {
            const favorites = await FavoritesService.getAllFavorites();
            res.status(200).json(favorites);
        } catch (error) {
            console.error("Error fetching all favorites:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}
