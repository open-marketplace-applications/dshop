import { exec, ExecException } from 'child_process'
// var path = require('path');

export function serverStatus (body?: any) {
	exec('./cli-wallet server-status', (error, stdout, stderr) => {
		if (error) {
			console.log(`error: ${error.message}`)
			return
		}
		if (stderr) {
			console.log(`stderr: ${stderr}`)
			return
		}
		console.log(`stdout: ${stdout}`)
	})
}

export function sendAsset (color: String, address: String) {
	let command = `/src/plugins/nft/cli-wallet send-funds -color ${color} -amount 1 -dest-addr ${address}`
	exec(command, (error, stdout, stderr) => {
		if (error) {
			console.log(`error: ${error.message}`)
			return
		}
		if (stderr) {
			console.log(`stderr: ${stderr}`)
			return
		}
		console.log(`stdout: ${stdout}`)
	})
}

// create an asset in the form of colored coins
export function mintAsset (name: String, symbol?: String) {
	let myPromise = new Promise(function (myResolve, myReject) {
		let command = `src/plugins/nft/cli-wallet create-asset -amount 1 -name ${name}`
		exec(command, (error, stdout, stderr) => {
			if (error) {
				console.log(`error: ${error.message}`)
				myReject()
			}
			if (stderr) {
				console.log(`stderr: ${stderr}`)
				myReject()
			}
			console.log(`stdout: ${stdout}`)
			myResolve(stdout)
		})
	})

	return myPromise
}
