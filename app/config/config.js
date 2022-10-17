const dotenv = require('dotenv').config();
const mongoose = require("mongoose");
const barrisSchema = require("../models/modelData");

let db = {};

  initialize();

  async function initialize() {
    //const { host, port, databaseName } = config.dbmongo;
    await mongoose.connect(process.env.DATABASE_HOST + process.env.DATABASE_USER + ":" + process.env.DATABASE_PASSWORD + "@" + process.env.DATABASE_NAME);
    console.log("Conectat a la base de dades de MongoDB");

    db.barris = mongoose.model("barris", barrisSchema);
  }

  module.exports = db;
  