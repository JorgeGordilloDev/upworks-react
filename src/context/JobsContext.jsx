import { createContext, useEffect, useState } from 'react'
import ServerApi from '../api/ServerApi'
import useAuth from '../hooks/useAuth'

export const JobsContext = createContext()

const JobsProvider = ({ children }) => {
	const { user, profile } = useAuth()

	const [jobs, setJobs] = useState([])
	const [applications, setApplications] = useState([])
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(true)
	const [message, setMessage] = useState({})

	useEffect(() => {
		if (user && profile) {
			getJobs()
			getApplications(user.id)
		}
	}, [user, profile])

	const getJobs = async () => {
		try {
			const res = await ServerApi.get('/api/v1/jobs/')
			setJobs(res.data.data)
		} catch (err) {
			setError(err.message)
		} finally {
			setLoading(false)
		}
	}

	const getApplications = async (id) => {
		try {
			const res = await ServerApi.get(
				`/api/v1/alumns/${id}/apllications/`
			)
			setApplications(res.data.data)
		} catch (err) {
			setError(err.message)
		} finally {
			setLoading(false)
		}
	}

	const getApplicationById = async (id) => {
		try {
			const response = await ServerApi.get(`/ap1/v1/applications/${id}/`)

			if (response.status == 200) {
				return response.data
			}
		} catch (error) {
			setMessage({
				message: error.response.data.message,
				severity: 'warning',
				open: true,
			})
			return error.response.data
		} finally {
			setTimeout(() => {
				setMessage({})
			}, 5000)
		}
	}

	const postApplication = async (id_job) => {
		try {
			const response = await ServerApi.post('/api/v1/applications/', {
				id_job,
				id_alumn: profile.id,
			})

			if (response.status == 201) {
				setApplications((currentData) => [
					response.data.data,
					...currentData,
				])
				setMessage({
					message: response.data.message,
					severity: 'success',
					open: true,
				})
				return response.data
			}
		} catch (error) {
			setMessage({
				message: error.response.data.message,
				severity: 'warning',
				open: true,
			})
			return error.response.data
		} finally {
			setTimeout(() => {
				setMessage({})
			}, 5000)
		}
	}

	const putApplication = async (
		id,
		{ status, message, interview_date, id_job, id_alumn }
	) => {
		console.log(id, { status, message, interview_date, id_job, id_alumn })
		try {
			const response = await ServerApi.put(
				`/api/v1/applications/${id}/`,
				{
					status,
					message,
					interview_date,
					id_job,
					id_alumn,
				}
			)

			if (response.status == 200) {
				setMessage({
					message: response.data.message,
					severity: 'success',
					open: true,
				})
				return response.data
			}
		} catch (error) {
			setMessage({
				message: error.response.data.message,
				severity: 'warning',
				open: true,
			})
			return error.response.data
		} finally {
			setTimeout(() => {
				setMessage({})
			}, 5000)
		}
	}

	const postJobs = async ({
		title,
		workplace,
		ubication,
		job_type,
		description,
		salary,
		id_company,
	}) => {
		try {
			const response = await ServerApi.post('/api/v1/jobs/', {
				title,
				workplace,
				ubication,
				job_type,
				description,
				salary,
				id_company,
			})
			if (response.status == 201) {
				setMessage({
					message: response.data.message,
					severity: 'success',
					open: true,
				})
				return response.data
			}
		} catch (error) {
			setMessage({
				message: error.response.data.message,
				severity: 'warning',
				open: true,
			})
			return error.response.data
		} finally {
			setTimeout(() => {
				setMessage({})
			}, 5000)
		}
	}

	const contextValue = {
		jobs,
		applications,
		message,
		getJobs,
		postJobs,
		getApplications,
		putApplication,
		getApplicationById,
		postApplication,
	}

	return (
		<JobsContext.Provider value={contextValue}>
			{children}
		</JobsContext.Provider>
	)
}

export default JobsProvider
