<script>

	import { misMixins } from '@/mixins/mixins.js'
	import axios from 'axios'

	export default {
		name: 'editarPerfil',
		components: {},
		data: () => ({
			navigation: 0,
			dim: [],
			color: '#4CBAC4',
			color2: '#3cd3ad',
			color3: '#737373',
			ed_nom: true,
			ed_correo: true,
			ed_cod: true,
			isError: false,
			error: '',
			mensaje: '',
			isUpdate: false,
			valid: true,
			usuario: [],
			codigoRules: [v => (v && v.length == 7) || 'El código debe ser de 7 digitos'],
			basicRules: [v => !!v || 'Campo requerido'],
			emailRules: [v => !!v || 'El correo es requerido', v => /.+@.+\..+/.test(v) || 'El correo ingresado no es valido']
		}),
		mixins: [misMixins],

		methods: {
			buscarDatos() {
				var token = String(localStorage.getItem('tokenUser'))
				var id_ = this.obtenerDatos().id
				//	var id_ = this.id
				// eslint-disable-next-line no-console
				//	console.log(`EL ID ES: ${id_}`);

				const host = 'http://localhost:3000'
				const baseURL = `/api/usuarios/me/${id_}`

				axios({
					method: 'get',
					url: host + baseURL, // + user,
					headers: {
						'x-access-token': token
					}
					//,
					// data: {
					// 	nombres: this.usuario.nombres,
					// 	email: this.usuario.email,
					// 	codigo: this.usuario.codigo
					// }
				})
					.then(response => {
						// eslint-disable-next-line no-console
						//	console.log(response.data);
						//if (response.status == '201') {
						//this.$router.push('/estudiante')
						this.isError = false
						//		this.isUpdate = true
						this.usuario = response.data
						//	this.mensaje = '¡Actualizado!'
						//}
						//else {
						//this.isError = true
						//this.error = 'Datos incorrectos'
						//}
					})
					.catch(e => {
						// eslint-disable-next-line no-console
						this.isError = true
						this.error = `Error:  ${e}`
					})
			},

			actualizarDatos() {
				var token = String(localStorage.getItem('tokenUser'))
				//	headers=
				var id_ = this.obtenerDatos().id
				// eslint-disable-next-line no-console
				//	console.log(id_)
				const host = 'http://localhost:3000'
				const baseURL = '/api/usuarios/update/'

				//this.validate()
				if (this.$refs.form.validate()) {
					axios({
						method: 'put',
						url: host + baseURL + id_, // + user,
						headers: {
							'content-type': 'application/json',
							'x-access-token': token
						},
						data: {
							nombres: this.usuario.nombres,
							email: this.usuario.email,
							codigo: this.usuario.codigo
						}
					})
						.then(response => {
							// eslint-disable-next-line no-console

							if (response.status == '201') {
								//this.$router.push('/estudiante')
								this.error = false
								this.isUpdate = true

								this.mensaje = '¡Actualizado!'
								//this.$emit('datos')
								this.$router.go()
							} else {
								this.isError = true
								this.error = 'Error'
							}
						})
						.catch(e => {
							// eslint-disable-next-line no-console
							this.isError = true
							this.error = `Error en el servidor:  ${e}`
						})
				}
			}
		},
		created() {
				this.dim = this.obtenerDimensiones()
			this.buscarDatos()
		}
	}

</script>

