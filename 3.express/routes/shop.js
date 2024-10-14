const path = require("path");
const express = require("express");
const ShopRouter = express.Router();
const rootDir = require("../util/path");

ShopRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = ShopRouter;

/*
  path = node 기능 따라서 전역으로 호출(express처럼)
  sendFile엔 절대경로가 필요하다.
  단순, res.sendFile('../views/shop.html)를 하면 절대경로로 표시하라는 문구가 나옴

  path.join(__dirname)
  __dirname : 현재위치한 폴더의 경로까지 표시
  다음 인자는 순서대로 경로 표시 한다 .
*/
