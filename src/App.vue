<script>

	// import HelloWorld from './components/HelloWorld';
	import { misMixins } from '@/mixins/mixins.js'
	//	import axios from 'axios'

	import menuEstudiante from '@/components/views/Estudiante/menuEstudiante.vue'
	import menuAdministrador from '@/components/views/administrador/menuAdministrador.vue'
	// import Perfil from '@/components/views/editar_perfil.vue'
	import menuDocente from '@/components/views/Docente/menuDocente.vue'
	export default {
		name: 'App',

		components: {
			menuEstudiante,
			menuAdministrador,
			menuDocente
		},

		data: () => ({
			ventana: {
				alto: 0,
				ancho: 0
			},
			tamContenido: 0,
			usuario: {
				codigo: null,
				tipo: null,
				nombres: null
			},
			unidad: 'Polimorfismo'

			//
		}),
		mixins: [misMixins],

		methods: {
			/*	buscarDatos() {
					var token = String(localStorage.getItem('tokenUser'))
					var id_ = this.obtenerDatos().id
					// eslint-disable-next-line no-console
					//console.log(`EL ID ES: ${id_}`);

					//	const host = 'http://localhost:3000'
					//const baseURL = `/api/usuarios/me/${id_}`
					const ruta = `/usuarios/me/${id_}`

					this.axios({
						method: 'get',
						url: ruta, //host + baseURL, // + user,
						headers: {
							'content-type': 'application/json',
							'x-access-token': token
						}
					})
						.then(response => {
							this.usuario = response.data
							//	eslint-disable-next-line no-console
							//		console.log(this.usuario);
						})
						.catch(e => {
							this.error = `Error:  ${e}`
						})
				}, */
			datosUsuario() {
			//	var token = String(localStorage.getItem('tokenUser'))
				this.usuario.codigo = this.obtenerDatos().codigo
				this.usuario.tipo = this.obtenerDatos().tipo
				this.usuario.nombres = this.obtenerDatos().nombres
			},
			handleResize() {
				this.ventana.ancho = window.innerWidth
				this.ventana.alto = window.innerHeight
			}
			/*	tamanoVentana() {
								window.addEventListener('resize', this.handleResize)
								this.handleResize()
							}*/
		},
		created() {
			this.handleResize()
			/*this.tamanoVentana()
							this.tamContenido = (this.ventana.alto * 0.8)*/
			if (this.$route.name != 'login' && this.$route.name != 'registro') {
				this.datosUsuario()
			}
		},
		/*	destroyed() {
							window.removeEventListener('resize', this.handleResize)
						},*/
		mounted() {
			var container_0 = document.getElementById('container_0')
			container_0.style.maxHeight = this.ventana.alto + 'px'
		}
	}

</script>

<template>

	<v-app id="app">
		<menuEstudiante v-if="usuario.tipo=='estudiante' && $route.name!='login' && $route.name!='registro'" :nombre="usuario.nombres"></menuEstudiante>
		<menuAdministrador v-if="usuario.tipo=='administrador' && $route.name!='login' && $route.name!='registro'" :nombre="usuario.nombres"></menuAdministrador>
		<menuDocente v-if="usuario.tipo=='docente' && $route.name!='login' && $route.name!='registro'" :nombre="usuario.nombres"></menuDocente>

		<v-content>

			<!-- Provides the application the proper gutter -->
			<v-container id="container_0" fluid>
				<!-- If using vue-router -->
				<transition>
					<keep-alive>
						<router-view></router-view>
					</keep-alive>
				</transition>

			</v-container>
		</v-content>

	</v-app>

</template>

<style >

	.navigation_d {
		max-height: calc(100% - 64px);
	}
	#app {
		/*height: 100vh;*/
	}
	#container_0 {
		padding: 0;
	}

</style>
