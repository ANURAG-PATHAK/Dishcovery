import { db } from "../config/db.js";
import { favorites } from "../db/schema.js";
import { eq, and } from "drizzle-orm";

export class FavoritesService {
    static async createFavorite(favoriteData) {
        const { userId, recipeId, title, image, cookTime, servings } = favoriteData;

        const newFavorite = await db
            .insert(favorites)
            .values({
                userId,
                recipeId,
                title,
                image,
                cookTime,
                servings
            })
            .returning();

        return newFavorite[0];
    }

    static async deleteFavorite(userId, recipeId) {
        const result = await db
            .delete(favorites)
            .where(and(eq(favorites.userId, userId), eq(favorites.recipeId, recipeId)))
            .returning();

        return result;
    }

    static async getFavoritesByUserId(userId) {
        const userFavorites = await db
            .select()
            .from(favorites)
            .where(eq(favorites.userId, userId));

        return userFavorites;
    }

    static async getAllFavorites() {
        const allFavorites = await db.select().from(favorites);
        return allFavorites;
    }
}
