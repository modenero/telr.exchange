/* Import modules. */
import { ethers } from 'ethers'

/**
 * Create Ethereum (ETH) Order
 *
 * Pulls the latest asset source from our Eternal Db.
 */
// const createEthOrder = async ({ commit, getters }) => {
const createEthOrder = async () => {
    console.log('Creating new order...')

    /* Set Ethereum provider. */
    // const provider = new ethers.providers.JsonRpcProvider('https://cloudflare-eth.com')
    // const provider = new ethers.providers.EtherscanProvider('homestead', '')
    const provider = new ethers.providers.InfuraProvider('kovan', 'f43ab3538291466b87cc8cab45bc3c61')
    console.log('PROVIDER', provider)

    /* Set contract address. */
    const contractAddress = '0xda1fF69a39937bc2DcC072e4767FdB36D821e08f'
    console.log('CONTRACT ADDRESS', contractAddress)

    /* Set contract ABI. */
    const abi = [{"constant":false,"inputs":[],"name":"acceptOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"_secretHash","type":"bytes32"},{"internalType":"address payable","name":"_taker","type":"address"}],"name":"coinDeposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"primary","type":"address"},{"indexed":false,"internalType":"address","name":"secondary","type":"address"},{"indexed":false,"internalType":"bytes","name":"data","type":"bytes"}],"name":"Completed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"primary","type":"address"},{"indexed":false,"internalType":"address","name":"secondary","type":"address"},{"indexed":false,"internalType":"bytes","name":"data","type":"bytes"}],"name":"Created","type":"event"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"_secretHash","type":"bytes32"},{"internalType":"address","name":"_taker","type":"address"},{"internalType":"bytes32","name":"_token","type":"bytes32"},{"internalType":"int256","name":"_amount","type":"int256"}],"name":"escrow","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"primary","type":"address"},{"indexed":false,"internalType":"address","name":"secondary","type":"address"},{"indexed":false,"internalType":"bytes","name":"data","type":"bytes"}],"name":"Escrowed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"_secret","type":"bytes32"}],"name":"payout","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"reclaim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_newSuccessor","type":"address"}],"name":"setSuccessor","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"_secretHash","type":"bytes32"},{"internalType":"address payable","name":"_taker","type":"address"}],"name":"tokenDeposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getEscrow","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getPredecessor","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getRevision","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getSuccessor","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"newOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes4","name":"_interfaceID","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function"}]

    /* Initialize contract connection via Web3 Provider. */
    const contract = new ethers.Contract(contractAddress, abi, provider)

    /* Set key. */
    // FIXME: Calulate this value `causes.assets.md`.
    // const key = '0xbc3ff924269ad0b21b98ec6cfb735f77b55475c8e099357a5858e1f1efc5b397'

    /* Retrieve source. */
    const source = await contract.owner()
    console.log('ASSET SOURCE', source)

    /* Set asset source. */
    // const assetSource = {
    //     md: source.toHexString()
    // }

    /* Commit wallet's master seed. */
    // commit('setAssetSource', assetSource)
}

/* Export module. */
export default createEthOrder
