"use strict";

const express = require("express");
const tfdb = express.Router();
const pool = require("./connection");

tfdb.get("/tfdb", (req, res) => {
  pool.query("select * from CHARACTERS_WAVE_ONE order by ID").then(function (result) {
    res.send(result.rows);
    console.log("GET req made");
  });
});
tfdb.get("/tfdb2", (req, res) => {
  pool.query("select * from CHARACTERS_WAVE_TWO order by name").then(function (result) {
    res.send(result.rows);
    console.log("GET req made");
  });
});
tfdb.get("/tfdb3", (req, res) => {
  pool.query("select * from CHARACTERS_WAVE_THREE order by name").then(function (result) {
    res.send(result.rows);
    console.log("GET req made");
  });
});
tfdb.get("/tfdb4", (req, res) => {
  pool.query("select * from CHARACTERS_WAVE_FOUR order by name").then(function (result) {
    res.send(result.rows);
    console.log("GET req made");
  });
});
tfdb.get("/tfdb5", (req, res) => {
  pool.query("select * from CHARACTERS_WAVE_FIVE order by name").then(function (result) {
    res.send(result.rows);
    console.log("GET req made");
  });
});

module.exports = tfdb;