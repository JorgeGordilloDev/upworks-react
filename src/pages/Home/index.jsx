import { NavLink } from 'react-router-dom'
import {
	Box,
	Button,
	Paper,
	Grid,
	styled,
	Stack,
	Typography,
	Card,
	CardContent,
	CardMedia,
} from '@mui/material'
import './home.css'
import { Info, PersonOutline } from '@mui/icons-material'
import { routes } from '../../helpers'

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}))

const Hover = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	textAlign: 'justify',
	transition: '0.39s',
	'&:hover': {
		boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
	},
}))

export default function Home() {
	return (
		<div className="container">
			<Box sx={{ flexGrow: 1 }} style={{ paddingTop: '3rem' }}>
				<Grid container spacing={2}>
					<Grid item xs={12} md={7}>
						<Item>
							<Typography
								variant="h2"
								align="left"
								component="div"
								gutterBottom
							>
								BIENVENID@ A <span className="span2">UP</span>
								<span>WORKS</span>
							</Typography>

							<div className="p-size">
								<p>
									Encuentra el lugar perfecto para trabajar, o
									consigue proyectos para aumentar tu
									portafolio. Si eres una empresa contrata
									gente para que te ayude.
								</p>
							</div>
							<br />
							<Stack direction="row" spacing={2}>
								<NavLink
									to={routes.login}
									className="text-decoration-none"
								>
									<Button
										variant="outlined"
										size="large"
										startIcon={<PersonOutline />}
									>
										INICIAR SESION
									</Button>
								</NavLink>
								<NavLink
									to={routes.about}
									className="text-decoration-none"
								>
									<Button
										variant="contained"
										size="large"
										startIcon={<Info />}
									>
										ACERCA DE NOSOTROS
									</Button>
								</NavLink>
							</Stack>
						</Item>
					</Grid>
					<Grid item xs={12} md={5}>
						<Item>
							<img src="/logoUpwork.png" alt="logoUp" />
						</Item>
					</Grid>
				</Grid>
				<Grid container spacing={2}></Grid>
			</Box>
			<Box sx={{ flexGrow: 1 }} style={{ paddingTop: '5rem' }}>
				<div className="container">
					<Typography
						variant="h3"
						align="center"
						component="div"
						gutterBottom
					>
						BENEFICIOS PARA TODOS
					</Typography>
				</div>
				<Grid container spacing={2}>
					<Grid item xs={4}>
						<Hover>
							<Card sx={{ maxWidth: 445 }}>
								<CardMedia
									component="img"
									image="https://images.pexels.com/photos/6945/sunset-summer-golden-hour-paul-filitchkin.jpg?cs=srgb&dl=pexels-snapwire-6945.jpg&fm=jpg"
									alt="impulsate"
								/>
								<CardContent>
									<Typography
										gutterBottom
										variant="h5"
										component="div"
									>
										IMPULSATE
									</Typography>
									<Typography
										variant="body2"
										color="text.secondary"
									>
										Si eres un <span>alumno/egresado</span>{' '}
										crece de manera personal en tus
										conocimientos y experiencia, impulsate a
										ti mismo hacer mejor.
										<br></br>Si eres una{' '}
										<span>empresa</span> haz crecer tu
										negocio contratando personal que ayude a
										mejorar la productividad
									</Typography>
								</CardContent>
							</Card>
						</Hover>
					</Grid>

					<Grid item xs={4}>
						<Hover>
							<Card sx={{ maxWidth: 445 }}>
								<CardMedia
									component="img"
									image="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?cs=srgb&dl=pexels-fauxels-3184292.jpg&fm=jpg"
									alt="incrementa tus ingresos"
								/>
								<CardContent>
									<Typography
										gutterBottom
										variant="h5"
										component="div"
									>
										UNETE
									</Typography>
									<Typography
										variant="body2"
										color="text.secondary"
									>
										Si eres un <span>alumno/egresado</span>{' '}
										no pierdas la oportunidad de trabajar en
										lo que te has especializado, donde tu
										ves una vacante, nosotros vemos
										oportunidades de potencializar tus
										conocimientos. Si eres una empresa forma
										un equipo de trabajo que te ayude a
										alcanzar tus metas, encuentra al
										candidato que mejor se adapta al perfil
										buscado.
									</Typography>
								</CardContent>
							</Card>
						</Hover>
					</Grid>
					<Grid item xs={4}>
						<Hover>
							<Card sx={{ maxWidth: 445 }}>
								<CardMedia
									component="img"
									image="https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?cs=srgb&dl=pexels-pixabay-159866.jpg&fm=jpg"
									alt="incrementa tus ingresos"
								/>
								<CardContent>
									<Typography
										gutterBottom
										variant="h5"
										component="div"
									>
										APRENDIZAJE
									</Typography>
									<Typography
										variant="body2"
										color="text.secondary"
									>
										En <span>UPWORKS</span> Nuestra misi??n
										es ayudar a los estudiantes de la
										universidad politecnica de tapachula a
										conseguir empleo para fomentar un lugar
										de trabajo colaborativo con el objetivo
										de crear la mejor experiencia para los
										estudiantes.
									</Typography>
								</CardContent>
							</Card>
						</Hover>
					</Grid>
				</Grid>
			</Box>
		</div>
	)
}
