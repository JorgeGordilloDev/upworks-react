import { BASE_URL } from '../../../api/ServerApi'
import useAuth from '../../../hooks/useAuth'
import {
	Chip,
	Grid,
	Card,
	CardContent,
	Avatar,
	Typography,
} from '@mui/material'
import { Room, Flag } from '@mui/icons-material'

function index() {
	const { profile, user } = useAuth()

	return (
		<Grid container spacing={3} sx={{ pt: 3 }}>
			<Grid item xs={12} md={4}>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<Card sx={{ textAlign: 'center' }}>
							<CardContent>
								<Avatar
									alt="Remy Sharp"
									src={`${BASE_URL}${user?.photo}`}
									sx={{
										width: 160,
										height: 160,
										mx: 'auto',
										my: 2.5,
									}}
								/>
								<Typography variant="h6" color="black">
									{user.name}
								</Typography>
								<Typography
									variant="caption"
									color="text.secondary"
								>
									Compañia
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Grid>
			<Grid item xs={12} md={8}>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<Card sx={{ p: 1 }}>
							<CardContent>
								<Typography
									variant="h1"
									color="initial"
									sx={{ fontSize: 20, mb: 1.8 }}
								>
									Sobre Nosotros
								</Typography>
								<Typography
									variant="body1"
									color="text.secondary"
								>
									Fundación: {profile?.birthday}
								</Typography>

								<Chip
									icon={<Flag />}
									label={profile?.country}
									component="a"
									href="#"
									variant="outlined"
									clickable
								/>
								<Chip
									icon={<Room />}
									label={profile?.address}
									component="a"
									href="#"
									variant="outlined"
									clickable
								/>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default index
