const Exchange = artifacts.require("uniswap_exchange");
const Factory = artifacts.require("uniswap_factory");

module.exports = async function(deployer) {
  await deployer.deploy(Exchange);
  await deployer.deploy(Factory);
  
  let factory = await Factory.deployed();
  await factory.initializeFactory(Exchange.address);
};
