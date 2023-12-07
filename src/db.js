import pg from "pg";

export const pool = new pg.Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "123456",
  port: 5432,
});

pool.on("connect", () => {
  console.log("connected to the database");
});

export default pool;
