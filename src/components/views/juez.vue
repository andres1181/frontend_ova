<script>

	import dedent from 'dedent'
	import Codemirror from 'codemirror/lib/codemirror.js'
	import 'codemirror/lib/codemirror.css'
	import 'codemirror/mode/clike/clike.js'
	import 'codemirror/theme/dracula.css'

	export default {
		name: 'Juez',
		//Agregar un prop con codigo de entrada
		// Para el juez:
		//
		props: {
			nombre: {
				type: String,
				required: true
			},
			unidad: {
				type: Object,
				required: true
			},
			codigo: {
				type: String,
				//	require: true,
				defalult: '#include <iostream>\nusing namespace std;'
			}
		},
		data: () => ({
			code: '',
			editor: '',
			resultado: '',
			salidaObtenida: '',
			resultadoObtenido: '',
			salida: '',
			//salidaEsperada: '',
			correcta: null,
			datos: {
				script: '',
				language: '',
				versionIndex: '',
				clientId: '',
				clientSecret: ''
			}
		}),
		watch: {},
		methods: {
			//salida esperada y salida obtenida de la api
			comparar(a, b) {
				var correcto
				if (a == b) {
					correcto = true
				} else {
					correcto = false
				}
				return correcto
			},
			compilar() {
				this.datos.script = dedent(this.editor.getValue())
				this.datos.lenguaje = 'cpp'
				this.datos.versionIndex = '0'
				this.datos.clientId = '21e714fc3b1f69a2312fec11fe7ea296'
				this.datos.clientSecret = '55724bd6a524c22d327d1378c465866bfe5d0da07e2b74d24a0e1751c6f93b0b'
				//	this.user.contrasena = String(this.user.contrasena)
				//	this.user.codigo = String(this.user.codigo)

				//const host = 'http://localhost:3000'
				//const baseURL = '/api/usuarios/login'
				const proxy = 'https://cors-anywhere.herokuapp.com/' //Para el error No 'Access-Control-Allow-Origin'
				const ruta = 'https://api.jdoodle.com/v1/execute'

				this.axios({
					method: 'post',
					url: proxy + ruta, // + user,
					headers: {
						'Content-Type': 'application/json'
					},
					data: {
						script: String(this.datos.script),
						language: String(this.datos.lenguaje),
						versionIndex: String(this.datos.versionIndex),
						clientId: String(this.datos.clientId),
						clientSecret: String(this.datos.clientSecret)
					}
				})
					.then(response => {
						console.log(response.data)
						this.salidaObtenida = dedent(response.data.output)
						this.correcta = this.comparar(this.salidaObtenida, this.salida)
						this.resultadoObtenido = this.resultado.getValue()
						this.resultado.setValue(this.salidaObtenida)

						/*		if (response.status == '200' || response.status == '201') {
								// eslint-disable-next-line no-console

							}
							if (response.status == '400' || response.status == '401' || response.status == '404') {
								// eslint-disable-next-line no-console
								console.log('Error: ' + response)
							}*/
					})
					.catch(e => {
						// eslint-disable-next-line no-console
						console.log(` ${e}`)
						// eslint-disable-next-line no-console
						console.log(e.response)
					})
			}
		},
		mounted() {
			this.editor = Codemirror.fromTextArea(document.getElementById(this.nombre), {
				mode: 'text/x-c++src',
				theme: 'dracula',
				lineNumbers: true
				//readOnly: 'nocursor'
			})

			this.resultado = Codemirror.fromTextArea(document.getElementById('vistaResultado'), {
				mode: 'text/plain',
				//	lineNumbers: true,
				readOnly: 'nocursor'
			})
		},
		created() {
			this.code = this.codigo
		}
	}

</script>

<template>

	<v-card class="elevation-0 my-10">
		<v-card outlined class="my-2">
			<v-card-subtitle>Descripción:</v-card-subtitle>
			<v-card-text>
				<span>En la siguiente actividad utilizando los conceptos de la unidad deberás plantear una solución escrita en C++ al problema dado. Ten en cuenta que la salida de tu programa debe ser IGUAL a la salida esperada. Recuerda las limitaciones del Compilador.</span>
			</v-card-text>
		</v-card>
		<v-card outlined class="my-2">
			<v-card-subtitle>Problema:</v-card-subtitle>
			<v-card-text>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
				irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
				non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</v-card-text>
		</v-card>
		<v-card outlined class="my-2">
			<v-card-subtitle>Salida esperada:</v-card-subtitle>
			<v-card-text> {{salida}} </v-card-text>
		</v-card>
		<v-card outlined class="my-2">
			<v-card-subtitle>Editor:
				<!-- <v-btn class="my-2 " outlined color="warning" @click="compilar()">
						<v-icon>mdi-arrow-right-bold</v-icon> Ejecutar
					</v-btn> -->

			</v-card-subtitle>
			<textarea class="pa-2" v-model="code" rows="20" cols="80" :id="nombre" disabled></textarea>

			<v-btn block x-large tile color="amber" @click="compilar()">
				Ejecutar
				<v-icon>mdi-arrow-right-bold</v-icon>
			</v-btn>

		</v-card>
		<v-alert class="my-3" dense outlined
		         type="error"
		         v-show="correcta===false">
			<strong>Incorrecto.</strong> Revise su código.
		</v-alert>
		<v-alert class="my-3" dense text
		         type="success"
		         v-show="correcta===true">
			<strong>¡Correcto!</strong>
		</v-alert>
		<v-card class="my-2 px-4 overflow-y-auto">
			<!-- <v-card-title class="headline">Resultado:</v-card-title> -->

			<v-card-subtitle>Resultado:</v-card-subtitle>

			<textarea id="vistaResultado" rows="8" cols="80"></textarea>
		</v-card>

	</v-card>

</template>

<style>

	/* #resultado {
			text-align: left;
			height: 120px;
			background-color: black;
			color: gray;
		} */

</style>