<template>

	<v-row justify="center">
		<v-col cols="8" class="pa-0">
			<v-card elevation="2" :width="dim[1]" :height="dim[0]" class="pb-5 mx-8 mt-10 mb-5 rounded-xl">
				<v-row justify="center">
					<v-col class="pa-0 " cols="11">
						<v-card dark color="cyan" elevation="4" class="card_cabecera rounded-lg d-flex  align-center">
							<v-card-title class="align-center">

								<span class="headline font-weight-bold">Editar Perfil</span>
							</v-card-title>
						</v-card>
					</v-col>
				</v-row>

				<!-- <v-row  >
					<v-col cols="12"
					       sm="12"
					       md="12"
					       class="my-4"> -->
				<!-- <v-hover v-slot:default="{ hover }">
							<v-card id="edi"  :elevation="hover ? 10 : 2"> -->

				<v-row justify="center">
					<v-col cols="12" sm="12" md="6" lg="6" xl="6" class="pa-0">
						<v-form ref="form"
						        v-model="valid"
						        lazy-validation
						        >
							<v-list-item two-line>
								<v-list-item-avatar>
									<img src="https://randomuser.me/api/portraits/women/81.jpg">
								</v-list-item-avatar>

							</v-list-item>
							<v-container class="ma-0 pa-0">
								<v-row>
									<v-col class="d-inline" cols="10" sm="10" md="10" lg="10" xl="10">
										<v-text-field v-model="usuario.nombres" :disabled="ed_nom"  light
										              :color="color2"
										              label="Nombres"
										              required
										              :rules="basicRules"
										              dense
										              clearable
										              prepend-inner-icon="mdi-account">

										</v-text-field>
									</v-col>

									<v-col class="d-inline" cols="2" sm="2" md="2" lg="2" xl="2">
										<v-btn class=" mx-0" outlined small fab color="indigo" @click="ed_nom=!ed_nom">
											<v-icon>mdi-pencil</v-icon>
										</v-btn>
									</v-col>
								</v-row>

								<v-row>
									<v-col class="d-inline" cols="10" sm="10" md="10" lg="10" xl="10">
										<v-text-field v-model="usuario.codigo" :disabled="ed_cod"  light
										              :color="color2"
										              label="Código"
										              required
										              dense
										              :rules="codigoRules"
										              prepend-inner-icon="mdi-numeric"
										              clearable></v-text-field>

									</v-col>

									<v-col class="d-inline" cols="2" sm="2" md="2" lg="2" xl="2">
										<v-btn class="mx-0" outlined small fab color="indigo" @click="ed_cod=!ed_cod">
											<v-icon>mdi-pencil</v-icon>
										</v-btn>
									</v-col>
								</v-row>
								<v-row>
									<v-col class="d-inline" cols="10" sm="10" md="10" lg="10" xl="10">

										<v-text-field v-model="usuario.email" :disabled="ed_correo"  light
										              :color="color2"
										              label="Correo"
										              required
										              dense
										              :rules="emailRules"
										              prepend-inner-icon="mdi-email"
										              clearable></v-text-field>
									</v-col>

									<v-col class="d-inline" cols="2" sm="2" md="2" lg="2" xl="2">
										<v-btn class="mx-0" outlined small fab color="indigo" @click="ed_correo=!ed_correo">
											<v-icon>mdi-pencil</v-icon>
										</v-btn>
									</v-col>
								</v-row>
								<v-row justify="center">

									<v-btn :color="color2" dark @click="actualizarDatos">Guardar
										<v-icon>mdi-check</v-icon>
									</v-btn>

								</v-row>
							</v-container>
						</v-form>
					</v-col>
				</v-row>

				<div v-show='isError'>
					<v-alert dense type="error">
						<span>{{error}}</span>
					</v-alert>
				</div>
				<div v-show='isUpdate'>
					<v-alert dense type="success">
						<span>{{mensaje}}</span>
					</v-alert>
				</div>
				<!-- </v-card>
						</v-hover>
					</v-col>
				</v-row> -->
			</v-card>
		</v-col>
	</v-row>

</template>

<style>

	#editar_perfil {
		-webkit-border-radius: 12px;
		-moz-border-radius: 12px;
		border-radius: 12px;
	}
	.card_cabecera {
		position: relative;
		align-self: center;
		min-height: 50px;
		top: -20px;
		z-index: 1;
		color: '#4CBAC4';
	}

</style>
