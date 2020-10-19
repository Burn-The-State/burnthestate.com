/*
*
*
*
*
*------------------ CONSTANTS -------------------------------
*
*
*
*
*/
const TOKENS = {
  YFKA: '0x4086692d53262b2be0b13909d804f0491ff6ec3e',
  XAMP: '0xf911a7ec46a2c6fa49193212fe4a2a9b95851c27',
  BOA: '0xf9c36c7ad7fa0f0862589c919830268d1a2581a1',
  TOB: '0x7777770f8a6632ff043c8833310e245eba9209e6',
};

const PAIRS = {
  YFKA_XAMP: '0xaea4d6809375bb973c8036d53db9e90970942738',
  YFKA_TOB: '0x34d0448A79F853d6E1f7ac117368C87BB7bEeA6B',
  YFKA_BOA: '0x5ecF87ff558f73D097EDdfEE35abDE626c7Aeab7',
  YFKA_ETH: '0xc0cfb99342860725806f085046d0233fec876cd7',
};

const POOLS = [PAIRS.YFKA_XAMP, PAIRS.YFKA_TOB, PAIRS.YFKA_BOA, PAIRS.YFKA_ETH];

const YFKA_POOL_INDEXES = {
  XAMP: 0,
  TOB: 1,
  BOA: 2,
  ETH: 3,
};

const YFKA_CONTROLLER_ADDRESS = '0x615983a35CF71D89F1B094e920151d7eA9Bf48bc';

