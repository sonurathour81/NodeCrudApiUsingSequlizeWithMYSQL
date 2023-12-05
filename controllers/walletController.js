const Web3 = require("web3");
const rpcURL = "https://mainnet.infura.io/v3/608efb926eee4ffe92cde4bff9cab15f"; // Your RPC URL goes here
const web3 = new Web3(rpcURL);

const getWalletBalance = async (req, res) => {
  const address = "0x71C7656EC7ab88b098defB751B7401B5f6d8976F"; // Your account address goes here
  web3.eth.getBalance(address, (err, wei) => {
    if (err) {
      console.log("error=", err);
    } else {
      console.log("balance=", wei);
      res.status(200).json({ balance: wei });
    }
  });
};

module.exports = {
  getWalletBalance,
};
