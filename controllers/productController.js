const db = require("../models");
const Product = db.products;
const Review = db.reviews;

// 1. create product

const addProduct = async (req, res) => {
  let info = {
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    published: req.body.published,
  };

  const product = await Product.create(info);
  res.status(200).send(product);
};

// 2. get all products

const getAllProducts = async (req, res) => {
  let products = await Product.findAll({});
  res.status(200).send(products);
};

// 3. get single product

const getSingleProduct = async (req, res) => {
  const id = req.params.id;
  let product = await Product.findOne({ where: { id: id } });
  res.status(200).send(product);
};

// 4. update product

const updateProduct = async (req, res) => {
  const id = req.params.id;
  const product = await Product.update(req.body, { where: { id: id } });
  res.status(200).send(product);
};

// 5. delete single product

const deleteProduct = async (req, res) => {
  const id = req.params.id;
  await Product.destroy({ where: { id: id } });
  res.status(200).send("Product is deleted!");
};

// 6. get published product

const getPublishedProduct = async (req, res) => {
  const products = await Product.findAll({ where: { published: true } });
  res.status(200).send(products);
};

// 7. connect one to many relation Product and Reviews

const getProductReviews = async (req, res) => {
  const id = req.params.id;
  const data = await Product.findAll({
    include: [
      {
        model: Review,
        as: "review",
      },
    ],
    where: {
      id: id,
    },
  });
  res.status(200).send(data);
};

module.exports = {
  addProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  getPublishedProduct,
  getProductReviews,
};
