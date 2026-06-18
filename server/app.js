const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const rateLimit = require("express-rate-limit");
const eventRoutes = require("./routes/event.routes");
const sessionRoutes = require("./routes/session.routes");

require("dotenv").config();

const app = express();

app.use(
  cors({
    origin: "*",
  }),
);

app.use(express.json());

app.use(cookieParser());

app.use(helmet());

app.use(compression());

app.use(morgan("dev"));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use(limiter);

app.use("/api/events", eventRoutes);
app.use("/api/sessions", sessionRoutes);
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "User Analytics API Running 🚀",
  });
});

module.exports = app;
