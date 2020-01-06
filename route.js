"use strict";

const express = require("express");
const tfdb = express.Router();
const pool = require("./connection");

tfdb.get("/tfdb", (req, res) => {
  pool.query("select * from CHARACTERS_WAVE_ONE").then(function (result) {
    res.send(result.rows);
    console.log("GET req made");
  });
});

module.exports = tfdb;