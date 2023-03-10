import { Box, Paper, Grid } from '@mui/material'
import { styled } from '@mui/material/styles'

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}))

export default function About() {
	return (
		<div>
			<Box sx={{ flexGrow: 1 }} style={{ padding: '3rem' }}>
				<Item>
					<Grid container spacing={5}>
						<Grid item xs={7}>
							<h1 className="tit">
								Acerca de<span> UPWORKS</span>
							</h1>
							<div className="p-size">
								<p>
									UPWORKS es una página web que esta destinado
									para los estudiantes de la Universidad
									Politecnica De Tapachula.
								</p>
								<p>
									El objetivo de nuestro proyecto es facilitar
									las oportunidades de trabajo con las
									empresas que tienen convenio con la
									universidad hacia los estudiantes egresados
									y activos de la UPTAP.
								</p>
							</div>
						</Grid>
						<Grid item xs={5}>
							<br></br>
							<img src="/logoUpwork.png" alt="logo" />
						</Grid>
						<Grid item xs={8}>
							<h1 className="tit">
								Video<span> Informativo</span>
							</h1>
							<iframe
								width="800"
								height="480"
								src="https://www.youtube.com/embed/Rbea9Vrv9sk"
								title="YouTube video player"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							></iframe>
						</Grid>
					</Grid>
				</Item>
			</Box>
		</div>
	)
}
