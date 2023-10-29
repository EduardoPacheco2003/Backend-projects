import sql from "mssql";
import Config from "../config";

const dbSettings = {
  user: Config.dbUser,
  password: Config.dbPassword,
  server: Config.dbServer,
  database: Config.dbDatabase,
  port: 1433,
  options: {
    encrypt: false, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};

export async function getConnection() {
  try {
    let pool = await sql.connect(dbSettings);
    return pool;
  } catch (error) {
    console.error(error);
  }
}

export { sql };
