require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  networks: {
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/alchemy_api_key",
      chainId: 80001,
      accounts: [
        "private_key",
      ],
      gasPrice: 5000000000,
      gas: 50000000,
    },
  },
  etherscan: {
    apiKey: "api_key",
  },
  sourcify: {
    enabled: true,
  },
  solidity: {
    compilers: [
      {
        version: "0.8.24",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
};
