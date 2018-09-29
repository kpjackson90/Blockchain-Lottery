const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "empty quantum embody purchase oblige firm net blush slim ginger letter urge",
  "https://rinkeby.infura.io/v3/71c20fe2b4bb4ef2a67919eff2a9d26f"
);
const web3 = new Web3(provider);
