<script>

	import { misMixins } from '@/mixins/mixins.js'
	import restringido from '@/components/views/accesoRestringido.vue'
	export default {
		name: 'CrearUnidades',
		components: {
			restringido
		},
		data() {
			return {
				campoRules: [v => !!v || 'Campo requerido'],
				valid: true,
				lazy: false,
				unidades: [],
				cargando2: false,
				cargando1: false,
				mensaje1: '',
				mensaje2: '',
				unidad: {
					nombre: '',
					componente: ''
				},
				dim: [],

				tema: {
					nombre: '',
					componente: '',
					unidadTema: ''
				}
			}
		},
		mixins: [misMixins],
		methods: {
			guardarUnidad() {
				this.cargando1 = true
				const ruta = '/unidadesTemas/crearUnidad'
				if (this.$refs.form1.validate()) {
					this.axios({
						method: 'post',
						url: ruta, // + user,
						data: this.tema
					})
						.then(response => {
							if (response.status == '400' || response.status == '401' || response.status == '404') {
								this.isError = true
								this.error = 'Datos incorrectos'
							} else {
								//	eslint-disable-next-line no-console
								//console.log(response.data.usuario)

								this.mensaje1 = 'creado!!'
								this.tema.nombre = ''
								this.tema.componente = ''
								this.tema._id = ''
							}
						})
						.catch(e => {
							// eslint-disable-next-line no-console
							this.isError = true
							this.error = `${e}`
						})
						.finally(() => (this.cargando1 = false))
				}
			},
			guardarTema() {
				this.cargando2 = true
				if (this.$refs.form2.validate()) {
					const ruta = '/unidadesTemas/crearTema'
					this.axios({
						method: 'post',
						url: ruta, // + user,
						data: {
							nombre: this.tema.nombre,
							componente: this.tema.componente,
							id_unidad: this.tema.unidadTema
						}
					})
						.then(response => {
							if (response.status == '400' || response.status == '401' || response.status == '404') {
								this.isError = true
								this.error = 'Datos incorrectos'
							} else {
								//	eslint-disable-next-line no-console
								//console.log(response.data.usuario)

								this.mensaje2 = 'creado!!'
								this.tema.nombre = ''
								this.tema.componente = ''
								this.tema.unidadTema = ''
							}
						})
						.catch(e => {
							// eslint-disable-next-line no-console
							this.isError = true
							this.error = `${e}`
						})
						.finally(() => (this.cargando2 = false))
				}
			}
		},
		created() {
			this.dim = this.obtenerDimensiones()
			this.unidades = JSON.parse(localStorage.getItem(`datosUnidades`))
		}
	}

</script>

<template>

	<v-row justify="center">
		<v-col v-if="this.obtenerDatos().tipo === 'administrador'" cols="12" class="pa-0">
			<!-- <v-col v-if="this.obtenerDatos().tipo === 'docente'" cols="12" class="pa-0"> -->
			<v-card elevation="2" :width="dim[1]" :height="dim[0]" class="pb-4 px-4 mb-7 mt-7 mx-7 rounded-lg">

				<v-row justify="center">
					<v-col class="pa-0 " cols="11">
						<v-card dark color="red" elevation="5" class="card_cabecera rounded-lg d-flex  align-center">
							<v-card-title class="align-center">

								<span class="headline font-weight-bold">Crear Unidades y Temas</span>
							</v-card-title>
						</v-card>
					</v-col>
				</v-row>

				<v-row justify="center">
					<v-col cols="12" sm="12" md="12" lg="12" xl="12" class="pa-0">
						<v-card :height="dim[0]-80" class="overflow-hidden" flat>

							<v-app-bar dense absolute
							           color="white"
							           scroll-target="#scrolling-techniques-7">

							</v-app-bar>

							<v-sheet id="scrolling-techniques-7"
							         class="mt-12  overflow-y-auto"
							         max-height="calc(100% - 48px)">
								<v-container>
									<v-card class="pa-2" flat>
										<v-row>
											<v-col cols="12" md="12">
												<v-expansion-panels class="mb-6">
													<v-expansion-panel>
														<v-expansion-panel-header expand-icon="mdi-menu-down">Crear unidad</v-expansion-panel-header>
														<v-expansion-panel-content>
															<form ref="form1" v-model="valid" lazy-validation v-if="cargando1 === false">

																<v-text-field v-model="unidad.nombre"
																              label="Nombre unidad"
																              :rules="campoRules"
																              required></v-text-field>

																<v-text-field v-model="unidad.componente"
																              label="Componente"
																              :rules="campoRules"
																              required></v-text-field>
																<v-btn x-large block class="mr-4" @click="guardarUnidad">Guardar</v-btn>

															</form>
															<v-skeleton-loader v-else
															                   class="mx-auto"
															                   height="70%"
															                   width="80%"
															                   max-width="80%"
															                   type="card"></v-skeleton-loader>
															</v-card-text>
														</v-expansion-panel-content>
													</v-expansion-panel>
													<v-expansion-panel>
														<v-expansion-panel-header expand-icon="mdi-menu-down">Crear tema</v-expansion-panel-header>
														<v-expansion-panel-content>
															<form ref="form2" v-model="valid" lazy-validation v-if="cargando2 === false">
																<v-select v-model="tema.unidadTema" required
																          :rules="campoRules"
																          :items="unidades"
																          item-text="nombre"
																          label="Seleccione una unidad"
																          return-object>
																</v-select>
																<v-text-field v-model="tema.nombre"
																              label="Nombre tema"
																              :rules="campoRules"
																              required></v-text-field>

																<v-text-field v-model="tema.componente"
																              label="Componente"
																              :rules="campoRules"
																              required></v-text-field>
																<v-btn x-large block class="mr-4" @click="guardarTema">Guardar</v-btn>

															</form>
															<v-skeleton-loader v-else
															                   class="mx-auto"
															                   height="70%"
															                   width="80%"
															                   max-width="80%"
															                   type="card"></v-skeleton-loader>
															</v-card-text>
														</v-expansion-panel-content>
													</v-expansion-panel>
												</v-expansion-panels>

											</v-col>
										</v-row>

									</v-card>
								</v-container>
							</v-sheet>
						</v-card>
					</v-col>
				</v-row>

			</v-card>
		</v-col>
		<v-col v-else>
			<restringido></restringido>
		</v-col>
	</v-row>

</template>

<style>

</style>
