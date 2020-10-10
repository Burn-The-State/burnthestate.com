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

  const provider = getInfuraProvider();
  return provider.utils.toChecksumAddress(accounts[0]);
}

const getBalances = async () => {
  console.log('getBalances');
  const account = await getAccount();
  if (!account) return null;

  const provider = getInfuraProvider();

  // XAMP
  const xampContract = new provider.eth.Contract(STANDARD_ERC20_ABI, TOKENS.XAMP);
  const xampContractBalance = await xampContract.methods.balanceOf(account).call();
  console.log('xampContractBalance: ', xampContractBalance);

  const xampContractDecimals = await xampContract.methods.decimals().call();
  console.log('xampContractDecimals: ', xampContractDecimals);

  // TOB
  const tobContract = new provider.eth.Contract(STANDARD_ERC20_ABI, TOKENS.TOB);
  const tobContractBalance = await tobContract.methods.balanceOf(account).call();
  console.log('tobContractBalance: ', tobContractBalance);

  const tobContractDecimals = await tobContract.methods.decimals().call();
  console.log('tobContractDecimals: ', tobContractDecimals);

  // BOA
  const boaContract = new provider.eth.Contract(STANDARD_ERC20_ABI, TOKENS.BOA);
  const boaContractBalance = await boaContract.methods.balanceOf(account).call();
  console.log('boaContractBalance: ', boaContractBalance);

  const boaContractDecimals = await boaContract.methods.decimals().call();
  console.log('boaContractDecimals: ', boaContractDecimals);

  // YFKA
  const yfkaContract = new provider.eth.Contract(STANDARD_ERC20_ABI, TOKENS.YFKA);
  const yfkaContractBalance = await yfkaContract.methods.balanceOf(account).call();
  console.log('yfkaContractBalance: ', yfkaContractBalance);

  const yfkaContractDecimals = await yfkaContract.methods.decimals().call();
  console.log('yfkaContractDecimals: ', yfkaContractDecimals);


  // TODO TOB showing NaN so figure that out
  return {
    XAMP: xampContractBalance ? xampContractBalance / (10 ** xampContractDecimals) : 0,
    TOB: tobContract ? tobContract / (10 ** tobContractDecimals) : 0,
    BOA: boaContractBalance ? boaContractBalance / (10 ** boaContractDecimals) : 0,
    YFKA: yfkaContractBalance ? yfkaContractBalance / (10 ** yfkaContractDecimals) : 0,
  }

}

const getBonusPool = async () => {
  console.log('getBonusPool');
  const contract = yfkaControllerContract();
  const activePoolIndex = await contract.methods.getActivePool().call();
  console.log('activePoolIndex: ', activePoolIndex);
  console.log('active pool: ', POOLS[activePoolIndex]);
  return POOLS[activePoolIndex];
}

