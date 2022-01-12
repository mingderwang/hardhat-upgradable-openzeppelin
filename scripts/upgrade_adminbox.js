// scripts/upgrade_adminbox.js
const { ethers, upgrades } = require("hardhat");

async function main() {
  const AdminBoxV2 = await ethers.getContractFactory("AdminBoxV2");
  console.log("Upgrading AdminBox...");
  await upgrades.upgradeProxy(
    "0xEe4dA577FC8E5Eca65d42ab49eaEbEd5Eb606Ff1",
    AdminBoxV2
  );
  console.log("Box upgraded");
}

main();
