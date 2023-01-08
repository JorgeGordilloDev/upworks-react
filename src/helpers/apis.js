//* Contantes de las Api's
import { BASE_URL } from '../api/ServerApi'
const baseURL = `${BASE_URL}/api/v1/`
export const apis = {
	singIn: `${baseURL}login/`,
	passwordReset: ``,
	getData: (role) => `${baseURL}/${role}`,
	regular: {
		profile: `${baseURL}/regular/profile`,
		contact: `${baseURL}/regular/contact`,
		title: `${baseURL}/regular/title`,
		setData: ``,
	},
	company: {
		getUser: ``,
		setData: ``,
	},
}
