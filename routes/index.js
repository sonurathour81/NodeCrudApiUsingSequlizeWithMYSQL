const productRouter = require("./productRouter.js");
const reviewRouter = require("./reviewRouter.js");

module.exports = (app) => {
  app.use("/api/products", productRouter);
  app.use("/api/review", reviewRouter);
};
