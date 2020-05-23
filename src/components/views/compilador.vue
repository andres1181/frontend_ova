<script>

	import dedent from 'dedent'
	import Codemirror from 'codemirror/lib/codemirror.js'
	import 'codemirror/lib/codemirror.css'
	import 'codemirror/mode/clike/clike.js'
	import 'codemirror/theme/dracula.css'

	export default {
		name: 'Compilador',
//Agregar un prop con codigo de entrada
// Para el juez:
//
		data: () => ({
			code: '#include <iostream>\nusing namespace std;',
			editor: '',
			text: '',
			datos: {
				script: '',
				language: '',
				versionIndex: '',
				clientId: '',
				clientSecret: ''
			},
			respuesta: ''
		}),
		watch: {},
		methods: {
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
						if (response.status == '200' || response.status == '201') {
							// eslint-disable-next-line no-console
							console.log(response.data)
							this.text = response.data.output
						}
						if (response.status == '400' || response.status == '401' || response.status == '404') {
							// eslint-disable-next-line no-console
							console.log('Error: ' + response)
						}
					})
					.catch(e => {
						// eslint-disable-next-line no-console
						console.log(`Error en el servidor:  ${e}`)
						// eslint-disable-next-line no-console
						console.log(e.response)
					})
			}
		},
		mounted() {
			this.editor = Codemirror.fromTextArea(document.getElementById('editor2'), {
				mode: 'text/x-c++src',
				theme: 'dracula',
				lineNumbers: true
				//readOnly: 'nocursor'
			})
		},
		created() {}
	}

</script>

<template>

	<div class="">

		<textarea v-model="code" rows="20" cols="80" id="editor2" disabled></textarea>
		<div id="resultado">
			<h3>Resultado:</h3>
			<p>
				{{text}}
			</p>
		</div>
		<v-btn @click="compilar()">Compilar</v-btn>
	</div>

</template>

<style>

	#resultado {
		text-align: left;
		height: 120px;
		background-color: black;
		color: gray;
	}

</style>
