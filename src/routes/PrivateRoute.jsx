import { Outlet, useLocation, Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import { routes } from '../helpers/routes'

const PrivateRoute = ({ hasRole: role }) => {
	const { hasRole, isLogged } = useAuth()
	const location = useLocation()

	return !isLogged() ? (
		<Navigate to={routes.login} state={{ from: location }} replace />
	) : role && !hasRole(role) ? (
		<Navigate to={routes.unauthorized} state={{ from: location }} replace />
	) : (
		<Outlet />
	)
}

export default PrivateRoute
