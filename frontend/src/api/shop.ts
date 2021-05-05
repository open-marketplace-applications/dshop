// const URL = 'http://localhost:5000/api'
// const URL = 'https://oma-dshop.herokuapp.com/api'

import { variables } from '$lib/variables';

const URL = variables.basePath + '/api'

export const getShopConfig = async () => {
	try {
		console.log('getShopConfig')

		const response = await fetch(URL + '/config')
		console.log('getShopConfig', response)
		const obj = await response.json()
		console.log('getShopConfig', obj)
		return obj
	} catch (error) {
		console.log('getShopConfig error')
		console.error(error)
	}
}

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


export const checkout = async (shopping_cart) => {
	try {
		console.log('checkout', shopping_cart)

	
		const options = {
			method: 'POST',
			body: JSON.stringify(shopping_cart),
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


export const payWithPaypal = async (order_id, payment) => {
	try {
		console.log('payWithPaypal', payment)

	
		const options = {
			method: 'POST',
			body: JSON.stringify(payment),
			headers: {
				'Content-Type': 'application/json'
			}
		}
		 
		const response = await fetch(`${URL}/pay_with_paypal?id=${order_id}`, options)
		console.log('response', response)
		const obj = await response.json()
		console.log('obj', obj)
		return obj
	} catch (error) {
		console.error(error)
	}

}


export const payWithIOTA = async (order_id, payment) => {
	try {
		console.log('payWithIOTA', payment)

	
		const options = {
			method: 'POST',
			body: JSON.stringify(payment),
			headers: {
				'Content-Type': 'application/json'
			}
		}
		 
		const response = await fetch(`${URL}/pay_with_iota?id=${order_id}`, options)
		console.log('response', response)
		const obj = await response.json()
		console.log('obj', obj)
		return obj
	} catch (error) {
		console.error(error)
	}

}