const UNISWAP_BASE_LP_ABI = [
  {
    inputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {indexed: true, internalType: 'address', name: 'owner', type: 'address'},
      {
        indexed: true,
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {indexed: false, internalType: 'uint256', name: 'value', type: 'uint256'},
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {indexed: true, internalType: 'address', name: 'sender', type: 'address'},
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount0',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount1',
        type: 'uint256',
      },
      {indexed: true, internalType: 'address', name: 'to', type: 'address'},
    ],
    name: 'Burn',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {indexed: true, internalType: 'address', name: 'sender', type: 'address'},
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount0',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount1',
        type: 'uint256',
      },
    ],
    name: 'Mint',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {indexed: true, internalType: 'address', name: 'sender', type: 'address'},
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount0In',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount1In',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount0Out',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount1Out',
        type: 'uint256',
      },
      {indexed: true, internalType: 'address', name: 'to', type: 'address'},
    ],
    name: 'Swap',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint112',
        name: 'reserve0',
        type: 'uint112',
      },
      {
        indexed: false,
        internalType: 'uint112',
        name: 'reserve1',
        type: 'uint112',
      },
    ],
    name: 'Sync',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {indexed: true, internalType: 'address', name: 'from', type: 'address'},
      {indexed: true, internalType: 'address', name: 'to', type: 'address'},
      {indexed: false, internalType: 'uint256', name: 'value', type: 'uint256'},
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    constant: true,
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{internalType: 'bytes32', name: '', type: 'bytes32'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'MINIMUM_LIQUIDITY',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'PERMIT_TYPEHASH',
    outputs: [{internalType: 'bytes32', name: '', type: 'bytes32'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {internalType: 'address', name: '', type: 'address'},
      {internalType: 'address', name: '', type: 'address'},
    ],
    name: 'allowance',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {internalType: 'address', name: 'spender', type: 'address'},
      {internalType: 'uint256', name: 'value', type: 'uint256'},
    ],
    name: 'approve',
    outputs: [{internalType: 'bool', name: '', type: 'bool'}],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{internalType: 'address', name: '', type: 'address'}],
    name: 'balanceOf',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{internalType: 'address', name: 'to', type: 'address'}],
    name: 'burn',
    outputs: [
      {internalType: 'uint256', name: 'amount0', type: 'uint256'},
      {internalType: 'uint256', name: 'amount1', type: 'uint256'},
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'decimals',
    outputs: [{internalType: 'uint8', name: '', type: 'uint8'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'factory',
    outputs: [{internalType: 'address', name: '', type: 'address'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'getReserves',
    outputs: [
      {internalType: 'uint112', name: '_reserve0', type: 'uint112'},
      {internalType: 'uint112', name: '_reserve1', type: 'uint112'},
      {internalType: 'uint32', name: '_blockTimestampLast', type: 'uint32'},
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {internalType: 'address', name: '_token0', type: 'address'},
      {internalType: 'address', name: '_token1', type: 'address'},
    ],
    name: 'initialize',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'kLast',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{internalType: 'address', name: 'to', type: 'address'}],
    name: 'mint',
    outputs: [{internalType: 'uint256', name: 'liquidity', type: 'uint256'}],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'name',
    outputs: [{internalType: 'string', name: '', type: 'string'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{internalType: 'address', name: '', type: 'address'}],
    name: 'nonces',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {internalType: 'address', name: 'owner', type: 'address'},
      {internalType: 'address', name: 'spender', type: 'address'},
      {internalType: 'uint256', name: 'value', type: 'uint256'},
      {internalType: 'uint256', name: 'deadline', type: 'uint256'},
      {internalType: 'uint8', name: 'v', type: 'uint8'},
      {internalType: 'bytes32', name: 'r', type: 'bytes32'},
      {internalType: 'bytes32', name: 's', type: 'bytes32'},
    ],
    name: 'permit',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'price0CumulativeLast',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'price1CumulativeLast',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{internalType: 'address', name: 'to', type: 'address'}],
    name: 'skim',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {internalType: 'uint256', name: 'amount0Out', type: 'uint256'},
      {internalType: 'uint256', name: 'amount1Out', type: 'uint256'},
      {internalType: 'address', name: 'to', type: 'address'},
      {internalType: 'bytes', name: 'data', type: 'bytes'},
    ],
    name: 'swap',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'symbol',
    outputs: [{internalType: 'string', name: '', type: 'string'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'sync',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'token0',
    outputs: [{internalType: 'address', name: '', type: 'address'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'token1',
    outputs: [{internalType: 'address', name: '', type: 'address'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'totalSupply',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {internalType: 'address', name: 'to', type: 'address'},
      {internalType: 'uint256', name: 'value', type: 'uint256'},
    ],
    name: 'transfer',
    outputs: [{internalType: 'bool', name: '', type: 'bool'}],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {internalType: 'address', name: 'from', type: 'address'},
      {internalType: 'address', name: 'to', type: 'address'},
      {internalType: 'uint256', name: 'value', type: 'uint256'},
    ],
    name: 'transferFrom',
    outputs: [{internalType: 'bool', name: '', type: 'bool'}],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

// TODO parse/stringify prob not needed
const STANDARD_ERC20_ABI = JSON.parse(
  JSON.stringify([
    {
      constant: true,
      inputs: [],
      name: 'name',
      outputs: [
        {
          name: '',
          type: 'string',
        },
      ],
      payable: false,
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'decimals',
      outputs: [
        {
          name: '',
          type: 'uint8',
        },
      ],
      payable: false,
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          name: '_owner',
          type: 'address',
        },
      ],
      name: 'balanceOf',
      outputs: [
        {
          name: 'balance',
          type: 'uint256',
        },
      ],
      payable: false,
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'symbol',
      outputs: [
        {
          name: '',
          type: 'string',
        },
      ],
      payable: false,
      type: 'function',
    },
  ])
);

const YFKA_CONTROLLER_ABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'previousPool',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'newPool',
        type: 'uint256',
      },
    ],
    name: 'BonusPoolChange',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'previousRate',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'newRate',
        type: 'uint256',
      },
    ],
    name: 'EmissionRateCut',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    inputs: [],
    name: '_getBlocksSinceLastReduction',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: '_getNextRateReduction',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: '_getTotalNextRateReduction',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: '_owner',
    outputs: [{internalType: 'address', name: '', type: 'address'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'addWhitelist',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'blocks_per_year',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'decayDivisor',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'decayPercent',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'emissionRate',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getActivePool',
    outputs: [{internalType: 'uint8', name: 'idx', type: 'uint8'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{internalType: 'uint8', name: 'idx', type: 'uint8'}],
    name: 'getCurrentReward',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{internalType: 'uint8', name: 'idx', type: 'uint8'}],
    name: 'getCurrentRewardPerYear',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{internalType: 'uint8', name: 'idx', type: 'uint8'}],
    name: 'getLastBlockWithdrawn',
    outputs: [{internalType: 'uint256', name: 'reward', type: 'uint256'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {internalType: 'uint8', name: 'idx', type: 'uint8'},
      {internalType: 'address', name: '_addr', type: 'address'},
    ],
    name: 'getPersonalEmissionRate',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'lastBlockUpdated',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {internalType: 'uint8', name: '', type: 'uint8'},
      {internalType: 'address', name: '', type: 'address'},
    ],
    name: 'lastBlockWithdrawn',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'minimum_stake',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'multiplier',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [{internalType: 'address', name: '', type: 'address'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {internalType: 'uint8', name: '', type: 'uint8'},
      {internalType: 'address', name: '', type: 'address'},
    ],
    name: 'personalEmissions',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{internalType: 'uint8', name: 'idx', type: 'uint8'}],
    name: 'personalYFKAStaked',
    outputs: [{internalType: 'uint256', name: 'points', type: 'uint256'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    name: 'pools',
    outputs: [{internalType: 'contract IERC20', name: '', type: 'address'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{internalType: 'uint8', name: 'idx', type: 'uint8'}],
    name: 'redeem',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'setOpen',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {internalType: 'uint8', name: 'idx', type: 'uint8'},
      {internalType: 'address', name: '_addr', type: 'address'},
    ],
    name: 'setPool',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{internalType: 'address', name: '_addr', type: 'address'}],
    name: 'setYFKA',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {internalType: 'uint8', name: 'idx', type: 'uint8'},
      {internalType: 'uint256', name: 'amount', type: 'uint256'},
    ],
    name: 'stake',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {internalType: 'uint8', name: '', type: 'uint8'},
      {internalType: 'address', name: '', type: 'address'},
    ],
    name: 'stakes',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{internalType: 'uint8', name: 'idx', type: 'uint8'}],
    name: 'totalYFKAStaked',
    outputs: [{internalType: 'uint256', name: 'points', type: 'uint256'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{internalType: 'address', name: 'newOwner', type: 'address'}],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{internalType: 'address', name: '_addr', type: 'address'}],
    name: 'transferOwnershipOfYFKA',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {internalType: 'uint8', name: 'idx', type: 'uint8'},
      {internalType: 'uint256', name: 'amount', type: 'uint256'},
    ],
    name: 'unstake',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'yfka',
    outputs: [{internalType: 'contract IYFKA', name: '', type: 'address'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {internalType: 'uint8', name: 'idx', type: 'uint8'},
      {internalType: 'uint256', name: 'amount', type: 'uint256'},
    ],
    name: 'yfkaPerLP',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    stateMutability: 'view',
    type: 'function',
  },
];

