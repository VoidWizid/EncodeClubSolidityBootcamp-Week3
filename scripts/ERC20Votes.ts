import { ethers } from "hardhat";
import { MyERC20Votes__factory } from "../typechain-types";
// import { MyERC20Token__factory } from "../typechain-types";

const MINT_VALUE = ethers.utils.parseUnits("10");

async function main() {
  const [deployer, acc1, acc2] = await ethers.getSigners();
  const contractFactory = new MyERC20Votes__factory(deployer);
  const contract = await contractFactory.deploy();
  const deployedTxReceipt = await contract.deployTransaction.wait();
  console.log(`The contract was deployed at address ${contract.address}
  at block number ${deployedTxReceipt.blockNumber}`);
  const mintTx = await contract.mint(acc1.address, MINT_VALUE);
  const mintTxReceipt = await mintTx.wait();
  console.log(`Minted ${ethers.utils.formatUnits(MINT_VALUE)}
  tokens to the address ${acc1.address} at block ${mintTxReceipt.blockNumber}`)
  const balanceBN = await contract.balanceOf(acc1.address);
  console.log(`Account ${acc1.address} has a balance of ${ethers.utils.formatUnits(balanceBN)} tokens`);
  const votesBefore = await contract.getVotes(acc1.address);
  const delegateTx = await contract.connect(acc1).delegate(acc1.address);
  const delegateTxReceipt = delegateTx.wait();
  const votesAfter = await contract.getVotes(acc1.address);
  const transferTx = await contract.connect(acc1).transfer(acc2.address, MINT_VALUE.div(2));
  await transferTx.wait();
  const lastBlock = await ethers.provider.getBlock("latest");
  let pastVotes = await contract.getPastVotes(acc1.address, lastBlock.number - 1);

}

main().catch(err => {
  console.error(err);
  process.exitCode = 1;
})