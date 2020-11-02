/*
*
*
*
*
*------------------ CONSTANTS -------------------------------
*
*
*NOTE TO SELF web3.eth.getBalance FOR ETH BALANCE FROM WALLET.
*
*/
const TOKENS = {
  YFKA: '0x4086692d53262b2be0b13909d804f0491ff6ec3e',
  XAMP: '0xf911a7ec46a2c6fa49193212fe4a2a9b95851c27',
  BOA: '0xf9c36c7ad7fa0f0862589c919830268d1a2581a1',
  TOB: '0x7777770f8a6632ff043c8833310e245eba9209e6',
  ETH: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
};

const DISPLAY_CONSOLE = true;
const DISPLAY_ERRORS = true;

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

function errorHandling(error, functionCall){
	const errorCode = error.code;
	const errorMessage = error.message;
	if (DISPLAY_ERRORS) {
		
		const Message = 'ERROR (' + functionCall + '): ' + errorMessage;
		if (DISPLAY_CONSOLE) console.log(Message);
		if (DISPLAY_CONSOLE) console.log(error);
		if (errorCode == 4001 || errorCode == -32002){
			$('#isConnected').html('Wallet NOT Connected');
		}
	}
}
/*
const stakeMinimumPrice = async () => {
	const MIN_STAKE_AMOUNT = 0.2;
	const prices = await getPricesETH();
	const yfkaPrices = prices.YFKA;
	const yfkaEth = yfkaPrices.eth;
	const yfkaMinInEth = yfkaEth * MIN_STAKE_AMOUNT;
	//XAMP
	const xampMin = yfkaMinInEth / prices.XAMP.eth;
	//TOB
	const tobMin = yfkaMinInEth / prices.TOB.eth;
	//BOA
	const boaMin = yfkaMinInEth / prices.BOA.eth;
	
	return {
    YFKA: tokenPrices[TOKENS.YFKA],
    XAMP: tokenPrices[TOKENS.XAMP],
    BOA: tokenPrices[TOKENS.BOA],
    TOB: tokenPrices[TOKENS.TOB],
  }
}
*/
const Totals = async () => {
	const MIN_STAKE_AMOUNT = 0.2;

	const prices = await getPricesETH();

	const yfkaPrices = prices.YFKA;
	const yfkaEth = yfkaPrices.eth;
	const yfkaMinInEth = yfkaEth * MIN_STAKE_AMOUNT;

	//XAMP
	const xampMin = yfkaPrices.eth / prices.XAMP.eth;
	//TOB
	const tobMin = yfkaMinInEth / prices.TOB.eth;
	//BOA
	const boaMin = yfkaMinInEth / prices.BOA.eth;
	
	return {
    YFKA: tokenPrices[TOKENS.YFKA],
    XAMP: tokenPrices[TOKENS.XAMP],
    BOA: tokenPrices[TOKENS.BOA],
    TOB: tokenPrices[TOKENS.TOB],
  }

}

const getPricesYFKA = async () => {
  const tokenKeys = Object.keys(TOKENS);

  const response = await fetch(`https://api.coingecko.com/api/v3/simple/token_price/ethereum?contract_addresses=${tokenKeys.map(k => TOKENS[k]).join(',')}&vs_currencies=eth`);
  const tokenPrices = await response.json();

  // ETH
  return {
    XAMP: tokenPrices[TOKENS.XAMP],
    BOA: tokenPrices[TOKENS.BOA],
    TOB: tokenPrices[TOKENS.TOB],
  }
}

// Get BTS token prices in USD and ETH
const getPrices = async () => {
  const tokenKeys = Object.keys(TOKENS);

  const response = await fetch(`https://api.coingecko.com/api/v3/simple/token_price/ethereum?contract_addresses=${tokenKeys.map(k => TOKENS[k]).join(',')}&vs_currencies=usd,eth`);
  const tokenPrices = await response.json();

  return {
    YFKA: tokenPrices[TOKENS.YFKA],
    XAMP: tokenPrices[TOKENS.XAMP],
    BOA: tokenPrices[TOKENS.BOA],
    TOB: tokenPrices[TOKENS.TOB],
	ETH: tokenPrices[TOKENS.ETH],
  }
}

//GETS TOTAL LP PER POOL
const getTotalLP = async () =>{
	const provider = getInfuraProvider();
	
	// YFKA_XAMP
	const xampContract = new provider.eth.Contract(
	UNISWAP_BASE_LP_ABI,
	PAIRS.YFKA_XAMP
	);
	const tobContract = new provider.eth.Contract(
	UNISWAP_BASE_LP_ABI,
	PAIRS.YFKA_TOB
	);
	const boaContract = new provider.eth.Contract(
	UNISWAP_BASE_LP_ABI,
	PAIRS.YFKA_BOA
	);
	const ethContract = new provider.eth.Contract(
	UNISWAP_BASE_LP_ABI,
	PAIRS.YFKA_ETH

	);
	
	//GET TOTAL LP IN POOLS
	const totalLPXAMP = await xampContract.methods.totalSupply().call();
	const totalLPTOB = await tobContract.methods.totalSupply().call();
	const totalLPBOA = await boaContract.methods.totalSupply().call();
	const totalLPETH = await ethContract.methods.totalSupply().call();

	return{
		XAMP:totalLPXAMP,
		TOB:totalLPTOB,
		BOA:totalLPBOA,
		ETH:totalLPETH,
		fXAMP:totalLPXAMP/(10**18),
		fTOB:totalLPTOB/(10**18),
		fBOA:totalLPBOA/(10**18),
		fETH:totalLPETH/(10**18),
	}
}

// get Users STAKED LP
const getStakes = async () => {
	//Provides Base Amount in Uint256 and Formatted Amount for Easy printing
	const account = await getAccount();
	const ashContract = yfkaControllerContract();
	
	const userOwnedLPXAMP = await ashContract.methods
		.stakes(YFKA_POOL_INDEXES.XAMP, account)
		.call();
	const userOwnedLPTOB = await ashContract.methods
		.stakes(YFKA_POOL_INDEXES.TOB, account)
		.call();
	const userOwnedLPBOA = await ashContract.methods
		.stakes(YFKA_POOL_INDEXES.BOA, account)
		.call();
	const userOwnedLPETH = await ashContract.methods
		.stakes(YFKA_POOL_INDEXES.ETH, account)
		.call();	
  return {
    XAMP: userOwnedLPXAMP,
    BOA: userOwnedLPBOA,
    TOB: userOwnedLPTOB,
	ETH: userOwnedLPETH,
	fXAMP: userOwnedLPXAMP/(10**18),
    fBOA: userOwnedLPBOA/(10**18),
    fTOB: userOwnedLPTOB/(10**18),
	fETH: userOwnedLPETH/(10**18),
  }
}

// get Users Rewards (YFKA)
const getRewards = async () => {
	const account = await getAccount();
	const ashContract = yfkaControllerContract();
	
	const xampReward = await ashContract.methods
		.getCurrentReward(YFKA_POOL_INDEXES.XAMP)
		.call({
			from: account,
		});
	const tobReward = await ashContract.methods
		.getCurrentReward(YFKA_POOL_INDEXES.TOB)
		.call({
			from: account,
		});
	const boaReward = await ashContract.methods
		.getCurrentReward(YFKA_POOL_INDEXES.BOA)
		.call({
			from: account,
		});
	const ethReward = await ashContract.methods
		.getCurrentReward(YFKA_POOL_INDEXES.ETH)
		.call({
			from: account,
		});
	const XampRewardFormatted = xampReward/(10**18);
	const TobRewardFormatted = tobReward/(10**18);
	const BoaRewardFormatted = boaReward/(10**18);
	const ETHRewardFormatted = ethReward/(10**18);


  return {
    XAMP: xampReward,
    BOA: boaReward,
    TOB: tobReward,
	ETH: ethReward,
	fXAMP: xampReward/(10**18),
    fBOA: boaReward/(10**18),
    fTOB: tobReward/(10**18),
	fETH: ethReward/(10**18),
  }
}

//get USers Wallet Balances
const getWalletBTSCoins = async () => {
	const provider = getInfuraProvider();
	const account = await getAccount();
	
	
	const xampContract = new provider.eth.Contract(
	STANDARD_ERC20_ABI,
	TOKENS.XAMP
	);
	
	const tobContract = new provider.eth.Contract(
	STANDARD_ERC20_ABI,
	TOKENS.TOB
	);
	
	const boaContract = new provider.eth.Contract(
	STANDARD_ERC20_ABI,
	TOKENS.BOA
	);
	

	const yfkaContract = new provider.eth.Contract(
	STANDARD_ERC20_ABI,
	TOKENS.YFKA
	);
	if (DISPLAY_CONSOLE) console.log("ETH ADD : ",account );
	const Etherbalance = await provider.eth.getBalance(account, function(error, wei) {
	  if (!error) {
		
		 return wei;
	  }
    });
	if (DISPLAY_CONSOLE) console.log("ETH WALLET BALANCE : ",Etherbalance/(10**18) );
	
	/* BELOW DOES NOT WORK
	const ethContract = new provider.eth.Contract(
	STANDARD_ERC20_ABI,
	TOKENS.ETH
	);
	*/
	
	const totalBALANCEXAMP = await xampContract.methods.balanceOf(account).call();
	const totalBALANCETOB = await tobContract.methods.balanceOf(account).call();
	const totalBALANCEBOA = await boaContract.methods.balanceOf(account).call();
	const totalBALANCEETH = Etherbalance;
	const totalBALANCEYFKA = await yfkaContract.methods.balanceOf(account).call();
	
	console.log("XAMP BALANCE WALLET =", totalBALANCEXAMP/(10**18));
	console.log("TOB BALANCE WALLET =", totalBALANCETOB/(10**18));
	console.log("BOA BALANCE WALLET =", totalBALANCEBOA/(10**18));
	console.log("ETH BALANCE WALLET =", totalBALANCEETH/(10**18));
	console.log("YFKA BALANCE WALLET =", totalBALANCEYFKA/(10**18));
	
	
	return{
	XAMP: totalBALANCEXAMP,
    BOA: totalBALANCETOB,
    TOB: totalBALANCEBOA,
	ETH: totalBALANCEETH,
	YFKA: totalBALANCEYFKA,
	fXAMP: totalBALANCEXAMP/(10**18),
    fBOA: totalBALANCEBOA/(10**18),
    fTOB: totalBALANCETOB/(10**18),
	fETH: totalBALANCEETH/(10**18),
	fYFKA: totalBALANCEYFKA/(10**18),
	}
	
}

