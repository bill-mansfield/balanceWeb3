import Web3 from 'web3'
import dotenv from 'dotenv'
dotenv.config()

const rpcURL = 'https://mainnet.infura.io/v3/' + process.env.INFURA_API_KEY

export const web3 = new Web3(rpcURL)
export const address = process.env.ADDRESS