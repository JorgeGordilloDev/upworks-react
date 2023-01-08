import React from 'react'

const BodyEnviar = () => {
	return (
		<Box xs={style}>
			<Dialog open={true} fullWidth>
				<DialogTitle>
					<Box
						display="flex"
						justifyContent="space-between"
						alignItems="center"
					>
						<Typography>Responder {<QuestionAnswer />}</Typography>
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
									value={postSelec && postSelec.status}
								>
									<MenuItem value="">
										<em>Elegir</em>
									</MenuItem>
									<MenuItem value="visto">Visto</MenuItem>
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
							<FormControl sx={{ m: 1, minWidth: 80 }}>
								<TextField
									required
									id="outlined-basic"
									name="interview_date"
									label="Fecha De Entrevista"
									variant="outlined"
									onChange={handleChange}
								/>
							</FormControl>
						</Grid>
						<Grid item xs={11.25}>
							<FormControl fullWidth sx={{ m: 1, Width: 200 }}>
								<TextField
									required
									id="outlined-multiline-static"
									name="message"
									label="Mensaje"
									onChange={handleChange}
									value={postSelec && postSelec.message}
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
							onClick={(e) =>
								peticionPut(postSelec.job.id, e, postSelec.id)
							}
						>
							Enviar
						</Button>
						<Button onClick={() => abrirCerrarModalEnviar()}>
							Cancelar
						</Button>
					</Box>
				</DialogContent>
			</Dialog>
		</Box>
	)
}

export default BodyEnviar
