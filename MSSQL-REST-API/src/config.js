import { config } from "dotenv";
config();

console.log(process.env.PORT);

export default {
  port: process.env.PORT || 4000,
  dbUser: process.env.DBUSER,
  dbPassword: process.env.DBPASSWORD,
  dbServer: process.env.DBSERVER,
  dbDatabase: process.env.DBDATABASE,
};