/*
*
*
*
*
*------------------ HELPER UTILS -------------------------------
*
*
*
*
*/



const isConnected = () => {
   if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    window.ethereum.enable();
    return true;
  }
  return false;
};

const getInfuraProvider = () => {
  const INFURA_PROVIDER = new Web3.providers.HttpProvider(
    'https://mainnet.infura.io/v3/91298a4448d34edf884df8b28db5f9ea'
  );
  return new Web3(INFURA_PROVIDER);
};


const checksumAddress = (address) => {
	const provider = getInfuraProvider();
	return provider.utils.toChecksumAddress(address);
}

const yfkaControllerContract = () => {
  const infuraProvider = getInfuraProvider();
  const contract = new infuraProvider.eth.Contract(
    YFKA_CONTROLLER_ABI,
    checksumAddress(YFKA_CONTROLLER_ADDRESS)
  );
  return contract;
};

const getAccount = async () => {
  const accounts = await ethereum.request({method: 'eth_requestAccounts'});
  console.log('accounts:', accounts);
  const provider = getInfuraProvider();
  return provider.utils.toChecksumAddress(accounts[0]);
};

const getBonusPool = async () => {
  console.log('getBonusPool');
  const contract = yfkaControllerContract();
  const idx = await contract.methods.getActivePool().call();
  return POOLS[idx];
};

const getGlobalEmissionRate = async () => {
  console.log('getGlobalEmissionRate');
  const contract = yfkaControllerContract();
  const emissionRate = await contract.methods.emissionRate().call();
  console.log('emissionRate: ', emissionRate);
  // TODO is it 18 tho
  const emissionRateToHuman = (emissionRate / 10 ** 18 / 2) * 100;
  console.log('emissionRateToHuman: ', emissionRateToHuman);

  const emissionRateToReadable = twoDecimals(emissionRateToHuman);
  console.log('emissionRateToReadable: ', emissionRateToReadable);
  return emissionRateToReadable;
};

const getIndexBySymbol = (value) => {
  return YFKA_POOL_INDEXES[value];
};

function twoDecimals(b) {
    const newNumber = Math.floor((b + Number.EPSILON) * 100) / 100;
	const balance = Number(newNumber).toLocaleString('fullwide', {useGrouping:false});
    return _.toNumber(b);
}

function fourDecimals(b) {
    const newNumber = Math.floor((b + Number.EPSILON) * 10000) / 10000;
	const balance = Number(newNumber).toLocaleString('fullwide', {useGrouping:false});
    return _.toNumber(b);
}

function belowZero(n)
{	
	console.log('belowZero Function called with:', n);
	if (n <= 0.00){
		console.log('Below 0.00');
		return '<0.00';
	}else{
		console.log('not Below 0.00');
		return n;
	}
}

function updateGlobal()
{
	updateActivePool();
}

/*
*
*
*
*
*------------------ WEB3 WRAPPERS -------------------------------
*
*
*
*
*/

