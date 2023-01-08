import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './context/AuthContext'
import JobsProvider from './context/JobsContext'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<JobsProvider>
					<App />
				</JobsProvider>
			</AuthProvider>
		</BrowserRouter>
	</React.StrictMode>
)
