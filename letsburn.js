// CONSTANTS
const TOKENS = {
  YFKA: '0x4086692d53262b2be0b13909d804f0491ff6ec3e',
  XAMP: '0xf911a7ec46a2c6fa49193212fe4a2a9b95851c27',
  BOA: '0xf9c36c7ad7fa0f0862589c919830268d1a2581a1',
  TOB: '0x7777770f8a6632ff043c8833310e245eba9209e6',
}

const PAIRS = {
  YFKA_XAMP: '0xaea4D6809375Bb973C8036D53DB9E90970942738',
  YFKA_TOB: '0x34d0448A79F853d6E1f7ac117368C87BB7bEeA6B',
  YFKA_BOA: '0x5ecF87ff558f73D097EDdfEE35abDE626c7Aeab7',
  YFKA_ETH: '0xC0cfB99342860725806f085046d0233FEc876Cd7',
}

const POOLS = [
  PAIRS.YFKA_XAMP,
  PAIRS.YFKA_TOB,
  PAIRS.YFKA_BOA,
  PAIRS.YFKA_ETH,
]
const uniTokenABI = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}];
const contractABI = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"previousPool","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"newPool","type":"uint256"}],"name":"BonusPoolChange","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"previousRate","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"newRate","type":"uint256"}],"name":"EmissionRateCut","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"_getBlocksSinceLastReduction","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_getNextRateReduction","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_getTotalNextRateReduction","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"addWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"blocks_per_year","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decayDivisor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decayPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"emissionRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getActivePool","outputs":[{"internalType":"uint8","name":"idx","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"idx","type":"uint8"}],"name":"getCurrentReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"idx","type":"uint8"}],"name":"getCurrentRewardPerYear","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"idx","type":"uint8"}],"name":"getLastBlockWithdrawn","outputs":[{"internalType":"uint256","name":"reward","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"idx","type":"uint8"},{"internalType":"address","name":"_addr","type":"address"}],"name":"getPersonalEmissionRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastBlockUpdated","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"address","name":"","type":"address"}],"name":"lastBlockWithdrawn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minimum_stake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"multiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"address","name":"","type":"address"}],"name":"personalEmissions","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"idx","type":"uint8"}],"name":"personalYFKAStaked","outputs":[{"internalType":"uint256","name":"points","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pools","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"idx","type":"uint8"}],"name":"redeem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setOpen","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"idx","type":"uint8"},{"internalType":"address","name":"_addr","type":"address"}],"name":"setPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"setYFKA","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"idx","type":"uint8"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"address","name":"","type":"address"}],"name":"stakes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"idx","type":"uint8"}],"name":"totalYFKAStaked","outputs":[{"internalType":"uint256","name":"points","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"transferOwnershipOfYFKA","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"idx","type":"uint8"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"unstake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"yfka","outputs":[{"internalType":"contract IYFKA","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"idx","type":"uint8"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"yfkaPerLP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];
const YFKA_CONTROLLER_ADDRESS = '0x615983a35cf71d89f1b094e920151d7ea9bf48bc';

// TODO parse/stringify prob not needed
const STANDARD_ERC20_ABI = JSON.parse(JSON.stringify([
  {
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "name": "",
        "type": "uint8"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_owner",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "name": "balance",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "type": "function"
  }
]));

const YFKA_CONTROLLER_ABI = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"previousPool","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"newPool","type":"uint256"}],"name":"BonusPoolChange","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"previousRate","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"newRate","type":"uint256"}],"name":"EmissionRateCut","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"_getBlocksSinceLastReduction","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_getNextRateReduction","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_getTotalNextRateReduction","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"addWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"blocks_per_year","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decayDivisor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decayPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"emissionRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getActivePool","outputs":[{"internalType":"uint8","name":"idx","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"idx","type":"uint8"}],"name":"getCurrentReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"idx","type":"uint8"}],"name":"getCurrentRewardPerYear","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"idx","type":"uint8"}],"name":"getLastBlockWithdrawn","outputs":[{"internalType":"uint256","name":"reward","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"idx","type":"uint8"},{"internalType":"address","name":"_addr","type":"address"}],"name":"getPersonalEmissionRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastBlockUpdated","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"address","name":"","type":"address"}],"name":"lastBlockWithdrawn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minimum_stake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"multiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"address","name":"","type":"address"}],"name":"personalEmissions","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"idx","type":"uint8"}],"name":"personalYFKAStaked","outputs":[{"internalType":"uint256","name":"points","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pools","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"idx","type":"uint8"}],"name":"redeem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setOpen","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"idx","type":"uint8"},{"internalType":"address","name":"_addr","type":"address"}],"name":"setPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"setYFKA","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"idx","type":"uint8"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"address","name":"","type":"address"}],"name":"stakes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"idx","type":"uint8"}],"name":"totalYFKAStaked","outputs":[{"internalType":"uint256","name":"points","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"transferOwnershipOfYFKA","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"idx","type":"uint8"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"unstake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"yfka","outputs":[{"internalType":"contract IYFKA","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"idx","type":"uint8"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"yfkaPerLP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]


// HELPERS
const isConnected = () => {
  return !!web3.isConnected();
}

const getInfuraProvider = () => {
  const INFURA_PROVIDER = new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/91298a4448d34edf884df8b28db5f9ea');
  return new Web3(INFURA_PROVIDER);
}

const yfkaControllerContract = () => {
  const infuraProvider = getInfuraProvider();
  const contract = new infuraProvider.eth.Contract(YFKA_CONTROLLER_ABI, YFKA_CONTROLLER_ADDRESS);
  return contract;
}

const getAccount = async () => {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
	console.log("accounts:" , accounts);
  const provider = getInfuraProvider();
  return provider.utils.toChecksumAddress(accounts[0]);
}

const getPoolBalances = async () => {
  console.log('getBalances');
  const account = await getAccount();
  if (!account) return null;

  const provider = getInfuraProvider();

  // YFKA_XAMP
  const xampContract = new provider.eth.Contract(STANDARD_ERC20_ABI, PAIRS.YFKA_XAMP);
  const xampContractBalance = await xampContract.methods.balanceOf(account).call();
  console.log('xampContractBalance: ', xampContractBalance);

  const xampContractDecimals = await xampContract.methods.decimals().call();
  console.log('xampContractDecimals: ', xampContractDecimals);

  // YFKA_TOB
  const tobContract = new provider.eth.Contract(STANDARD_ERC20_ABI, PAIRS.YFKA_TOB);
  const tobContractBalance = await tobContract.methods.balanceOf(account).call();
  console.log('tobContractBalance: ', tobContractBalance);

  const tobContractDecimals = await tobContract.methods.decimals().call();
  console.log('tobContractDecimals: ', tobContractDecimals);

  // YFKA_BOA
  const boaContract = new provider.eth.Contract(STANDARD_ERC20_ABI, PAIRS.YFKA_BOA);
  const boaContractBalance = await boaContract.methods.balanceOf(account).call();
  console.log('boaContractBalance: ', boaContractBalance);

  const boaContractDecimals = await boaContract.methods.decimals().call();
  console.log('boaContractDecimals: ', boaContractDecimals);

  // YFKA_ETH
  const ethContract = new provider.eth.Contract(STANDARD_ERC20_ABI, PAIRS.YFKA_ETH);
  const ethContractBalance = await ethContract.methods.balanceOf(account).call();
  console.log('ethContractBalance: ', ethContractBalance);

  const ethContractDecimals = await ethContract.methods.decimals().call();
  console.log('ethContractDecimals: ', ethContractDecimals);


  // TODO TOB showing NaN so figure that out
  return {
    XAMP: xampContractBalance ? xampContractBalance / (10 ** xampContractDecimals) : 0,
    TOB: tobContract ? tobContractBalance / (10 ** tobContractDecimals) : 0,
    BOA: boaContractBalance ? boaContractBalance / (10 ** boaContractDecimals) : 0,
    ETH: ethContractBalance ? ethContractBalance / (10 ** ethContractDecimals) : 0,
  }
}

const getBonusPool = async () => {
  console.log('getBonusPool');
  const contract = yfkaControllerContract();
  const idx = await contract.methods.getActivePool().call();
  return POOLS[idx];
}

const getGlobalEmissionRate = async () => {
  console.log('getGlobalEmissionRate');
  const contract = yfkaControllerContract();
  const emissionRate = await contract.methods.emissionRate().call();
  console.log('emissionRate: ', emissionRate);
  // TODO is it 18 tho
  const emissionRateToHuman = ((emissionRate / (10 ** 18))/2);
  console.log('emissionRateToHuman: ', emissionRateToHuman);

  const emissionRateToReadable = Math.round((emissionRateToHuman) * 100);
  console.log('emissionRateToReadable: ', emissionRateToReadable);
  return emissionRateToReadable;
}


// UI FUNCTIONS
const updateActivePool = async () => {
  console.log('updateActivePool');
  const globalEmissionRate = await getGlobalEmissionRate();
  const bonusEmissionRate = Math.round(globalEmissionRate * 2);
  $('#global-rate').html(`${globalEmissionRate}%`);
  $('#bonus-global-rate').html(`${bonusEmissionRate}%`);

  $('#eth-apy').html(`${globalEmissionRate}`);
  $('#xamp-apy').html(`${globalEmissionRate}`);
  $('#tob-apy').html(`${globalEmissionRate}`);
  $('#boa-apy').html(`${globalEmissionRate}`);

  const bonusAddress = await getBonusPool();
  switch (bonusAddress) {
    case PAIRS.YFKA_XAMP:
      $('#bonus-global-token').html('XAMP');
      $('#xamp-apy').html(`${bonusEmissionRate}`);
      break;
    case PAIRS.YFKA_TOB:
      $('#bonus-global-token').html('TOB');
      $('#tob-apy').html(`${bonusEmissionRate}`);
      break;
    case PAIRS.YFKA_BOA:
      $('#bonus-global-token').html('BOA');
      $('#boa-apy').html(`${bonusEmissionRate}`);
      break;
    case PAIRS.YFKA_ETH:
    default:
      // Dont do shit
      break;
  }
  // contractInstance.getActivePool(function (err, res) {
  //     if(res == 0) document.getElementById("activePool").innerHTML = "Bonus Pool: XAMP";
  //     else if(res == 1) document.getElementById("activePool").innerHTML = "Bonus Pool: TOB";
  //     else if(res == 2) document.getElementById("activePool").innerHTML = "Bonus Pool: BOA";
  // });

}



const getYFKASupply = async () => {
	
}

function waitForApproval(tx, contractInstance, payload) {
 	web3.eth.getTransaction(tx,
 		function (err, res2) {

    	if(res2['blockNumber'] == null) setTimeout(() => { waitForApproval(tx, contractInstance, payload)}, 5000);
 			else {
       	setTimeout(() => { console.log(res2);}, 5000);
	console.log('Approval - Success.... Moving on');
       	contractInstance.stake(payload, document.getElementById("stake-input").value * 10**18, function (err, res) {
           //document.getElementById("stakeReceipt").innerHTML = '<a href="https://etherscan.io/tx/' + res + '">Click here to view your transaction.</a>';
           //document.getElementById("stakeReceipt").style.opacity = "1";
           // updatePoolBalances();
       	});
       }

       console.log(res2);
   	}
 	);
}




$('input[type=radio][name=stake]').change(async (event) => {
  console.log('change radio stake');
  const balances = await getPoolBalances();
  console.log('balances: ', balances);
  const balance = balances[event.currentTarget.value];
  console.log('balance: ', balance);
  // TODO
  $('#stake-input').val(`${balance}`);
  $('#stake-input').attr('placeholder', `${balance}`);
  $('#stake-balance').html(`${balance}`)
  return balance || '';
});

$('#stakeBTN').click(async () => {
	
var uniContract = web3.eth.contract(uniTokenABI);
  console.log('stake value: ', 'stake btn click');
  const keys = Object.keys(PAIRS);
  console.log('keys: ', keys);
  const value = $('[name=stake][type=radio]:checked').val();
  var ashContract = web3.eth.contract(contractABI);
  var contractInstance = ashContract.at(YFKA_CONTROLLER_ADDRESS);
  var payload;
//PULL uniInstance info from radio button.
  switch (value){
	case 'XAMP':
	uniInstance = uniContract.at(PAIRS.YFKA_XAMP);
		break;
	case 'TOB':
	uniInstance = uniContract.at(PAIRS.YFKA_TOB);
		break;
	case 'BOA':
	uniInstance = uniContract.at(PAIRS.YFKA_BOA);
		break;
	case 'ETH':
	uniInstance = uniContract.at(PAIRS.YFKA_ETH);
		break;
	default:
		//do Nothing
		console.log('Nothing Selected:');
		break;
  }	
	
  console.log('value: ', value);
  const indexOfValue = keys.map((key) => {
    return key.indexOf(value) >= 0;
  })
  const idx = indexOfValue.indexOf(true);
  console.log('idx: ', idx);
  const pool = POOLS[idx];
  console.log('pool: ', pool);

  // TODO get real 10**18 valu prob + BN
  const amount = $('#stake-input').val();
  console.log('amount ', amount);
  if (amount === 0 || amount === '0') return;

  // // TODO
  if (!window.ethereum) return;

 /*   // // TODO
  if (!window.ethereum) return;
  // // TODO figure out state etc
  const transactionParameters = {
     nonce: '0x00', // ignored by MetaMask
     gasPrice: window.'0x09184e72a000', // customizable by user during MetaMask confirmation.
     gas: '0x2710', // customizable by user during MetaMask confirmation.
     to: YFKA_CONTROLLER_ADDRESS, // Required except during contract publications.
     from: window.ethereum.selectedAddress, // must match user's active address.
     value: '0x00', // Only required to send ether to the recipient from the initiating external account.
     data:
       '0x7f7465737432000000000000000000000000000000000000000000000000000000600057', // Optional, but used for defining smart contract creation and interaction.
     chainId: 3, // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
   };
  const txHash = await window.ethereum.request({
		method: 'eth_sendTransaction',
		params: [transactionParameters],
	});
  const contract = yfkaControllerContract();
 */
  //const tx = await contract.methods.stake(idx, amount).call();
	uniInstance.approve(YFKA_CONTROLLER_ADDRESS, amount * 10**18, function (err, res) {
	console.log("APPROVE TX: https://etherscan.io/tx/" + res);
	//TODO: ADD TRX ADDRESS UNDER BUTTON....
	//document.getElementById("stakeReceipt").innerHTML = "Awaiting approval...";
	//document.getElementById("stakeReceipt").style.opacity = "1";
	waitForApproval(res, contractInstance, payload);
	});
})


window.addEventListener('load', async (event) => {
  if (!isConnected()) return;
    console.log("connected");
    //updatePoolBalances();
    $("#isConnected").html("wallet connected");

    await updateActivePool();
    // Set defaults
    const poolBalances = await getPoolBalances();
    // TODO use const
    const balance = poolBalances['XAMP'];
    $('#stake-input').val(`${balance}`);
    $('#stake-input').attr('placeholder', `${balance}`);
    $('#stake-balance').html(`${balance}`);
    console.log(poolBalances);
});

$('input[type=radio][name=redeem]').change(async (event) => {
	console.log('change radio redeem');
	var ashContract = web3.eth.contract(contractABI);
	var contractInstance = ashContract.at(YFKA_CONTROLLER_ADDRESS);
	const value = $('[name=redeem][type=radio]:checked').val();
	var payload;
	const account = await getAccount();
	
	if(value == "XAMP") payload = 0;
	else if(value == "TOB") payload = 1;
	else if(value == "BOA") payload = 2;
	else if(value == "ETH") payload = 3;
	console.log('Selected Coin: ',value,";Payload: ",payload);
	
	var balance;
	contractInstance.getCurrentReward(payload, function (err, res) {
		console.log("Number Redeemed: " + res / 10**18);
		balance = res / 10**18;
	$('#reward-input').val(`${balance}`);
	$('#reward-input').attr('placeholder', `${balance}`);
	$('#reward-balance').html(`${balance}`);
	//return balance || '';
	});

	contractInstance.getPersonalEmissionRate(payload, account, function (err, res) {
		console.log("Personal Emission: " + res/ 10**18);
		const emissionRateToHuman = (res / (10 ** 18)/2);
		console.log('emissionRateToHuman: ', emissionRateToHuman);
		
		var emissionRateToReadable = Math.round(emissionRateToHuman * 100);
		if (emissionRateToReadable < 0) {emissionRateToReadable = 0;}
		console.log('emissionRateToReadable: ', emissionRateToReadable);
		$('#personal-emission').html(`${emissionRateToReadable}`);
	});
	
	
	
	
});




$('input[type=radio][name=unstake]').change(async (event) => {
	console.log('change radio unstake');
	var ashContract = web3.eth.contract(contractABI);
	var contractInstance = ashContract.at(YFKA_CONTROLLER_ADDRESS);
	const value = $('[name=unstake][type=radio]:checked').val();
	var payload;

	if(value == "XAMP") payload = 0;
	else if(value == "TOB") payload = 1;
	else if(value == "BOA") payload = 2;
	else if(value == "ETH") payload = 3;
	console.log('Selected Coin: ',value,";Payload: ",payload);
	
	var balance;
	contractInstance.getPointsForStake(payload, function (err, res) {
		console.log("Number Redeemed: " + res / 10**18);
		balance = res / 10**18;
	$('#unstake-input').val(`${balance}`);
	$('#unstake-input').attr('placeholder', `${balance}`);
	$('#unstake-balance').html(`${balance}`);
	return balance || '';
	});
});


