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

function errorHandling(error, functionCall)
{
	const errorCode = error.code;
	const errorMessage = error.message;
	if (DISPLAY_ERRORS) {
		const Message = 'ERROR (' + functionCall + '): ' + errorMessage;
		if (DISPLAY_CONSOLE) console.log(Message);
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

const getPricesUSD = async () => {
  const tokenKeys = Object.keys(TOKENS);

  const response = await fetch(`https://api.coingecko.com/api/v3/simple/token_price/ethereum?contract_addresses=${tokenKeys.map(k => TOKENS[k]).join(',')}&vs_currencies=usd`);
  const tokenPrices = await response.json();

  // USD
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




const getPricesETH = async () => {
  const tokenKeys = Object.keys(TOKENS);

  const response = await fetch(`https://api.coingecko.com/api/v3/simple/token_price/ethereum?contract_addresses=${tokenKeys.map(k => TOKENS[k]).join(',')}&vs_currencies=eth`);
  const tokenPrices = await response.json();

  // ETH
  return {
    YFKA: tokenPrices[TOKENS.YFKA],
    XAMP: tokenPrices[TOKENS.XAMP],
    BOA: tokenPrices[TOKENS.BOA],
    TOB: tokenPrices[TOKENS.TOB],
  }
}

const getReserves = async () => {
  if (DISPLAY_CONSOLE) console.log('getBalances');
  const account = await getAccount();
  if (!account) return null;

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

	const YFKAXAMPReserves = await xampContract.methods.getReserves().call();
	const totalLP = await xampContract.methods.totalSupply().call();
	const XAMPReserve = YFKAXAMPReserves[1]/(10**9);
	const YFKAReserve= YFKAXAMPReserves[0]/(10**18);
	//lptotal/2/yfka-0.6%
	const halfLP = (totalLP/(10**18))/2;
	const XAMPtoLP = halfLP/XAMPReserve
	const feeCalc = 0.6;


	if (DISPLAY_CONSOLE) console.log("YFKA/XAMP reserves: ", YFKAXAMPReserves);
	if (DISPLAY_CONSOLE) console.log("YFKA reserves: ", YFKAXAMPReserves[0]);
	if (DISPLAY_CONSOLE) console.log("XAMP reserves: ", YFKAXAMPReserves[1]);
	if (DISPLAY_CONSOLE) console.log("YFKA reserves: ", YFKAXAMPReserves[0]/(10**18));
	if (DISPLAY_CONSOLE) console.log("XAMP reserves: ", YFKAXAMPReserves[1]/(10**9));
	
	if (DISPLAY_CONSOLE) console.log("LP to XAMP: ", eightDecimals((XAMPtoLP-(XAMPtoLP*feeCalc)))*100);
	
	
	const YFKATOBReserves = await tobContract.methods.getReserves().call();
	const totalLPTOB = await tobContract.methods.totalSupply().call();
	const TOBReserve = YFKATOBReserves[1]/(10**9);
	const YFKAReserveTOB= YFKATOBReserves[0]/(10**18);
	//lptotal/2/yfka-0.6%
	const halfLPTOB = (totalLP/(10**18))/2;
	const TOBtoLP = halfLPTOB/TOBReserve



	if (DISPLAY_CONSOLE) console.log("YFKA/TOB reserves: ", YFKATOBReserves);
	if (DISPLAY_CONSOLE) console.log("YFKA reserves: ", YFKATOBReserves[0]);
	if (DISPLAY_CONSOLE) console.log("TOB reserves: ", YFKATOBReserves[1]);
	if (DISPLAY_CONSOLE) console.log("YFKA reserves: ", YFKATOBReserves[0]/(10**18));
	if (DISPLAY_CONSOLE) console.log("TOB reserves: ", YFKATOBReserves[1]/(10**18));
	
	if (DISPLAY_CONSOLE) console.log("LP to TOB: ", eightDecimals((TOBtoLP-(TOBtoLP*feeCalc))));
	
	
	
	
};




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
			if (DISPLAY_CONSOLE) console.log('XAMP Balance = ', XAMPbalance);
			if (DISPLAY_CONSOLE) console.log('XAMP Total =', TotalXAMPbalance);
			var readableTotalXAMP = twoDecimals(TotalXAMPbalance);
			var readablePercentage = belowZero(fourDecimals(percentXAMP));
			if (DISPLAY_CONSOLE) console.log('XAMP % = ', readablePercentage);
			$('#pool-Share-XAMP').html(`${readablePercentage}`);
			$('#total-LP-XAMP').html(`${readableTotalXAMP}`);

			//TOB
			const TotalTOBbalance = TotalBalances.TOB;
			const percentTOB = (fourDecimals(tobLpBalance / 10 ** 18) / TotalTOBbalance) * 100;
			if (DISPLAY_CONSOLE) console.log('TOB Balance = ', TOBbalance);
			if (DISPLAY_CONSOLE) console.log('TOB Total =', TotalTOBbalance);
			var readableTotalTOB = twoDecimals(TotalTOBbalance);
			var readablePercentTOB = belowZero(fourDecimals(percentTOB));
			$('#pool-Share-TOB').html(`${readablePercentTOB}`);
			$('#total-LP-TOB').html(`${readableTotalTOB}`);

			//BOA
			const TotalBOAbalance = TotalBalances.BOA;
			const percentBOA = (fourDecimals(boaLpBalance / 10 ** 18) / TotalBOAbalance) * 100;
			var readableTotalBOA = twoDecimals(TotalBOAbalance);
			var readablePercentageBOA = belowZero(fourDecimals(percentBOA));
			if (DISPLAY_CONSOLE) console.log('BOA % = ', readablePercentage);
			$('#pool-Share-BOA').html(`${readablePercentageBOA}`);
			$('#total-LP-BOA').html(`${readableTotalBOA}`);

			//ETH
			const TotalETHbalance = TotalBalances.ETH;
			const percentETH = (fourDecimals(ethLpBalance / 10 ** 18) / TotalETHbalance) * 100;
			var readableTotalETH = twoDecimals(TotalETHbalance);
			var readablePercentageETH = belowZero(fourDecimals(percentETH));
			$('#pool-Share-ETH').html(`${readablePercentageETH}`);
			$('#total-LP-ETH').html(`${readableTotalETH}`);
		}else return("error");
	}else return("error");
};


