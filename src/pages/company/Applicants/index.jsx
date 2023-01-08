import { useState } from 'react'
import useAxios from '../../../hooks/useAxios'
import useAuth from '../../../hooks/useAuth'
import useJobs from '../../../hooks/useJobs'
import ServerApi from '../../../api/ServerApi'
import JobItem from './JobItem'
import ApplicationItem from './ApplicationItem'
import { QuestionAnswer } from '@mui/icons-material'
import {
	Box,
	Button,
	Dialog,
	DialogTitle,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Modal,
	Select,
	TextField,
	Typography,
	DialogContent,
} from '@mui/material'

function index() {
	const { user } = useAuth()
	const { putApplication } = useJobs()

	const [modalEnviar, setModalEnviar] = useState(false)
	const [applicationSelect, setApplicationSelect] = useState(null)

	const {
		response: jobs,
		error: jobsError,
		loading: jobsLoading,
	} = useAxios({
		axiosInstance: ServerApi,
		method: 'GET',
		url: `/api/v1/companies/${user.id}/jobs/`,
	})

	const {
		response: applications,
		error: applicationsError,
		loading: applicationsLoading,
		refetch: applicationRefetch,
	} = useAxios({
		axiosInstance: ServerApi,
		method: 'GET',
		url: `/api/v1/companies/${user.id}/applications/`,
	})

	const handleOpen = () => setModalEnviar(true)
	const handleClose = () => setModalEnviar(false)

	const selectApplication = (application) => {
		setApplicationSelect(application)
		handleOpen()
	}

	const handleChange = (e) => {
		const { name, value } = e.target
		setApplicationSelect((prevState) => ({
			...prevState,
			[name]: value,
		}))
	}

	const handleSubmit = async () => {
		const response = await putApplication(applicationSelect.id, {
			status: applicationSelect.status,
			message: applicationSelect.message,
			interview_date: applicationSelect.interview_date,
			id_job: applicationSelect.job.id,
			id_alumn: applicationSelect.alumn.id,
		})
		if (response.status == 200) {
			setApplicationSelect(null)
			applicationRefetch()
			handleClose()
		}
	}

	return (
		<>
			{!!jobsLoading && !!applicationsLoading ? (
				<p>cargando...</p>
			) : (
				<>
					<h4 style={{ marginTop: 5 }}>Mis vacantes:</h4>
					<Box sx={{ flexGrow: 1, marginY: 2 }}>
						<Grid container spacing={2}>
							{jobs?.map((job) => (
								<JobItem key={job.id} job={job} />
							))}
						</Grid>
					</Box>
					<h3 style={{ marginTop: 5 }}>Postulaciones recientes</h3>
					<Box sx={{ flexGrow: 1, marginY: 2 }}>
						<Grid container spacing={2}>
							{applications?.map((application) => (
								<ApplicationItem
									key={application.id}
									application={application}
									selectApplication={selectApplication}
								/>
							))}
						</Grid>
					</Box>
				</>
			)}

			<Modal
				open={modalEnviar}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box>
					<Dialog open={true} fullWidth>
						<DialogTitle>
							<Box
								display="flex"
								justifyContent="space-between"
								alignItems="center"
							>
								<Typography>
									Responder {<QuestionAnswer />}
								</Typography>
							</Box>
						</DialogTitle>
						<DialogContent>
							<Grid container spacing={1}>
								<Grid item>
									<FormControl sx={{ m: 1, minWidth: 250 }}>
										<InputLabel id="demo-multiple-name-label">
											Estado *
										</InputLabel>
										<Select
											required
											labelId="demo-multiple-name-label"
											id="demo-multiple-name"
											name="status"
											onChange={handleChange}
											autoWidth
											label="Estado *"
											value={applicationSelect?.status}
										>
											<MenuItem value="postulado">
												Postulado
											</MenuItem>
											<MenuItem value="visto">
												Visto
											</MenuItem>
											<MenuItem value="programado para entrevistar">
												Programado para entrevistar
											</MenuItem>
											<MenuItem value="aceptado">
												Aceptado
											</MenuItem>
											<MenuItem value="rechazado">
												Rechazado
											</MenuItem>
										</Select>
									</FormControl>
									<TextField
										sx={{ m: 1, minWidth: 250 }}
										id="datetime-local"
										label="Fecha para entrevista"
										type="datetime-local"
										defaultValue={
											applicationSelect?.interview_date
										}
										onChange={handleChange}
										InputLabelProps={{
											shrink: true,
										}}
									/>
								</Grid>
								<Grid item xs={11.25}>
									<FormControl
										fullWidth
										sx={{ m: 1, Width: 200 }}
									>
										<TextField
											required
											id="outlined-multiline-static"
											name="message"
											label="Mensaje"
											onChange={handleChange}
											value={applicationSelect?.message}
											multiline
											fullWidth
											rows={6}
										/>
									</FormControl>
								</Grid>
							</Grid>
							<Box>
								<Button
									color="primary"
									onClick={() => handleSubmit()}
								>
									Enviar
								</Button>
								<Button onClick={() => handleClose()}>
									Cancelar
								</Button>
							</Box>
						</DialogContent>
					</Dialog>
				</Box>
			</Modal>
		</>
	)
}

export default index
