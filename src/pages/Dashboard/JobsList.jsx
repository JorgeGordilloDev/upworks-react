import useJobs from '../../hooks/useJobs'
import JobItem from './JobItem'
import { Box, Grid } from '@mui/material'

const JobsList = () => {
	const { jobs } = useJobs()

	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid container spacing={2}>
				{jobs?.map((job) => (
					<JobItem job={job} key={job.id} />
				))}
			</Grid>
		</Box>
	)
}

export default JobsList
