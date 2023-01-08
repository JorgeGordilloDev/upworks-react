import { Routes, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

import AppLayout from '../components/layouts/AppLayout'

import Home from '../pages/Home'
import About from '../pages/About'
import Login from '../pages/Login'
import NotFoundPage from '../pages/NotFoundPage'
import Unauthorized from '../pages/Unauthorized'

import Dashboard from '../pages/Dashboard'
import Jobs from '../pages/Jobs'
import Profile from '../pages/user/Profile'
import Applications from '../pages/user/Applications'

import CompanyJobs from '../pages/company/Jobs'
import Profilecompany from '../pages/company/Profile'
import Applicants from '../pages/company/Applicants'
import { roles, routes } from '../helpers'

const AppRouter = () => {
	return (
		<Routes>
			<Route path={routes.site} element={<AppLayout />}>
				{/* Rutas publicas */}
				<Route path={routes.site} element={<Home />} />
				<Route path={routes.about} element={<About />} />
				<Route path={routes.login} element={<Login />} />
				<Route path={routes.unauthorized} element={<Unauthorized />} />

				{/* Rutas protegidas */}
				<Route element={<PrivateRoute />}>
					<Route path={routes.home} element={<Dashboard />} />
					<Route path="vacante" element={<Jobs />} />
					<Route path={routes.profile} element={<Profile />} />
					{/* <Route path="search" element={<Search />} /> */}
					<Route
						path={routes.applications}
						element={<Applications />}
					/>
				</Route>

				{/* Rutas protegidas usuario Regular */}
				<Route
					element={<PrivateRoute hasRole={roles.regular} />}
				></Route>

				{/* Rutas protegidas usuario Company */}
				<Route
					path={routes.site}
					element={<PrivateRoute hasRole={roles.company} />}
				>
					<Route path="trabajos" element={<CompanyJobs />} />
					<Route
						path={routes.company.profile}
						element={<Profilecompany />}
					/>
					<Route
						path={routes.company.applicant}
						element={<Applicants />}
					/>

					{/* <Route path='vacante/:idJob/postulaciones' element={<Application />} /> */}
					{/*  <Route path='nueva-vacante' element={<NewJob />} /> */}
				</Route>

				{/* Catch all */}
				<Route path={routes.notFoundPage} element={<NotFoundPage />} />
			</Route>
		</Routes>
	)
}

export default AppRouter
