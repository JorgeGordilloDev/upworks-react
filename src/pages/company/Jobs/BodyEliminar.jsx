import React from 'react'

const BodyEliminar = ({ peticionDelete, abrirCerrarModalEliminar }) => {
	return (
		<Box sx={style}>
			<p>
				¿Estás seguro que deseas eliminar el empleo?
				<span>{postSelec && postSelec.name_alumno} </span>?
			</p>
			<div align="right">
				<Stack spacing={2} direction="row">
					<Button
						color="secondary"
						variant="contained"
						onClick={() => peticionDelete()}
					>
						Sí
					</Button>
					<Button
						color="error"
						variant="outlined"
						onClick={() => abrirCerrarModalEliminar()}
					>
						No
					</Button>
				</Stack>
			</div>
		</Box>
	)
}

export default BodyEliminar