const getLPconversions = async () =>{
	const reserves = await getReserves();
	const totalYFKAStakes = await totalYFKAStaked();
	const LP = await getTotalLP();
	
	
	//GET XAMP POOLED
	const XAMPReserve = reserves.XAMP[1]/(10**9);
	const TOBReserve = reserves.TOB[1]/(10**18);
	const BOAReserve = reserves.BOA[1]/(10**18);
	const ETHReserve = reserves.ETH[1]/(10**18);
	
	const YFKAinXAMP = reserves.XAMP[0]
	const YFKAinTOB = reserves.TOB[0]
	const YFKAinBOA = reserves.BOA[0]
	const YFKAinETH = reserves.ETH[0]
	
	
	//WORK OUT BTS to LP 
	//XAMP POOL
	const XAMPtoLP = (XAMPReserve/LP.XAMP) *(10**18);
	const YFKAtoLPX = ((YFKAinXAMP/(10**18)) /LP.XAMP)*(10**18);
	console.log("YFKA TO LP (XAMP):", YFKAtoLPX);

	//TOB POOL
	const TOBtoLP = (TOBReserve/LP.TOB) *(10**18);
	const YFKAtoLPT = ((YFKAinTOB/(10**18)) /LP.TOB)*(10**18);
	console.log("YFKA TO LP (TOB):", YFKAtoLPT);
	//BOA POOL
	const BOAtoLP = (BOAReserve/LP.BOA) *(10**18);
	const YFKAtoLPB = ((YFKAinBOA/(10**18)) /LP.BOA)*(10**18);
	console.log("YFKA TO LP (ETH):", YFKAtoLPB);
	//ETH POOL
	const ETHtoLP = (ETHReserve/LP.ETH) *(10**18);
	const YFKAtoLPE = ((YFKAinETH/(10**18)) /LP.ETH)*(10**18);
	console.log("YFKA TO LP (ETH):", YFKAtoLPE);

	return{
		YFKAtoLPXAMP: YFKAtoLPX,
		YFKAtoLPTOB: YFKAtoLPT,
		YFKAtoLPBOA: YFKAtoLPB,
		YFKAtoLPETH: YFKAtoLPE, 
		XAMPtoLP: XAMPtoLP,
		TOBtoLP: TOBtoLP,
		BOAtoLP: BOAtoLP, 
		ETHtoLP: ETHtoLP,
	}
	
}

const returnLP = async (coin,amount) =>{
	getLPconv = await getLPconversions();
		var LP = 0;
	switch (coin){
		case "XAMP":
			LP = amount/getLPconv.XAMPtoLP;
			return LP;
		break;
		case "TOB":
			LP = amount/getLPconv.TOBtoLP;
			return LP;
		break;
		case "BOA":
			LP = amount/getLPconv.BOAtoLP;
			return LP;
		break;
		case "ETH":
			LP = amount/getLPconv.ETHtoLP;
			return LP;
		break;
		default:
			return LP;
		break;
		
	}
}

// Total Wallet BTS Helper.
const getBTSTotals = async () => {
	const rewards = await getRewards();
	const yfkaRewardTotal = rewards.fXAMP + rewards.fTOB + rewards.fBOA + rewards.fETH;
	const WalletBalances = await getWalletBTSCoins();
	const UsersLP = await getStakes();
	const BTStoLP = await getLPconversions();

	const XAMPfromLP = BTStoLP.XAMPtoLP*(UsersLP.XAMP/(10**18));	
	const TOBfromLP = BTStoLP.TOBtoLP*(UsersLP.TOB/(10**18));
	const BOAfromLP = BTStoLP.BOAtoLP*(UsersLP.BOA/(10**18));
	const ETHfromLP = BTStoLP.ETHtoLP*(UsersLP.ETH/(10**18));
	const YFKAfromLP = (BTStoLP.YFKAtoLPXAMP*(UsersLP.XAMP/(10**18))) +
						(BTStoLP.YFKAtoLPTOB *(UsersLP.TOB/(10**18)))+
						(BTStoLP.YFKAtoLPBOA*(UsersLP.BOA/(10**18))) +
						(BTStoLP.YFKAtoLPETH*(UsersLP.ETH/(10**18))) ;
						
	const XampTOTAL = WalletBalances.fXAMP + XAMPfromLP;
	const TobTOTAL = WalletBalances.fTOB + TOBfromLP;
	const BoaTOTAL = WalletBalances.fBOA + BOAfromLP;
	const ETHRTOTAL = WalletBalances.fETH + ETHfromLP;
	const YFKATOTAL = WalletBalances.fYFKA + YFKAfromLP;
  return {
    fXAMPWallet: fourDecimals(WalletBalances.fXAMP/(10**9)) ,
    fBOAWallet: fourDecimals(WalletBalances.fBOA),
    fTOBWallet: fourDecimals(WalletBalances.fTOB),
	fYFKAWallet: fourDecimals(WalletBalances.fYFKA),
	fETHWallet: fourDecimals(WalletBalances.fETH),
	fYFKAReward: fourDecimals(yfkaRewardTotal),
	fXAMPLP: fourDecimals(XAMPfromLP),
    fBOALP: fourDecimals(BOAfromLP),
    fTOBLP: fourDecimals(TOBfromLP),
	fYFKALP: fourDecimals(YFKAfromLP),
	fETHLP: fourDecimals(ETHfromLP),
	fXAMPTotal: fourDecimals(XampTOTAL),
    fBOATotal: fourDecimals(BoaTOTAL),
    fTOBTotal: fourDecimals(TobTOTAL),
	fETHTotal: fourDecimals(ETHRTOTAL),
	fYFKATotal: fourDecimals(YFKATOTAL),
  }
}

// Gets the min size for BTS tokens to stake YFKA
const stakeMinimumPriceForStaking = async () => {
  const MIN_STAKE_AMOUNT = 0.2;

  const prices = await getPrices();

  const yfkaPrices = prices.YFKA;

  const tokenKeys = Object.keys(TOKENS);
  const mappedTokens = tokenKeys.map((key) => {
    const yfkaMinInEth = yfkaPrices.eth * MIN_STAKE_AMOUNT;

    return {
      amount: yfkaMinInEth / prices[key].eth,
    }
  });

  return mappedTokens.reduce((acc, token, idx) => {
    return {
      ...acc,
      [tokenKeys[idx]]: token,
    };
  }, {});
}







const totalYFKAStaked = async () =>{
	const ashContract = yfkaControllerContract();
	
	//TOTAL YFKA STAKED	
	const totalStakedYFKA_XAMP = await ashContract.methods
		.totalYFKAStaked(YFKA_POOL_INDEXES.XAMP).call();
	const totalStakedYFKA_TOB = await ashContract.methods
		.totalYFKAStaked(YFKA_POOL_INDEXES.TOB).call();
	const totalStakedYFKA_BOA = await ashContract.methods
		.totalYFKAStaked(YFKA_POOL_INDEXES.BOA).call();
	const totalStakedYFKA_ETH = await ashContract.methods
		.totalYFKAStaked(YFKA_POOL_INDEXES.ETH).call();
	return{
		XAMP:totalStakedYFKA_XAMP,
		TOB:totalStakedYFKA_TOB,
		BOA:totalStakedYFKA_BOA,
		ETH:totalStakedYFKA_ETH,
		fXAMP:totalStakedYFKA_XAMP/(10**18),
		fTOB:totalStakedYFKA_TOB/(10**18),
		fBOA:totalStakedYFKA_BOA/(10**18),
		fETH:totalStakedYFKA_ETH/(10**18),
	}
		
		
		
}

const getPooledBTS = async () => {
	const totalYFKAStakes = await totalYFKAStaked();
	const reserves = await getReserves();
	const totalLP = await getTotalLP();
	

	//YFKA to LP
	
	//TOTAL LP Staked
	
	//BTS Staked
	
	
	
	//YFKA pooled vs Staked %
	percYFKAStakedXAMP = (reserves.XAMP[0]/totalYFKAStakes.XAMP) *100;
	percYFKAStakedTOB = (reserves.TOB[0]/totalYFKAStakes.TOB) *100;
	percYFKAStakedBOA = (reserves.BOA[0]/totalYFKAStakes.BOA) *100;
	percYFKAStakedETH = (reserves.ETH[0]/totalYFKAStakes.ETH) *100;
	
	//BTS pooled vs Staked %
		
}

//GET RESERVES
const getReserves = async () => {
	const provider = getInfuraProvider();

	// YFKA_XAMP
	const xampContract = new provider.eth.Contract(
	UNISWAP_BASE_LP_ABI,
	PAIRS.YFKA_XAMP
	);
	const tobContract = new provider.eth.Contract(
	UNISWAP_BASE_LP_ABI,
	PAIRS.YFKA_TOB
	);
	const boaContract = new provider.eth.Contract(
	UNISWAP_BASE_LP_ABI,
	PAIRS.YFKA_BOA
	);
	const ethContract = new provider.eth.Contract(
	UNISWAP_BASE_LP_ABI,
	PAIRS.YFKA_ETH

	);
	
	//PULL RESERVES
	const YFKAXAMPReserves = await xampContract.methods.getReserves().call();
	const YFKATOBReserves = await tobContract.methods.getReserves().call();
	const YFKABOAReserves = await boaContract.methods.getReserves().call();
	const YFKAETHReserves = await ethContract.methods.getReserves().call();
	
	
	
	return {
    XAMP: YFKAXAMPReserves,
    BOA: YFKABOAReserves,
    TOB: YFKATOBReserves,
	ETH: YFKAETHReserves,
	}
	
}

