import { BASE_URL } from '../../../api/ServerApi'
import { Apartment, DateRange } from '@mui/icons-material'
import {
	Card,
	CardContent,
	Typography,
	Chip,
	Avatar,
	Grid,
	Box,
} from '@mui/material'
import './Jobs.css'

const ApplicationItem = ({ application }) => {
	const { status, message, interview_date, job } = application

	return (
		<Grid item xs={12} md={6}>
			<Card className="cardEmpleoJ">
				<CardContent>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							alignContent: 'center',
							justifyItems: 'center',
							alignItems: 'center',
						}}
					>
						<Avatar
							alt={job.company_name}
							src={`${BASE_URL}${job.company_phto}`}
							sx={{ width: 56, height: 56 }}
						/>
						<Chip
							icon={<Apartment />}
							label={job.company_name}
							component="a"
							variant="outlined"
						/>
					</Box>
					<Typography
						gutterBottom
						variant="subtitle1"
						component="div"
						sx={{ marginTop: 3 }}
					>
						{job.title}
					</Typography>
					<Typography gutterBottom variant="body2" component="div">
						Estado: {status}
					</Typography>
					{message && (
						<Typography variant="body2" color="inherit">
							Mensaje:{' '}
							<Typography variant="caption" color="GrayText">
								{message}
							</Typography>
						</Typography>
					)}
					{interview_date && (
						<Typography
							variant="body2"
							color="text.secondary"
							sx={{ marginTop: 2 }}
						>
							<DateRange /> Dia de la entrevista: {interview_date}
						</Typography>
					)}
				</CardContent>
			</Card>
		</Grid>
	)
}

export default ApplicationItem
