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
