require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("dotenv").config()
require('@openzeppelin/hardhat-upgrades')
require("@nomiclabs/hardhat-etherscan")



const GOERLI_URL = process.env.GOERLI_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;


module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: GOERLI_URL,
      accounts: [PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API,
  }
};