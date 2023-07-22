import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://admin:delis123@cluster0.q0ygpfy.mongodb.net/senac2"
);

let db = mongoose.connection;

export default db;
