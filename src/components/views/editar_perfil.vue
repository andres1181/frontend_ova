<script>

	import { misMixins } from '@/mixins/mixins.js'

	export default {
		name: 'editarPerfil',
		components: {},
		data() {
			return {
				navigation: 0,
				dim: [],

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
			}
		},
		mixins: [misMixins],

		methods: {
			buscarDatos() {
				var token = String(localStorage.getItem('tokenUser'))
				var id_ = this.obtenerDatos().id

				const baseURL = `/usuarios/me/${id_}`

				this.axios({
					method: 'get',
					url: baseURL,
					headers: {
						'x-access-token': token
					}
				})
					.then(response => {
						this.isError = false
						this.usuario = response.data
					})
					.catch(e => {
						// eslint-disable-next-line no-console
						this.isError = true
						this.error = ` ${e.mensaje}`
					})
			},

			actualizarDatos() {
				var token = String(localStorage.getItem('tokenUser'))
				//	headers=
				var id_ = this.obtenerDatos().id

				const baseURL = '/usuarios/update/'

				//this.validate()
				if (this.$refs.form.validate()) {
					this.axios({
						method: 'put',
						url: baseURL + id_, // + user,
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

							if (response.status == '400' || response.status == '401' || response.status == '404') {
								this.isError = true
								this.error = 'Error'
								//this.$router.push('/estudiante')
							} else {
								this.error = false
								this.isUpdate = true

								this.mensaje = '¡Actualizado!'
								//this.$emit('datos')
								this.$router.go()
							}
						})
						.catch(e => {
							this.isError = true
							this.error = `${e.mensaje}`
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
			<v-card elevation="2" :width="dim[1]" :height="dim[0]" class="pb-4 px-4 mb-1 mt-7 mx-7 rounded-xl">
				<v-row justify="center">
					<v-col class="pa-0 " cols="11">
						<v-card dark color="red" elevation="4" class="card_cabecera  d-flex  align-center">
							<v-card-title class="align-center">

								<span class="headline font-weight-bold">Editar Perfil</span>
							</v-card-title>
						</v-card>
					</v-col>
				</v-row>

				<v-row justify="center">
					<v-col cols="10" sm="10" md="10" lg="10" xl="10">
						<v-form ref="form"
						        v-model="valid"
						        lazy-validation>
							<v-list-item two-line>
								<v-list-item-avatar>
									<v-avatar size="36" color="grey">
										<span v-if="usuario.tipo === 'estudiante'" class="white--text  text-caption">E</span>
										<span v-if="usuario.tipo === 'administrador'" class="white--text  text-caption">A</span>
										<span v-if="usuario.tipo === 'docente'" class="white--text text-caption">D</span>
									</v-avatar>
								</v-list-item-avatar>

							</v-list-item>
							<v-container class="ma-0 pa-0">
								<v-row>
									<v-col class="d-inline" cols="11" sm="11" md="11" lg="11" xl="11">
										<v-text-field v-model="usuario.nombres" :disabled="ed_nom" light
										              color="grey"
										              label="Nombres"
										              required
										              :rules="basicRules"
										              dense
										              clearable
										              prepend-inner-icon="mdi-account">

										</v-text-field>
									</v-col>

									<v-col class="d-inline" cols="1" sm="1" md="1" lg="1" xl="2">
										<v-btn class=" mx-0" outlined small fab color="red" @click="ed_nom=!ed_nom">
											<v-icon>mdi-pencil</v-icon>
										</v-btn>
									</v-col>
								</v-row>

								<v-row>
									<v-col class="d-inline" cols="11" sm="11" md="11" lg="11" xl="11">
										<v-text-field v-model="usuario.codigo" :disabled="ed_cod" light
										              color="grey"
										              label="Código"
										              required
										              dense
										              :rules="codigoRules"
										              prepend-inner-icon="mdi-numeric"
										              clearable></v-text-field>

									</v-col>

									<v-col class="d-inline" cols="1" sm="1" md="1" lg="1" xl="1">
										<v-btn class="mx-0" outlined small fab color="red" @click="ed_cod=!ed_cod">
											<v-icon>mdi-pencil</v-icon>
										</v-btn>
									</v-col>
								</v-row>
								<v-row>
									<v-col class="d-inline" cols="11" sm="11" md="11" lg="11" xl="11">

										<v-text-field v-model="usuario.email" :disabled="ed_correo" light
										              color="grey"
										              label="Correo"
										              required
										              dense
										              :rules="emailRules"
										              prepend-inner-icon="mdi-email"
										              clearable></v-text-field>
									</v-col>

									<v-col class="d-inline" cols="1" sm="1" md="1" lg="1" xl="1">
										<v-btn class="mx-0" outlined small fab color="red" @click="ed_correo=!ed_correo">
											<v-icon>mdi-pencil</v-icon>
										</v-btn>
									</v-col>
								</v-row>
								<v-row justify="center">
									<v-btn color="red" block x-large dark @click="actualizarDatos">Guardar

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

			</v-card>
		</v-col>
	</v-row>

</template>

<style>



</style>
