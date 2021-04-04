const URL = 'https://oma-dshop.herokuapp.com/api'

export const getAvailableAmount = async () => {
	try {
		console.log('getAvailableAmount0')

		const response = await fetch(URL + '/amount')
		console.log('getAvailableAmount1', response)
		const obj = await response.json()
		console.log('getAvailableAmount2', obj)
		return obj.amount
	} catch (error) {
		console.log('getAvailableAmount error')
		console.error(error)
	}
}

export const buyProduct = async () => {
	try {
		console.log('buyProduct')

		const product = {
			title: 'IOTA Card - Chrysalis'
		}

		const options = {
			method: 'POST',
			body: JSON.stringify(product),
			headers: {
				'Content-Type': 'application/json'
			}
		}
		const response = await fetch(URL + '/orders', options)
		console.log('response', response)
		const obj = await response.json()
		console.log('obj', obj)
		return obj
	} catch (error) {
		console.error(error)
	}
}
