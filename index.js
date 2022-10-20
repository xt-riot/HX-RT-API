require("dotenv").config();
const server = require("./server.js");

server.listen(process.env.NODE_PORT || 1337, () => {
  console.log(`Server listening on port ${process.env.NODE_PORT || 1337}.`);
});

// DO NOT KILL NODEJS WHEN AN ERROR OCCURS
process.on("uncaughtException", (error) => {
  console.log("Uncaught exception: ", error);
});

process.on("unhandledRejection", (error) => {
  console.log("Unhandled rejection: ", error);
});
