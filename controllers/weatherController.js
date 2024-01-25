const axios = require("axios");

const getWalletBalance = async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          lat: "24.809",
          lon: "93.9407",
          appid: "b1fa38edaa6e1f5cb5330a0fa4032cd1",
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  getWalletBalance,
};
