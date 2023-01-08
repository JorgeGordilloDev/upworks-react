import useAuth from '../../../hooks/useAuth'
import { BASE_URL } from '../../../api/ServerApi'
import {
	Cake,
	Phone,
	ExpandMore,
	AirplaneTicketOutlined,
	Download,
} from '@mui/icons-material'
import {
	List,
	ListItem,
	ListItemText,
	ListItemAvatar,
	Divider,
	Grid,
	Card,
	CardContent,
	Avatar,
	Typography,
	Button,
	AccordionSummary,
	Accordion,
	AccordionDetails,
} from '@mui/material'

function index() {
	const { profile, user } = useAuth()

	let dis
	if (profile?.relocate) {
		dis = <ListItemText primary="Dispuesto a reubicarse" />
	} else {
		dis = <ListItemText primary="Sin disposición a reubicarse" />
	}

	return (
		<Grid container spacing={3} sx={{ pt: 3 }}>
			<Grid item xs={12} md={4}>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<Card sx={{ textAlign: 'center' }}>
							<CardContent>
								<Avatar
									alt="Remy Sharp"
									src={`${BASE_URL}${user.photo}`}
									sx={{
										width: 160,
										height: 160,
										mx: 'auto',
										my: 2.5,
									}}
								/>
								<Typography variant="h6" color="black">
									{profile?.ocupation}
								</Typography>
								<Typography
									variant="caption"
									color="text.secondary"
								>
									{profile?.matricula}
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Grid>
			<Grid item xs={12} md={7}>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<Card sx={{ p: 1 }}>
							<CardContent>
								<Typography
									variant="h1"
									color="initial"
									sx={{ fontSize: 20, mb: 1.8 }}
								>
									{user?.name}
								</Typography>
								<Typography
									variant="body1"
									color="text.secondary"
								>
									Acerca De Mi:
								</Typography>

								<List
									sx={{
										width: '100%',
										maxWidth: 360,
										bgcolor: 'background.paper',
									}}
								>
									<ListItem>
										<ListItemAvatar>
											<Avatar>
												<Cake />
											</Avatar>
										</ListItemAvatar>
										<ListItemText
											primary="Fecha de nacimiento"
											secondary={profile?.birthday}
										/>
									</ListItem>
									<Divider variant="inset" component="li" />
									<ListItem>
										<ListItemAvatar>
											<Avatar>
												<Phone />
											</Avatar>
										</ListItemAvatar>
										<ListItemText
											primary="Celular"
											secondary={profile?.phone}
										/>
									</ListItem>
									<Divider variant="inset" component="li" />
									<ListItem>
										<ListItemAvatar>
											<Avatar>
												<AirplaneTicketOutlined />
											</Avatar>
										</ListItemAvatar>
										{dis}
									</ListItem>
								</List>
								<div>
									<Accordion>
										<AccordionSummary
											expandIcon={<ExpandMore />}
											aria-controls="panel1a-content"
											id="panel1a-header"
										>
											<Typography>Resumen</Typography>
										</AccordionSummary>
										<AccordionDetails>
											<Typography
												variant="body2"
												color="text.primary"
											>
												{profile?.abstract}
											</Typography>
										</AccordionDetails>
									</Accordion>
								</div>
								<br />
								<Button
									href={`${profile?.cv}/`}
									target="_blank"
									variant="contained"
									endIcon={<Download />}
								>
									Descargar Cv
								</Button>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default index
