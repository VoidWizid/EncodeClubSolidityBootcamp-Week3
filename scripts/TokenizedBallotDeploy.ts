import { ethers } from "hardhat";
import { Ballot__factory } from "../typechain-types";
import * as dotenv from "dotenv";
import { argv } from 'node:process';

dotenv.config();


function convertStringArrayToBytes32(array: string[]) {
  const bytes32Array = [];
  for (let index = 0; index < array.length; index++) {
      bytes32Array.push(ethers.utils.formatBytes32String(array[index]));
  }
  return bytes32Array;
}

async function main() {
  // const args = argv;
  // const tokenContract = args[2];
  // const blockNumber = args[3];
  // const proposals = args.slice(4);
  const proposals = ["420", "69"];
  const tokenContract = "0x4F292E24eBC9Fe84af11eD3aEF6fE5A316DEDECA";
  const blockNumber = "9005543";
  // if (proposals.length <= 0) throw new Error("Missing proposals");

  const provider = new ethers.providers.AlchemyProvider(
    "goerli",
    process.env.ALCHEMY_API_KEY
  );
  const privateKey = process.env.PRIVATE_KEY;
  if (!privateKey || privateKey.length <= 0) {
    throw new Error("Private key missing");
  }

  const wallet = new ethers.Wallet(privateKey);
  console.log("Connected to the wallet address", wallet.address);
  const signer = wallet.connect(provider);

  //Deploy the contract
  console.log("Deploying TokenizedBallot contract:");
  const ballotContractFactory = new Ballot__factory(signer)
  console.log("Deploying contract ...");
  const ballotContract = await ballotContractFactory.deploy(convertStringArrayToBytes32(proposals), tokenContract, blockNumber);
  await ballotContract.deployed();
  const deployTransactionReceipt = await ballotContract.deployTransaction.wait();
  console.log(
    "Contract deployed to:",
    ballotContract.address,
    "by",
    signer.address,
    "at block number",
    deployTransactionReceipt.blockNumber,
    "\n"
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});