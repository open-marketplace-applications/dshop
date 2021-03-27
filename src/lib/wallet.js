const { AccountManager, SignerType, addEventListener } = require('@iota/wallet')


import Order from '../models/orderModel'

require('dotenv').config()


let account = {}

async function getAddress() {


    console.log('getAddress:', account)
    const { address } = account.generateAddress()
    console.log('New address:', address)

    return address

}
async function init() {

    console.log("init wallet...")

    const manager = new AccountManager({
        storagePath: './dshop-wallet',
    })
    manager.setStrongholdPassword(process.env.SH_PASSWORD)
    manager.storeMnemonic(SignerType.Stronghold)

    account = manager.getAccount('dshop-0')

    if (!account) {
        account = await manager.createAccount({
            clientOptions: { node: "https://api.lb-0.testnet.chrysalis2.com", localPow: true },
            alias: 'dshop-0',
        })
        console.log('Account created:', account.alias())
    } else {
        console.log('Account loaded:', account.alias())
    }

    addEventListener("BalanceChange", onPaymentSuccess)

}

var onPaymentSuccess = function (err, data) {
	console.log('err', err)
	console.log('onPaymentSuccess', data)
	let payment_object = {
		method: "iota",
		data: data
	}
	Order.setPayed(payment_object)
}



const Wallet = {
    init,
    getAddress
}
export default Wallet