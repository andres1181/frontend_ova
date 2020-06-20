<script>

	import { misMixins } from '@/mixins/mixins.js'

	export default {
		name: 'grupo',
		components: {},
		data: () => ({
			codigo_grupo: '',
			vistaCrear: true,
			alto: '',
			ancho: '',
			dim: [],
			isError: false,
			error: '',
			valid: true,
			dialog: false,
			dialog1: false,
			nuevoCodigo: '',
			select: { text: '', unidad: '' },
			opciones: [
				{ text: 'Polimorfismo', unidad: 'polimorfismo' },
				{ text: 'Punteros', unidad: 'punteros' },
				{ text: 'Estilo de programación', unidad: 'estilo' },
				{ text: 'Todas', unidad: 'todas' }
			],
			nuevo_grupo: {
				nombre: '',
				codigo: '',
				docente: ''
			},
			mixins: [misMixins],
			mis_grupos: [
				{
					id: '1335',
					nombre: 'Ingenieria 1',
					codigo: '1223453',
					participantes: [
						//esto lo debo pedir al backend
						{ grupo: '1335', nombre: 'Estudiante 1', codigo: '1234254535' },
						{ grupo: '1335', nombre: 'Estudiante 2', codigo: '1234254535' },
						{ grupo: '1335', nombre: 'Estudiante 3', codigo: '1234254535' },
						{ grupo: '1335', nombre: 'Estudiante 4', codigo: '1234254535' },
						{ grupo: '1335', nombre: 'Estudiante 5', codigo: '1234254535' },
						{ grupo: '1335', nombre: 'Estudiante 6', codigo: '1234254535' },
						{ grupo: '1335', nombre: 'Estudiante 7', codigo: '1234254535' },
						{ grupo: '1335', nombre: 'Estudiante 8', codigo: '1234254535' },
						{ grupo: '1335', nombre: 'Estudiante 9', codigo: '1234254535' },
						{ grupo: '1335', nombre: 'Estudiante 10', codigo: '1234254535' },
						{ grupo: '1335', nombre: 'Estudiante 11', codigo: '1234254535' },
						{ grupo: '1335', nombre: 'Estudiante 12', codigo: '1234254535' },
						{ grupo: '1335', nombre: 'Estudiante 13', codigo: '1234254535' }
					]
				},
				{
					id: '13775',
					nombre: 'Ingenieria 2',
					codigo: '11231',
					participantes: [
						{ grupo: '13775', nombre: 'Estudiante 1', codigo: '1234254535' },
						{ grupo: '13775', nombre: 'Estudiante 2', codigo: '1234254535' },
						{ grupo: '13775', nombre: 'Estudiante 3', codigo: '1234254535' },
						{ grupo: '13775', nombre: 'Estudiante 1', codigo: '1234254535' },
						{ grupo: '13775', nombre: 'Estudiante 2', codigo: '1234254535' },
						{ grupo: '13775', nombre: 'Estudiante 3', codigo: '1234254535' },
						{ grupo: '13775', nombre: 'Estudiante 1', codigo: '1234254535' },
						{ grupo: '13775', nombre: 'Estudiante 2', codigo: '1234254535' },
						{ grupo: '13775', nombre: 'Estudiante 3', codigo: '1234254535' }
					]
				},
				{
					id: '233235',
					nombre: 'Ingenieria 2',
					codigo: '11231',
					participantes: [
						{ grupo: '233235', nombre: 'Estudiante 1', codigo: '1234254535' },
						{ grupo: '233235', nombre: 'Estudiante 2', codigo: '1234254535' },
						{ grupo: '233235', nombre: 'Estudiante 3', codigo: '1234254535' },
						{ grupo: '233235', nombre: 'Estudiante 1', codigo: '1234254535' },
						{ grupo: '233235', nombre: 'Estudiante 2', codigo: '1234254535' },
						{ grupo: '233235', nombre: 'Estudiante 3', codigo: '1234254535' },
						{ grupo: '233235', nombre: 'Estudiante 1', codigo: '1234254535' },
						{ grupo: '233235', nombre: 'Estudiante 2', codigo: '1234254535' },
						{ grupo: '233235', nombre: 'Estudiante 3', codigo: '1234254535' }
					]
				}
			],
			contrasenaRules: {
				required: value => !!value || 'Requerido.',
				min: v => v.length >= 8 || 'La contraseña debe tener minimo 8 caracteres'
			},
			codigoRules: [v => (v && v.length == 7) || 'El código debe ser de 7 digitos'],
			basicRules: [v => !!v || 'Campo requerido'],
			radioRules: [v => !!v || 'Seleccione un tipo de usuario'],
			emailRules: [v => !!v || 'El correo es requerido', v => /.+@.+\..+/.test(v) || 'El correo ingresado no es valido']
		}),
		methods: {
			generarCodigo() {
				//mediante "get" debo pedir un codigo a la api
				var cod = ''
				return cod
			},
			agregarEstudiante() {
				//agregar estudiante a un grupo
				//mediante "get" debo verificar a la api si el estudiante:
				//Si el estudiante ya pertenece al grupo (con la informacion de los integrantes de cada grupo)
				//si el estudiante se encuentra en la base de datos
				var perteneceGrupo = false
				var resgistrado = false

				//Codigo....

				var info = [perteneceGrupo, resgistrado]
				return info
			},
			convertirString() {
				this.grupo.nombre = String(this.grupo.nombre)
				this.grupo.codigo = String(this.generarCodigo)
				this.grupo.docente = String(this.grupo.docente)
			},

			validate1() {
				// eslint-disable-next-line no-console
				console.log(this.valid)
				if (this.$refs.form.validate()) {
					this.snackbar = true
				}
			},
			// registrarAvance(id){
			// 	const ruta = '/estudiante/crear/avance/tema'
			// 	//	eslint-disable-next-line no-console
			// 	console.log('ID')
			// 	//	eslint-disable-next-line no-console
			// 	console.log(id)
			// 	for (var i = 0; i < this.temas.length; i++) {
			// 	this.axios({
			// 		method: 'post',
			// 		url: ruta, // + user,
			// 		data: {
			// 			id_tema: String(this.temas[i]._id),
			// 			id_estudiante: String(id),
			// 			terminado: false
			// 		}
			// 	})
			// 		.then(response => {
			// 			//	eslint-disable-next-line no-console
			// 			console.log('Avance Tema')
			// 			//	eslint-disable-next-line no-console
			// 			console.log(response.data)
			// 			// if ((response.status == '200' || response.status == '201')) {
			// 			//}
			// 		})
			// 		.catch(e => {
			// 			// this.isError = true
			// 			// this.error = `Error en el servidor:  ${e}`
			// 			// // eslint-disable-next-line no-console
			// 			// console.log(e.response)
			// 			//	eslint-disable-next-line no-console
			// 			console.log(e.response)
			// 		})
			// 	}
			// },

			onSubmit() {
				this.convertirString()

				const ruta = '/usuarios/' //debo cambiar ruta

				//this.validate()
				if (this.$refs.form.validate()) {
					this.axios({
						method: 'post',
						url: ruta, // + user,
						data: {
							nombre: this.grupo.nombre,
							codigo: this.grupo.codigo,
							docente: this.grupo.docente,
							activo: true
						}
					})
						.then(response => {
							if (response.status == '201') {
								//	this.$router.push({ name: 'crearGrupo' })
								// Si el grupo se creo correctamente, ocultar el formulario de crear grupo y
								// añadir una area de vista grupo para agregar estudiantes y modificar las
								// ovas que puede visualizar el grupo
							} else {
								this.isError = true
								this.error = 'Datos incorrectos'
							}
						})
						.catch(e => {
							this.isError = true
							this.error = `Error en el servidor:  ${e}`
						})
				}
			}
		},
		created() {
			// TODO:
			//Funcion para traer desde el backen la informaicion de los grupos del docente
			//a partir del localstorage, pues para el docente solo se puede mostrar la informacion que el ha creado
		//	JSON.stringify(this.participantes)
			this.dim = this.obtenerDimensiones()
		}
	}

