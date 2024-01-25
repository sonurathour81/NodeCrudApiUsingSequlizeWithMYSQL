const { DataTypes } = require("sequelize");
const sequelize = require("./connection");

module.exports = () => {
  const Weather = sequelize.define("weatherApis", {
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
  return Weather;
};
