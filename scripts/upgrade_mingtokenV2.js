// scripts/upgrade_adminbox.js
const { ethers, upgrades } = require("hardhat");

async function main() {
  const MingTokenV2 = await ethers.getContractFactory("MingTokenV2");
  console.log("Upgrading MingToken to V2...");
  await upgrades.upgradeProxy(
    "0x89fb4cdc32D650118E8Ccb95ABc767846970a0F7",
    MingTokenV2
  );
  console.log("MingTokenV2 upgraded");
}

main();
