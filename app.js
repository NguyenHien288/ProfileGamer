const express = require("express");
const bodyParser = require("body-parser");
const bookRouter = require("./api/modules/book/book.router");
const userRouter = require("./api/modules/user/user.router");
const authRouter = require("./api/modules/auth/auth.router");
const mongoose = require("mongoose");
const config = require("./config");

mongoose.connect(config.mongoConnectionString);
const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());
app.use("/", express.static("../client"));
app.use("/api/book", bookRouter);
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.listen(PORT, function() {
  console.log(`Server is listening on ${PORT}`);
});
