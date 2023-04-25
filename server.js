const express = require("express");
const path = require("path");
const logger = require("morgan");
const cors = require('cors');
const fileupload = require("express-fileupload");

require("dotenv").config();
const database = require("./config/database");
database.connect();

const userRouter = require("./routes/usersRouter");
const courseRouter = require("./routes/coursesRouter");
const completionRouter = require("./routes/completionsRouter");
const openaiRouter = require('./routes/openaiRouter');
const s3Router = require('./routes/s3Router');

const jwt = require("jsonwebtoken");


const app = express();
const port = process.env.PORT || 3001;

app.use(logger("dev"));
app.use(cors({
  exposedHeaders: ['x-total-count', 'nextPage', 'previousPage']
}));
app.use(
  fileupload({
    createParentPath: true,
  }),
);
app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ extended: true }));
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

const corsOptions = {
  allowedHeaders: ["Content-Type", "Authorization"],
  exposedHeaders: ["Content-Type", "Authorization"],
};

function optionsMiddleware(req, res, next) {
  if (req.method === "OPTIONS" && (req.path === "/users" || req.path === "/courses")) {
    res.set({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, DELETE",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      ...corsOptions,
    });
    res.status(204).end();
  } else if (req.method === "OPTIONS" && req.path === "/media/video-upload") {
    res.set({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': "GET, POST, PUT, PATCH, DELETE",
      'Access-Control-Allow-Headers': "Content-Type, Authorization",
      ...corsOptions,
    });
    res.status(204).end();
  } else {
    next();
  }
}

app.use(optionsMiddleware);

app.use("/users", userRouter);
app.use("/courses", courseRouter);
app.use("/completions", completionRouter);
app.use("/openai", openaiRouter);
app.use('/media', s3Router);



// app.get("/*", function (req, res) {
//   res.sendFile(path.join(__dirname, "dist", "index.html"));
// });

setTimeout(() => {
  app.listen(port, () => {
    console.log(`Express listening on port ${port}`);
  });
}, 1000); // add a delay of 3 seconds before starting the server

module.exports = app;
