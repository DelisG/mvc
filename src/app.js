const express  = require("express")

const app = express();

app.use(express.json());
app.use("/",index);

module.exports = app;