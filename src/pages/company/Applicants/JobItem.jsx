import { BASE_URL } from '../../../api/ServerApi'
import {
	Grid,
	Card,
	CardContent,
	Typography,
	Chip,
	Avatar,
} from '@mui/material'
import { House } from '@mui/icons-material'

const JobItem = ({ job }) => {
	return (
		<Grid item xs={12} sm={6} md={4} lg={3}>
			<Card>
				<CardContent>
					<Grid container spacing={3}>
						<Grid item xs container direction="column" spacing={2}>
							<Grid item xs>
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
							</Grid>
						</Grid>
					</Grid>
				</CardContent>
			</Card>
		</Grid>
	)
}

export default JobItem
