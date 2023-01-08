import React from 'react'
import { Link } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import { routes } from '../helpers'

const NotFoundPage = () => {
	return (
		<div className="row py-5">
			<div md={8} className="col text-center mx-auto mb-5">
				<img
					src="/assets/404-not-found.svg"
					alt="NotFoundPage"
					className="img-fluid"
				/>
				<Typography variant="h2" gutterBottom component="div">
					¿Te has perdido?
				</Typography>
				<Typography variante="h6" gutterBottom component="div">
					Vuelve al <Link to={routes.home}>Inicio</Link>
				</Typography>
			</div>
		</div>
	)
}

export default NotFoundPage
