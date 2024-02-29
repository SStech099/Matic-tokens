require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  networks: {
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/UFcYwVr5ykNS-KUwHKG29fNwtTw5lgcq",
      chainId: 80001,
      accounts: [
        "44452881056ec9992bde8b4f1f50f66e3e98004c0db920b63a79d81ff54060f2",
      ],
      gasPrice: 5000000000,
      gas: 50000000,
    },
  },
  etherscan: {
    apiKey: "AXV5C1PRE16INB9G6QQM8RSCHAT886CVVN",
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
