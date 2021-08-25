require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});

const config = {
  dialect: "sqlite",
  storage: './__tests__/database.sqlite',
  host: process.env.DB_HOST || "localhost",
  database: "netkids",
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASS || "",
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
  },
};

module.exports = config;