const updateActivePool = async () => {
	if (DISPLAY_CONSOLE) console.log('updateActivePool');
	const _globalEmissionRate = await getGlobalEmissionRate().catch(e => {
		errorHandling(e, 'getGlobalEmissionRate()');
		return("error");
	});
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
      document.getElementById('stakeReceipt').style.opacity = '1';
      // updatePoolBalances();
    });
  });
}

const setStakeBalance = async (event)=> {
  if (DISPLAY_CONSOLE) console.log('change radio stake');
  const balances = await getPoolBalances();
  if (DISPLAY_CONSOLE) console.log('balances: ', balances);
  // const balance = twoDecimals(balances[event.currentTarget.value]);
  const balance = balances[event.currentTarget.value];
  if (DISPLAY_CONSOLE) console.log('balance: ', balance);
  // TODO
  $('#stake-input').val(sixDecimals(balance));
  // $('#stake-input').attr('placeholder', `${balance}`);
  $('#stake-balance').html(sixDecimals(balance));
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

$('#redeemBTN').click(async () => {
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

$('#unstakeBTN').click(async () => {
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

		const unstakeReceipt = document.getElementById('unstakeReceipt');
		if (unstakeReceipt && unstakeReceipt.style) {
			document.getElementById('unstakeReceipt').style.opacity = '1';
		}
  });
});


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
		document.getElementById('moreInfodiv').style.display = 'fixed';
	} else {
		if (DISPLAY_CONSOLE) console.log('set moreInfodiv to none');
		document.getElementById('moreInfodiv').style.display = 'none';
	}
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
	
	await getReserves();
	
	
	//Mobile Detection.
	setTimeout(function(){
		if((screen.width<480) || (screen.height <480)){
			if (DISPLAY_CONSOLE) console.log('User appears to be on a mobile.');
		}
	}, 100);
	
	const response = await fetch('https://api.coingecko.com/api/v3/simple/token_price/ethereum?contract_addresses=0xf911a7ec46a2c6fa49193212fe4a2a9b95851c27&vs_currencies=usd');
	const data = await response.json();
	
	if (DISPLAY_CONSOLE) console.log('USD amount = $', data['0xf911a7ec46a2c6fa49193212fe4a2a9b95851c27'].usd);
	
	
	web3.eth.getAccounts(async function(err, accounts){
		try {
			
			
			if (err != null) console.error("An error occurred: "+err);
			else if (accounts.length == 0){
				if (DISPLAY_CONSOLE) console.log('NO ACCOUNTS CONNECTED!');
				await updateGlobal().catch(e => {
					errorHandling(e, 'updateGlobal()');
				});
			}			
			else {
				console.log("User is logged in to MetaMask");
				if (DISPLAY_CONSOLE) console.log('ACCOUNTS CONNECTED!');
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
		}catch(e){
			errorHandling(e, 'GetAccounts()');
		}
	});
	
});
