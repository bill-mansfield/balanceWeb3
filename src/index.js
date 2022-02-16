require('dotenv').config();
const Web3 = require('web3')
const rpcURL = 'https://mainnet.infura.io/v3/' + process.env.INFURA_API_KEY
const web3 = new Web3(rpcURL)
const address = process.env.WALLET

web3.eth.getBalance(address, (err, wei) => {
  balance = web3.utils.fromWei(wei, 'ether')
	console.log(balance)
})