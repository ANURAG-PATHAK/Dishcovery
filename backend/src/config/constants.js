import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV;
const DB_URL = process.env.DB_URL;  

export { PORT, NODE_ENV, DB_URL };