const express = require("express");
const app = express();
const userRoutes = require("./routes/user.routes");
const sequelize = require("./config/db");

require("dotenv").config();

app.use(express.json());

app.use("/api/users", userRoutes);

sequelize.sync({ force: false })
  .then(() => console.log("DB sincronizada"))
  .catch((err) => console.error("Error al sincronizar DB:", err));

module.exports = app;
