import { Routes, Route } from 'react-router-dom'
import AppRouter from './routes/AppRouter'
import { ThemeProvider } from '@mui/material/styles'
import theme from './styles/themeConfig'
import './styles/App.css'
import useJobs from './hooks/useJobs'
import { Alert, Snackbar } from '@mui/material'
// nueva preueb

function App() {
	const { message } = useJobs()

	return (
		<ThemeProvider theme={theme}>
			<Routes>
				<Route path="/*" element={<AppRouter />} />
			</Routes>
			<Snackbar
				anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
				open={message.open}
			>
				<Alert severity={message.severity}>{message.message}</Alert>
			</Snackbar>
		</ThemeProvider>
	)
}

export default App
