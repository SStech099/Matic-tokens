async function main() {
  const Matic1 = await hre.ethers.getContractFactory("Matic1");
  const matic1 = await Matic1.deploy(
    "0xe22901E400Cd75F0048bd3DEFEbF84e416A323C0"
  );

  await matic1.waitForDeployment();
  const addr = await matic1.target;
  console.log(`Matic1 deployed to : ${addr}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// 0x6F3488713e670F734078e879A9140C3100741429
// 0xba609a73Fe397B82956F03202A21b99d48B69685
