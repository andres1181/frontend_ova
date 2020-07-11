<script>

	import { misMixins } from '@/mixins/mixins.js'
	//	import jwt_decode from 'jwt-decode'

	export default {
		name: 'Login',

		data: () => ({
			show3: false,
			isError: false,
			error: '',
			valid: true,
			user: {
				codigo: '',
				contrasena: ''
			},
			contrasenaRules: {
				required: value => !!value || 'Requerido.',
				min: v => v.length >= 8 || 'La contraseña debe tener minimo 8 caracteres'
			},
			codigoRules: [v => (v && v.length == 7) || 'El código debe ser de 7 digitos']
		}),
		mixins: [misMixins],
		methods: {
			onSubmit() {
				this.user.contrasena = String(this.user.contrasena)
				this.user.codigo = String(this.user.codigo)

				//const host = 'http://localhost:3000'
				//const baseURL = '/api/usuarios/login'
				const ruta = '/usuarios/login'

				if (this.$refs.form.validate()) {
					// this.axios({
					// 	method: 'post',
					// 	url: host + baseURL, // + user,
					// 	data: {
					// 		contrasena: this.user.contrasena,
					// 		codigo: this.user.codigo
					// 	}
					// })
					this.axios
						.post(ruta, this.user)
						.then(response => {
							if (response.data.auth && (response.status == '200' || response.status == '201')) {
								var token = response.data.token
								localStorage.setItem('tokenUser', token)
								var tipo = this.obtenerDatos().tipo

								if (tipo === 'estudiante') {
									var unidad = this.obtenerDatos().tipo
									if (unidad === 'polimorfismo') {
										this.$router.replace('/estudiante/unidades/polimorfismo').catch(err => {})
										this.$router.go()
									} else if (unidad === 'punteros') {
										this.$router.replace('/estudiante/unidades/polimorfismo').catch(err => {})
										this.$router.go()
									}
								} else if (tipo === 'docente') {
									this.$router.replace('/docente/crear_preguntas').catch(err => {})
									this.$router.go()
								} else if (tipo === 'administrador') {
									this.$router.replace('/crear_grupo').catch(err => {})
									this.$router.go()
								}
								//this.$emit('datos')
								//this.$router.go()
							}
							if (response.status == '400' || response.status == '401' || response.status == '404') {
								this.isError = true
								this.error = 'Datos incorrectos'
							}
						})
						.catch(e => {
							this.isError = true
							this.error = `Error en el servidor:  ${e}`
							// eslint-disable-next-line no-console
							console.log(e.response)
						})
				}
			}
		}
	}

</script>

<template>

	<!-- <v-container class="ma-0 pa-0 fill-height">
			<v-row width="100%" class=" fill-height overflow-y-auto">
				<v-col cols="2" class="pa-0">
					<v-card id="menu"
					        class="fill-height elevation-4"
					        tile
					        width="100%">
						<v-navigation-drawer class="fondo-1" dark permanent stateless width="100%">
							<v-row class="fill-height" no-gutters>

								<v-list class="grow pa-4">
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
									<v-list-item @click="">
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

							</v-row>
						</v-navigation-drawer>

					</v-card>

				</v-col>
				<v-col cols="10" class="pa-0">

					<v-card class="conten_ fill-height elevation-0 pa-8" color="rgba(255, 255, 255, 0.0)"> -->
	<v-row justify="center">
		<v-col cols="10" sm="10" md="4" lg="4" xl="4">
			<v-form ref="form"
			        v-model="valid"
			        lazy-validation>
				<v-container class="ma-0 pa-0">

					<v-row justify="center" class="ma-4">
						<v-col cols="12" sm="12" md="12" lg="12" xl="12">
							<div justify="center" class="display-1 mb-3">
								<h3 class=" centrar_text color-2"> Login!</h3>
							</div>
						</v-col>
					</v-row>
					<v-text-field v-model="user.codigo" outlined light
					              :color="this.color2"
					              label="Código"
					              required
					              dense
					              :rules="codigoRules"
					              prepend-inner-icon="mdi-numeric"
					              clearable></v-text-field>

					<v-text-field v-model="user.contrasena" outlined light
					              :type="show3 ? 'text' : 'password'"
					              :color="this.color2"
					              class="input-group--focused"
					              :rules="[contrasenaRules.required, contrasenaRules.min]"
					              counter
					              :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
					              @click:append="show3 = !show3"
					              label="Contraseña"
					              required
					              dense
					              prepend-inner-icon="mdi-lock"></v-text-field>
					<div v-show='isError'>
						<v-alert dense type="error">
							<span>{{error}}</span>
						</v-alert>
					</div>
					<v-row justify="center">
						<v-btn :color="this.color2" dark large @click="onSubmit"> Ingresar
							<v-icon>mdi-chevron-right</v-icon>
						</v-btn>
					</v-row>
				</v-container>
			</v-form>
		</v-col>
	</v-row>

	<!-- </v-card>

				</v-col>
			</v-row>

		</v-container> -->

</template>
