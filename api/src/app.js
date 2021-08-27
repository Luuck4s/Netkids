require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});

const express = require("express");
const cors = require("cors");
const { errors } = require("celebrate");
const app = express();

const userRoutes = require("./routes/User.routes");
const authRoutes = require("./routes/Auth.routes");
const filmRoutes = require("./routes/Film.routes");

app.use(cors());
app.use(express.json());

app.use(userRoutes);
app.use(authRoutes);
app.use(filmRoutes);

app.use(errors());

module.exports = app;
