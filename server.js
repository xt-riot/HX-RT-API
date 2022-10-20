const express = require("express");
const morgan = require("morgan");

const router = require("./routes/user.routes");

const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// middleware for http requests benchmarking
server.use(morgan("dev"));

// use /api/* to expose the routes
server.use("/api", router);

module.exports = server;
