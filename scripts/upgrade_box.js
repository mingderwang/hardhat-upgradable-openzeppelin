// scripts/upgrade_box.js
async function main() {
  const BoxV2 = await ethers.getContractFactory("BoxV2");
  console.log("Upgrading Box...");
  await upgrades.upgradeProxy(
    "0xd27B4447F285C114D245FD08865E0b5956E71D97",
    BoxV2
  );
  console.log("Box upgraded");
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
