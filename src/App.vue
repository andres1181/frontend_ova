<script>

	// import HelloWorld from './components/HelloWorld';
	import { misMixins } from '@/mixins/mixins.js'
	//	import axios from 'axios'

	//	import Unidades from '@/components/views/card_unidad.vue'
	// import Polimorfismo from '@/components/ovas/polimorfismo/polimorfismo.vue'
	// import Perfil from '@/components/views/editar_perfil.vue'

	export default {
		name: 'App',

		components: {},

		data: () => ({
			usuario: {
				codigo: '',
				tipo: '',
				nombres: ''
			}
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
			}
		},
		created() {
			if (this.$route.name != 'login' && this.$route.name != 'registro') {
				this.buscarDatos()
			}
		}
	}

</script>

<template>

	<v-app id="app">
		<v-navigation-drawer class="fondo-1 elevation-4" dark permanent stateless app>
			<!-- Registro -->
			<v-list v-show="$route.name=='registro'" class="grow pa-4">
				<v-list-item>
					<v-list-item-content>

					</v-list-item-content>
				</v-list-item>
				<v-list-item>
					<v-list-item-content>
						<v-list-item-title>¿Ya tienes una cuenta?</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-divider></v-divider>
				<v-list-item @click="$router.push({ path: 'login' })">
					<v-icon class="mx-2">mdi-account</v-icon>

					<v-list-item-content>
						<v-list-item-title>Login</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-divider></v-divider>
				<v-list-item @click="">
					<v-icon class="mx-2">mdi-help</v-icon>
					<v-list-item-content>
						<v-list-item-title>Ayuda</v-list-item-title>
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
			</v-list>

			<!-- Login -->

			<v-list v-show="$route.name=='login'" class="grow pa-4">
				<v-list-item>
					<v-list-item-content>

					</v-list-item-content>
				</v-list-item>
				<v-list-item>
					<v-list-item-content>
						<v-list-item-title>¿No tienes una cuenta?</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-divider></v-divider>
				<v-list-item @click="$router.push({ path: 'registro' })">
					<v-icon class="mx-2">mdi-account</v-icon>

					<v-list-item-content>
						<v-list-item-title>Registro</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-divider></v-divider>
				<v-list-item @click="">
					<v-icon class="mx-2">mdi-help</v-icon>
					<v-list-item-content>
						<v-list-item-title>Ayuda</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-divider></v-divider>

				<v-divider></v-divider>
				<v-list-item @click="">
					<v-icon class="mx-2">mdi-file-tree</v-icon>
					<v-list-item-content>
						<v-list-item-title>Mapa del sitio</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-divider></v-divider>
			</v-list>

			<v-list v-show="usuario.tipo=='estudiante' && $route.name!='login' && $route.name!='registro'" class="grow pa-4">
				<v-list-item two-line>
					<v-list-item-avatar>
						<img src="https://randomuser.me/api/portraits/women/81.jpg">
					</v-list-item-avatar>

					<v-list-item-content>
						<v-list-item-title>{{usuario.codigo}}</v-list-item-title>
						<v-list-item-subtitle>{{usuario.tipo}}</v-list-item-subtitle>
					</v-list-item-content>
				</v-list-item>
				<v-list-item>
					<v-list-item-title class="headline">{{usuario.nombres}}</v-list-item-title>
				</v-list-item>
				<v-divider></v-divider>
				<v-list-item @click="($router.push({ path: '/usuario/perfil' })) && (titulo='Editar Perfil')">
					<v-icon class="mx-2">mdi-account</v-icon>

					<v-list-item-content>
						<v-list-item-title>Editar Perfil</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-divider></v-divider>
				<v-list-item @click="($router.push({ path: '/estudiante/unidades' })) && (titulo='Unidades')">
					<v-icon class="mx-2">mdi-school</v-icon>

					<v-list-item-content>
						<v-list-item-title>Unidades</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-divider></v-divider>
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

			<v-list v-show="usuario.tipo=='docente' && $route.name!='login' && $route.name!='registro'" class="grow pa-4">
				<v-list-item two-line>
					<v-list-item-avatar>
						<img src="https://randomuser.me/api/portraits/women/81.jpg">
					</v-list-item-avatar>

					<v-list-item-content>
						<v-list-item-title>{{usuario.codigo}}</v-list-item-title>
						<v-list-item-subtitle>{{usuario.tipo}}</v-list-item-subtitle>
					</v-list-item-content>
				</v-list-item>
				<v-list-item>
					<v-list-item-title class="headline">{{usuario.nombres}}</v-list-item-title>
				</v-list-item>
				<v-divider></v-divider>
				<v-list-item @click="($router.push({ path: '/usuario/perfil' })) && (titulo='Editar Perfil')">
					<v-icon class="mx-2">mdi-account</v-icon>

					<v-list-item-content>
						<v-list-item-title>Editar Perfil</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-divider></v-divider>
				<v-list-item @click="($router.push({ path: '/docente/crear_preguntas' })) && (titulo='Crear Pregunta')">
					<v-icon class="mx-2">mdi-school</v-icon>

					<v-list-item-content>
						<v-list-item-title>Crear Pregunta</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-divider></v-divider>
				<v-list-item @click="">
					<v-icon class="mx-2">mdi-help</v-icon>
					<v-list-item-content>
						<v-list-item-title>Ayuda</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-divider></v-divider>
				<v-list-item @click="($router.push({ path: '/encuesta' })) && (titulo='Encuesta')">
					<v-icon class="mx-2">mdi-ballot</v-icon>
					<v-list-item-content>
						<v-list-item-title>Encuesta</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-divider></v-divider>
				<v-list-item @click="($router.push({ path: '/mapa_del_sitio' })) && (titulo='Mapa del Sitio')">
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
		</v-navigation-drawer>
		<!--<v-app-bar app>

			</v-app-bar> -->

		<v-content>

			<!-- Provides the application the proper gutter -->
			<v-container fluid>

				<!-- If using vue-router -->
				<router-view></router-view>
			</v-container>
		</v-content>

	</v-app>

</template>

<style >

	#app {
		height: 100vh;
	}

</style>
