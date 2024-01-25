const weatherRouter = require("../controllers/weatherController.js");
const router = require("express").Router();

router.get("/getWeather", weatherRouter.getWalletBalance);

module.exports = router;
