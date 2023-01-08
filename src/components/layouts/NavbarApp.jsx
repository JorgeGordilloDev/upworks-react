import { NavLink, useLocation } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import { roles, routes } from '../../helpers'
import {
	Home,
	Login,
	Info,
	AdminPanelSettings,
	MarkunreadMailbox,
	CreateNewFolder,
	Business,
	Logout,
	Person,
	Search,
} from '@mui/icons-material'
import { Navbar, Nav, Container } from 'react-bootstrap'
import './NavbarApp.css'

const NavbarApp = () => {
	const { isLogged, hasRole, logout } = useAuth()
	const { pathname } = useLocation()
	return (
		<Navbar expand="lg" variant="dark" sticky="top" className="nav-bg">
			<Container fluid>
				<Navbar.Brand as={NavLink} to={routes.site}>
					UpWorks
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mx-auto">
						{isLogged() && (
							<>
								<Nav.Link as={NavLink} to={routes.home}>
									<Home /> Inicio
								</Nav.Link>

								{hasRole(roles.regular) && (
									<>
										<Nav.Link
											as={NavLink}
											to={routes.applications}
										>
											<MarkunreadMailbox /> Postulaciones
										</Nav.Link>

										<Nav.Link
											as={NavLink}
											to={routes.profile}
										>
											<Person /> Perfil
										</Nav.Link>
									</>
								)}
								{hasRole(roles.company) && (
									<>
										<Nav.Link
											as={NavLink}
											to={routes.company.trabajos}
										>
											<CreateNewFolder /> Crear Empleos
										</Nav.Link>

										<Nav.Link
											as={NavLink}
											to={routes.company.applicant}
										>
											<MarkunreadMailbox /> Postulantes
										</Nav.Link>

										<Nav.Link
											as={NavLink}
											to={routes.company.profile}
										>
											<Person /> Perfil Empresas
										</Nav.Link>
									</>
								)}
							</>
						)}
					</Nav>
					<Nav>
						{!isLogged() ? (
							<>
								<Nav.Link as={NavLink} to={routes.site}>
									<Home /> Iniciar
								</Nav.Link>
								<Nav.Link as={NavLink} to={routes.about}>
									<Info />
									About
								</Nav.Link>
								<Nav.Link as={NavLink} to={routes.login}>
									<Login /> Iniciar Sesion
								</Nav.Link>
							</>
						) : (
							<Nav.Link onClick={() => logout()}>
								<Logout /> Cerrar sesion
							</Nav.Link>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default NavbarApp