const getStakedUSDTotals = async () => {
	const totalYFKAStake = await totalYFKAStaked();
	const LPConvers = await getLPconversions();
	const Prices = await getPrices();
	
	const XAMPLPSTAKED = totalYFKAStake.fXAMP/LPConvers.YFKAtoLPXAMP;
	const TOBLPSTAKED = totalYFKAStake.fTOB/LPConvers.YFKAtoLPTOB;
	const BOALPSTAKED = totalYFKAStake.fBOA/LPConvers.YFKAtoLPBOA;
	const ETHLPSTAKED = totalYFKAStake.fETH/LPConvers.YFKAtoLPETH;
	
	
	const XAMPUSDStaked = (totalYFKAStake.fXAMP*2)*Prices.YFKA.usd;
	const TOBUSDStaked = (totalYFKAStake.fTOB*2)*Prices.YFKA.usd;
	const BOAUSDStaked = (totalYFKAStake.fBOA*2)*Prices.YFKA.usd;
	const ETHUSDStaked = (totalYFKAStake.fETH*2)*Prices.YFKA.usd;

	
	return{
		XAMPUSD: twoDecimals(XAMPUSDStaked),
		TOBUSD: twoDecimals(TOBUSDStaked),
		BOAUSD: twoDecimals(BOAUSDStaked),
		ETHUSD: twoDecimals(ETHUSDStaked),
		XAMPTOTAL:twoDecimals(XAMPLPSTAKED),
		TOBTOTAL:twoDecimals(TOBLPSTAKED),
		BOATOTAL:twoDecimals(BOALPSTAKED),
		ETHTOTAL:twoDecimals(ETHLPSTAKED),
		
	}
}

const FillInfo = async () => {
	if (DISPLAY_CONSOLE) console.log('getReserves');
	const userLPS = await getStakes();
	const userRewards = await getRewards();
	const BTSTOT = await getBTSTotals();
	const LP = await getTotalLP();
	const LPconv = await getLPconversions();

	//PULL RESERVES
	const reserves = await getReserves();
	const YFKAXAMPReserves = reserves.XAMP;
	const YFKATOBReserves = reserves.TOB;
	const YFKABOAReserves = reserves.BOA;
	const YFKAETHReserves = reserves.ETH;

	//GET PRICES
	const coinPrices = await getPrices();
	const YFKAPrice = coinPrices.YFKA; //use .usd  or .eth
	const XAMPPrice = coinPrices.XAMP;
	const TOBPrice = coinPrices.TOB;
	const BOAPrice = coinPrices.BOA;
	const ETHPrice = coinPrices.ETH;
	console.log("ETH PRICE: ", ETHPrice);


	//GET XAMP POOLED
	const XAMPReserve = YFKAXAMPReserves[1]/(10**9);
	const TOBReserve = YFKATOBReserves[1]/(10**18);
	const BOAReserve = YFKABOAReserves[1]/(10**18);
	const ETHReserve = YFKAETHReserves[1]/(10**18);
	
	//GET YFKA POOLED
	const YFKAReserve= YFKAXAMPReserves[0]/(10**18);
	const YFKAReserveTOB= YFKATOBReserves[0]/(10**18);	
	const YFKAReserveBOA= YFKABOAReserves[0]/(10**18);
	const YFKAReserveETH= YFKAETHReserves[0]/(10**18);

	const TotalYFKAPooled = YFKAReserve + YFKAReserveTOB + YFKAReserveBOA + YFKAReserveETH;

	//WORK OUT POOL % of YFKA	
	const XAMPYFKAPercent = (YFKAReserve/TotalYFKAPooled)*100;
	const TOBYFKAPercent = (YFKAReserveTOB/TotalYFKAPooled)*100;
	const BOAYFKAPercent = (YFKAReserveBOA/TotalYFKAPooled)*100;
	const ETHYFKAPercent = (YFKAReserveETH/TotalYFKAPooled)*100;

	//0.6 % fee on UNI.
	const feeCalc = 0.6;

	/* XAMP LOGIC
	const halfLPXAMP = (totalLPXAMP/(10**18))/2;
	const XAMPtoLP = (XAMPReserve/totalLPXAMP) *(10**18);
	const LPtoXAMP = 1/XAMPtoLP;
	
	
	//TOB LOGIC
	const halfLPTOB = (totalLPTOB)/2;
	const TOBtoLP = (TOBReserve/totalLPTOB)*(10**18);
	const LPtoTOB = 1/TOBtoLP;
	
	//BOA LOGIC
	const halfLPBOA = (totalLPBOA/(10**18))/2;
	const BOAtoLP = (BOAReserve/totalLPBOA)*(10**18);
	const LPtoBOA = 1/BOAtoLP;
	
	//XAMP LOGIC
	const halfLPETH = (totalLPETH/(10**18))/2;
	const ETHtoLP = (YFKAETHReserves[1]/totalLPETH);	
	const LPtoETH = 1/ETHtoLP;
	
	//WORK OUT YFKA TO LP
	const YFKALPXAMP = halfLPXAMP/YFKAXAMPReserves;
	const YFKALPTOB = halfLPTOB/YFKAReserveTOB;
	const YFKALPBOA = LPtoBOA/YFKAReserveBOA;
	const YFKALPETH = halfLPETH/YFKAReserveETH;
	
*/
	
	//POOL PRICING
	const XAMPLPUSDTOTAL = twoDecimals(
							(XAMPReserve * XAMPPrice.usd) 
							+ (YFKAReserve * YFKAPrice.usd)
							);
	const TOBLPUSDTOTAL = twoDecimals(
							(TOBReserve * TOBPrice.usd)
							+ (YFKAReserveTOB * YFKAPrice.usd)
							);
	const BOALPUSDTOTAL = twoDecimals(
							(BOAReserve * BOAPrice.usd) 
							+ (YFKAReserveBOA * YFKAPrice.usd)
							);
	const ETHLPUSDTOTAL = twoDecimals(
							(ETHReserve * ETHPrice.usd) 
							+ (YFKAReserveETH * YFKAPrice.usd)
							);
	
	
	//LP PRICING
	const XAMPLPUSD = twoDecimals(XAMPLPUSDTOTAL/LP.fXAMP);
	const TOBLPUSD = twoDecimals(TOBLPUSDTOTAL/LP.fTOB);
	const BOALPUSD = twoDecimals(BOALPUSDTOTAL/LP.fBOA);
	const ETHLPUSD = twoDecimals(ETHLPUSDTOTAL/LP.fETH);

	//CALCULATE USERS LP $
	const USERXAMPLPPRICE =   XAMPLPUSD * userLPS.fXAMP;
	const USERTOBLPPRICE =   TOBLPUSD * userLPS.fTOB;
	const USERBOALPPRICE =   BOALPUSD * userLPS.fBOA;
	const USERETHLPPRICE =   ETHLPUSD * userLPS.fETH;
	
	
	//UPDATE HTML
	$('#XAMPLPTOTAL').html(twoDecimals(LP.fXAMP));
	$('#TOBLPTOTAL').html(twoDecimals(LP.fTOB));
	$('#BOALPTOTAL').html(twoDecimals(LP.fBOA));
	$('#ETHLPTOTAL').html(twoDecimals(LP.fETH));
	
	$('#XAMPPOOLED').html(Number(twoDecimals(XAMPReserve)).toLocaleString());
	$('#TOBPOOLED').html(Number(twoDecimals(TOBReserve)).toLocaleString());
	$('#BOAPOOLED').html(Number(twoDecimals(BOAReserve)).toLocaleString());
	$('#ETHPOOLED').html(Number(twoDecimals(ETHReserve)).toLocaleString());
	
	$('#YFKAPOOLEDX').html(Number(twoDecimals(YFKAReserve)).toLocaleString());
	$('#YFKAPOOLEDT').html(Number(twoDecimals(YFKAReserveTOB)).toLocaleString());
	$('#YFKAPOOLEDB').html(Number(twoDecimals(YFKAReserveBOA)).toLocaleString());
	$('#YFKAPOOLEDE').html(Number(twoDecimals(YFKAReserveETH)).toLocaleString());
	
	$('#YFKAPOOLEDXPERCENT').html(twoDecimals(XAMPYFKAPercent));
	$('#YFKAPOOLEDTPERCENT').html(twoDecimals(TOBYFKAPercent));
	$('#YFKAPOOLEDBPERCENT').html(twoDecimals(BOAYFKAPercent));
	$('#YFKAPOOLEDEPERCENT').html(twoDecimals(ETHYFKAPercent));
	
	$('#XAMPLP').html(Number(fourDecimals(LPconv.XAMPtoLP)).toLocaleString());
	$('#TOBLP').html(Number(fourDecimals(LPconv.TOBtoLP)).toLocaleString());
	$('#BOALP').html(Number(fourDecimals(LPconv.BOAtoLP)).toLocaleString());
	$('#ETHLP').html(Number(fourDecimals(LPconv.ETHtoLP)).toLocaleString());
	
	$('#YFKALPX').html(Number(fourDecimals(LPconv.YFKAtoLPXAMP)).toLocaleString());
	$('#YFKALPT').html(Number(fourDecimals(LPconv.YFKAtoLPTOB)).toLocaleString());
	$('#YFKALPB').html(Number(fourDecimals(LPconv.YFKAtoLPBOA)).toLocaleString());
	$('#YFKALPE').html(Number(fourDecimals(LPconv.YFKAtoLPETH)).toLocaleString());
	
	$('#LPXAMP').html(toFixed(tenDecimals(1/LPconv.XAMPtoLP)));
	$('#LPTOB').html(eightDecimals(sixDecimals(1/LPconv.TOBtoLP)));
	$('#LPBOA').html(eightDecimals(sixDecimals(1/LPconv.BOAtoLP)));
	$('#LPETH').html(eightDecimals(sixDecimals(1/LPconv.ETHtoLP)));
	
	$('#LPPRICEXAMP').html(Number(XAMPLPUSD).toLocaleString());
	$('#LPPRICETOB').html(Number(TOBLPUSD).toLocaleString());
	$('#LPPRICEBOA').html(Number(BOALPUSD).toLocaleString());
	$('#LPPRICEETH').html(Number(ETHLPUSD).toLocaleString());
	
	$('#LPPRICEXAMPTOTAL').html(Number(twoDecimals(XAMPLPUSDTOTAL)).toLocaleString());
	$('#LPPRICETOBTOTAL').html(Number(twoDecimals(TOBLPUSDTOTAL)).toLocaleString());
	$('#LPPRICEBOATOTAL').html(Number(twoDecimals(BOALPUSDTOTAL)).toLocaleString());
	$('#LPPRICEETHTOTAL').html(Number(twoDecimals(ETHLPUSDTOTAL)).toLocaleString());
	
	$('#reward-XAMP-USD').html(twoDecimals(YFKAPrice.usd * userRewards.fXAMP));
	$('#reward-TOB-USD').html(twoDecimals(YFKAPrice.usd * userRewards.fTOB));
	$('#reward-BOA-USD').html(twoDecimals(YFKAPrice.usd * userRewards.fBOA));
	$('#reward-ETH-USD').html(twoDecimals(YFKAPrice.usd * userRewards.fETH));
	
	$('#UserLPUSDXAMP').html(twoDecimals(USERXAMPLPPRICE));
	$('#UserLPUSDTOB').html(twoDecimals(USERTOBLPPRICE));
	$('#UserLPUSDBOA').html(twoDecimals(USERBOALPPRICE));
	$('#UserLPUSDETH').html(twoDecimals(USERETHLPPRICE));
	
	$('#balance-LP-XAMP-1').html(userLPS.fXAMP);
	$('#balance-LP-TOB-1').html(userLPS.fTOB);
	$('#balance-LP-BOA-1').html(userLPS.fBOA);
	$('#balance-LP-ETH-1').html(userLPS.fETH);
	
	
	$('#reward-XAMP1').html(userRewards.fXAMP);
	$('#reward-TOB1').html(userRewards.fTOB);
	$('#reward-BOA1').html(userRewards.fBOA);
	$('#reward-ETH1').html(userRewards.fETH);
	
	/*TODO PRINT TO USER BTS LP TOTAL, BTS WALLET TOTAL, BTS TOTAL TOTAL. WORK OUT ($) for each. 
	fXAMPWallet: WalletBalances.XAMP,
    fBOAWallet: WalletBalances.BOA,
    fTOBWallet: WalletBalances.TOB,
	fYFKAWallet: WalletBalances.YFKA,
	fETHWallet: WalletBalances.ETH,
	fYFKAReward: yfkaRewardTotal,
	fXAMPLP: XampTotalLP,
    fBOALP: BoaTotalLP,
    fTOBLP: TobTotalLP,
	fYFKALP: yfkaTotalLP,
	fETHLP: ETHTotalLP,
	fXAMPTotal: XampTOTAL,
    fBOALPTotal: BoaTOTAL,
    fTOBLPTotal: TobTOTAL,
	fETHLPTotal: ETHRTOTAL,
	fYFKALPTotal: YFKATOTAL,
	
	
	YFKA HTML
<strong>Total Balance: </strong><span id="TOTYFKA">0</span>YFKA ($<span id="YFKA1">0</span>)</small></span></div>                  
<strong>Staked Balance: </strong><span id="LPYFKAuser">0</span>YFKA ($<span id="YFKA2">0</span>)</small></span></div> 
<strong>Wallet Balance: </strong><span id="WALYFKA">0</span> YFKA  ($ <span id="YFKA3">0</span>)</small></span></div> 
<strong>Total Reward balance: </strong><span id="REWYFKA">0</span> YFKA  ($ <span id="YFKA4">0</span>)</small></span></div> 
     
            
            
	
	
	
	
	
	
	
	*/
	
	
	//WALLET DUMP
	//XAMP
	$('#TOTXAMP').html(BTSTOT.fXAMPTotal);
	$('#LPXAMPuser').html(Number(BTSTOT.fXAMPLP).toLocaleString());
	$('#WALXAMP').html(BTSTOT.fXAMPWallet);
	//XAMP $
	$('#XAMPP1').html(twoDecimals(XAMPPrice.usd*(BTSTOT.fXAMPTotal)));
	$('#XAMPP2').html(twoDecimals(XAMPPrice.usd*(BTSTOT.fXAMPLP)));
	$('#XAMPP3').html(twoDecimals(XAMPPrice.usd*BTSTOT.fXAMPWallet));
	
	
	//TOB
	$('#TOTTOB').html(BTSTOT.fTOBTotal);
	$('#LPTOBuser').html(BTSTOT.fTOBLP);
	$('#WALTOB').html(BTSTOT.fTOBWallet);
	//TOB $
	$('#TOB1').html(twoDecimals(TOBPrice.usd*BTSTOT.fTOBTotal));
	$('#TOB2').html(twoDecimals(TOBPrice.usd*BTSTOT.fTOBLP));
	$('#TOB3').html(twoDecimals(TOBPrice.usd*BTSTOT.fTOBWallet));
	
	//BOA 
	$('#TOTBOA').html(BTSTOT.fBOATotal);
	$('#LPBOAuser').html(BTSTOT.fBOALP);
	$('#WALBOA').html(BTSTOT.fBOAWallet);
	//BOA $
	$('#BOA1').html(twoDecimals(BOAPrice.usd*BTSTOT.fBOATotal));
	$('#BOA2').html(twoDecimals(BOAPrice.usd*BTSTOT.fBOALP));
	$('#BOA3').html(twoDecimals(BOAPrice.usd*BTSTOT.fBOAWallet));

	//YFKA
	$('#TOTYFKA').html(BTSTOT.fYFKATotal);
	$('#LPYFKAuser').html(BTSTOT.fYFKALP);
	$('#WALYFKA').html(BTSTOT.fYFKAWallet);
	$('#REWYFKA').html(BTSTOT.fYFKAReward);
	//ETH $
	$('#YFKA1').html(twoDecimals(YFKAPrice.usd*BTSTOT.fYFKATotal));
	$('#YFKA2').html(twoDecimals(YFKAPrice.usd*BTSTOT.fYFKALP));
	$('#YFKA3').html(twoDecimals(YFKAPrice.usd*BTSTOT.fYFKAWallet));
	$('#YFKA4').html(twoDecimals(YFKAPrice.usd*BTSTOT.fYFKAReward));



	//ETH 
	$('#TOTETH').html(BTSTOT.fETHTotal);
	$('#LPETHuser').html(BTSTOT.fETHLP);
	$('#WALETH').html(BTSTOT.fETHWallet);
	//ETH $
	$('#ETH1').html(twoDecimals(ETHPrice.usd*BTSTOT.fETHTotal));
	$('#ETH2').html(twoDecimals(ETHPrice.usd*BTSTOT.fETHLP));
	$('#ETH3').html(twoDecimals(ETHPrice.usd*BTSTOT.fETHWallet));
	

};

