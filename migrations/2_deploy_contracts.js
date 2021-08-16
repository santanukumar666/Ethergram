const Ethergram = artifacts.require("Ethergram");

module.exports = function (deployer) {
  // Code goes here...
  deployer.deploy(Ethergram);
};