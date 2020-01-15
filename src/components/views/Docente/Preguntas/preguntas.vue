<script>

	import { misMixins } from '@/mixins/mixins.js'
	export default {
		name: 'Preguntas',
		data: () => ({
			selected: [2],
			preguntas: [],
			lista: {},
			isError: false,
			error: '',
			valid: true,
			opcionMultiple: {
				enunciado: '',
				opcion1: '',
				opcion2: '',
				opcion3: '',
				opcionCorrecta: ''

			},
			vyf: {
				enunciado: '',
				verdadero: ''
			},
			radioRules: [v => !!v || 'Seleccione un tipo de usuario'],
		}),
		mixins: [misMixins],
		methods: {
			// guardarPregunta(tipo) {
			// 	const ruta = '/actividades/crear'
			// 	var token = String(localStorage.getItem('tokenUser'))
			// 	var id_ = this.obtenerDatos().id
			// 	if (tipo == 'om') {
			// 		this.axios({method: 'post', url: ruta, // + user,
			// 			headers: {
			// 				'x-access-token': token
			// 			},
			// 			data: {
			// 				enunciado: this.opcionMultiple.enunciado,
			// 		    id_tema: 'this.opcionMultiple.tema',
			// 		    autor: id_,
			// 		    tipo: "multiple",
			// 		    activo: true
			// 			}
			// 		})
			// 			.then(response => {
			// 				if (response.data.auth && (response.status == '200' || response.status == '201')) {
			// 					this.opcionMultiple.enunciado = ''
			// 				}
			// 				if (response.status == '400' || response.status == '401' || response.status == '404') {
			// 					this.isError = true
			// 					this.error = 'Datos incorrectos'
			// 				}
			// 			})
			// 			.catch(e => {
			// 				this.isError = true
			// 				this.error = `Error en el servidor:  ${e}`
			// 				// eslint-disable-next-line no-console
			// 				console.log(e.response)
			// 			})
			//
			// 			for (var i = 0; i < 3; i++) {
			// 				this.axios({method: 'post', url: ruta, // + user,
			// 					headers: {
			// 						'x-access-token': token
			// 					},
			// 					data: {
			// 						respuesta: this.opcionMultiple[i+1],
			// 						id_tema: 'this.opcionMultiple.tema',
			// 						autor: id_,
			// 						tipo: "multiple",
			// 						correcta: false
			// 					}
			// 				})
			// 					.then(response => {
			// 						if (response.data.auth && (response.status == '200' || response.status == '201')) {
			// 							this.opcionMultiple.enunciado = ''
			// 						}
			// 						if (response.status == '400' || response.status == '401' || response.status == '404') {
			// 							this.isError = true
			// 							this.error = 'Datos incorrectos'
			// 						}
			// 					})
			// 					.catch(e => {
			// 						this.isError = true
			// 						this.error = `Error en el servidor:  ${e}`
			// 						// eslint-disable-next-line no-console
			// 						console.log(e.response)
			// 					})
			// 			}
			//
			//
			// 	}
			// 	if (tipo == 'fv') {
			// 	}
			// },
			buscarPreguntas: function() {
				var id_ = this.obtenerDatos().id
				var token = String(localStorage.getItem('tokenUser'))

				const ruta = '/actividades/listarAct'

				this.axios({
					method: 'get',
					url: ruta, //host + baseURL, // + user,
					headers: {
						'content-type': 'application/json',
						'x-access-token': token
					}
				})
					.then(response => {
						//	eslint-disable-next-line no-console
						console.log(response.data)
						this.lista = response.data
						//	eslint-disable-next-line no-console
						console.log('Lista:')
						//	eslint-disable-next-line no-console
						console.log(this.lista[0].autor)
						for (var i = 0; i < this.lista.length; i++) {
							if (this.lista[i].autor == id_) {
								this.preguntas.push(this.lista[i])
							}
						}
					})
					.catch(e => {
						//	eslint-disable-next-line no-console
						console.log(`Error:  ${e}`)
					})
				//	eslint-disable-next-line no-console

				// eslint-disable-next-line no-console
				console.log('Uno')
				// eslint-disable-next-line no-console
				console.log(this.lista)
			}

		},
		created() {
			this.buscarPreguntas()
		}
	}

</script>

<template>

	<v-card class="mx-auto pa-4">
		<v-list>
			<v-list-group  no-action>
				<template v-slot:activator>
							 <v-list-item-content>
								 <v-list-item-title>Opción Multiple</v-list-item-title>
							 </v-list-item-content>
						 </template>
					<v-form ref="form"
					        v-model="valid"
									class="pa-4"
					        lazy-validation>


							<v-textarea
	              v-model="opcionMultiple.enunciado"
	              label="Enunciado"
	            >

	            </v-textarea>
							<v-text-field v-model="opcionMultiple.opcionCorrecta" outlined light
							              label="Opción Correcta"
							              required
							              dense
							              clearable></v-text-field>
							<v-text-field v-model="opcionMultiple.opcion1" outlined light
							              label="Opción 1"
							              required
							              dense
							              clearable></v-text-field>
							<v-text-field v-model="opcionMultiple.opcion2" outlined light
							              label="Opción 2"
							              required
							              dense
							              clearable></v-text-field>

							<v-text-field v-model="opcionMultiple.opcion3" outlined light
							              label="Opción 3"
							              required
							              dense
							              clearable></v-text-field>

							<div v-show='isError'>
								<v-alert dense type="error">
									<span>{{error}}</span>
								</v-alert>
							</div>
							<v-row justify="center">
								<v-btn dark large @click=""> Guardar
									<v-icon>mdi-chevron-right</v-icon>
								</v-btn>
							</v-row>
					</v-form>
			</v-list-group>
			<v-list-group  no-action>
				<template v-slot:activator>
							 <v-list-item-content>
								 <v-list-item-title>Falso y Verdadero</v-list-item-title>
							 </v-list-item-content>
						 </template>
					<v-form ref="form"
					        v-model="valid"
									class="pa-4"
					        lazy-validation>
							<v-textarea
	              v-model="vyf.enunciado"
	              label="Enunciado"
	            >

	            </v-textarea>
							<v-radio-group v-model="vyf.verdadero" row mandatory class="ma-0" :rules="radioRules" required>
								<v-radio label="False" value="falso" ></v-radio>
								<v-radio label="Verdadeo" value="verdadero" ></v-radio>
							</v-radio-group>

							<div v-show='isError'>
								<v-alert dense type="error">
									<span>{{error}}</span>
								</v-alert>
							</div>
							<v-row justify="center">
								<v-btn  dark large @click=""> Guardar
									<v-icon>mdi-chevron-right</v-icon>
								</v-btn>
							</v-row>
					</v-form>
			</v-list-group>
			<v-subheader>Lista preguntas</v-subheader>
			<v-list-item v-for="pregunta in preguntas" :key="pregunta._id">

				<v-list-item-content>
					<v-list-item-title v-text="pregunta.enunciado"></v-list-item-title>
					<v-list-item-subtitle>Tema: {{pregunta.id_tema.titulo}}</v-list-item-subtitle>
				</v-list-item-content>
				<v-btn icon>
					<v-icon>mdi-pencil</v-icon>
				</v-btn>
				<v-btn icon>
					<v-icon>mdi-delete</v-icon>
				</v-btn>
			</v-list-item>
		</v-list>
	</v-card>

</template>

<style>

</style>
