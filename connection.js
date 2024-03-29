"use strict";
//connection object that is building a way to communicate to the database; module uses a pool to save time by reusing connections
const pg = require("pg");
const url = require("url");

const params = url.parse(process.env.DATABASE_URL);
const auth = params.auth.split(":");
const config = {
  user: auth[0],
  password: auth[1],
  host: params.hostname,
  port: params.port,
  database: params.pathname.split("/")[1],
  ssl: { rejectUnauthorized: false },
  max: 25
};

module.exports = new pg.Pool(config);