const getTotalBalances = async () => {
  console.log('getBalances');
  const provider = getInfuraProvider();

  // YFKA_XAMP
  const xampContract = new provider.eth.Contract(
    UNISWAP_BASE_LP_ABI,
    PAIRS.YFKA_XAMP
  );
  const xampContractBalance = await xampContract.methods.totalSupply().call();
  console.log('xampTotalBalance: ', xampContractBalance);

  const xampContractDecimals = await xampContract.methods.decimals().call();
  console.log('xampContractDecimals: ', xampContractDecimals);

  // YFKA_TOB
  const tobContract = new provider.eth.Contract(
    UNISWAP_BASE_LP_ABI,
    PAIRS.YFKA_TOB
  );
  const tobContractBalance = await tobContract.methods.totalSupply().call();
  console.log('tobTotalBalance: ', tobContractBalance);

  const tobContractDecimals = await tobContract.methods.decimals().call();
  console.log('tobContractDecimals: ', tobContractDecimals);

  // YFKA_BOA
  const boaContract = new provider.eth.Contract(
    UNISWAP_BASE_LP_ABI,
    PAIRS.YFKA_BOA
  );
  const boaContractBalance = await boaContract.methods.totalSupply().call();
  console.log('boaTotalBalance: ', boaContractBalance);

  const boaContractDecimals = await boaContract.methods.decimals().call();
  console.log('boaContractDecimals: ', boaContractDecimals);

  // YFKA_ETH
  const ethContract = new provider.eth.Contract(
    UNISWAP_BASE_LP_ABI,
    PAIRS.YFKA_ETH
  );
  const ethContractBalance = await ethContract.methods.totalSupply().call();
  console.log('ethTotalBalance: ', ethContractBalance);

  const ethContractDecimals = await ethContract.methods.decimals().call();
  console.log('ethContractDecimals: ', ethContractDecimals);

  return {
    XAMP: xampContractBalance
      ? xampContractBalance / 10 ** xampContractDecimals
      : 0,
    TOB: tobContract ? tobContractBalance / 10 ** tobContractDecimals : 0,
    BOA: boaContractBalance
      ? boaContractBalance / 10 ** boaContractDecimals
      : 0,
    ETH: ethContractBalance
      ? ethContractBalance / 10 ** ethContractDecimals
      : 0,
  };
};

const getPoolBalances = async () => {
  console.log('getBalances');
  const account = await getAccount();
  if (!account) return null;

  const provider = getInfuraProvider();

  // YFKA_XAMP
  const xampContract = new provider.eth.Contract(
    STANDARD_ERC20_ABI,
    PAIRS.YFKA_XAMP
  );
  const xampContractBalance = await xampContract.methods
    .balanceOf(account)
    .call();
  console.log('xampContractBalance: ', xampContractBalance);

  const xampContractDecimals = await xampContract.methods.decimals().call();
  console.log('xampContractDecimals: ', xampContractDecimals);

  // YFKA_TOB
  const tobContract = new provider.eth.Contract(
    STANDARD_ERC20_ABI,
    PAIRS.YFKA_TOB
  );
  const tobContractBalance = await tobContract.methods
    .balanceOf(account)
    .call();
  console.log('tobContractBalance: ', tobContractBalance);

  const tobContractDecimals = await tobContract.methods.decimals().call();
  console.log('tobContractDecimals: ', tobContractDecimals);

  // YFKA_BOA
  const boaContract = new provider.eth.Contract(
    STANDARD_ERC20_ABI,
    PAIRS.YFKA_BOA
  );
  const boaContractBalance = await boaContract.methods
    .balanceOf(account)
    .call();
  console.log('boaContractBalance: ', boaContractBalance);

  const boaContractDecimals = await boaContract.methods.decimals().call();
  console.log('boaContractDecimals: ', boaContractDecimals);

  // YFKA_ETH
  const ethContract = new provider.eth.Contract(
    STANDARD_ERC20_ABI,
    PAIRS.YFKA_ETH
  );
  const ethContractBalance = await ethContract.methods
    .balanceOf(account)
    .call();
  console.log('ethContractBalance: ', ethContractBalance);

  const ethContractDecimals = await ethContract.methods.decimals().call();
  console.log('ethContractDecimals: ', ethContractDecimals);

  // TODO TOB showing NaN so figure that out
  const amounts = {
    XAMP: xampContractBalance
      ? xampContractBalance / 10 ** xampContractDecimals
      : 0,
    TOB: tobContract ? tobContractBalance / 10 ** tobContractDecimals : 0,
    BOA: boaContractBalance
      ? boaContractBalance / 10 ** boaContractDecimals
      : 0,
    ETH: ethContractBalance
      ? ethContractBalance / 10 ** ethContractDecimals
      : 0,
  };

  return {
    XAMP: _.toNumber(amounts.XAMP),
    TOB: _.toNumber(amounts.TOB),
    BOA: _.toNumber(amounts.BOA),
    ETH: _.toNumber(amounts.ETH),
  };
};


