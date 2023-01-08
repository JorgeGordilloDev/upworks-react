import useAuth from '../../../hooks/useAuth'
import useJobs from '../../../hooks/useJobs'
import {
	Box,
	Grid,
	FormControl,
	MenuItem,
	Select,
	TextField,
	Typography,
	InputLabel,
	OutlinedInput,
	InputAdornment,
	Button,
} from '@mui/material'
import { Work } from '@mui/icons-material'
import { useState } from 'react'

function index() {
	const { profile } = useAuth()
	const { postJobs } = useJobs()

	const [title, setTitle] = useState('')
	const [workplace, setWorkplace] = useState('')
	const [ubication, setUbication] = useState('')
	const [jobType, setJobType] = useState('')
	const [salary, setSalary] = useState('')
	const [description, setDescription] = useState('')

	const handleSubmit = async () => {
		const response = await postJobs({
			title,
			workplace,
			ubication,
			job_type: jobType,
			description,
			salary,
			id_company: profile.id,
		})
		if (response.status == 201) {
			setTitle('')
			setWorkplace('')
			setUbication('')
			setJobType('')
			setSalary('')
			setDescription('')
		}
	}

	return (
		<Box>
			<Box sx={{ marginY: 2, marginLeft: 1 }}>
				<Typography>Nuevo Empleo {<Work />}</Typography>
			</Box>
			<Grid container spacing={1}>
				<Grid item>
					<FormControl sx={{ m: 1 }}>
						<TextField
							id="title-field"
							label="Titulo del empleo"
							variant="outlined"
							required
							value={title}
							onChange={({ target }) => setTitle(target.value)}
						/>
					</FormControl>
					<FormControl sx={{ m: 1, minWidth: 250 }}>
						<InputLabel id="workplace-select">
							Lugar de trabajo *
						</InputLabel>
						<Select
							required
							labelId="workplace-select"
							id="workplace-label"
							name="workplace"
							value={workplace}
							label="Lugar de trabajo *"
							onChange={({ target }) =>
								setWorkplace(target.value)
							}
							autoWidth
						>
							<MenuItem value="remoto">Remoto</MenuItem>
							<MenuItem value="presencial">Presencial</MenuItem>
							<MenuItem value="hibrido">Hibrido</MenuItem>
						</Select>
					</FormControl>
					<FormControl sx={{ m: 1, minWidth: 80 }}>
						<TextField
							id="ubication-field"
							label="Ubicación del empleo"
							variant="outlined"
							required
							value={ubication}
							onChange={({ target }) =>
								setUbication(target.value)
							}
						/>
					</FormControl>
					<FormControl sx={{ m: 1, minWidth: 250 }}>
						<InputLabel id="job-type-select">
							Tipo De Trabajo *
						</InputLabel>
						<Select
							required
							labelId="job-type-select"
							id="job-type-field"
							name="job-type"
							onChange={({ target }) => setJobType(target.value)}
							autoWidth
							value={jobType}
							label="Tipo De Trabajo *"
						>
							<MenuItem value="tiempo completo">
								Tiempo completo
							</MenuItem>
							<MenuItem value="medio tiempo">
								Medio tiempo
							</MenuItem>
							<MenuItem value="indeterminado">
								Iderterminado
							</MenuItem>
							<MenuItem value="temporal">Temporal</MenuItem>
							<MenuItem value="voluntariado">
								Voluntariado
							</MenuItem>
							<MenuItem value="prácticas">Prácticas</MenuItem>
						</Select>
					</FormControl>
					<FormControl sx={{ m: 1 }}>
						<InputLabel htmlFor="salary-fiedl">Salario</InputLabel>
						<OutlinedInput
							required
							id="salary-fiedl"
							name="salary"
							label="Salario"
							value={salary}
							startAdornment={
								<InputAdornment position="start">
									$
								</InputAdornment>
							}
							variant="outlined"
							onChange={({ target }) => setSalary(target.value)}
						/>
					</FormControl>
				</Grid>
				<Grid item xs={11.25}>
					<FormControl fullWidth sx={{ m: 1, Width: 200 }}>
						<TextField
							required
							id="description-field"
							name="description"
							value={description}
							onChange={({ target }) =>
								setDescription(target.value)
							}
							label="Descripcion Del Trabajo"
							multiline
							fullWidth
							rows={6}
						/>
					</FormControl>
				</Grid>
			</Grid>
			<Box>
				<Button color="primary" onClick={() => handleSubmit()}>
					Crear
				</Button>
				<Button onClick={() => abrirCerrarModalInsertar()}>
					Cancelar
				</Button>
			</Box>
		</Box>
	)
}

export default index
