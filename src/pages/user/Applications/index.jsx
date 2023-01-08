import useJobs from '../../../hooks/useJobs'
import { Box, Grid } from '@mui/material'

import ApplicationItem from './ApplicationItem'

function index() {
	const { applications } = useJobs()

	return (
		<Box sx={{ flexGrow: 1, marginTop: 3 }}>
			<Grid container spacing={2}>
				{applications.map((application) => (
					<ApplicationItem
						application={application}
						key={application.id}
					/>
				))}
			</Grid>
		</Box>
	)
}

export default index
