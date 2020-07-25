<script>

	import { misMixins } from '@/mixins/mixins.js'
	//	import axios from 'axios'

	// import Perfil from '@/components/views/editar_perfil.vue'

	export default {
		name: 'App',

		data: () => ({
			ventana: {
				alto: 0,
				ancho: 0
			},
			tamContenido: 0,
			usuario: {
				id: '',
				codigo: '',
				tipo: '',
				nombres: ''
			}

			//
		}),
		mixins: [misMixins],

		methods: {
			getUnidad(array) {
				for (var i = 0; i < array.length; i++) {
					localStorage.setItem(`datos${array[i].componente}`, JSON.stringify(array[i]))
				}
			},

			datosUnidades() {
				const ruta = '/unidadesTemas/obtener/unidades' //Obtengo los datos de la unidad
				var self = this
				this.axios
					.get(ruta)
					.then(response => {
						this.getUnidad(response.data)
						localStorage.setItem(`datosUnidades`, JSON.stringify(response.data))
					})
					.catch(e => {
						//	eslint-disable-next-line no-console
						console.log(`Error:  ${e}`)
					})
			},
			datosUsuario() {
				//	var token = String(localStorage.getItem('tokenUser'))
				this.usuario.id = this.obtenerDatos().id
				this.usuario.codigo = this.obtenerDatos().codigo
				this.usuario.tipo = this.obtenerDatos().tipo
				this.usuario.nombres = this.obtenerDatos().nombres
			},
			handleResize() {
				this.ventana.ancho = window.innerWidth
				this.ventana.alto = window.innerHeight
			}
		},
		created() {
			this.handleResize()
			/*this.tamanoVentana()
											this.tamContenido = (this.ventana.alto * 0.8)*/
			if (this.$route.name != 'login' && this.$route.name != 'registro') {
				this.datosUsuario()
			}

			this.datosUnidades()
		},

		mounted() {
			var container_0 = document.getElementById('container_0')
			container_0.style.maxHeight = this.ventana.alto + 'px'
		}
	}

</script>

<template>

	<v-app id="app">

		<v-navigation-drawer color="white"
		                     v-if="usuario.nombres!=='' && $route.name!=='login' && $route.name!=='registro'"
		                     expand-on-hover
		                     permanent
		                     stateless
		                     app>
			<v-list dense>
				<v-list-item two-line class="px-1">
					<v-list-item-avatar class="px-1">
						<v-avatar size="36" color="grey">
							<span v-if="usuario.tipo === 'estudiante'" class="white--text  text-caption">E</span>
							<span v-if="usuario.tipo === 'administrador'" class="white--text  text-caption">A</span>
							<span v-if="usuario.tipo === 'docente'" class="white--text text-caption">D</span>
						</v-avatar>
						<span class="white--text headline">{{usuario.tipo}}</span>
					</v-list-item-avatar>

					<v-list-item-content>
						<v-list-item-title class="text-uppercase text-truncate">{{usuario.nombres}}</v-list-item-title>
						<v-list-item-subtitle class="text-uppercase text-truncate text-caption"><span>{{usuario.tipo}}</span></v-list-item-subtitle>

					</v-list-item-content>
				</v-list-item>

				<v-divider></v-divider>
				<v-list-item link v-if="usuario.tipo==='estudiante'" @click="($router.push({ name: 'unidades' }).catch(err => {}))">
					<v-list-item-action>
						<v-icon>mdi-home</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>Inicio</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item link v-if="usuario.tipo==='docente'" @click="($router.push({ name: 'inicioDocente' }).catch(err => {}))">
					<v-list-item-action>
						<v-icon>mdi-home</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>Inicio</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item link v-if="usuario.tipo==='administrador'" @click="($router.push({ name: 'inicioAdministrador' }).catch(err => {}))">
					<v-list-item-action>
						<v-icon>mdi-home</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>Inicio</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item link @click="($router.push({ path: '/usuario/perfil' }).catch(err => {}))">
					<v-list-item-action>
						<v-icon>mdi-account</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>Perfil</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item @click="">
					<v-list-item-action>
						<v-icon>mdi-ballot</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>Encuesta</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item @click="">
					<v-list-item-action>
						<v-icon>mdi-file-tree</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>Mapa del sitio</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item @click="cerrarSesion">
					<v-list-item-action>
						<v-icon>mdi-logout</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>Cerrar Sesión</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>

		<v-main>

			<!-- Provides the application the proper gutter -->
			<v-container id="container_0" fluid>
				<!-- If using vue-router -->
				<transition>
					<keep-alive>
						<router-view></router-view>
					</keep-alive>
				</transition>

			</v-container>
		</v-main>

	</v-app>

</template>

<style >


</style>
