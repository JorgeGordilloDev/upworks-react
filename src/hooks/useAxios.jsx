import { useState, useEffect } from 'react'

const useAxios = (configObj) => {
	const { axiosInstance, method, url, requestConfig = {} } = configObj

	const [response, setResponse] = useState([])
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(true)
	const [reload, setReload] = useState(0)

	const refetch = () => setReload((prev) => prev + 1)

	const setData = (data) => {
		console.log(data)
		setResponse(data)
	}

	useEffect(() => {
		//let isMounted = true;
		const controller = new AbortController()

		const fetchData = async () => {
			try {
				const res = await axiosInstance[method.toLowerCase()](url, {
					...requestConfig,
					signal: controller.signal,
				})
				// console.log(res.data.data)
				setResponse(res.data.data)
			} catch (err) {
				setError(err.message)
			} finally {
				setLoading(false)
			}
		}

		// call the function
		fetchData()

		// useEffect cleanup function
		return () => controller.abort()
	}, [reload])

	return { response, error, loading, refetch, setData }
}

export default useAxios