const getPersonalEmissions= async () => {
	const account = await getAccount();
	const ashContract = yfkaControllerContract();
	const bonusPoolIdx = await ashContract.methods.getActivePool().call();

	// XAMP Personal emission rate
	const xampPersonalEmissionRate = await ashContract.methods
	.getPersonalEmissionRate(YFKA_POOL_INDEXES.XAMP, account)
	.call();

	let emissionRateToReadableXAMP = twoDecimals(
	(xampPersonalEmissionRate / 10 ** 18 / 2) * 100
	);
	if (emissionRateToReadableXAMP <= 0.00) {
		emissionRateToReadableXAMP = 0;
	}
	if (bonusPoolIdx == YFKA_POOL_INDEXES.XAMP) {
		emissionRateToReadableXAMP = emissionRateToReadableXAMP * 2;
	}
	// TOB Personal emission rate
	const tobPersonalEmissionRate = await ashContract.methods
	.getPersonalEmissionRate(YFKA_POOL_INDEXES.TOB, account)
	.call();
	console.log('tobPersonalEmissionRate: ', tobPersonalEmissionRate);
	let emissionRateToReadableTob = twoDecimals(
	(tobPersonalEmissionRate / 10 ** 18 / 2) * 100
	);
	console.log('emissionRateToReadableTob: ', emissionRateToReadableTob);
		if (emissionRateToReadableTob <= 0.00) {
	emissionRateToReadableTob = 0;
	}
	console.log('bonusPoolIdx: ', typeof bonusPoolIdx);
	console.log('YFKA_POOL_INDEXES.TOB: ', YFKA_POOL_INDEXES.TOB);
	if (bonusPoolIdx == YFKA_POOL_INDEXES.TOB) {
		emissionRateToReadableTob = emissionRateToReadableTob * 2;
	}
	// BOA Personal emission rate
	const boaPersonalEmissionRate = await ashContract.methods
	.getPersonalEmissionRate(YFKA_POOL_INDEXES.BOA, account)
	.call();
	let emissionRateToReadableBoa = twoDecimals(
	(boaPersonalEmissionRate / 10 ** 18 / 2) * 100
	);
	if (emissionRateToReadableBoa <= 0.00) {
		emissionRateToReadableBoa = 0;
	}
	if (bonusPoolIdx == YFKA_POOL_INDEXES.BOA) {
		emissionRateToReadableBoa = emissionRateToReadableBoa * 2;
	}


	// ETH Personal emission rate
	const ethPersonalEmissionRate = await ashContract.methods
	.getPersonalEmissionRate(YFKA_POOL_INDEXES.ETH, account)
	.call();
	let emissionRateToReadableEth = twoDecimals(
	(ethPersonalEmissionRate / 10 ** 18 / 2) * 100
	);
	if (emissionRateToReadableEth <= 0.00) {
		emissionRateToReadableEth = 0;
	}
	if (bonusPoolIdx == YFKA_POOL_INDEXES.ETH) {
		emissionRateToReadableEth = emissionRateToReadableEth * 2;
	}


	return {
		XAMP: _.toNumber(emissionRateToReadableXAMP),
		TOB: _.toNumber(emissionRateToReadableTob),
		BOA: _.toNumber(emissionRateToReadableBoa),
		ETH: _.toNumber(emissionRateToReadableEth),
	};



}





