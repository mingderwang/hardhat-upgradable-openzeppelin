// scripts/deploy_upgradeable_adminbox.js
const { ethers, upgrades } = require("hardhat");

async function main() {
  const AdminBox = await ethers.getContractFactory("AdminBox");
  console.log("Deploying AdminBox...");
  const adminBox = await upgrades.deployProxy(
    AdminBox,
    ["0x609683612D80A091C69747a76ec6efE284a7cf46"],
    { initializer: "initialize" }
  );
  await adminBox.deployed();
  console.log("AdminBox deployed to: ", adminBox.address);
}

main();