function toFixed(x) {
  if (Math.abs(x) < 1.0) {
    var e = parseInt(x.toString().split('e-')[1]);
    if (e) {
        x *= Math.pow(10,e-1);
        x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
    }
  } else {
    var e = parseInt(x.toString().split('+')[1]);
    if (e > 20) {
        e -= 20;
        x /= Math.pow(10,e);
        x += (new Array(e+1)).join('0');
    }
  }
  return x;
}

const isConnected = () => {
  return web3.isConnected();
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
	// START BACK HERE....
		const accounts = await ethereum.request({method: 'eth_requestAccounts'});
		if (DISPLAY_CONSOLE) console.log('accounts:', accounts);
		const provider = getInfuraProvider();
		return provider.utils.toChecksumAddress(accounts[0]);
};

const getBonusPool = async () => {
  if (DISPLAY_CONSOLE) console.log('getBonusPool');
  const contract = yfkaControllerContract();
  const idx = await contract.methods.getActivePool().call();
  return POOLS[idx];
};

const getGlobalEmissionRate = async () => {
  if (DISPLAY_CONSOLE) console.log('getGlobalEmissionRate');
  const contract = yfkaControllerContract();
  const emissionRate = await contract.methods.emissionRate().call();
  if (DISPLAY_CONSOLE) console.log('emissionRate: ', emissionRate);
  // TODO is it 18 tho
  const emissionRateToHuman = (emissionRate / 10 ** 18 / 2) * 100;
  if (DISPLAY_CONSOLE) console.log('emissionRateToHuman: ', emissionRateToHuman);

  const emissionRateToReadable = twoDecimals(emissionRateToHuman);
  if (DISPLAY_CONSOLE) console.log('emissionRateToReadable: ', emissionRateToReadable);
  return emissionRateToReadable;
};

const getIndexBySymbol = (value) => {
  return YFKA_POOL_INDEXES[value];
};

function twoDecimals(b) {
    const newNumber = Math.floor((b + Number.EPSILON) * 100) / 100;
	//const balance = Number(newNumber).toLocaleString('fullwide', {useGrouping:false});
    return _.toNumber(newNumber);
}

function fourDecimals(b) {
    const newNumber = Math.floor((b + Number.EPSILON) * 10000) / 10000;
	//const balance = Number(newNumber).toLocaleString('fullwide', {useGrouping:false});
    return _.toNumber(newNumber);
}

function sixDecimals(b) {
    const newNumber = Math.floor((b + Number.EPSILON) * 1000000) / 1000000;
	//const balance = Number(newNumber).toLocaleString('fullwide', {useGrouping:false});
    return _.toNumber(newNumber);
}

function eightDecimals(b) {
    const newNumber = Math.floor((b + Number.EPSILON) * 100000000) / 100000000;
	//const balance = Number(newNumber).toLocaleString('fullwide', {useGrouping:false});
    return _.toNumber(newNumber);
}

function tenDecimals(b) {
    const newNumber = Math.floor((b + Number.EPSILON) * 10000000000) / 10000000000;
	//const balance = Number(newNumber).toLocaleString('fullwide', {useGrouping:false});
    return _.toNumber(newNumber);
}

