const { DataTypes } = require("sequelize");
const sequelize = require("./connection");

module.exports = () => {
  const Review = sequelize.define("review", {
    rating: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.TEXT,
    },
    product_id: {
      type: DataTypes.INTEGER,
    },
  });
  return Review;
};
