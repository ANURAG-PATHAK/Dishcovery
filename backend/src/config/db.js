import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { DB_URL } from "./constants.js";
import * as schema from "../db/schema.js";

const sql = neon(DB_URL);
export const db = drizzle(sql, { schema });