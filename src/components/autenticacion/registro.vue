<script>

	import { misMixins } from '@/mixins/mixins.js'
	export default {
		name: 'Registro',

		data: () => ({
			color2: '#3cd3ad',
			color3: '#737373',
			registro: true,
			show1: false,
			show2: false,
			isError: false,
			error: '',
			temas: [],
			valid: true,
			usuario: {
				email: '',
				codigo: '',
				nombres: '',
				contrasena: '',
				contrasena2: '',
				tipoUsuario: ''
			},

			contrasenaRules: {
				required: value => !!value || 'Requerido.',
				min: v => v.length >= 8 || 'La contraseña debe tener minimo 8 caracteres'
			},
			codigoRules: [v => (v && v.length == 7) || 'El código debe ser de 7 digitos'],
			basicRules: [v => !!v || 'Campo requerido'],
			radioRules: [v => !!v || 'Seleccione un tipo de usuario'],
			emailRules: [v => !!v || 'El correo es requerido', v => /.+@.+\..+/.test(v) || 'El correo ingresado no es valido']
		}),
		mixins: [misMixins],
		methods: {
			usuarioRules() { return [v => !!v || 'Campo requerido']},
			convertirString() {
				this.usuario.nombres = String(this.usuario.nombres)
				this.usuario.email = String(this.usuario.email)
				this.usuario.contrasena = String(this.usuario.contrasena)
				this.usuario.codigo = String(this.usuario.codigo)
				this.usuario.tipoUsuario = String(this.usuario.tipoUsuario)
			},
			compararPassword(p1, p2) {
				let verificar = false
				if (p1 !== p2) {
					//					alert('Las contraseñas no coinciden')
					verificar = false
				} else if (p1 === p2) {
					verificar = true
					//					alert('Las contraseñas coinciden')
				}
				return verificar
			},

			login() {
				this.$router.push('/login')
			},
			validate1() {
				// eslint-disable-next-line no-console
				console.log(this.valid)
				if (this.$refs.form.validate()) {
					this.snackbar = true
				}
			},
			registrarAvance(id){
				const ruta = '/estudiante/crear/avance/tema'
				//	eslint-disable-next-line no-console
				console.log('ID')
				//	eslint-disable-next-line no-console
				console.log(id)
				for (var i = 0; i < this.temas.length; i++) {
				this.axios({
					method: 'post',
					url: ruta, // + user,
					data: {
						id_tema: String(this.temas[i]._id),
						id_estudiante: String(id),
						terminado: false
					}
				})
					.then(response => {
						//	eslint-disable-next-line no-console
						console.log('Avance Tema')
						//	eslint-disable-next-line no-console
						console.log(response.data)
						// if ((response.status == '200' || response.status == '201')) {
						//}
					})
					.catch(e => {
						// this.isError = true
						// this.error = `Error en el servidor:  ${e}`
						// // eslint-disable-next-line no-console
						// console.log(e.response)
						//	eslint-disable-next-line no-console
						console.log(e.response)
					})
				}
			},
			buscarTemas: function() {
				const ruta = '/administrador/obtener/temas'

				this.axios({ method: 'get', url: ruta})
					.then(response => {
						//	eslint-disable-next-line no-console
					//	console.log(response.data)
						this.temas = response.data
						//	eslint-disable-next-line no-console
					//	console.log('Lista:')
						//	eslint-disable-next-line no-console
					//	console.log(this.temas)
					})
					.catch(e => {
						//	eslint-disable-next-line no-console
						console.log(`Error:  ${e.response}`)
					})
				// eslint-disable-next-line no-console
				//console.log('Uno')
				// eslint-disable-next-line no-console
				//console.log(this.temas)
			},

			onSubmit() {
				this.convertirString()

				const ruta = '/usuarios/'

				//this.validate()
				if (this.$refs.form.validate()) {
					this.axios({
						method: 'post',
						url: ruta, // + user,
						data: {
							nombres: this.usuario.nombres,
							email: this.usuario.email,
							contrasena: this.usuario.contrasena,
							codigo: this.usuario.codigo,
							tipo: this.usuario.tipoUsuario,
							activo: true
						}
					})
						.then(response => {

							if (response.status == '201') {
								//	eslint-disable-next-line no-console
								//console.log(response.data.usuario)
								if(response.data.usuario.tipo == 'estudiante'){
								this.registrarAvance(response.data.usuario._id)
								this.$router.push('/login')
							}else {
								this.$router.push('/login')
							}

							}
							if (response.status == '400' || response.status == '401') {
								this.isError = true
								this.error = 'Datos incorrectos'
							} else {
								this.isError = true
								this.error = 'Error en el servidor'
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
			this.buscarTemas()
		}
	}

</script>

<template>

	<!--<v-container class="ma-0 pa-0 fill-height">
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
										<v-list-item-title>¿Ya tienes una cuenta?</v-list-item-title>
									</v-list-item-content>
								</v-list-item>
								<v-divider></v-divider>
								<v-list-item @click="login">
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

				<v-card class="conten_ fill-height elevation-0 pa-8" color="rgba(255, 255, 255, 0.0)">-->
					<v-row justify="center" class="altura">
						<v-col cols="10" sm="10" md="4" lg="4" xl="4" class="pa-0">

							<v-form ref="form"
							        v-model="valid"
							        lazy-validation>
								<v-container class="ma-0 pa-0">

									<v-row justify="center" class="ma-4">
										<v-col cols="12" sm="12" md="12" lg="12" xl="12">
											<div justify="center" class="display-1 mb-0">
												<h3 class="centrar_text color-2"> Registro</h3>
											</div>
										</v-col>
									</v-row>
									<v-text-field v-model="usuario.nombres" outlined light
									              :color="this.color2"
									              label="Nombres"
									              required
									              :rules="basicRules"
									              dense
									              clearable
									              prepend-inner-icon="mdi-account">

									</v-text-field>

									<v-text-field v-model="usuario.codigo" outlined light
									              :color="this.color2"
									              label="Código"
									              required
									              dense
									              :rules="codigoRules"
									              prepend-inner-icon="mdi-numeric"
									              clearable></v-text-field>
									<v-text-field v-model="usuario.email" outlined light
									              :color="this.color2"
									              label="Correo"
									              required
									              dense
									              :rules="emailRules"
									              prepend-inner-icon="mdi-email"
									              clearable></v-text-field>
									<v-radio-group v-model="usuario.tipoUsuario" row mandatory class="ma-0" :rules="radioRules" required>
										<v-radio label="Estudiante" value="estudiante" :color="this.color2"></v-radio>
										<v-radio label="Docente" value="docente" :color="this.color2"></v-radio>
									</v-radio-group>
									<v-text-field v-model="usuario.contrasena" outlined light
									              :type="show1 ? 'text' : 'password'"
									              :color="this.color2"
									              class="input-group--focused"
									              :rules="[contrasenaRules.required, contrasenaRules.min]"
									              label="Contraseña"
									              required
									              counter
									              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
									              dense
									              prepend-inner-icon="mdi-lock"
									              @click:append="show1 = !show1"></v-text-field>

									<v-text-field v-model="usuario.contrasena2" outlined light
									              :type="show2 ? 'text' : 'password'"
									              class="input-group--focused"
									              :rules="[contrasenaRules.required, contrasenaRules.min]"
									              counter
									              :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
									              @click:append="show2 = !show2"
									              :color="this.color2"
									              label="Repetir Contraseña"
									              required
									              dense
									              prepend-inner-icon="mdi-lock"></v-text-field>
									<div v-show='compararPassword(usuario.contrasena, usuario.contrasena2)&& usuario.contrasena!==""'>
										<v-alert dense type="success">
											<span>Las contraseñas coinciden!</span>
										</v-alert>
									</div>
									<div v-show='!compararPassword(usuario.contrasena, usuario.contrasena2)&& usuario.contrasena!==""'>
										<v-alert dense type="warning">
											Las contraseñas <strong> NO </strong> coinciden!
										</v-alert>
									</div>
									<div v-show='isError'>
										<v-alert dense type="error">
											<span>{{error}}</span>
										</v-alert>
									</div>
									<v-row justify="center">

										<v-btn :color="this.color2" dark large @click="onSubmit">Registrar
											<v-icon>mdi-check</v-icon>
										</v-btn>

									</v-row>
								</v-container>
							</v-form>

						</v-col>
					</v-row>

			<!--	</v-card>

			</v-col>
		</v-row>

	</v-container> -->

</template>

<style>



</style>
