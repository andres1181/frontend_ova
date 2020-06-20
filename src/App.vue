<script>

	// import HelloWorld from './components/HelloWorld';
	import { misMixins } from '@/mixins/mixins.js'
	//	import axios from 'axios'

	//	import Unidades from '@/components/views/card_unidad.vue'
	//import menuPolimorfismo from '@/components/ovas/polimorfismo/menuPolimorfismo.vue'
	//	import reportes from '@/components/views/Docente/menuDocente.vue'
	import menuAdministrador from '@/components/views/administrador/menuAdministrador.vue'
	// import Perfil from '@/components/views/editar_perfil.vue'
	import menuDocente from '@/components/views/Docente/menuDocente.vue'
	export default {
		name: 'App',

		components: {
			menuAdministrador,
			menuDocente
			//		menuPolimorfismo,
			//		reportes
		},

		data: () => ({
			ventana: {
				alto: 0,
				ancho: 0
			},
			tamContenido: 0,
			usuario: {
				codigo: '1111111',
					tipo: 'estudiante',
				//		tipo: 'docente',
				//tipo: 'administrador',
				nombres: 'Usuario x'
			},
			unidad: 'Polimorfismo'

			//
		}),
		mixins: [misMixins],

		methods: {
			buscarDatos() {
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
				this.buscarDatos()
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
		<v-navigation-drawer expand-on-hover permanent stateless app dark min-width="56">
			<v-list dense v-show="usuario.tipo=='estudiante' && $route.name!='login' && $route.name!='registro'" class="grow ">
				<v-list-item class="px-2">
					<v-list-item-avatar>
						<v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
					</v-list-item-avatar>
				</v-list-item>
				<!-- <v-list-group prepend-icon="mdi-school">
			      <template v-slot:activator>
			                     <v-list-item-title>Temas</v-list-item-title>
			          </template>

			      <menuPolimorfismo></menuPolimorfismo>

			    </v-list-group> -->

				<v-divider></v-divider>
				<v-list-item @click="($router.push({ path: '/usuario/perfil' })) && (titulo='Editar Perfil')">
					<v-list-item-icon>
						<v-icon>mdi-account</v-icon>
					</v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title>Editar Perfil</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item @click="">
					<v-list-item-icon>
						<v-icon>mdi-ballot</v-icon>
					</v-list-item-icon>
					<v-list-item-title>Encuesta</v-list-item-title>

				</v-list-item>
				<v-list-item @click="">
					<v-list-item-icon>
						<v-icon>mdi-help</v-icon>
					</v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title>Ayuda</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-divider></v-divider>
				<v-list dense>

				<v-list-item @click="">
					<v-list-item-icon>
					<v-icon >mdi-file-tree</v-icon>
						</v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title>Mapa del sitio</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item @click="">
					<v-list-item-icon>
						<v-icon>mdi-logout</v-icon>
					</v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title>Cerrar Sesión</v-list-item-title>
					</v-list-item-content>
				</v-list-item>

				</v-list>
			</v-list>

		</v-navigation-drawer>
		<menuAdministrador v-if="usuario.tipo=='administrador'" :nombre="usuario.nombres"></menuAdministrador>
		<menuDocente v-if="usuario.tipo=='docente'" :nombre="usuario.nombres"></menuDocente>
		<!-- <v-app-bar  dark class="fondo-3" stateless app dense  >

						<v-spacer></v-spacer>

						<span>{{usuario.nombres}} - {{usuario.codigo}}</span>
						<v-menu left bottom>
							<template v-slot:activator="{ on, attrs }">
										          <v-btn
										            icon
										            v-bind="attrs"
										            v-on="on"
										          >
										            <v-icon>mdi-dots-vertical</v-icon>
										          </v-btn>
										        </template>

							<v-list>
								<v-list-item @click="($router.push({ path: '/usuario/perfil' })) && (titulo='Editar Perfil')">
									<v-icon class="mx-2">mdi-account</v-icon>

									<v-list-item-content>
										<v-list-item-title>Editar Perfil</v-list-item-title>
									</v-list-item-content>
								</v-list-item>
								<v-list-item @click="">
									<v-icon class="mx-2">mdi-help</v-icon>
									<v-list-item-content>
										<v-list-item-title>Ayuda</v-list-item-title>
									</v-list-item-content>
								</v-list-item>
								<v-divider></v-divider>
								<v-list-item @click="">
									<v-icon class="mx-2">mdi-ballot</v-icon>
									<v-list-item-content>
										<v-list-item-title>Encuesta</v-list-item-title>
									</v-list-item-content>
								</v-list-item>
								<v-divider></v-divider>
								<v-list-item @click="">
									<v-icon class="mx-2">mdi-file-tree</v-icon>
									<v-list-item-content>
										<v-list-item-title>Mapa del sitio</v-list-item-title>
									</v-list-item-content>
								</v-list-item>
								<v-divider></v-divider>
								<v-list-item @click="">
									<v-icon class="mx-2">mdi-logout</v-icon>
									<v-list-item-content>
										<v-list-item-title>Cerrar Sesión</v-list-item-title>
									</v-list-item-content>
								</v-list-item>

							</v-list>
						</v-menu>
					</v-app-bar> -->
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
