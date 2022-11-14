// DEPENDENCIES
const path = require("path");
const router = require("express").Router();

module.exports = function (router) {
  // ROUTES
  router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/html/landing.html"));
  });

  router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/html/notes.html"));
  });

  // NO MATCH ROUTE
  router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/html/landing.html"));
  });
};