import pg from "pg";
import { config } from "dotenv";

config();
/* export const pool = new pg.Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "123456",
  port: 5432,
});
 */
export const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.on("connect", () => {
  console.log("connected to the database");
});

export default pool;
