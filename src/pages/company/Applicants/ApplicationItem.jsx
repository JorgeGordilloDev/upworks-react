import { BASE_URL } from '../../../api/ServerApi'
import { Send, DateRange, Download } from '@mui/icons-material'
import {
	Button,
	Card,
	CardActions,
	CardContent,
	Avatar,
	Grid,
} from '@mui/material'
import './Jobs.css'

function ApplicationItem({ application, selectApplication }) {
	return (
		<Grid item xs={12} md={6} lg={4}>
			<Card className="cardEmpleoJ">
				<CardContent>
					<Avatar
						alt={application.alumn.name}
						src={`${BASE_URL}${application.alumn.photo}/`}
						sx={{ width: 56, height: 56 }}
					/>

					<h5 style={{ marginTop: 5 }}>{application.alumn.name}</h5>
					<h6>Empleo: {application.job.title}</h6>
					<h6>Estado: {application.status}</h6>
					{application.message && (
						<p>Mensaje: {application.message}</p>
					)}
					{application.interview_date && (
						<p>
							<DateRange /> Dia De Tu Entrevista:
							{application.interview_date}
						</p>
					)}
				</CardContent>
				<CardActions>
					<Button onClick={() => selectApplication(application)}>
						<Send /> Responder
					</Button>
					<Button
						href={`${BASE_URL}${application.alumn.cv}`}
						target="_blank"
						variant="contained"
						endIcon={<Download />}
					>
						CV
					</Button>
				</CardActions>
			</Card>
		</Grid>
	)
}

export default ApplicationItem
