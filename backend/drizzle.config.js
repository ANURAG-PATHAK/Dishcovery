import { DB_URL } from "./src/config/constants";

export default {
    schema: "./src/db/schema.js",
    out: "./src/db/migrations",
    dialect: "postgresql",
    dbCredentials: { url: DB_URL },
};