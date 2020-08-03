<script>

	import { misMixins } from '@/mixins/mixins.js'
	//	import jwt_decode from 'jwt-decode'

	export default {
		name: 'Login',

		data() {
			return {
				show3: false,
				isError: false,
				error: '',
				valid: true,
				cargando: false,
				dim: [],
				user: {
					codigo: '',
					contrasena: ''
				},
				contrasenaRules: {
					required: value => !!value || 'Requerido.',
					min: v => v.length >= 7 || 'La contraseña debe tener minimo 7 caracteres'
				},
				codigoRules: [v => (v && v.length == 7) || 'El código debe ser de 7 digitos']
			}
		},
		mixins: [misMixins],
		methods: {
			obtenerAvances(id) {
				const ruta = '/estudiante/listarAvances/tema/' + id
				console.log(`Obtener Avances`)
				this.axios({
					method: 'get',
					url: ruta
				})
					.then(response => {
						localStorage.setItem(`avances`, JSON.stringify(response.data))
						console.log(`Response`)
					})
					.catch(e => {
						this.isError = true
						this.error = `${e}`
						console.log(`${e}`)
					})
			},

			onSubmit() {
				this.cargando = true
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

								var token = response.data.token
								localStorage.setItem('tokenUser', token)
								var tipo = this.obtenerDatos().tipo

								if (tipo === 'estudiante') {
									this.obtenerAvances(this.obtenerDatos().id)
									this.$router.replace({ name: 'unidades' }).catch(err => {})
									this.$router.go()
								} else if (tipo === 'docente') {
									this.$router.replace({ name: 'inicioDocente' }).catch(err => {})
									this.$router.go()
								} else if (tipo === 'administrador') {
									this.$router.replace({ name: 'inicioAdministrador' }).catch(err => {})
									this.$router.go()
								}
								//this.$emit('datos')
								//this.$router.go()
							
						})
						.catch(e => {
							this.isError = true
							this.error = `${e}`
							// eslint-disable-next-line no-console
							console.log(e.response)
						})
						.finally(() => (this.cargando = false))
				}
			}
		},
		created() {
			this.dim = this.obtenerDimensiones()
		}
	}

</script>

<template>

	<v-row justify="center">
		<v-col cols="8" class="pa-0">
			<v-card class="px-10 pb-10  mx-8 mt-16 ">
				<v-row justify="center">
					<v-col class="pa-0 " cols="10">
						<v-card dark color="red" elevation="7" class="card_cabecera d-flex  align-center">
							<v-card-title class="align-center">

								<span class="headline font-weight-bold">LOGIN</span>
							</v-card-title>
						</v-card>
					</v-col>
				</v-row>

				<v-form ref="form"
				        class="ma-1"
				        v-model="valid"
				        lazy-validation
				        v-if="cargando === false">

					<v-text-field v-model="user.codigo"
					              label="Código"
					              required
					              :rules="codigoRules"
					              prepend-inner-icon="mdi-numeric"
					              ></v-text-field>

					<v-text-field v-model="user.contrasena"
					              :type="show3 ? 'text' : 'password'"
					              class="input-group--focused"
					              :rules="[contrasenaRules.required, contrasenaRules.min]"
					              counter
					              :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
					              @click:append="show3 = !show3"
					              label="Contraseña"
					              required
					              prepend-inner-icon="mdi-lock"></v-text-field>
					<div v-show='isError'>
						<v-alert dense type="error">
							<span>{{error}}</span>
						</v-alert>
					</div>
					<v-row justify="center">
						<v-btn color="blue-grey" class="my-2" block dark x-large @click="onSubmit"> Ingresar
						</v-btn>
					</v-row>
					<v-row justify="center">
						<v-btn color="blue-grey" class="ma-2" block outlined dark x-large @click="($router.push({ name: 'registro' }).catch(err => {}))">
							Registro
						</v-btn>
					</v-row>
				</v-form>
				<v-skeleton-loader v-else
				                   class="mx-auto"
				                   height="70%"
				                   width="80%"
				                   max-width="80%"
				                   type="card"></v-skeleton-loader>
				</v-card-text>

			</v-card>
		</v-col>
	</v-row>

</template>
