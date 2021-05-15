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

    account = manager.getAccount('dshop-0')

    if (!account) {
        manager.storeMnemonic(SignerType.Stronghold)

        account = await manager.createAccount({
            clientOptions: { node: "https://api.lb-0.testnet.chrysalis2.com", localPow: true },
            alias: 'dshop-0',
        })
        console.log('Account created:', account.alias())
    } else {
        console.log('Account loaded:', account.alias())
    }
    
    // Always sync before doing anything with the account
    console.log('Syncing...')
    const synced = await account.sync()
    console.log('Synced!')
    // Add several event listeners to handle changes to the account.
    addEventListener("BalanceChange", onPaymentSuccess)
    addEventListener("ErrorThrown", callback)
    addEventListener("NewTransaction", callback)
    addEventListener("ConfirmationStateChange", callback)
    addEventListener("Reattachment", callback)

}
const callback = function(err, data) {
    console.log("callback err:", err)
    console.log("callback data:", data)
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