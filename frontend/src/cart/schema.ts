// https://codechips.me/svelte-form-validation-with-yup/

import * as yup from 'yup'

const regSchema = yup.object().shape({
	first_name: yup.string().required(),
	last_name: yup.string().required(),
	email: yup.string().required().email(),
	address: yup.string().required(),
	zip_code: yup.string().required(),
	city: yup.string().required(),
	country: yup.string().required()
})

export { regSchema }
