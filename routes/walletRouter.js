const walletController = require("../controllers/walletController.js");
const router = require("express").Router();

router.get("/getBalance", walletController.getWalletBalance);

module.exports = router;
