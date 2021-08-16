require('dotenv').config()
require('babel-register');
require('babel-polyfill');
const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  networks: {
    ropsten: {
      provider: function () {
        return new HDWalletProvider(process.env.mn, process.env.id)
      },
      network_id: 3
    }
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