/*
*
*
*
*
*------------------ UI HELPERS -------------------------------
*
*
*
*
*/
const updateUserStats = async () => {
  const account = await getAccount();

  const ashContract = yfkaControllerContract();

  //current Rewards
  const xampReward = await ashContract.methods
    .getCurrentReward(YFKA_POOL_INDEXES.XAMP)
    .call({
      from: account,
    });
  console.log('xampReward: ', xampReward);
  $('#reward-XAMP').html(fourDecimals(_.toInteger(xampReward) / 10 ** 18));

  const tobReward = await ashContract.methods
    .getCurrentReward(YFKA_POOL_INDEXES.TOB)
    .call({
      from: account,
    });
  console.log('tobReward: ', tobReward);
	$('#reward-TOB').html(fourDecimals(_.toInteger(tobReward) / 10 ** 18));

  const boaReward = await ashContract.methods
    .getCurrentReward(YFKA_POOL_INDEXES.BOA)
    .call({
      from: account,
    });
  console.log('boaReward: ', boaReward);
	$('#reward-BOA').html(fourDecimals(_.toInteger(boaReward) / 10 ** 18));

  const ethReward = await ashContract.methods
    .getCurrentReward(YFKA_POOL_INDEXES.ETH)
    .call({
      from: account,
    });
  console.log('ethReward: ', ethReward);
	$('#reward-ETH').html(_.toInteger(ethReward) / 10 ** 18);
	$('#reward-ETH').html(fourDecimals(_.toInteger(ethReward) / 10 ** 18));

	const personalemission = await getPersonalEmissions();
	$('#personal-emission-XAMP').html(`${personalemission.XAMP}`);
	$('#personal-emission-TOB').html(`${personalemission.TOB}`);
	$('#personal-emission-BOA').html(`${personalemission.BOA}`);
	$('#personal-emission-ETH').html(`${personalemission.ETH}`);

  // current LP Tokens
  // XAMP
  const xampLpBalance = await ashContract.methods
    .stakes(YFKA_POOL_INDEXES.XAMP, account)
    .call();
	const XAMPbalance = belowZero(fourDecimals(xampLpBalance / 10 ** 18));
	console.log('Staked XAMP: ', XAMPbalance);
	$('#balance-LP-XAMP').html(XAMPbalance);

  // TOB
  const tobLpBalance = await ashContract.methods
    .stakes(YFKA_POOL_INDEXES.TOB, account)
    .call();
	const TOBbalance = belowZero(fourDecimals(tobLpBalance / 10 ** 18));
	console.log('Staked TOB: ', TOBbalance);
	$('#balance-LP-TOB').html(TOBbalance);

  // BOA
  const boaLpBalance = await ashContract.methods
    .stakes(YFKA_POOL_INDEXES.BOA, account)
    .call();
	const BOAbalance = belowZero(fourDecimals(boaLpBalance / 10 ** 18));
	console.log('Staked BOA: ', BOAbalance);
	$('#balance-LP-BOA').html(BOAbalance);

  // ETH
	const ethLpBalance = await ashContract.methods
    .stakes(YFKA_POOL_INDEXES.ETH, account)
    .call();
	const ETHbalance = belowZero(fourDecimals(ethLpBalance / 10 ** 18));
	console.log('Staked ETH: ', ETHbalance);
	$('#balance-LP-ETH').html(ETHbalance);

	//% of pool
	const TotalBalances = await getTotalBalances();

	//XAMP
	const TotalXAMPbalance = TotalBalances.XAMP;
	const percentXAMP = (fourDecimals(xampLpBalance / 10 ** 18) / TotalXAMPbalance) * 100;
	console.log('XAMP Balance = ', XAMPbalance);
	console.log('XAMP Total =', TotalXAMPbalance);
	var readableTotalXAMP = twoDecimals(TotalXAMPbalance);
	var readablePercentage = belowZero(fourDecimals(percentXAMP));
	console.log('XAMP % = ', readablePercentage);
	$('#pool-Share-XAMP').html(`${readablePercentage}`);
	$('#total-LP-XAMP').html(`${readableTotalXAMP}`);

	//TOB
	const TotalTOBbalance = TotalBalances.TOB;
	const percentTOB = (fourDecimals(tobLpBalance / 10 ** 18) / TotalTOBbalance) * 100;
	console.log('TOB Balance = ', TOBbalance);
	console.log('TOB Total =', TotalTOBbalance);
	var readableTotalTOB = twoDecimals(TotalTOBbalance);
	var readablePercentTOB = belowZero(fourDecimals(percentTOB));
	$('#pool-Share-TOB').html(`${readablePercentTOB}`);
	$('#total-LP-TOB').html(`${readableTotalTOB}`);

	//BOA
	const TotalBOAbalance = TotalBalances.BOA;
	const percentBOA = (fourDecimals(boaLpBalance / 10 ** 18) / TotalBOAbalance) * 100;
	var readableTotalBOA = twoDecimals(TotalBOAbalance);
	var readablePercentageBOA = belowZero(fourDecimals(percentBOA));
	console.log('BOA % = ', readablePercentage);
	$('#pool-Share-BOA').html(`${readablePercentageBOA}`);
	$('#total-LP-BOA').html(`${readableTotalBOA}`);

	//ETH
	const TotalETHbalance = TotalBalances.ETH;
	const percentETH = (fourDecimals(ethLpBalance / 10 ** 18) / TotalETHbalance) * 100;
	var readableTotalETH = twoDecimals(TotalETHbalance);
	var readablePercentageETH = belowZero(fourDecimals(percentETH));
	$('#pool-Share-ETH').html(`${readablePercentageETH}`);
	$('#total-LP-ETH').html(`${readableTotalETH}`);
};

const updateActivePool = async () => {
  console.log('updateActivePool');
  const _globalEmissionRate = await getGlobalEmissionRate();
  const globalEmissionRate = Math.ceil(_globalEmissionRate);

  const bonusEmissionRate = Math.round(globalEmissionRate * 2);
  $('#global-rate').html(`${globalEmissionRate}%`);
  $('#bonus-global-rate').html(`${bonusEmissionRate}%`);

  $('#eth-apy').html(`${globalEmissionRate/2}`);
  $('#xamp-apy').html(`${globalEmissionRate}`);
  $('#tob-apy').html(`${globalEmissionRate}`);
  $('#boa-apy').html(`${globalEmissionRate}`);
  $('#coin-emission').html(`${globalEmissionRate}`);

  const bonusAddress = await getBonusPool();
  switch (bonusAddress) {
    case PAIRS.YFKA_XAMP:
      $('#bonus-global-token').html('XAMP');
      $('#xamp-apy').html(`${bonusEmissionRate}`);
      document.getElementById('pool-XAMP').setAttribute('id', 'bonusPool');
      break;
    case PAIRS.YFKA_TOB:
      $('#bonus-global-token').html('TOB');
      $('#tob-apy').html(`${bonusEmissionRate}`);
      document.getElementById('pool-TOB').setAttribute('id', 'bonusPool');
      break;
    case PAIRS.YFKA_BOA:
      $('#bonus-global-token').html('BOA');
      $('#boa-apy').html(`${bonusEmissionRate}`);
      document.getElementById('pool-BOA').setAttribute('id', 'bonusPool');
      break;
    case PAIRS.YFKA_ETH:
    default:
      // Dont do shit
      break;
  }
};

