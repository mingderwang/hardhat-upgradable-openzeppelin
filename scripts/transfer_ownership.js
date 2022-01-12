// scripts/transfer_ownership.js
async function main() {
  const gnosisSafe = '0x9E4C996EFD1Adf643467d1a1EA51333C72a25453';
 
  console.log("Transferring ownership of ProxyAdmin...");
  // The owner of the ProxyAdmin can upgrade our contracts
  await upgrades.admin.transferProxyAdminOwnership(gnosisSafe);
  console.log("Transferred ownership of ProxyAdmin to:", gnosisSafe);
}
 
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
