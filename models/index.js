const { Sequelize } = require("sequelize");
const sequelize = require("./connection");
const productModal = require("./productModel.js");
const reviewModal = require("./reviewModel.js");
const weatherModal = require("./weatherApis.js");

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// define models

db.products = productModal();
db.reviews = reviewModal();
db.weather = weatherModal();

// sync db

db.sequelize.sync({ force: false }).then(() => {
  console.log("Yes re-sync done!");
});

// 1 to many relation

db.products.hasMany(db.reviews, {
  foreignKey: "product_id",
  as: "review",
});

db.reviews.belongsTo(db.products, {
  foreignKey: "product_id",
  as: "product",
});

module.exports = db;
