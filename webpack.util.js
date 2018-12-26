const path = require("path");

const IS_DEV = process.env.NODE_ENV === "dev";

const dirNode = "node_modules";
const dirApp = path.join(__dirname, "app");
const dirAssets = path.join(__dirname, "assets");

module.exports = {
  IS_DEV,
  dirNode,
  dirApp,
  dirAssets,
};