function belowZero(n)
{	
	if (DISPLAY_CONSOLE) console.log('belowZero Function called with:', n);
	if (n <= 0.00){
		if (DISPLAY_CONSOLE) console.log('Below 0.00');
		return '<0.00';
	}else{
		if (DISPLAY_CONSOLE) console.log('not Below 0.00');
		return n;
	}
}

function updateGlobal()
{
	updateActivePool();
}

async function MetaConnect(){
	if (!isConnected()){
		if (DISPLAY_CONSOLE) console.log('METAMASK NOT CONNECTED!');
		$('#isConnected').html('Wallet NOT Connected');
		window.web3.currentProvider.enable().catch(e => {
				errorHandling(e, 'setStakeBalance()');
			});;
		setTimeout(() => {  MetaConnect();; }, 3000);			
		
	}else{
		
		var updateAP = await updateActivePool().catch(e => {
				errorHandling(e, 'updateActivePool()');
		});
		
		if (updateAP != "error"){
			var updateUS = await updateUserStats().catch(e => {
				errorHandling(e, 'updateUserStats()');
			});
		}

		if (updateUS != "error"){
			await setStakeBalance({
				currentTarget: {
					value: 'XAMP',
				}
			}).catch(e => {
				errorHandling(e, 'setStakeBalance()');
			});
			await setRedeemBalance({
				currentTarget: {
					value: 'XAMP',
				}
			}).catch(e => {
				errorHandling(e, 'setRedeemBalance()');
			});
			await setUnstakeBalance({
					currentTarget: {
					value: 'XAMP',
				}
			}).catch(e => {
				errorHandling(e, 'setUnstakeBalance()');
			});
			$('#isConnected').html('wallet connected');
		}
	}		
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

const fillMoreInfo = async () =>{
	const EthPrices = await getPricesETH();
	const USDPrices = await getPricesUSD();
	const MinStakes = await stakeMinimumPrice();
	const Totals = await Totals();
	
	$('#XAMPETH').html(sixDecimals(EthPrices.XAMP));
	$('#XAMPUSD').html(sixDecimals(USDPrices.XAMP));
	$('#XAMPMinStake').html(sixDecimals(MinStakes.XAMP));
	$('#XAMPTOTAL').html(sixDecimals(Totals.XAMP));
}

const getTotalBalances = async () => {
	if (DISPLAY_CONSOLE) console.log('getBalances');
		const provider = await getInfuraProvider();
		// YFKA_XAMP
		const xampContract = new provider.eth.Contract(
		UNISWAP_BASE_LP_ABI,
		PAIRS.YFKA_XAMP
		);
		const xampContractBalance = await xampContract.methods.totalSupply().call();
		if (DISPLAY_CONSOLE) console.log('xampTotalBalance: ', xampContractBalance);

		const xampContractDecimals = await xampContract.methods.decimals().call();
		if (DISPLAY_CONSOLE) console.log('xampContractDecimals: ', xampContractDecimals);

		// YFKA_TOB
		const tobContract = new provider.eth.Contract(
		UNISWAP_BASE_LP_ABI,
		PAIRS.YFKA_TOB
		);
		const tobContractBalance = await tobContract.methods.totalSupply().call();
		if (DISPLAY_CONSOLE) console.log('tobTotalBalance: ', tobContractBalance);

		const tobContractDecimals = await tobContract.methods.decimals().call();
		if (DISPLAY_CONSOLE) console.log('tobContractDecimals: ', tobContractDecimals);

		// YFKA_BOA
		const boaContract = new provider.eth.Contract(
		UNISWAP_BASE_LP_ABI,
		PAIRS.YFKA_BOA
		);
		const boaContractBalance = await boaContract.methods.totalSupply().call();
		if (DISPLAY_CONSOLE) console.log('boaTotalBalance: ', boaContractBalance);

		const boaContractDecimals = await boaContract.methods.decimals().call();
		if (DISPLAY_CONSOLE) console.log('boaContractDecimals: ', boaContractDecimals);

		// YFKA_ETH
		const ethContract = new provider.eth.Contract(
		UNISWAP_BASE_LP_ABI,
		PAIRS.YFKA_ETH
		);
		
		const ethContractBalance = await ethContract.methods.totalSupply().call();
		if (DISPLAY_CONSOLE) console.log('ethTotalBalance: ', ethContractBalance);

		const ethContractDecimals = await ethContract.methods.decimals().call();
		if (DISPLAY_CONSOLE) console.log('ethContractDecimals: ', ethContractDecimals);

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

//GET WALLET BALANCES
const getPoolBalances = async () => {
  if (DISPLAY_CONSOLE) console.log('getBalances');
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
  if (DISPLAY_CONSOLE) console.log('xampContractBalance: ', xampContractBalance);

  const xampContractDecimals = await xampContract.methods.decimals().call();
  if (DISPLAY_CONSOLE) console.log('xampContractDecimals: ', xampContractDecimals);

  // YFKA_TOB
  const tobContract = new provider.eth.Contract(
    STANDARD_ERC20_ABI,
    PAIRS.YFKA_TOB
  );
  const tobContractBalance = await tobContract.methods
    .balanceOf(account)
    .call();
  if (DISPLAY_CONSOLE) console.log('tobContractBalance: ', tobContractBalance);

  const tobContractDecimals = await tobContract.methods.decimals().call();
  if (DISPLAY_CONSOLE) console.log('tobContractDecimals: ', tobContractDecimals);

  // YFKA_BOA
  const boaContract = new provider.eth.Contract(
    STANDARD_ERC20_ABI,
    PAIRS.YFKA_BOA
  );
  const boaContractBalance = await boaContract.methods
    .balanceOf(account)
    .call();
  if (DISPLAY_CONSOLE) console.log('boaContractBalance: ', boaContractBalance);

  const boaContractDecimals = await boaContract.methods.decimals().call();
  if (DISPLAY_CONSOLE) console.log('boaContractDecimals: ', boaContractDecimals);

  // YFKA_ETH
  const ethContract = new provider.eth.Contract(
    STANDARD_ERC20_ABI,
    PAIRS.YFKA_ETH
  );

  const ethContractBalance = await ethContract.methods
    .balanceOf(account)
    .call();
  if (DISPLAY_CONSOLE) console.log('ethContractBalance: ', ethContractBalance);

  const ethContractDecimals = await ethContract.methods.decimals().call();
  if (DISPLAY_CONSOLE) console.log('ethContractDecimals: ', ethContractDecimals);

  
   const yfkaContract = new provider.eth.Contract(
    STANDARD_ERC20_ABI,
    TOKENS.YFKA
  );
  
  const yfkaContractBalance = await ethContract.methods
    .balanceOf(account)
    .call();
  if (DISPLAY_CONSOLE) console.log('yfkaContractBalance: ', yfkaContractBalance);

  const yfkaContractDecimals = await ethContract.methods.decimals().call();
  if (DISPLAY_CONSOLE) console.log('fykaContractDecimals: ', yfkaContractDecimals);


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
	YFKA: yfkaContractBalance
      ? yfkaContractBalance / 10 ** yfkaContractDecimals
      : 0,
  };

  return {
    XAMP: _.toNumber(amounts.XAMP),
    TOB: _.toNumber(amounts.TOB),
    BOA: _.toNumber(amounts.BOA),
    ETH: _.toNumber(amounts.ETH),
	YFKA: _.toNumber(amounts.YFKA),
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
	if (DISPLAY_CONSOLE) console.log('tobPersonalEmissionRate: ', tobPersonalEmissionRate);
	let emissionRateToReadableTob = twoDecimals(
	(tobPersonalEmissionRate / 10 ** 18 / 2) * 100
	);
	if (DISPLAY_CONSOLE) console.log('emissionRateToReadableTob: ', emissionRateToReadableTob);
		if (emissionRateToReadableTob <= 0.00) {
	emissionRateToReadableTob = 0;
	}
	if (DISPLAY_CONSOLE) console.log('bonusPoolIdx: ', typeof bonusPoolIdx);
	if (DISPLAY_CONSOLE) console.log('YFKA_POOL_INDEXES.TOB: ', YFKA_POOL_INDEXES.TOB);
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
	)/2;
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
	const account = await getAccount().catch(e => {
		errorHandling(e, 'Get Accounts');
		return("error");
	});
	
	if (account != "error"){
		
		const ashContract = yfkaControllerContract();

		//current Rewards
		//XAMP reward
		const xampReward = await ashContract.methods
		.getCurrentReward(YFKA_POOL_INDEXES.XAMP)
		.call({
			from: account,
		}).catch(e => {
			errorHandling(e, 'ashContract.methods.getCurrentReward(YFKA_POOL_INDEXES.XAMP)');
			return("error");
		});
		if (xampReward != "error")
		{
			if (DISPLAY_CONSOLE) console.log('xampReward: ', xampReward);
			$('#reward-XAMP').html(fourDecimals(_.toInteger(xampReward) / 10 ** 18));
		}else return("error");
		
		//TOB reward
		const tobReward = await ashContract.methods
		.getCurrentReward(YFKA_POOL_INDEXES.TOB)
		.call({
			from: account,
		}).catch(e => {
			errorHandling(e, 'ashContract.methods.getCurrentReward(YFKA_POOL_INDEXES.TOB)');
			return("error");
		});
		if (tobReward != "error")
		{
			if (DISPLAY_CONSOLE) console.log('tobReward: ', tobReward);
			$('#reward-TOB').html(fourDecimals(_.toInteger(tobReward) / 10 ** 18));
		}else return("error");
		
		//BOA reward
		const boaReward = await ashContract.methods
		.getCurrentReward(YFKA_POOL_INDEXES.BOA)
		.call({
			from: account,
		}).catch(e => {
			errorHandling(e, 'ashContract.methods.getCurrentReward(YFKA_POOL_INDEXES.BOA)');
			return("error");
		});
		if (boaReward != "error"){
			if (DISPLAY_CONSOLE) console.log('boaReward: ', boaReward);
			$('#reward-BOA').html(fourDecimals(_.toInteger(boaReward) / 10 ** 18));
		}else return("error");
		
		const ethReward = await ashContract.methods
		.getCurrentReward(YFKA_POOL_INDEXES.ETH)
		.call({
			from: account,
		}).catch(e => {
			errorHandling(e, 'ashContract.methods.getCurrentReward(YFKA_POOL_INDEXES.ETH)');
			return("error");
		});
		if (ethReward != "error"){
		if (DISPLAY_CONSOLE) console.log('ethReward: ', ethReward);
			$('#reward-ETH').html(_.toInteger(ethReward) / 10 ** 18);
			$('#reward-ETH').html(fourDecimals(_.toInteger(ethReward) / 10 ** 18));
		}else return("error");
		
		const personalemission = await getPersonalEmissions().catch(e => {
			errorHandling(e, 'getPersonalEmissions()');
			return("error");
		});
		if (personalemission != "error"){
			$('#personal-emission-XAMP').html(`${personalemission.XAMP}`);
			$('#personal-emission-TOB').html(`${personalemission.TOB}`);
			$('#personal-emission-BOA').html(`${personalemission.BOA}`);
			$('#personal-emission-ETH').html(`${personalemission.ETH}`);
		}else return("error");

		// current LP Tokens
		var XAMPbalance, TOBbalance, BOAbalance, ETHbalance;
		// XAMP LP token balance
		const xampLpBalance = await ashContract.methods
		.stakes(YFKA_POOL_INDEXES.XAMP, account)
		.call().catch(e => {
			errorHandling(e, 'ashContract.methods.stakes(YFKA_POOL_INDEXES.XAMP, account)');
			return("error");
		});
		
		if (xampLpBalance != "error"){
			XAMPbalance = belowZero(sixDecimals(xampLpBalance / 10 ** 18));
			if (DISPLAY_CONSOLE) console.log('Staked XAMP: ', XAMPbalance);
			$('#balance-LP-XAMP').html(XAMPbalance);
		}

		// TOB LP token balance
		const tobLpBalance = await ashContract.methods
		.stakes(YFKA_POOL_INDEXES.TOB, account)
		.call().catch(e => {
			errorHandling(e, 'ashContract.methods.stakes(YFKA_POOL_INDEXES.TOB, account)');
			return("error");
		});
		if (tobLpBalance != "error"){
			TOBbalance = belowZero(sixDecimals(tobLpBalance / 10 ** 18));
			if (DISPLAY_CONSOLE) console.log('Staked TOB: ', TOBbalance);
			$('#balance-LP-TOB').html(TOBbalance);
		}else return("error");

		// BOA LP Balance
		const boaLpBalance = await ashContract.methods
		.stakes(YFKA_POOL_INDEXES.BOA, account)
		.call().catch(e => {
			errorHandling(e, 'ashContract.methods.stakes(YFKA_POOL_INDEXES.BOA, account)');
			return("error");
		});
		if (boaLpBalance != "error"){
			BOAbalance = belowZero(sixDecimals(boaLpBalance / 10 ** 18));
			if (DISPLAY_CONSOLE) console.log('Staked BOA: ', BOAbalance);
			$('#balance-LP-BOA').html(BOAbalance);
		}else return("error");
		
		// ETH LP Balance
		const ethLpBalance = await ashContract.methods
		.stakes(YFKA_POOL_INDEXES.ETH, account)
		.call().catch(e => {
			errorHandling(e, 'ashContract.methods.stakes(YFKA_POOL_INDEXES.ETH, account)');
			return("error");
		});
		if (ethLpBalance != "error"){
			ETHbalance = belowZero(sixDecimals(ethLpBalance / 10 ** 18));
			if (DISPLAY_CONSOLE) console.log('Staked ETH: ', ETHbalance);
			$('#balance-LP-ETH').html(ETHbalance);
		}else return("error");

		//% of pool
		const TotalBalances = await getTotalBalances().catch(e => {
			errorHandling(e, 'getTotalBalances()');
			return("error");
		});
		
		if (TotalBalances != "error")
		{
			//XAMP
			const TotalXAMPbalance = TotalBalances.XAMP;
			const percentXAMP = (fourDecimals(xampLpBalance / 10 ** 18) / TotalXAMPbalance) * 100;
			var readablePercentage = belowZero(fourDecimals(percentXAMP));
			$('#pool-Share-XAMP').html(`${readablePercentage}`);

			//TOB
			const TotalTOBbalance = TotalBalances.TOB;
			const percentTOB = (fourDecimals(tobLpBalance / 10 ** 18) / TotalTOBbalance) * 100;
			var readablePercentTOB = belowZero(fourDecimals(percentTOB));
			$('#pool-Share-TOB').html(`${readablePercentTOB}`);

			//BOA
			const TotalBOAbalance = TotalBalances.BOA;
			const percentBOA = (fourDecimals(boaLpBalance / 10 ** 18) / TotalBOAbalance) * 100;
			var readablePercentageBOA = belowZero(fourDecimals(percentBOA));
			$('#pool-Share-BOA').html(`${readablePercentageBOA}`);
		
			//ETH
			const TotalETHbalance = TotalBalances.ETH;
			const percentETH = (fourDecimals(ethLpBalance / 10 ** 18) / TotalETHbalance) * 100;
			var readablePercentageETH = belowZero(fourDecimals(percentETH));
			$('#pool-Share-ETH').html(`${readablePercentageETH}`);
		}else return("error");
	}else return("error");
};

const updateActivePool = async () => {
	if (DISPLAY_CONSOLE) console.log('updateActivePool');
	const _globalEmissionRate = await getGlobalEmissionRate().catch(e => {
		errorHandling(e, 'getGlobalEmissionRate()');
		return("error");
	});
	

	const TotalBalances = await getTotalBalances().catch(e => {
		errorHandling(e, 'getTotalBalances()');
		return("error");
	});
	
	if (TotalBalances != "error"){
	
		const TotalXAMPbalance = TotalBalances.XAMP;
		var readableTotalXAMP = twoDecimals(TotalXAMPbalance);
		$('#total-LP-XAMP').html(`${readableTotalXAMP}`);

		const TotalTOBbalance = TotalBalances.TOB;
		var readableTotalTOB = twoDecimals(TotalTOBbalance);
		$('#total-LP-TOB').html(`${readableTotalTOB}`);
		
		const TotalBOAbalance = TotalBalances.BOA;
		var readableTotalBOA = twoDecimals(TotalBOAbalance);
		$('#total-LP-BOA').html(`${readableTotalBOA}`);
		
		const TotalETHbalance = TotalBalances.ETH;
		var readableTotalETH = twoDecimals(TotalETHbalance);
		$('#total-LP-ETH').html(`${readableTotalETH}`);
	
	}
	

	const PoolBalances = await getStakedUSDTotals().catch(e => {
		errorHandling(e, 'getStakedUSDTotals()');
		return("error");
	});
	
	
	if (PoolBalances != "error"){
		
		
		
		$('#total-dollar-val-XAMP').html(`${Number(PoolBalances.XAMPUSD).toLocaleString()}`);
		$('#total-dollar-val-TOB').html(`${Number(PoolBalances.TOBUSD).toLocaleString()}`);
		$('#total-dollar-val-BOA').html(`${Number(PoolBalances.BOAUSD).toLocaleString()}`);
		$('#total-dollar-val-ETH').html(`${Number(PoolBalances.ETHUSD).toLocaleString()}`);
		
		$('#total-val-XAMP').html(`${Number(PoolBalances.XAMPTOTAL).toLocaleString()}`);
		$('#total-val-TOB').html(`${Number(PoolBalances.TOBTOTAL).toLocaleString()}`);
		$('#total-val-BOA').html(`${Number(PoolBalances.BOATOTAL).toLocaleString()}`);
		$('#total-val-ETH').html(`${Number(PoolBalances.ETHTOTAL).toLocaleString()}`);
	}
	
	
	if (_globalEmissionRate != "error"){
		const globalEmissionRate = Math.ceil(_globalEmissionRate);

		const bonusEmissionRate = Math.round(globalEmissionRate * 2);
		$('#global-rate').html(`${globalEmissionRate}%`);
		$('#bonus-global-rate').html(`${bonusEmissionRate}%`);
		$('#eth-apy').html(`${globalEmissionRate/2}`);
		$('#xamp-apy').html(`${globalEmissionRate}`);
		$('#tob-apy').html(`${globalEmissionRate}`);
		$('#boa-apy').html(`${globalEmissionRate}`);
		$('#coin-emission').html(`${globalEmissionRate}`);

		const bonusAddress = await getBonusPool().catch(e => {
			errorHandling(e, 'getGlobalEmissionRate()');
			return("error");
		});
		if (bonusAddress != "error"){
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
		}else return("error");
	}else return ("error");
};

function waitForApproval(tx, ashContract, payload, amount) {
  web3.eth.getTransaction(tx, function (err, response) {
    if (DISPLAY_CONSOLE) console.log('response: ', response);
    if (DISPLAY_CONSOLE) console.log('err: ', err);
    if (!response || _.isNil(response.blockNumber) || err) {
      setTimeout(() => {
        waitForApproval(tx, ashContract, payload, amount);
      }, 5000);
      return;
    }

    setTimeout(() => {
      if (DISPLAY_CONSOLE) console.log(response);
    }, 5000);

    if (DISPLAY_CONSOLE) console.log('Amount: ', amount);
    if (DISPLAY_CONSOLE) console.log('Payload: ', payload);
    if (DISPLAY_CONSOLE) console.log('Calling: Stake ');
    ashContract.stake(payload, amount, function (err, res) {
      document.getElementById('stakeReceipt').innerHTML =
        '<a target="_blank" rel="noreferrer noopener" href="https://etherscan.io/tx/' +
        res +
        '">Click here to view your transaction.</a>';
		//OPEN RECIPET IN NEW TAB
		window.open("https://etherscan.io/tx/" + res);
		//RELOAD THIS PAGE
		location.reload();
      document.getElementById('stakeReceipt').style.opacity = '1';
      // updatePoolBalances();
    });
  });
}

const setStakeBalance = async (event)=> {
	//FIRSTLY WE SET THE MIN VALUES
	const minStake = await stakeMinimumPriceForStaking();
	var stakeName = "";
	var stakeMinAmount = 0;
	if (document.getElementById('stakeXamp').checked){
		stakeName = "XAMP";
		stakeMinAmount = twoDecimals(minStake.XAMP.amount);
	}else if(document.getElementById('stakeTob').checked){
		stakeName = "TOB";
		stakeMinAmount = twoDecimals(minStake.TOB.amount);
	}else if(document.getElementById('stakeBoa').checked){
		stakeName = "BOA";
		stakeMinAmount = sixDecimals(minStake.BOA.amount);
	}else if(document.getElementById('stakeEth').checked){
		stakeName = "ETH";
		stakeMinAmount = fourDecimals(minStake.ETH.amount);
	}
	const LPMin = await returnLP(stakeName,stakeMinAmount);
	$('#MinLP').html(`${sixDecimals(LPMin)}`);
	$('#MinBTS').html(`${stakeMinAmount}`);
	$('#BTSname').html(`${stakeName}`);
	
	
	
	
  if (DISPLAY_CONSOLE) console.log('change radio stake');
  const balances = await getPoolBalances();
  if (DISPLAY_CONSOLE) console.log('balances: ', balances);
  // const balance = twoDecimals(balances[event.currentTarget.value]);
  const balance = balances[event.currentTarget.value];
  if (DISPLAY_CONSOLE) console.log('balance: ', balance);

  $('#stake-input').val(balance);
  // $('#stake-input').attr('placeholder', `${balance}`);
  $('#stake-balance').html(sixDecimals(balance));
  
  //ACTIVATE BUTTON IF BALANCE IS ABOVE MIN
  	if (balance < LPMin){
		document.getElementById('stakeBTN').disabled = true;
		$('#stakeButtonText').html(`STAKE BALANCE TOO LOW`);
	}else{
		document.getElementById('stakeBTN').disabled = false;
		$('#stakeButtonText').html(`Stake`);
	}
  
  
  
  
  return balance || '';
};

const setRedeemBalance = async () => {
  if (DISPLAY_CONSOLE) console.log('change radio redeem');
  const value = $('[name=redeem][type=radio]:checked').val();
  const account = await getAccount();
  const globalEmissionRate = await getGlobalEmissionRate();
	if (value == "ETH")
	{
		$('#redeem-coin-emission').html(`${globalEmissionRate/2}`);
	}else
	{
		$('#redeem-coin-emission').html(`${globalEmissionRate}`);
	}

  const idx = getIndexBySymbol(value);
  if (DISPLAY_CONSOLE) console.log('Selected Coin: ', value, '; idx: ', idx);

  const ashContract = yfkaControllerContract();
  const _currentReward = await ashContract.methods.getCurrentReward(idx).call({
    from: account,
  });
  const currentReward = _.toNumber(_currentReward);

  if (DISPLAY_CONSOLE) console.log('Number Redeemed: ' + currentReward / 10 ** 18);
	const balance = fourDecimals(currentReward / 10 ** 18);
  $('#redeem-amount').html(balance);
  $('#redeem-amount-button').html(balance);

  const _personalEmission = await ashContract.methods
    .getPersonalEmissionRate(idx, account)
    .call();
  const personalEmission = _.toNumber(_personalEmission);
  if (DISPLAY_CONSOLE) console.log('Personal Emission: ' + personalEmission / 10 ** 18);
  var emissionRateToReadable = twoDecimals(personalEmission);
  if (emissionRateToReadable < 0) {
    emissionRateToReadable = 0;
  }
  if (DISPLAY_CONSOLE) console.log('emissionRateToReadable: ', emissionRateToReadable);
  $('#personal-emission').html(emissionRateToReadable);
};

const setUnstakeBalance = async () => {
	const value = $('[name=unstake][type=radio]:checked').val();
	const account = await getAccount();
	const idx = getIndexBySymbol(value);
	const globalEmissionRate = await getGlobalEmissionRate();
	if (value == "ETH")
	{
		$('#unstake-coin-emission').html(`${globalEmissionRate/2}`);
	}else
	{
		$('#unstake-coin-emission').html(`${globalEmissionRate}`);
	}
  var ashContract = web3.eth.contract(YFKA_CONTROLLER_ABI);
  ashContract = ashContract.at(checksumAddress(YFKA_CONTROLLER_ADDRESS));
// const res = await ashContract.stakes(idx, account).call();
  await ashContract.stakes(idx, account, function (err, res) {
		if (DISPLAY_CONSOLE) console.log(res);
		if (DISPLAY_CONSOLE) console.log(_.toNumber(res));
		if (DISPLAY_CONSOLE) console.log('_.toInteger(res)');
		if (DISPLAY_CONSOLE) console.log(_.toInteger(res));

		const balance = _.toNumber(res) / 10 ** 18;
		const reablebalance = fourDecimals(balance);
    if (DISPLAY_CONSOLE) console.log('Staked XAMP: ', balance);
    $('#unstake-input').val(`${balance}`);
	$('#unstake-input-hidden').val(`${balance}`);
	
    $('#unstake-input').attr('placeholder', `${balance}`);
    $('#unstake-balance').html(`${reablebalance}`);
  });
};

const checkMinStakeInput = async (stakevalue) =>{
	//FIRSTLY WE SET THE MIN VALUES
	const minStake = await stakeMinimumPriceForStaking();
	var stakeName = "";
	var stakeMinAmount = 0;
	if (document.getElementById('stakeXamp').checked){
		stakeName = "XAMP";
		stakeMinAmount = twoDecimals(minStake.XAMP.amount);
	}else if(document.getElementById('stakeTob').checked){
		stakeName = "TOB";
		stakeMinAmount = twoDecimals(minStake.TOB.amount);
	}else if(document.getElementById('stakeBoa').checked){
		stakeName = "BOA";
		stakeMinAmount = sixDecimals(minStake.BOA.amount);
	}else if(document.getElementById('stakeEth').checked){
		stakeName = "ETH";
		stakeMinAmount = fourDecimals(minStake.ETH.amount);
	}
	const LPMin = await returnLP(stakeName,stakeMinAmount);
	
	
  //ACTIVATE BUTTON IF BALANCE IS ABOVE MIN
  	if (balance < LPMin){
		document.getElementById('stakeBTN').disabled = true;
		$('#stakeButtonText').html(`STAKE BALANCE TOO LOW`);
	}else{
		document.getElementById('stakeBTN').disabled = false;
		$('#stakeButtonText').html(`Stake`);
	}
  
	

}

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

$('#stake-input').on("change keyup paste", function(){
    checkMinStakeInput(document.getElementById('stake-input').value
});

$('input[type=radio][name=redeem]').change(setRedeemBalance);

$('input[type=radio][name=unstake]').change(setUnstakeBalance);

$('#stakeBTN').click(async () => {
  var ashContract = web3.eth.contract(YFKA_CONTROLLER_ABI);
  ashContract = ashContract.at(checksumAddress(YFKA_CONTROLLER_ADDRESS));
  let uniContract = web3.eth.contract(UNISWAP_BASE_LP_ABI);

  if (DISPLAY_CONSOLE) console.log('stake value: ', 'stake btn click');
  const keys = Object.keys(PAIRS);
  if (DISPLAY_CONSOLE) console.log('keys: ', keys);
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

  if (DISPLAY_CONSOLE) console.log('value: ', value);
  const indexOfValue = keys.map((key) => {
    return key.indexOf(value) >= 0;
  });
  const idx = indexOfValue.indexOf(true);
  if (DISPLAY_CONSOLE) console.log('idx: ', idx);
  const pool = POOLS[idx];
  if (DISPLAY_CONSOLE) console.log('pool: ', pool);
  var amount = _.toNumber($('#stake-input').val());
  if (DISPLAY_CONSOLE) console.log('amount ', amount);

  if (amount === 0 || amount === '0') return;
  if (!window.ethereum) return;

  amount = amount * 10 ** 18;
  uniInstance.approve(checksumAddress(YFKA_CONTROLLER_ADDRESS), amount, function (err, res) {
    if (DISPLAY_CONSOLE) console.log('APPROVE TX: https://etherscan.io/tx/' + res);
    document.getElementById('stakeReceipt').innerHTML = 'Awaiting approval...';
    document.getElementById('stakeReceipt').style.opacity = '1';
    waitForApproval(res, ashContract, payload, amount);
  });
});

/* REDEEM BUTTON FUNCTIONALITY WITH WARNING 
--------------------------------------------------------------------------------------------
*/
$('#redeemBTN').click(async () => {	
	const personalemission = await getPersonalEmissions().catch(e => {
		errorHandling(e, 'getPersonalEmissions()');
		return("error");
	});
	switch ($('[name=redeem][type=radio]:checked').val())
	{
		case 'XAMP':
			document.getElementById('P-EMISSION-WARNING-REDEEM').innerHTML = `${personalemission.XAMP}`;
			break;
		
		case 'TOB':
			document.getElementById('P-EMISSION-WARNING-REDEEM').innerHTML = `${personalemission.TOB}`;
			break;
		
		case 'BOA':
			document.getElementById('P-EMISSION-WARNING-REDEEM').innerHTML = `${personalemission.BOA}`;
			break;
		
		case 'ETH':
			document.getElementById('P-EMISSION-WARNING-REDEEM').innerHTML = `${personalemission.ETH}`;
			break;
	}	
	
});

$('input[type=checkbox][name=agree-redeem]').change(async () =>{
	if (document.getElementById('agree-redeem').checked){
		if (document.getElementById('CONFIRM-REDEEM').disabled == true){
			document.getElementById('CONFIRM-REDEEM').disabled = false;
		}
	}else{
		if (document.getElementById('CONFIRM-REDEEM').disabled == false){
			document.getElementById('CONFIRM-REDEEM').disabled = true;
		}
	}
	
	
	
	
});

$('#CONFIRM-REDEEM').click(async () => {
   var ashContract = web3.eth.contract(YFKA_CONTROLLER_ABI);
  ashContract = ashContract.at(checksumAddress(YFKA_CONTROLLER_ADDRESS));

  if (DISPLAY_CONSOLE) console.log('Redeem btn click');
  const value = $('[name=redeem][type=radio]:checked').val();
  const idx = getIndexBySymbol(value);

  ashContract.redeem(idx, function (err, res) {
		$('#redeemReceipt').html('<a target="_blank" rel="noreferrer noopener" href="https://etherscan.io/tx/' + res + '">Redeem Receipt</a>');
		const redeemReceipt = document.getElementById('redeemReceipt');
		if (redeemReceipt && redeemReceipt.style) {
			document.getElementById('redeemReceipt').style.opacity = '1';
		}
  });
});

/* 
--------------------------------------------------------------------------------------
*/

/* UNSTAKE BUTTON FUNCTIONALITY WITH WARNING 
--------------------------------------------------------------------------------------------
*/
$('input[type=checkbox][name=agree-unstake]').change(async () =>{
	if (document.getElementById('agree-unstake').checked){
		if (document.getElementById('CONFIRM-UNSTAKE').disabled == true){
			document.getElementById('CONFIRM-UNSTAKE').disabled = false;
		}
	}else{
		if (document.getElementById('CONFIRM-UNSTAKE').disabled == false){
			document.getElementById('CONFIRM-UNSTAKE').disabled = true;
		}
	}
});

$('#CONFIRM-UNSTAKE').click(async () => {
  var ashContract = web3.eth.contract(YFKA_CONTROLLER_ABI);
  ashContract = ashContract.at(checksumAddress(YFKA_CONTROLLER_ADDRESS));

  if (DISPLAY_CONSOLE) console.log('unstake btn click');
  const value = $('[name=unstake][type=radio]:checked').val();
  const idx = getIndexBySymbol(value);

  var amount = $('#unstake-input').val();
  
  
  amount = _.toNumber(amount) * 10 ** 18;
  ashContract.unstake(idx, amount, function (err, res) {
		if (DISPLAY_CONSOLE) console.log('https://etherscan.io/tx/' + res);
		$('#unstakeReceipt').html('<a target="_blank" rel="noreferrer noopener" href="https://etherscan.io/tx/' + res + '">Unstake Receipt</a>');
		//OPEN WINDOW WITH RECIPET
		window.open("https://etherscan.io/tx/" + res );
		const unstakeReceipt = document.getElementById('unstakeReceipt');
		//RELOAD THIS PAGE
		location.reload();
		if (unstakeReceipt && unstakeReceipt.style) {
			document.getElementById('unstakeReceipt').style.opacity = '1';
		}
  });
});

/*

$('#id1').change(async ()=>{
var slideCol = document.getElementById("id1");
 var balance = $('#unstake-input-hidden').val();
	document.getElementById("unstake-input").value = balance * (slideCol.value/100);
	
});
*/
  
$('#unstakeBTN').click(async () => {

	

	
	const personalemission = await getPersonalEmissions().catch(e => {
		errorHandling(e, 'getPersonalEmissions()');
		return("error");
	});
	switch ($('[name=unstake][type=radio]:checked').val())
	{
		case 'XAMP':
			document.getElementById('P-EMISSION-WARNING-UNSTAKING').innerHTML = `${personalemission.XAMP}`;
			break;
		
		case 'TOB':
			document.getElementById('P-EMISSION-WARNING-UNSTAKING').innerHTML = `${personalemission.TOB}`;
			break;
		
		case 'BOA':
			document.getElementById('P-EMISSION-WARNING-UNSTAKING').innerHTML = `${personalemission.BOA}`;
			break;
		
		case 'ETH':
			document.getElementById('P-EMISSION-WARNING-UNSTAKING').innerHTML = `${personalemission.ETH}`;
			break;
	}
	
	
	
});

/* 
--------------------------------------------------------------------------------------
*/

$('#connectToMetamask').click(async () => {
	
	const provider = await window.web3.currentProvider.enable().catch(e => {
			errorHandling(e, 'currentProvider.enable()');
			return("error");
	});
	if (provider != "error")
	{
		setTimeout(() => {  MetaConnect();; }, 100);
	}
});

$('#dropDownInfo').click(async () => {
	var x = document.getElementById('moreInfodiv');
	if (DISPLAY_CONSOLE) console.log('more info Clicked');
	if (DISPLAY_CONSOLE) console.log('Style.Display = ', x.style.display);
	
	if (x.style.display == 'none') {
		if (DISPLAY_CONSOLE) console.log('set moreInfodiv to fixed');
		x.style.display = "block";
		if (DISPLAY_CONSOLE) console.log('Style.Display = ', x.style.display);
	} else {
		if (DISPLAY_CONSOLE) console.log('set moreInfodiv to none');
		x.style.display = "none";
		if (DISPLAY_CONSOLE) console.log('Style.Display = ', x.style.display);
	}
});

$('#dropDownInfoClose').click(async () => {
	if (DISPLAY_CONSOLE) console.log('more info Close Clicked');
	if (document.getElementById('moreInfodiv').style.display === 'none') {
		if (DISPLAY_CONSOLE) console.log('set moreInfodiv to fixed');
		document.getElementById('moreInfodiv').style.display = 'inline';
				document.getElementById('XampInfoPanel').style.display = 'block';
	document.getElementById('TobInfoPanel').style.display = 'none';
	document.getElementById('BoaInfoPanel').style.display = 'none';
	document.getElementById('EthInfoPanel').style.display = 'none';
	document.getElementById('WalletInfoPanel').style.display = 'none';
	} else {
		if (DISPLAY_CONSOLE) console.log('set moreInfodiv to none');
		document.getElementById('moreInfodiv').style.display = 'none';
		document.getElementById('XampInfoPanel').style.display = 'none';
		document.getElementById('TobInfoPanel').style.display = 'none';
		document.getElementById('BoaInfoPanel').style.display = 'none';
		document.getElementById('EthInfoPanel').style.display = 'none';
		document.getElementById('WalletInfoPanel').style.display = 'none';
	}


	
	
});

$('#WALLETInfo').click(async () => {
	if (DISPLAY_CONSOLE) console.log('XAMP Info Clicked');
	document.getElementById('XampInfoPanel').style.display = 'none';
	document.getElementById('TobInfoPanel').style.display = 'none';
	document.getElementById('BoaInfoPanel').style.display = 'none';
	document.getElementById('EthInfoPanel').style.display = 'none';
	document.getElementById('WalletInfoPanel').style.display = 'block';
});

$('#XAMPInfo').click(async () => {
	if (DISPLAY_CONSOLE) console.log('XAMP Info Clicked');
	document.getElementById('XampInfoPanel').style.display = 'block';
	document.getElementById('TobInfoPanel').style.display = 'none';
	document.getElementById('BoaInfoPanel').style.display = 'none';
	document.getElementById('EthInfoPanel').style.display = 'none';
	document.getElementById('WalletInfoPanel').style.display = 'none';

});
$('#TOBInfo').click(async () => {
	if (DISPLAY_CONSOLE) console.log('TOB Info Clicked');
	document.getElementById('XampInfoPanel').style.display = 'none';
	document.getElementById('TobInfoPanel').style.display = 'block';
	document.getElementById('BoaInfoPanel').style.display = 'none';
	document.getElementById('EthInfoPanel').style.display = 'none';
	document.getElementById('WalletInfoPanel').style.display = 'none';

});
$('#BOAInfo').click(async () => {
	if (DISPLAY_CONSOLE) console.log('BOA Info Clicked');
	document.getElementById('XampInfoPanel').style.display = 'none';
	document.getElementById('TobInfoPanel').style.display = 'none';
	document.getElementById('BoaInfoPanel').style.display = 'block';
	document.getElementById('EthInfoPanel').style.display = 'none';
	document.getElementById('WalletInfoPanel').style.display = 'none';

});
$('#ETHInfo').click(async () => {
	if (DISPLAY_CONSOLE) console.log('ETH Info Clicked');
	document.getElementById('XampInfoPanel').style.display = 'none';
	document.getElementById('TobInfoPanel').style.display = 'none';
	document.getElementById('BoaInfoPanel').style.display = 'none';
	document.getElementById('EthInfoPanel').style.display = 'block';
	document.getElementById('WalletInfoPanel').style.display = 'none';
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

window.addEventListener('load', async (event) => {

	if (DISPLAY_CONSOLE) console.log("PAGE LOAD");
	//await stakeMinimumPrice();
	
	
	
	
	//Mobile Detection.
	setTimeout(function(){
		if((screen.width<480) || (screen.height <480)){
			if (DISPLAY_CONSOLE) console.log('User appears to be on a mobile.');
		}
	}, 100);

	web3.eth.getAccounts(async function(err, accounts){
		try {
			
			
			if (err != null) console.error("An error occurred: "+err);
			else if (accounts.length == 0){
				if (DISPLAY_CONSOLE) console.log('NO ACCOUNTS CONNECTED!');
				var durp = await updateGlobal().catch(e => {
					errorHandling(e, 'updateGlobal()');
				});
			}			
			else {
				
				
				console.log("User is logged in to MetaMask");
				if (DISPLAY_CONSOLE) console.log('ACCOUNTS CONNECTED!');
				await updateGlobal();

				
				var updateAP = await updateActivePool().catch(e => {
						errorHandling(e, 'updateActivePool()');
				});
				
				if (updateAP != "error"){
					var updateUS = await updateUserStats().catch(e => {
						errorHandling(e, 'updateUserStats()');
					});
				}
				
				

				if (updateUS != "error"){
					await setStakeBalance({
						currentTarget: {
							value: 'XAMP',
						}
					}).catch(e => {
						errorHandling(e, 'setStakeBalance()');
					});
					await setRedeemBalance({
						currentTarget: {
							value: 'XAMP',
						}
					}).catch(e => {
						errorHandling(e, 'setRedeemBalance()');
					});
					await setUnstakeBalance({
							currentTarget: {
							value: 'XAMP',
						}
					}).catch(e => {
						errorHandling(e, 'setUnstakeBalance()');
					});
					$('#isConnected').html('wallet connected');
				}
				
				await FillInfo();
				if (DISPLAY_CONSOLE) console.log("---END OF INITIAL LOAD---");
			}
		}catch(e){
			errorHandling(e, 'GetAccounts()');
		}
	});
	
});