const getGlobalEmissionRate = async () => {
  console.log('getGlobalEmissionRate');
  const contract = yfkaControllerContract();
  const emissionRate = await contract.methods.emissionRate().call();
  console.log('emissionRate: ', emissionRate);
  // TODO is it 18 tho
  const emissionRateToHuman = emissionRate / (10 ** 18);
  console.log('emissionRateToHuman: ', emissionRateToHuman);

  const emissionRateToReadable = Math.round((emissionRateToHuman - 1) * 100);
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

  $('#eth-apy').html(`${globalEmissionRate}% <small>APY</small>`);
  $('#xamp-apy').html(`${globalEmissionRate}% <small>APY</small>`);
  $('#tob-apy').html(`${globalEmissionRate}% <small>APY</small>`);
  $('#boa-apy').html(`${globalEmissionRate}% <small>APY</small>`);

  const bonusAddress = await getBonusPool();
  switch (bonusAddress) {
    case PAIRS.YFKA_XAMP:
      $('#bonus-global-token').html('XAMP');
      $('#xamp-apy').html(`${bonusEmissionRate}% <small>APY</small>`);
      break;
    case PAIRS.YFKA_TOB:
      $('#bonus-global-token').html('TOB');
      $('#tob-apy').html(`${bonusEmissionRate}% <small>APY</small>`);
      break;
    case PAIRS.YFKA_BOA:
      $('#bonus-global-token').html('BOA');
      $('#boa-apy').html(`${bonusEmissionRate}% <small>APY</small>`);
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

window.addEventListener('load', async (event) => {
  if (!isConnected()) return;
    console.log("connected");
    //updatePoolBalances();
    $("#isConnected").html("wallet connected");

    await updateActivePool();

    const balances = await getBalances();
    console.log(balances);
});







// var ashAddress = "0x615983a35CF71D89F1B094e920151d7eA9Bf48bc"


// function updatePoolBalances() {
//     var uniContract = web3.eth.contract(uniTokenABI);
//   var uniInstance = uniContract.at(uniTokenAddressXAMP);

//   var ashContract = web3.eth.contract(contractABI);
//   var contractInstance = ashContract.at(ashAddress);

//     var chartXAMP = document.getElementById('xampChart').getContext('2d');

//   uniInstance.balanceOf(ashAddress, function (err, res) {
//     contractInstance.getPointsForStake(0, res, function (err, stakedXAMP) {
//       // Chart info
//       var xampStaked = (stakedXAMP / 10**7);
//             var ctx = document.getElementById('xampChart').getContext('2d');
//       var myDoughnutChart = new Chart(ctx, {
//         type: 'doughnut',
//         data: {
//           labels: ['XAMP Pool Staked', 'Unstaked'],
//           datasets: [{
//             label: 'Amount Staked',
//             backgroundColor: ['rgb(255, 0, 0)','rgb(0, 0, 0)'],
//             borderColor: ['rgb(255, 0, 0)', 'rgb(0, 0, 0)'],
//             data: [xampStaked, 100- xampStaked]
//           }]
//         },
//         options: {}
//       });

//     });
//     });


//   var uniInstance = uniContract.at(uniTokenAddressTOB);

//   uniInstance.balanceOf(ashAddress, function (err, res) {
//     contractInstance.getPointsForStake(1, res, function (err, stakedTOB) {
//             var tobStaked = (stakedTOB / 10**7);
//             var ctx = document.getElementById('tobChart').getContext('2d');
//       var myDoughnutChart = new Chart(ctx, {
//         type: 'doughnut',
//         data: {
//           labels: ['TOB Pool Staked', 'Unstaked'],
//           datasets: [{
//             label: 'Amount Staked',
//             backgroundColor: ['rgb(255, 0, 0)','rgb(0, 0, 0)'],
//             borderColor: ['rgb(255, 0, 0)', 'rgb(0, 0, 0)'],
//             data: [tobStaked, 100- tobStaked]
//           }]
//         },
//         options: {}
//       });
//         });
//     });

//   var uniInstance = uniContract.at(uniTokenAddressBOA);

//     uniInstance.balanceOf(ashAddress, function (err, res) {
//     contractInstance.getPointsForStake(2, res, function (err, stakedBOA) {

//             var boaStaked = (stakedBOA / 10**7);
//             var ctx = document.getElementById('boaChart').getContext('2d');
//       var myDoughnutChart = new Chart(ctx, {
//         type: 'doughnut',
//         data: {
//           labels: ['BOA Pool Staked', 'Unstaked'],
//           datasets: [{
//             label: 'Amount Staked',
//             backgroundColor: ['rgb(255, 0, 0)','rgb(0, 0, 0)'],
//             borderColor: ['rgb(255, 0, 0)', 'rgb(0, 0, 0)'],
//             data: [boaStaked, 100- boaStaked]
//           }]
//         },
//         options: {}
//       });
//     });
//     });

//   var uniInstance = uniContract.at(uniTokenAddressETH);

//   uniInstance.balanceOf(ashAddress, function (err, res) {
//     contractInstance.getPointsForStake(2, res, function (err, stakedETH) {

//       var ethStaked = (stakedETH / 10**7);
//       var ctx = document.getElementById('ethChart').getContext('2d');
//       var myDoughnutChart = new Chart(ctx, {
//         type: 'doughnut',
//         data: {
//           labels: ['ETH Pool Staked', 'Unstaked'],
//           datasets: [{
//             label: 'Amount Staked',
//             backgroundColor: ['rgb(255, 0, 0)','rgb(0, 0, 0)'],
//             borderColor: ['rgb(255, 0, 0)', 'rgb(0, 0, 0)'],
//             data: [ethStaked, 100- ethStaked]
//           }]
//         },
//         options: {}
//       });
//     });
//   });

// }

// function waitForApproval(tx, contractInstance, payload) {
//     web3.eth.getTransaction(tx,
//         function (err, res2) {

//         if(res2['blockNumber'] == null) setTimeout(() => { waitForApproval(tx, contractInstance, payload)}, 5000);
//             else {
//           setTimeout(() => { console.log(res2);}, 5000);
//           contractInstance.stake(payload, document.getElementById("stakeAmount").value * 10**18, function (err, res) {
//           document.getElementById("stakeReceipt").innerHTML = '<a href="https://etherscan.io/tx/' + res + '">Click here to view your transaction.</a>';
//           document.getElementById("stakeReceipt").style.opacity = "1";
//           // updatePoolBalances();
//           });
//       }

//       console.log(res2);
//       }
//     );
// }



// const handleConnectToMetamask = async () => {
//   // Modern dapp browsers...
//   if (window.ethereum) {
//     window.web3 = new Web3(ethereum);
//     try {
//         // Request account access if needed
//         await ethereum.enable();
//         // Accounts now exposed
//         $("#isConnected").html("wallet connected");
//         web3.eth.sendTransaction({/* ... */});
//     } catch (error) {
//         // User denied account access...
//     }

//     return;
//   }

//   // Legacy dapp browsers...
//   if (window.web3) {
//     window.web3 = new Web3(web3.currentProvider);
//     // Acccounts always exposed
//     // web3.eth.sendTransaction({/* ... */});
//     return;
//   }


//   console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
// }

// document.getElementById("connectToMetamask").addEventListener('click', handleConnectToMetamask);


// //   document.getElementById("estimateButton").addEventListener('click', async () => {
// //       // Modern dapp browsers...
// //       if (web3.isConnected) {
// //           var ashContract = web3.eth.contract(contractABI);
// //         var contractInstance = ashContract.at(ashAddress);

// //         var e = document.getElementById("selectedToken");
// //         var value = e.options[e.selectedIndex].value;

// //         var payload;

// //               if(value == "XAMP") payload = 0;
// //         else if(value == "TOB") payload = 1;
// //         else if(value == "BOA") payload = 2;
// //         else if(value == "ETH") payload = 3;

// //         console.log(payload);

// //         contractInstance.getCurrentReward(payload, function (err, res) {
// //           console.log("Number Redeemed: " + res / 10**18);
// //           document.getElementById("estimateResult").innerHTML = "You will receive " + res / 10**18 + " YFKA";
// //                   document.getElementById("estimateResult").style.opacity = "1";
// //               });
// //       }

// //   });



//   // STAKING
//   // EXECUTE APPROVE ON UNISWAP TOKEN
//   // THEN EXECUTE THE STAKE FUNCTION
// //   document.getElementById("stakeButton").addEventListener('click', async () => {
// //       // Modern dapp browsers...
// //       if (web3.isConnected) {
// //           var ashContract = web3.eth.contract(contractABI);
// //         var contractInstance = ashContract.at(ashAddress);

// //           var uniContract = web3.eth.contract(uniTokenABI);

// //         var e = document.getElementById("selectedTokenStake");
// //         var value = e.options[e.selectedIndex].value;

// //         var payload;

// //               if(value == "XAMP") {
// //                   payload = 0;
// //           uniInstance = uniContract.at(uniTokenAddressXAMP);
// //         }
// //         else if(value == "TOB") {
// //             payload = 1;
// //           uniInstance = uniContract.at(uniTokenAddressTOB);
// //         }
// //         else if(value == "BOA") {
// //             payload = 2;
// //           uniInstance = uniContract.at(uniTokenAddressBOA);
// //         }
// //         else if(value == "ETH") {
// //             payload = 3;
// //           uniInstance = uniContract.at(uniTokenAddressETH);
// //         }

// //         console.log(document.getElementById("stakeAmount").value * 10**18);

// //         uniInstance.approve(ashAddress, document.getElementById("stakeAmount").value * 10**18, function (err, res) {
// //           console.log("APPROVE TX: https://etherscan.io/tx/" + res);
// //           document.getElementById("stakeReceipt").innerHTML = "Awaiting approval...";
// //           document.getElementById("stakeReceipt").style.opacity = "1";
// //           waitForApproval(res, contractInstance, payload);
// //         });
// //       };
// //   });

//    var uniTokenABI = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}];

//   var uniTokenAddressBOA 	= "0x5ecf87ff558f73d097eddfee35abde626c7aeab7";
//   var uniTokenAddressTOB 	= "0x34d0448a79f853d6e1f7ac117368c87bb7beea6b";
//   var uniTokenAddressXAMP = "0xaea4d6809375bb973c8036d53db9e90970942738";
//   var uniTokenAddressETH  = "0xc0cfb99342860725806f085046d0233fec876cd7";

  // UNSTAKE
// EXECUTE UNSTAKE FUNCTION
// document.getElementById("unstakeButton").addEventListener('click', async () => {
//     // Modern dapp browsers...
//     if (web3.isConnected) {
//     	var ashContract = web3.eth.contract(contractABI);
//       var contractInstance = ashContract.at(ashAddress);

//       var e = document.getElementById("selectedTokenUnstake");
//       var value = e.options[e.selectedIndex].value;

//       var payload;

// 			if(value == "XAMP") payload = 0;
//       else if(value == "TOB") payload = 1;
//       else if(value == "BOA") payload = 2;
//       else if(value == "ETH") payload = 3;


//       contractInstance.unstake(payload,document.getElementById("unstakeAmount").value * 10**18, function (err, res) {
// 				console.log("https://etherscan.io/tx/" + res);
//         document.getElementById("unstakeReceipt").innerHTML = '<a href="https://etherscan.io/tx/' + res  +'">Unstake Receipt</a>';
//         document.getElementById("unstakeReceipt").style.opacity = "1";
// 			});
//     }

// });

// var contractABI = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"previousPool","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"newPool","type":"uint256"}],"name":"BonusPoolChange","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"previousRate","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"newRate","type":"uint256"}],"name":"EmissionRateCut","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"_getBlocksSinceLastReduction","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_getNextRateReduction","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_getTotalNextRateReduction","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"addWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"blocks_per_year","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decayDivisor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decayPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"emissionRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getActivePool","outputs":[{"internalType":"uint8","name":"idx","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"idx","type":"uint8"}],"name":"getCurrentReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"idx","type":"uint8"}],"name":"getCurrentRewardPerYear","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"idx","type":"uint8"}],"name":"getLastBlockWithdrawn","outputs":[{"internalType":"uint256","name":"reward","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"idx","type":"uint8"},{"internalType":"address","name":"_addr","type":"address"}],"name":"getPersonalEmissionRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastBlockUpdated","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"address","name":"","type":"address"}],"name":"lastBlockWithdrawn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minimum_stake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"multiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"address","name":"","type":"address"}],"name":"personalEmissions","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"idx","type":"uint8"}],"name":"personalYFKAStaked","outputs":[{"internalType":"uint256","name":"points","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pools","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"idx","type":"uint8"}],"name":"redeem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setOpen","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"idx","type":"uint8"},{"internalType":"address","name":"_addr","type":"address"}],"name":"setPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"setYFKA","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"idx","type":"uint8"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"address","name":"","type":"address"}],"name":"stakes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"idx","type":"uint8"}],"name":"totalYFKAStaked","outputs":[{"internalType":"uint256","name":"points","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"transferOwnershipOfYFKA","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"idx","type":"uint8"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"unstake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"yfka","outputs":[{"internalType":"contract IYFKA","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"idx","type":"uint8"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"yfkaPerLP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];

// 	document.getElementById("redeemButton").addEventListener('click', async () => {
//     // Modern dapp browsers...
//     if (web3.isConnected) {
//     	var ashContract = web3.eth.contract(contractABI);
//       var contractInstance = ashContract.at(ashAddress);

//       var e = document.getElementById("redeemToken");
//       var value = e.options[e.selectedIndex].value;

//       var payload;

// 			if(value == "XAMP") payload = 0;
//       else if(value == "TOB") payload = 1;
//       else if(value == "BOA") payload = 2;
//       else if(value == "ETH") payload = 3;

//       console.log(payload);

//       contractInstance.redeem(payload, function (err, res) {
//         document.getElementById("withdrawResult").innerHTML = '<a href="https://etherscan.io/tx/"' + res  +'">Withdraw Receipt</a>';
//         document.getElementById("withdrawResult").style.opacity = "1";
// 			});
//     }

// });

// var uniContract = web3.eth.contract(uniTokenABI);
//   var uniInstance = uniContract.at(uniTokenAddressXAMP);

//   var ashContract = web3.eth.contract(contractABI);
//   var contractInstance = ashContract.at(ashAddress);

//   uniInstance.balanceOf(web3.currentProvider.selectedAddress, function (err, res) {
//       document.getElementById("unstakePoolBalanceXAMP").innerHTML = "Available XAMP Uni-V2 Tokens: " + (res / 10**18);
// 	});


//   var uniInstance = uniContract.at(uniTokenAddressTOB);

//   uniInstance.balanceOf(web3.currentProvider.selectedAddress, function (err, res) {
//       document.getElementById("unstakePoolBalanceTOB").innerHTML = "Available TOB Uni-V2 Tokens: " + (res / 10**18);
// 	});

//   var uniInstance = uniContract.at(uniTokenAddressBOA);

// 	uniInstance.balanceOf(web3.currentProvider.selectedAddress, function (err, res) {
//     document.getElementById("unstakePoolBalanceBOA").innerHTML = "Available BOA Uni-V2 Tokens: " + (res / 10**18);
// 	});

//   var uniInstance = uniContract.at(uniTokenAddressETH);

//   uniInstance.balanceOf(web3.currentProvider.selectedAddress, function (err, res) {
//     document.getElementById("unstakePoolBalanceETH").innerHTML = "Available ETH Uni-V2 Tokens: " + (res / 10**18);
// 	});
