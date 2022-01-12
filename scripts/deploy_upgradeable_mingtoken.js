// scripts/deploy_upgradeable_mingtoken.js
const { ethers, upgrades } = require("hardhat");

async function main() {
  const MingToken = await ethers.getContractFactory("MingToken");
  console.log("Deploying MingToken...");
  const mingtoken = await upgrades.deployProxy(MingToken,[] , {
    initializer: "initialize",
  });
  await mingtoken.deployed();
  console.log("MingToken deployed to: ", mingtoken.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
