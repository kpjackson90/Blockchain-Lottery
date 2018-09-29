const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "empty quantum embody purchase oblige firm net blush slim ginger letter urge",
  "https://rinkeby.infura.io/v3/71c20fe2b4bb4ef2a67919eff2a9d26f"
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  //contract deployment statement
  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: "0x" + bytecode, arguments: ["Hello There"] })
    .send({ gas: "1000000", from: accounts[0] });

  console.log("Address contract was deployed to: ", result.options.address);
};
deploy();
