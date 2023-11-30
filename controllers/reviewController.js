const db = require("../models");
const Review = db.reviews;

// 1. create Review

const addReview = async (req, res) => {
  let info = {
    rating: req.body.rating,
    description: req.body.description,
    product_id: req.body.product_id,
  };

  const review = await Review.create(info);
  res.status(200).send(review);
};

// 2. get all Reviews

const getAllReviews = async (req, res) => {
  let reviews = await Review.findAll({});
  res.status(200).send(reviews);
};

module.exports = {
  addReview,
  getAllReviews,
};
