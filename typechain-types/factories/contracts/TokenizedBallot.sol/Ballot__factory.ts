/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BytesLike,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  Ballot,
  BallotInterface,
} from "../../../contracts/TokenizedBallot.sol/Ballot";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "proposalNames",
        type: "bytes32[]",
      },
      {
        internalType: "address",
        name: "_tokenContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_targetBlockNumber",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "proposals",
    outputs: [
      {
        internalType: "bytes32",
        name: "name",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "voteCount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "targetBlockNumber",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenContract",
    outputs: [
      {
        internalType: "contract IMyVoteToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposal",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "vote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "votingPower",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "votingPowerSpent",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "winnerName",
    outputs: [
      {
        internalType: "bytes32",
        name: "winnerName_",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "winningProposal",
    outputs: [
      {
        internalType: "uint256",
        name: "winningProposal_",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000d2e38038062000d2e833981810160405281019062000037919062000384565b81600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060038190555060005b8351811015620001165760026040518060400160405280868481518110620000af57620000ae620003ff565b5b60200260200101518152602001600081525090806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010155505080806200010d906200045d565b91505062000082565b50505050620004aa565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620001848262000139565b810181811067ffffffffffffffff82111715620001a657620001a56200014a565b5b80604052505050565b6000620001bb62000120565b9050620001c9828262000179565b919050565b600067ffffffffffffffff821115620001ec57620001eb6200014a565b5b602082029050602081019050919050565b600080fd5b6000819050919050565b620002178162000202565b81146200022357600080fd5b50565b60008151905062000237816200020c565b92915050565b6000620002546200024e84620001ce565b620001af565b905080838252602082019050602084028301858111156200027a5762000279620001fd565b5b835b81811015620002a7578062000292888262000226565b8452602084019350506020810190506200027c565b5050509392505050565b600082601f830112620002c957620002c862000134565b5b8151620002db8482602086016200023d565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200031182620002e4565b9050919050565b620003238162000304565b81146200032f57600080fd5b50565b600081519050620003438162000318565b92915050565b6000819050919050565b6200035e8162000349565b81146200036a57600080fd5b50565b6000815190506200037e8162000353565b92915050565b600080600060608486031215620003a0576200039f6200012a565b5b600084015167ffffffffffffffff811115620003c157620003c06200012f565b5b620003cf86828701620002b1565b9350506020620003e28682870162000332565b9250506040620003f5868287016200036d565b9150509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006200046a8262000349565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036200049f576200049e6200042e565b5b600182019050919050565b61087480620004ba6000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063a72003511161005b578063a720035114610118578063b384abef14610148578063c07473f614610164578063e2ba53f01461019457610088565b8063013cf08b1461008d5780632a8cd29e146100be57806355a373d6146100dc578063609ff1bd146100fa575b600080fd5b6100a760048036038101906100a291906104bd565b6101b2565b6040516100b5929190610512565b60405180910390f35b6100c66101e6565b6040516100d3919061053b565b60405180910390f35b6100e46101ec565b6040516100f191906105d5565b60405180910390f35b610102610212565b60405161010f919061053b565b60405180910390f35b610132600480360381019061012d919061062e565b61029a565b60405161013f919061053b565b60405180910390f35b610162600480360381019061015d919061065b565b6102b2565b005b61017e6004803603810190610179919061062e565b61035c565b60405161018b919061053b565b60405180910390f35b61019c61044e565b6040516101a9919061069b565b60405180910390f35b600281815481106101c257600080fd5b90600052602060002090600202016000915090508060000154908060010154905082565b60035481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000806000905060005b60028054905081101561029557816002828154811061023e5761023d6106b6565b5b9060005260206000209060020201600101541115610282576002818154811061026a576102696106b6565b5b90600052602060002090600202016001015491508092505b808061028d90610714565b91505061021c565b505090565b60006020528060005260406000206000915090505481565b806102bc3361035c565b10156102c757600080fd5b806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610315919061075c565b925050819055508060028381548110610331576103306106b6565b5b90600052602060002090600202016001016000828254610351919061075c565b925050819055505050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633a46b1a8846003546040518363ffffffff1660e01b81526004016103fc92919061079f565b602060405180830381865afa158015610419573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061043d91906107dd565b610447919061080a565b9050919050565b6000600261045a610212565b8154811061046b5761046a6106b6565b5b906000526020600020906002020160000154905090565b600080fd5b6000819050919050565b61049a81610487565b81146104a557600080fd5b50565b6000813590506104b781610491565b92915050565b6000602082840312156104d3576104d2610482565b5b60006104e1848285016104a8565b91505092915050565b6000819050919050565b6104fd816104ea565b82525050565b61050c81610487565b82525050565b600060408201905061052760008301856104f4565b6105346020830184610503565b9392505050565b60006020820190506105506000830184610503565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600061059b61059661059184610556565b610576565b610556565b9050919050565b60006105ad82610580565b9050919050565b60006105bf826105a2565b9050919050565b6105cf816105b4565b82525050565b60006020820190506105ea60008301846105c6565b92915050565b60006105fb82610556565b9050919050565b61060b816105f0565b811461061657600080fd5b50565b60008135905061062881610602565b92915050565b60006020828403121561064457610643610482565b5b600061065284828501610619565b91505092915050565b6000806040838503121561067257610671610482565b5b6000610680858286016104a8565b9250506020610691858286016104a8565b9150509250929050565b60006020820190506106b060008301846104f4565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061071f82610487565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610751576107506106e5565b5b600182019050919050565b600061076782610487565b915061077283610487565b925082820190508082111561078a576107896106e5565b5b92915050565b610799816105f0565b82525050565b60006040820190506107b46000830185610790565b6107c16020830184610503565b9392505050565b6000815190506107d781610491565b92915050565b6000602082840312156107f3576107f2610482565b5b6000610801848285016107c8565b91505092915050565b600061081582610487565b915061082083610487565b9250828203905081811115610838576108376106e5565b5b9291505056fea2646970667358221220a29055aa7a31de639b85f9341f28c15a13698aa913b0b9a279441bb8ccf71c8264736f6c63430008120033";

type BallotConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BallotConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Ballot__factory extends ContractFactory {
  constructor(...args: BallotConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    proposalNames: PromiseOrValue<BytesLike>[],
    _tokenContract: PromiseOrValue<string>,
    _targetBlockNumber: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Ballot> {
    return super.deploy(
      proposalNames,
      _tokenContract,
      _targetBlockNumber,
      overrides || {}
    ) as Promise<Ballot>;
  }
  override getDeployTransaction(
    proposalNames: PromiseOrValue<BytesLike>[],
    _tokenContract: PromiseOrValue<string>,
    _targetBlockNumber: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      proposalNames,
      _tokenContract,
      _targetBlockNumber,
      overrides || {}
    );
  }
  override attach(address: string): Ballot {
    return super.attach(address) as Ballot;
  }
  override connect(signer: Signer): Ballot__factory {
    return super.connect(signer) as Ballot__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BallotInterface {
    return new utils.Interface(_abi) as BallotInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Ballot {
    return new Contract(address, _abi, signerOrProvider) as Ballot;
  }
}