const dotenv = require('dotenv').config();
const mongoose = require("mongoose");
const productSchema = require("../models/modelProduct");
const serviceSchema = require("../models/modelService");

let db = {};

  initialize();

  async function initialize() {
    //const { host, port, databaseName } = config.dbmongo;
    await mongoose.connect(process.env.DATABASE_HOST + process.env.DATABASE_USER + ":" + process.env.DATABASE_PASSWORD + "@" + process.env.DATABASE_NAME);
    console.log("Conectat a la base de dades de MongoDB");

    db.products = mongoose.model("products", productSchema);
    db.services = mongoose.model("services", serviceSchema);
  }

  module.exports = db;
  