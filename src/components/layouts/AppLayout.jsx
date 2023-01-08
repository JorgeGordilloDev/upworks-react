import { Outlet } from 'react-router-dom'
import NavbarApp from './NavbarApp'
import FooterApp from './FooterApp'
import { ThemeProvider, Container } from '@mui/material'
import theme from '../../styles/themeConfig'

const AppLayout = () => {
	return (
		<ThemeProvider theme={theme}>
			<NavbarApp />
			<Container maxWidth="lg">
				<Outlet />
			</Container>
			<FooterApp />
		</ThemeProvider>
	)
}

export default AppLayout
