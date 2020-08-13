<script>

	import { misMixins } from '@/mixins/mixins.js'

	export default {
		name: 'grupo',
		components: {},
		mixins: [misMixins],

		data() {
			return {
				cargando: false,
				cargando2: false,
				keyGrupos: 0,
				dim: [],
				isError: false,
				error: '',
				valid: true,
				lazy: false,
				dialog: false,
				dialog1: false,
				nombreGrupo: '',
				avances: [],
				mis_grupos: [],

				basicRules: [v => !!v || 'Campo requerido']
			}
		},
		methods: {
			agregarrGrupo(id_, codigo_, nombre_) {
				//agregar un grupo a Mis grupos
				const ruta = '/usuarios/find/grupo/' + id_ //buscar los participantes de un grupo
				var self = this
				this.axios
					.get(ruta)
					.then(response => {
						this.mis_grupos.push({
							id: id_,
							nombre: nombre_,
							codigo: codigo_,
							participantes: response.data
						})
					})
					.catch(e => {
						//	eslint-disable-next-line no-console
						console.log(e)
					})
			},
			reportes(id) {
				const ruta = '/estudiante/listarAvances/tema/' + id //Obtengo los datos de la unidad
				var self = this
				this.axios
					.get(ruta)
					.then(response => {
						this.avances = response.data
						//localStorage.setItem('gruposDocente', JSON.stringify(response.data))
						//console.log(`obtenerGrupos`)
					})
					.catch(e => {
						this.isError = true
						this.error = e.mensaje
					})
			},
			obtenerGrupos(id) {
				//Obtengo los grupos de un profesor
				this.cargando = true
				const ruta = '/grupos/obtenerGrupos/' + id
				var self = this
				this.axios
					.get(ruta)
					.then(response => {
						var grupos = response.data

						for (var i = 0; i < grupos.length; i++) {
							var id_ = grupos[i]._id
							var nombre = grupos[i].nombre
							var codigo = grupos[i].codigo
							this.agregarrGrupo(id_, codigo, nombre)
						}
					})
					.catch(e => {
						this.isError = true
						this.error = e.mensaje
					})
					.finally(() => (this.cargando = false))
			},
			crearArrayGrupos() {
				//agrego al array mis_grupos un lis grupos de los participantes

				var grupos = JSON.parse(localStorage.getItem('gruposDocente'))

				for (var i = 0; i < grupos.length; i++) {
					var id = grupos[i]._id
					var nombre = grupos[i].nombre
					var codigo = grupos[i].codigo
					this.agregarrGrupo(id, codigo, nombre)
				}

				// TODO: Obtener grupos del backend y guardarlos en el locarstorage
			},
			verificarCodigo(codigo) {
				var existe = false
				this.obtenerGrupos()
				// TODO: buscar en el localstorage el array con los grupos y recorrelo
				// TODO: Si encuentra 1 retorne true y termine, sino, retorne false
				return existe
			},
			generarCodigo(minimo, maximo) {
				return Math.round(Math.random() * (maximo - minimo) + minimo)
			},
			crearGrupo() {
				this.cargando2 = true
				if (this.$refs.form.validate()) {
					var cod = this.generarCodigo(100000, 999999)
					var existe = false //this.verificarCodigo(codigo)
					if (existe === true) {
						this.crearGrupo() //repita los pasos
					} else if (existe === false) {
						// TODO: guarde en el backend los datos del grupo,

						const ruta = '/grupos/crearGrupo'
						var id_ = this.obtenerDatos().id
						console.log(id_)
						var _data = {
							nombre: String(this.nombreGrupo),
							codigo: String(cod),
							id_docente: String(id_),
							activo: true
						}
						this.axios({
							method: 'post',
							url: ruta, // + user,
							headers: {
								'Content-Type': 'application/json'
							},
							data: _data
						})
							.then(response => {
								this.mis_grupos.length = 0
								this.obtenerGrupos(id_)
								this.keyGrupos += 1
								this.$refs.form.reset()
							})
							.catch(e => {
								this.isError = true
								this.error = e.mensaje
							})
							.finally(() => (this.cargando2 = false))
						//// TODO: muestre un componente con el codigo del grupo, una opcion de copiar y lo que puede hacer con ese codigo
						//	this.codigo_grupo = codigo
					}
				}
			}
		},
		created() {
			this.dim = this.obtenerDimensiones()
			this.obtenerGrupos(this.obtenerDatos().id)
		}
	}

</script>