</script>

<template>

	<v-row justify="center">
		<v-col cols="12" class="pa-0">
			<v-card elevation="2" :width="dim[1]" :height="dim[0]" class="pb-4 px-4 mb-7 mt-9 mx-7 rounded-lg">
				<v-row justify="center">
					<v-col class="pa-0 " cols="11">
						<v-card dark color="cyan" elevation="4" class="card_cabecera rounded-lg d-flex  align-center">
							<v-card-title class="align-center">

								<span class="headline font-weight-bold">Grupos</span>
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

								<v-toolbar-title>Mis grupos</v-toolbar-title>

								<v-spacer></v-spacer>

								<v-dialog v-model="dialog" max-width="60%">
									<template v-slot:activator="{ on, attrs }">
																        <v-btn
																          color="secondary"
																          dark
																          v-bind="attrs"
																          v-on="on"
																        >
																          Crear un nuevo grupo
																        </v-btn>
																      </template>
									<v-card class="pa-3">
										<v-form ref="form"
										        v-model="valid"
										        lazy-validation>
											<v-container class="ma-0 pa-0">
												<v-row justify="center">
													<v-col cols="12" sm="12" md="12" lg="12" xl="12">
														<div justify="center" class="display-1 mb-0">
															<h6>Crear nuevo grupo</h6>
														</div>
													</v-col>
												</v-row>
												<v-row align="center">
													<v-col align="center" class="d-flex" cols="12" sm="12">
														<v-text-field v-model="nuevoCodigo" light
														              label="Nombre del grupo"
														              required
														              :rules="basicRules"
														              clearable
														              prepend-inner-icon="mdi-account">

														</v-text-field>
													</v-col>
													<v-col class="d-flex" cols="12" sm="12">
														<v-select :items="opciones" label="Elija las unidades que el grupo puede visualizar">
														</v-select>
													</v-col>

												</v-row>
												<v-divider></v-divider>

												<v-spacer></v-spacer>
												<v-btn text @click="onSubmit">Crear
												</v-btn>
												<v-btn color="primary" text @click="dialog = false">
													Cancelar
												</v-btn>

											</v-container>
										</v-form>
									</v-card>
								</v-dialog>
							</v-app-bar>

							<v-sheet id="scrolling-techniques-7"
							         class="mt-12  overflow-y-auto"
							         max-height="calc(100% - 48px)">
								<v-container>

									<v-expansion-panels>
										<v-expansion-panel v-for="(grupo, i) in mis_grupos" :key="i">
											<v-expansion-panel-header><span>{{grupo.codigo}}  - {{grupo.nombre}}</span></v-expansion-panel-header>
											<v-expansion-panel-content>
												<v-card class="pa-3" flat>
													<v-form ref="form"
													        v-model="valid"
													        lazy-validation>
														<v-container class="ma-0 pa-0">
															<v-row justify="center">
																<v-col cols="12" sm="12" md="12" lg="12" xl="12">
																	<div justify="center" class="mb-0">
																		<span>Agregar estudiantes al grupo</span>
																	</div>
																</v-col>
															</v-row>
															<v-row align="center">
																<v-col align="center" class="d-flex" cols="12" sm="12">
																	<v-text-field v-model="nuevo_grupo.nombre" light
																	              label="Código del estudiante"
																	              required
																	              :rules="basicRules"
																	              clearable
																	              prepend-inner-icon="mdi-numeric">

																	</v-text-field>
																</v-col>
																<v-col class="d-flex" cols="12" sm="12">
																	<v-spacer></v-spacer>
																	<v-btn dense text @click="agregarAgrupo">Agregar
																	</v-btn>

																	<v-dialog v-model="dialog1" max-width="70%">
																		<template v-slot:activator="{ on, attrs }">
																													<v-btn
																													text
																														v-bind="attrs"
																														v-on="on"
																													>
																													Listar	participantes
																													</v-btn>
																												</template>
																		<v-card class="pa-3">

																			<v-card-title>Listado de participantes</v-card-title>
																			<v-divider></v-divider>
																			<v-card-text>

																				<v-list dense class="grow ">

																					<v-list-item v-for="(p, i) in grupo.participantes" :key="i">

																						<v-list-item-content>
																							<v-list-item-title><span>{{p.codigo}} - {{p.nombre}}</span></v-list-item-title>
																							<v-divider v-if="i + 1 < grupo.participantes.length" :key="i"></v-divider>
																						</v-list-item-content>

																					</v-list-item>

																				</v-list>

																				<v-divider></v-divider>

																			</v-card-text>
																			<v-card-actions>
																				<v-spacer></v-spacer>
																				<v-btn color="primary" text @click="dialog1 = false">
																					Cerrar
																				</v-btn>
																			</v-card-actions>
																		</v-card>
																	</v-dialog>

																</v-col>

															</v-row>

														</v-container>
													</v-form>

												</v-card>
											</v-expansion-panel-content>
										</v-expansion-panel>
									</v-expansion-panels>
								</v-container>
							</v-sheet>

						</v-card>
					</v-col>
				</v-row>
				<!--	</v-card>

																							</v-col>
																						</v-row>

																					</v-container> -->
			</v-card>
		</v-col>
	</v-row>

</template>

<style>



</style>
