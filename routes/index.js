const productRouter = require("./productRouter.js");
const reviewRouter = require("./reviewRouter.js");
const walletRouter = require("./walletRouter.js");
const weatherRouter = require("./weatherRouter.js");

module.exports = (app) => {
  app.use("/api/products", productRouter);
  app.use("/api/review", reviewRouter);
  app.use("/api/wallet", walletRouter);
  app.use("/api/weather", weatherRouter);
};