function waitForApproval(tx, ashContract, payload, amount) {
  web3.eth.getTransaction(tx, function (err, response) {
    console.log('response: ', response);
    console.log('err: ', err);
    if (!response || _.isNil(response.blockNumber) || err) {
      setTimeout(() => {
        waitForApproval(tx, ashContract, payload, amount);
      }, 5000);
      return;
    }

    setTimeout(() => {
      console.log(response);
    }, 5000);

    console.log('Amount: ', amount);
    console.log('Payload: ', payload);
    console.log('Calling: Stake ');
    ashContract.stake(payload, amount, function (err, res) {
      document.getElementById('stakeReceipt').innerHTML =
        '<a target="_blank" rel="noreferrer noopener" href="https://etherscan.io/tx/' +
        res +
        '">Click here to view your transaction.</a>';
      document.getElementById('stakeReceipt').style.opacity = '1';
      // updatePoolBalances();
    });
  });
}

const setStakeBalance = async (event)=> {
  console.log('change radio stake');
  const balances = await getPoolBalances();
  console.log('balances: ', balances);
  // const balance = twoDecimals(balances[event.currentTarget.value]);
  const balance = balances[event.currentTarget.value];
  console.log('balance: ', balance);
  // TODO
  $('#stake-input').val(fourDecimals(balance));
  // $('#stake-input').attr('placeholder', `${balance}`);
  $('#stake-balance').html(fourDecimals(balance));
  return balance || '';
};

const setRedeemBalance = async () => {
  console.log('change radio redeem');
  const value = $('[name=redeem][type=radio]:checked').val();
  const account = await getAccount();
  const globalEmissionRate = await getGlobalEmissionRate();
  $('#redeem-coin-emission').html(`${globalEmissionRate}`);

  const idx = getIndexBySymbol(value);
  console.log('Selected Coin: ', value, '; idx: ', idx);

  const ashContract = yfkaControllerContract();
  const _currentReward = await ashContract.methods.getCurrentReward(idx).call({
    from: account,
  });
  const currentReward = _.toNumber(_currentReward);

  console.log('Number Redeemed: ' + currentReward / 10 ** 18);
	const balance = fourDecimals(currentReward / 10 ** 18);
  $('#redeem-amount').html(balance);
  $('#redeem-amount-button').html(balance);

  const _personalEmission = await ashContract.methods
    .getPersonalEmissionRate(idx, account)
    .call();
  const personalEmission = _.toNumber(_personalEmission);
  console.log('Personal Emission: ' + personalEmission / 10 ** 18);
  var emissionRateToReadable = twoDecimals(personalEmission);
  if (emissionRateToReadable < 0) {
    emissionRateToReadable = 0;
  }
  console.log('emissionRateToReadable: ', emissionRateToReadable);
  $('#personal-emission').html(emissionRateToReadable);
};

const setUnstakeBalance = async () => {
	const value = $('[name=unstake][type=radio]:checked').val();
	const account = await getAccount();
	const idx = getIndexBySymbol(value);
	const globalEmissionRate = await getGlobalEmissionRate();
	$('#unstake-coin-emission').html(`${globalEmissionRate}`);
/*	
	const personalEmission = await getPersonalEmissions();
	var coinEmission;
	
	switch (value){
		case 'XAMP':
			coinEmission = personalEmission.XAMP;
		break;
		
		case 'TOB':
			coinEmission = personalEmission.TOB;
		break;
		
		case 'BOA':
			coinEmission = personalEmission.BOA;
		break;
		
		case 'ETH':
			coinEmission = personalEmission.ETH;
		break;
		
		default:
		break;
	}
	
	
	$('#unstake-coin-emission').html(`${coinEmission}`);
  */
  var ashContract = web3.eth.contract(YFKA_CONTROLLER_ABI);
  ashContract = ashContract.at(checksumAddress(YFKA_CONTROLLER_ADDRESS));
// const res = await ashContract.stakes(idx, account).call();
  await ashContract.stakes(idx, account, function (err, res) {
		console.log(res);
		console.log(_.toNumber(res));
		console.log('_.toInteger(res)');
		console.log(_.toInteger(res));

		const balance = _.toNumber(res) / 10 ** 18;
		const reablebalance = fourDecimals(balance);
    console.log('Staked XAMP: ', balance);
    $('#unstake-input').val(`${balance}`);
    $('#unstake-input').attr('placeholder', `${balance}`);
    $('#unstake-balance').html(`${reablebalance}`);
  });
};


/*
*
*
*
*
*------------------ FORM ACTIONS -------------------------------
*
*
*
*
*/


$('input[type=radio][name=stake]').change(setStakeBalance);

$('input[type=radio][name=redeem]').change(setRedeemBalance);

$('input[type=radio][name=unstake]').change(setUnstakeBalance);

