import express from "express";
import json from "express";
import index from "./routes/index.js";
import db from "./config/dbConnect.js";
import apis from "./routes/api.js";
import chalk from "chalk";

const app = express();

app.use(json());
app.use("/", index);
app.use("/apis", apis);

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
  console.log(chalk.bgMagenta("Conexão com o banco feita com sucesso"));
});

export default app;
