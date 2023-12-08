const Web3 = require("web3");
const rpcURL = "https://mainnet.infura.io/v3/608efb926eee4ffe92cde4bff9cab15f"; // Your RPC URL goes here
const web3 = new Web3(rpcURL);

const getWalletBalance = async (req, res) => {
  const address = "0x71C7656EC7ab88b098defB751B7401B5f6d8976F"; // Your account address goes here

  // let k = await web3.eth.getAccounts();
  // let k = await web3.eth.getGasPrice();
  // web3.eth.defaultAccount = '0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe';
  // let k = web3.eth.defaultAccount;
  let k = web3.eth.defaultBlock;
  console.log("okooooo==", k);

  // web3.eth.getBalance(address, (err, wei) => {
  //   if (err) {
  //     console.log("error=", err);
  //   } else {
  //     console.log("balance=", wei);
  //     res.status(200).json({ balance: wei });
  //   }
  // });
};

module.exports = {
  getWalletBalance,
};
