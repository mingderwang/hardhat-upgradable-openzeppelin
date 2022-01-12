// scripts/deploy_upgradeable_adminbox.js
const { ethers, upgrades } = require("hardhat");

async function main() {
  const AdminBox = await ethers.getContractFactory("AdminBox");
  console.log("Deploying AdminBox...");
  const adminBox = await upgrades.deployProxy(
    AdminBox,
    ["0xACa94ef8bD5ffEE41947b4585a84BdA5a3d3DA6E"],
    { initializer: "initialize" }
  );
  await adminBox.deployed();
  console.log("AdminBox deployed to:", adminBox.address);
}

main();
