import { TextField, Grid, InputAdornment, Box } from '@mui/material'

import { ContentPasteSearch } from '@mui/icons-material'
import { useState } from 'react'

const Search = () => {
	const [Search, setSearch] = useState('')
	const [data, setData] = useState('')

	function getId() {
		return window.localStorage.getItem('id')
	}

	const [applic, setApplic] = useState({
		id_alumn: parseInt(getId()),
		id_job: null,
		status: 'postulado',
		message: null,
		interview_date: null,
	})

	const handleSearch = (e) => {
		setSearch(e.target.value)
		filter(e.target.value)
	}

	const filter = (termSearch) => {
		let dataFiltered = data.filter((element) => {
			if (
				element.title
					.toLowerCase()
					.includes(termSearch.toLowerCase()) ||
				element.company.name
					.toLowerCase()
					.includes(termSearch.toLowerCase()) ||
				element.job_type
					.toLowerCase()
					.includes(termSearch.toLowerCase()) ||
				element.workplace
					.toLowerCase()
					.includes(termSearch.toLowerCase())
			) {
				return element
			}
		})
		setData(dataFiltered)
	}

	return (
		<Box maxWidth="lg" sx={{ width: 900, maxWidth: '100%',marginTop: 2}}>
					<TextField
						id="input-with-icon-textfield"
						fullWidth 
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<ContentPasteSearch />
								</InputAdornment>
							),
						}}
						label="Buscar"
						value={Search}
						placeholder="Ingresa la compañia o (Nombre/Lugar/Tipo) De Trabajo"
						color="secondary"
						onChange={handleSearch}
					/>
		</Box>
	)
}

export default Search
