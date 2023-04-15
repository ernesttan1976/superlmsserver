const express = require("express");
const path = require("path");
const logger = require("morgan");
const cors = require('cors');

require("dotenv").config();
const database = require("./config/database");
database.connect();

const userRouter = require("./routes/usersRouter");
const courseRouter = require("./routes/coursesRouter");
const completionRouter = require("./routes/completionsRouter");

const jwt = require("jsonwebtoken");

const app = express();
const port = process.env.PORT || 3001;

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
// app.use(express.static(path.join(__dirname, "dist")));

// app.get("/api", (req, res) => {
//   res.json({ msg: "Hi" });
// });

const isLoggedIn = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const token = authorization.split(" ")[1];
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    if (decode) {
      res.locals.user = decode.user;
      next();
    } else {
      res.status(403).json({ message: "sorry" });
    }
  } catch (error) {
    res.status(403).json({ error });
  }
};

// app.get("/api/secret", isLoggedIn, (req, res) => {
//   const { user } = res.locals;
//   res.json({ user });
// });

app.use("/users", userRouter);
app.use("/courses", courseRouter);
app.use("/completions", completionRouter);

// app.get("/*", function (req, res) {
//   res.sendFile(path.join(__dirname, "dist", "index.html"));
// });

setTimeout(() => {
  app.listen(port, () => {
    console.log(`Express listening on port ${port}`);
  });
}, 1000); // add a delay of 3 seconds before starting the server

module.exports = app;
