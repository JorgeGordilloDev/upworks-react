import { createContext, useState } from 'react'
import ServerApi from '../api/ServerApi'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null)
	const [profile, setProfile] = useState(null)

	const getProfile = async (role, id) => {
		try {
			const response = await ServerApi.get(
				`/api/v1/${role == 'regular' ? 'alumns' : 'companies'}/${id}/`
			)
			setProfile(response.data)
		} catch (err) {
			console.log(err.message)
		}
	}

	const login = async (user) => {
		setUser({ ...user })
		await getProfile(user.role, user.id)
	}

	const logout = () => {
		setUser(null)
		setProfile(null)
	}

	const isLogged = () => !!user
	const hasRole = (role) => user?.role === role

	const contextValue = {
		user,
		profile,
		setUser,
		login,
		logout,
		isLogged,
		hasRole,
	}

	return (
		<AuthContext.Provider value={contextValue}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
