import { web3, address } from './config.js'

web3.eth.getBalance(address, (err, wei) => {
  const balance = web3.utils.fromWei(wei, 'ether')
	console.log(balance)
})