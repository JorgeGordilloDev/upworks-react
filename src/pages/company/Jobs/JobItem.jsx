import useJobs from '../../../hooks/useJobs'
import useAuth from '../../../hooks/useAuth'
import { roles } from '../../../helpers'
import {
	Grid,
	Card,
	CardContent,
	Typography,
	Chip,
	Avatar,
	Button,
} from '@mui/material'
import { House, Send } from '@mui/icons-material'
import { BASE_URL } from '../../../api/ServerApi'

const JobItem = ({ job }) => {
	const { postApplication, applications } = useJobs()
	const { hasRole } = useAuth()

	return (
		<Grid item xs={12} md={6}>
			<Card>
				<CardContent>
					<Grid container spacing={3}>
						<Grid item xs={12} sm container>
							<Grid
								item
								xs
								container
								direction="column"
								spacing={2}
							>
								<Grid item xs>
									<Avatar
										alt="Foto Empresa"
										src={`${BASE_URL}${job.company.photo}/`}
										sx={{
											width: 56,
											height: 56,
										}}
									/>
									<Typography gutterBottom variant="h5">
										{job.title}
									</Typography>
									<Typography
										variant="body1"
										color="text.primary"
									>
										Lugar de trabajo: {job.workplace}
									</Typography>
									<Typography
										variant="body1"
										color="text.primary"
									>
										Tipo de trabajo: {job.job_type}
									</Typography>
									<Typography
										variant="body1"
										color="text.primary"
									>
										Salario: ${job.salary}
									</Typography>
								</Grid>
								<Grid item>
									<Chip
										icon={<House />}
										label={job.ubication}
										component="a"
										href="#"
										variant="outlined"
										clickable
									/>
									<Typography
										variant="body2"
										color="text.primary"
									>
										{job.description}
									</Typography>
								</Grid>
							</Grid>
							<Grid item>
								<Typography variant="subtitle1" component="div">
									Empresa: {job.company.name}
								</Typography>
							</Grid>
						</Grid>
					</Grid>
				</CardContent>
			</Card>
		</Grid>
	)
}

export default JobItem