$('#stakeBTN').click(async () => {
  var ashContract = web3.eth.contract(YFKA_CONTROLLER_ABI);
  ashContract = ashContract.at(checksumAddress(YFKA_CONTROLLER_ADDRESS));
  let uniContract = web3.eth.contract(UNISWAP_BASE_LP_ABI);

  console.log('stake value: ', 'stake btn click');
  const keys = Object.keys(PAIRS);
  console.log('keys: ', keys);
  const value = $('[name=stake][type=radio]:checked').val();
  var payload;
  //PULL uniInstance info from radio button.
  switch (value) {
    case 'XAMP':
      payload = 0;
      uniInstance = uniContract.at(checksumAddress(PAIRS.YFKA_XAMP));
      break;
    case 'TOB':
      payload = 1;
      uniInstance = uniContract.at(checksumAddress(PAIRS.YFKA_TOB));
      break;
    case 'BOA':
      payload = 2;
      uniInstance = uniContract.at(checksumAddress(PAIRS.YFKA_BOA));
      break;
    case 'ETH':
      payload = 3;
      uniInstance = uniContract.at(checksumAddress(PAIRS.YFKA_ETH));
      break;
    default:
      break;
  }

  console.log('value: ', value);
  const indexOfValue = keys.map((key) => {
    return key.indexOf(value) >= 0;
  });
  const idx = indexOfValue.indexOf(true);
  console.log('idx: ', idx);
  const pool = POOLS[idx];
  console.log('pool: ', pool);
  var amount = _.toNumber($('#stake-input').val());
  console.log('amount ', amount);

  if (amount === 0 || amount === '0') return;
  if (!window.ethereum) return;

  amount = amount * 10 ** 18;
  uniInstance.approve(checksumAddress(YFKA_CONTROLLER_ADDRESS), amount, function (err, res) {
    console.log('APPROVE TX: https://etherscan.io/tx/' + res);
    document.getElementById('stakeReceipt').innerHTML = 'Awaiting approval...';
    document.getElementById('stakeReceipt').style.opacity = '1';
    waitForApproval(res, ashContract, payload, amount);
  });
});

$('#redeemBTN').click(async () => {
  var ashContract = web3.eth.contract(YFKA_CONTROLLER_ABI);
  ashContract = ashContract.at(checksumAddress(YFKA_CONTROLLER_ADDRESS));

  console.log('Redeem btn click');
  const value = $('[name=redeem][type=radio]:checked').val();
  const idx = getIndexBySymbol(value);

  ashContract.redeem(idx, function (err, res) {
		$('#redeemReceipt').html('<a target="_blank" rel="noreferrer noopener" href="https://etherscan.io/tx/' + res + '">Withdraw Receipt</a>');
		const redeemReceipt = document.getElementById('redeemReceipt');
		if (redeemReceipt && redeemReceipt.style) {
			document.getElementById('redeemReceipt').style.opacity = '1';
		}
  });
});

$('#unstakeBTN').click(async () => {
  var ashContract = web3.eth.contract(YFKA_CONTROLLER_ABI);
  ashContract = ashContract.at(checksumAddress(YFKA_CONTROLLER_ADDRESS));

  console.log('unstake btn click');
  const value = $('[name=unstake][type=radio]:checked').val();
  const idx = getIndexBySymbol(value);

  var amount = $('#unstake-input').val();
  amount = _.toNumber(amount) * 10 ** 18;
  ashContract.unstake(idx, amount, function (err, res) {
		console.log('https://etherscan.io/tx/' + res);
		$('#unstakeReceipt').html('<a target="_blank" rel="noreferrer noopener" href="https://etherscan.io/tx/' + res + '">Unstake Receipt</a>');

		const unstakeReceipt = document.getElementById('unstakeReceipt');
		if (unstakeReceipt && unstakeReceipt.style) {
			document.getElementById('unstakeReceipt').style.opacity = '1';
		}
  });
});


$('#connectToMetamask').click(async () => {
	window.web3.currentProvider.enable();
});


/*
*
*
*
*
*------------------ INITIAL LOAD -------------------------------
*
*
*
*
*/



window.addEventListener('load', async (event,error) => {
	
	if (isConnected() == false){
		console.log('METAMASK NOT CONNECTED!');
		//updateGlobal();
		$('#isConnected').html('Wallet NOT Connected');
		document.getElementById('connectToMetamask').style.background = "#cd2012";
	}else
	{
		/*
		console.log('METAMASK NOT CONNECTED!');
		//updatePoolBalances();
		$('#isConnected').html('wallet connected');
		document.getElementById('connectToMetamask').style.background = "#000";
		await updateActivePool();
		await updateUserStats();
	await setStakeBalance({
		currentTarget: {
			value: 'XAMP',
		}
	});
	await setRedeemBalance({
		currentTarget: {
			value: 'XAMP',
		}
	});
	await setUnstakeBalance({
			currentTarget: {
			value: 'XAMP',
		}
	});
	*/
	}
	
	
	if (error.message.includes("User denied transaction signature")) {
    console.log("user Denied connection to metamask");
  }
	
});
