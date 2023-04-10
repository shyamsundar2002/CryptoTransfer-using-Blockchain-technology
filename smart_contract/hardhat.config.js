require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/NURyGnZxKXze-L1IMdf-ZOVy6k0iJhVt',
      accounts: ['90701669c9b658b7a5ea754ee17c612980420324066907ee8a7f3374b1c2ea61'],
    },
  },
};