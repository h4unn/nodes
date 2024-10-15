const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const adminRouter = require("./routes/admin");
const shopRoute = require("./routes/shop");

const app = express();

app.use(bodyParser.urlencoded({ extended: false })); // 이 줄이 없으면 /product에서 req.body를 하면 undefind 발생 (이건 외우자!)
app.use(express.static(path.join(__dirname, "public"))); // 정적 파일 호출 (shop.html stylesheet link 확인)

app.use("/admin", adminRouter);
app.use(shopRoute);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(4000);
/* 참고 */
// app.use((req, res, next) => {
//   console.log("In the middleware!");
//   next(); //다음 미들 웨어로 이동할 때 사용
// });

// admin.js 로 이동

// app.use("/app-product", (req, res, next) => {
//   res.send(
//     "<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>send</button></form>"
//   );
// });

// app.use("/product", (req, res, next) => {
//   console.log(req.body);
//   res.redirect("/");
// });

// const server = http.createServer(app);
