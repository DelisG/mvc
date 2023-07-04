import mongoose from 'mongoose'

mongoose.connect();

let db = mongoose.connection;

module.exports = db;