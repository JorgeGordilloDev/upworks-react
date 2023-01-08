import { useRef, useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { CircularProgress, Typography } from '@mui/material'
import { Card, Form, Row, Col } from 'react-bootstrap'
import { Alert } from '../../components/common'
import useAuth from '../../hooks/useAuth'
import { routes } from '../../helpers'
import ServerApi from '../../api/ServerApi'

import {
	IconButton,
	Button,
	InputAdornment,
	TextField,
	OutlinedInput,
	FormControl,
	InputLabel,
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'

const Login = () => {
	const { login } = useAuth()

	const navigate = useNavigate()
	const location = useLocation()
	const from = location.state?.from?.pathname || routes.home

	const emailRef = useRef()
	const errRef = useRef()

	const [email, setEmail] = useState('matricula@uptapachula.edu.mx')
	const [password, setPassword] = useState('matricula-upworks')
	const [showPassword, setShowPassword] = useState(false)

	const [errMsg, setErrMsg] = useState('')
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		emailRef.current.focus()
	}, [])

	useEffect(() => {
		setErrMsg('')
	}, [email, password])

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			setLoading(true)
			const token = await ServerApi.post('/api/v1/login/', {
				email,
				password,
			})

			if (token.status == 201) {
				login({ ...token.data.data })
				setEmail('')
				setPassword('')
				navigate(from, { replace: true })
			}
		} catch (error) {
			setErrMsg(error.response.data.error)
		} finally {
			setLoading(false)
		}
	}

	return (
		<Row>
			<Col md={6} className="mx-auto mt-5">
				<Card border="success">
					<Card.Title>
						<Typography
							variant="h4"
							textAlign={'center'}
							marginTop={2}
						>
							Iniciar Sesión
						</Typography>
					</Card.Title>
					<Card.Body>
						<Form onSubmit={handleSubmit}>
							<FormControl
								sx={{ width: '100%', marginBottom: 2 }}
								variant="outlined"
							>
								<TextField
									id="correo"
									label="Correo"
									variant="outlined"
									ref={emailRef}
									value={email}
									type="email"
									fullWidth
									autoComplete="on"
									onChange={({ target }) =>
										setEmail(target.value)
									}
								/>
							</FormControl>
							<FormControl
								sx={{ width: '100%', marginBottom: 2 }}
								variant="outlined"
							>
								<InputLabel htmlFor="outlined-adornment-password">
									Contraseña
								</InputLabel>
								<OutlinedInput
									id="password"
									label="Contraseña"
									value={password}
									autoComplete="true"
									type={showPassword ? 'text' : 'password'}
									onChange={({ target }) =>
										setPassword(target.value)
									}
									endAdornment={
										<InputAdornment position="end">
											<IconButton
												aria-label="toggle password visibility"
												onClick={() =>
													setShowPassword(
														!showPassword
													)
												}
												onMouseDown={(e) =>
													e.preventDefault()
												}
												edge="end"
											>
												{showPassword ? (
													<VisibilityOff />
												) : (
													<Visibility />
												)}
											</IconButton>
										</InputAdornment>
									}
								/>
							</FormControl>

							{loading ? (
								<CircularProgress />
							) : (
								<Button
									variant="contained"
									type="submit"
									sx={{ marginBottom: 1 }}
								>
									Iniciar sesión
								</Button>
							)}
						</Form>
						{errMsg && (
							<Alert type="error" title="Error">
								{errMsg}
							</Alert>
						)}
					</Card.Body>
				</Card>
			</Col>
		</Row>
	)
}

export default Login
