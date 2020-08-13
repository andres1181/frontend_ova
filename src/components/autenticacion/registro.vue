<script>
	import { misMixins } from '@/mixins/mixins.js'
	export default {
		name: 'Registro',
		data: () => ({
			show1: false,
			show2: false,
			isError: false,
			error: '',
			cargando: false,
			valid: true,
			lazy: false,
			grupos: {},
			dim: [],
			usuario: {
				email: '',
				codigo: '',
				nombres: '',
				contrasena: '',
				contrasena2: '',
				tipoUsuario: 'estudiante',
				grupo: ''
			},
			contrasenaRules: {
				required: value => !!value || 'Requerido.',
				min: v => v.length >= 7 || 'La contraseña debe tener minimo 7 caracteres'
			},
			codigoRules: [v => (v && v.length == 7) || 'El código debe ser de 7 digitos'],
			grupoRules: [v => (v && v.length == 6) || 'El código del grupo debe tener 6 digitos'],
			basicRules: [v => !!v || 'Campo requerido'],
			radioRules: [v => !!v || 'Seleccione un tipo de usuario'],
			emailRules: [v => !!v || 'El correo es requerido', v => /.+@.+\..+/.test(v) || 'El correo ingresado no es valido']
		}),
		mixins: [misMixins],
		methods: {
			usuarioRules() {
				return [v => !!v || 'Campo requerido']
			},
			convertirString() {
				this.usuario.nombres = String(this.usuario.nombres)
				this.usuario.email = String(this.usuario.email)
				this.usuario.contrasena = String(this.usuario.contrasena)
				this.usuario.codigo = String(this.usuario.codigo)
				this.usuario.grupo = String(this.usuario.grupo)
				//	this.usuario.tipoUsuario = String(this.usuario.tipoUsuario)
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
			registrarAvance(id) {
				const ruta = '/estudiante/avanceTema/crear'
				//	eslint-disable-next-line no-console
				console.log('ID')
				//	eslint-disable-next-line no-console
				var temas = JSON.parse(localStorage.getItem(`temas`))
				console.log(id)
				for (var i = 0; i < temas.length; i++) {
					this.axios({
						method: 'post',
						url: ruta, // + user,
						data: {
							id_tema: String(temas[i]._id),
							id_estudiante: String(id),
							aprobado: false
						}
					})
						.then(response => {
							//	eslint-disable-next-line no-console
							console.log('Avance Tema')
							//	eslint-disable-next-line no-console
							console.log(response.data)
						})
						.catch(e => {
							this.isError = true
							this.error = `${e}`
							console.log(e.response)
						})
				}
			},
			buscarTemas: function() {
				const ruta = '/unidadesTemas/obtener/temas'
				this.axios({
					method: 'get',
					url: ruta
				})
					.then(response => {
						localStorage.setItem(`temas`, JSON.stringify(response.data))
						//	this.temas = response.data
					})
					.catch(e => {
						this.isError = true
						this.error = `${e}`
						console.log(`Error:  ${e.response}`)
					})
			},
			obtenerGrupos() {
				const ruta = `/grupos/obtener/grupos`
				this.axios({
					method: 'get',
					url: ruta
				})
					.then(response => {
						localStorage.setItem('_grupos', JSON.stringify(response.data))
						//	this.temas = response.data
					})
					.catch(e => {
						this.isError = true
						this.error = `${e}`
					})
			},
			seleccionarIdGrupo(codigo) {
				this.grupos = JSON.parse(localStorage.getItem('_grupos'))
				var encontrado = false
				var id = ''
				for (var i = 0; i < this.grupos.length && encontrado === false; i++) {
					if (this.grupos[i].codigo === codigo) {
						id = this.grupos[i]._id
						encontrado = true
					} else {
						encontrado = false
					}
				}
				return id
			},
			onSubmit() {
				console.log(this.usuario.grupo)
				//this.validate()
				this.cargando = true
				if (this.$refs.form.validate()) {
					this.convertirString()
					const ruta = '/usuarios/'
					this.axios({
						method: 'post',
						url: ruta, // + user,
						data: {
							nombres: this.usuario.nombres,
							email: this.usuario.email,
							contrasena: this.usuario.codigo,//this.usuario.contrasena,
							codigo: this.usuario.codigo,
							tipo: this.usuario.tipoUsuario,
							id_grupo: this.seleccionarIdGrupo(this.usuario.grupo),
							activo: true
						}
					})
						.then(response => {
							console.log(response)
							//	eslint-disable-next-line no-console
							//console.log(response.data.usuario)
							this.registrarAvance(response.data.usuario._id)
							localStorage.removeItem('_grupos')
							this.$router.push('/')
						})
						.catch(e => {
							// eslint-disable-next-line no-console
							this.isError = true
							this.error = `${e.response.data}`
						})
						.finally(() => (this.cargando = false))
				}
			}
		},
		created() {
			this.dim = this.obtenerDimensiones()
			this.buscarTemas()
			this.obtenerGrupos()
		}
	}
</script>

<template>

	<v-row justify="center">
		<v-col cols="8" class="pa-0">
			<v-card class="px-10 pb-10 mb-1 mt-6 mx-7 rounded-lg">
				<v-row justify="center">
					<v-col class="pa-0 " cols="10">
						<v-card dark color="red" elevation="6" class="card_cabecera d-flex  align-center">
							<v-card-title class="align-center">

								<span class="headline font-weight-bold">REGISTRO ESTUDIANTE</span>
							</v-card-title>
						</v-card>
					</v-col>
				</v-row>

				<v-form ref="form"
				        class="ma-1"
				        v-model="valid"
				        :lazy-validation="lazy"
				        v-if="cargando === false">
					<v-row justify="center">
						<v-col cols="6">
							<v-text-field v-model="usuario.nombres" label="Nombre" required :rules="basicRules" prepend-inner-icon="mdi-account">

							</v-text-field>
						</v-col>
						<v-col cols="6">
							<v-text-field v-model="usuario.codigo" label="Código" required :rules="codigoRules" prepend-inner-icon="mdi-numeric"></v-text-field>

						</v-col>
					</v-row>
					<v-row justify="center">
						<v-col cols="6">
							<v-text-field v-model="usuario.email" label="Correo" required :rules="emailRules" prepend-inner-icon="mdi-email"></v-text-field>
						</v-col>
						<v-col cols="6">
							<v-text-field v-model="usuario.grupo"
							              label="Código grupo"
							              required
							              :rules="grupoRules"
							              prepend-inner-icon="mdi-numeric"></v-text-field>
						</v-col>
					</v-row>
					<!-- <v-row justify="center">
						<v-col cols="6">
							<v-text-field v-model="usuario.contrasena"
							              :type="show1 ? 'text' : 'password'"
							              class="input-group--focused"
							              :rules="[contrasenaRules.required, contrasenaRules.min]"
							              label="Contraseña"
							              required
							              counter
							              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
							              prepend-inner-icon="mdi-lock"
							              @click:append="show1 = !show1"></v-text-field>
						</v-col>
						<v-col cols="6">
							<v-text-field v-model="usuario.contrasena2"
							              :type="show2 ? 'text' : 'password'"
							              class="input-group--focused"
							              :rules="[contrasenaRules.required, contrasenaRules.min]"
							              counter
							              :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
							              @click:append="show2 = !show2"
							              label="Repetir Contraseña"
							              required
							              prepend-inner-icon="mdi-lock"></v-text-field>
						</v-col>
					</v-row>
					<div v-show='compararPassword(usuario.contrasena, usuario.contrasena2)&& usuario.contrasena!==""'>
						<v-alert dense type="success">
							<span>Las contraseñas coinciden!</span>
						</v-alert>
					</div>
					<div v-show='!compararPassword(usuario.contrasena, usuario.contrasena2)&& usuario.contrasena!==""'>
						<v-alert dense type="warning">
							Las contraseñas <strong> NO </strong> coinciden!
						</v-alert>
					</div> -->
					<div v-show='isError'>
						<v-alert dense type="error">
							<span>{{error}}</span>
						</v-alert>
					</div>

					<v-row justify="center">
						<v-btn color="blue-grey"
						       class="ma-2"
						       block
						       dark
						       x-large
						       @click="onSubmit">Registrar

						</v-btn>
					</v-row>
					<v-row justify="center">
						<v-btn color="blue-grey" class="ma-2" block outlined dark x-large @click="($router.push({ name: 'login' }).catch(err => {}))">LOGIN
						</v-btn>
					</v-row>

				</v-form>

				<v-skeleton-loader v-else
				                   class="mx-auto"
				                   height="70%"
				                   width="80%"
				                   max-width="80%"
				                   type="card"></v-skeleton-loader>
			</v-card>
		</v-col>
	</v-row>

</template>

<style>
</style>
