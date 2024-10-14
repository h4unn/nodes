const path = require("path");
const express = require("express");
const rootDir = require("../util/path");

const AdminRouter = express.Router();

AdminRouter.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

AdminRouter.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = AdminRouter;