<template>

	<v-row justify="center">
		<v-col cols="12" class="pa-0">
			<v-card elevation="2" :width="dim[1]" :height="dim[0]" class="pb-4 px-4 mb-1 mt-5 mx-5 rounded-lg">
				<v-row justify="center">
					<v-col class="pa-0 " cols="11">
						<v-card dark color="red" elevation="4" class="card_cabecera rounded-lg d-flex  align-center">
							<v-card-title class="align-center">

								<span class="headline font-weight-bold">Grupos</span>
							</v-card-title>
						</v-card>
					</v-col>
				</v-row>

				<v-row justify="start">
					<v-col cols="12" sm="12" md="12" lg="12" xl="12" class="pa-0">
						<v-card :height="dim[0]-80" class="overflow-hidden elevation-0" flat>
							<v-app-bar dense absolute
							           color="white"
							           scroll-target="#scrolling-techniques-7">

								<v-toolbar-title>Mis grupos</v-toolbar-title>

							</v-app-bar>

							<v-sheet id="scrolling-techniques-7"
							         class="mt-12  overflow-y-auto"
							         max-height="calc(100% - 48px)">
								<v-container>
									<v-card class="pa-3 my-4">
										<v-alert v-if="isError === true" type="error">
											{{error}}
										</v-alert>

										<v-form v-show="cargando2===false"
										        ref="form"
										        v-model="valid"
										        :lazy-validation="lazy">

											<v-row justify="center">
												<v-col cols="12" sm="12" md="12" lg="12" xl="12">
													<div justify="center" class="display-1 mb-0">
														<h6>Crear grupo</h6>
													</div>
												</v-col>
											</v-row>
											<v-row align="center">
												<v-col align="center" class="d-flex" cols="12" sm="12">
													<v-text-field v-model="nombreGrupo"
													              label="Nombre del grupo"
													              required
													              :rules="basicRules">

													</v-text-field>
												</v-col>

											</v-row>
											<!-- <v-divider></v-divider>

																	<v-spacer></v-spacer> -->
											<v-btn dark color="red" block x-large @click="crearGrupo">Crear
											</v-btn>

										</v-form>
										<div v-show="cargando2===true">
											<v-skeleton-loader height="94" type="list-item-two-line">

											</v-skeleton-loader>
											<v-skeleton-loader height="94" type="list-item-two-line">

											</v-skeleton-loader>
											<v-skeleton-loader height="94" type="list-item-two-line">

											</v-skeleton-loader>
										</div>
									</v-card>
									<v-expansion-panels v-if="cargando===false" :key="keyGrupos">
										<v-expansion-panel v-for="(grupo, i) in mis_grupos" :key="i">
											<v-expansion-panel-header><span>{{grupo.codigo}}  - {{grupo.nombre}}</span></v-expansion-panel-header>
											<v-expansion-panel-content>

												<v-card class="pa-3" flat>
													<v-alert color="blue-grey" dark dense icon="mdi-school">
														<span>Los estudiantes deben registrarse en la aplicación con el código del grupo: </span><span class="font-weight-bold">{{grupo.codigo}}</span>
													</v-alert>
													<v-card-title>Listado de participantes</v-card-title>
													<v-divider></v-divider>
													<v-card-text>

														<v-list class=" ">

															<v-list-item v-for="(p, i) in grupo.participantes" :key="i">

																<v-list-item-content>
																	<v-list-item-title><span>{{p.codigo}} - {{p.nombres}}</span></v-list-item-title>

																</v-list-item-content>
																<v-list-item-action>

																	<v-dialog :retain-focus="false" v-model="dialog1" scrollable max-width="60%">
																		<template v-slot:activator="{ on, attrs }">
																										        <v-btn
																										          color="red"
																										          dark
																										          v-bind="attrs"
																										          v-on="on"
																															@click="reportes(p._id)"
																										        >
																										          Ver reportes
																										        </v-btn>
												      														</template>
																		<v-card height="80%">
																			<v-card-title><span>Temas completos <v-icon color="green lighten-1">mdi-checkbox-marked-circle</v-icon> | Temas incompletos <v-icon color="error lighten-1">mdi-cancel</v-icon></span></v-card-title>
																			<v-divider></v-divider>
																			<v-card-text style="height: 400px;">
																				<v-list>
																					<v-list-item v-for="(avance, i) in avances" :key="i">
																						<v-list-item-content>
																							<v-list-item-subtitle>{{avance.id_tema.nombre}}</v-list-item-subtitle>
																						</v-list-item-content>
																						<v-list-item-icon>
																							<v-icon v-if="(avance.aprobado === false)" color="error lighten-1">mdi-cancel</v-icon>
																							<v-icon v-else color="green lighten-1">mdi-checkbox-marked-circle</v-icon>
																						</v-list-item-icon>
																					</v-list-item>
																				</v-list>
																			</v-card-text>
																			<v-divider></v-divider>
																			<v-card-actions>
																				<v-btn color="blue darken-1" text @click="dialog1 = false">Cerrar</v-btn>
																			</v-card-actions>
																		</v-card>
																	</v-dialog>

																</v-list-item-action>
																<!-- <v-divider v-if="i + 1 < grupo.participantes.length" :key="i"></v-divider> -->
															</v-list-item>

														</v-list>

														<v-divider></v-divider>

													</v-card-text>
													<v-card-actions>
														<v-spacer></v-spacer>
														<!-- <v-btn color="primary" text @click="dialog1 = false">
																													Cerrar
																												</v-btn> -->
													</v-card-actions>
												</v-card>

											</v-expansion-panel-content>
										</v-expansion-panel>
									</v-expansion-panels>
									<div v-else>
										<v-skeleton-loader height="94" type="list-item-two-line">

										</v-skeleton-loader>
										<v-skeleton-loader height="94" type="list-item-two-line">

										</v-skeleton-loader>
										<v-skeleton-loader height="94" type="list-item-two-line">

										</v-skeleton-loader>
									</div>
								</v-container>
							</v-sheet>

						</v-card>
					</v-col>
				</v-row>
			</v-card>
		</v-col>
	</v-row>

</template>

<style>



</style>
