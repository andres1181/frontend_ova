<script>

	import { misMixins } from '@/mixins/mixins.js'
	export default {
		name: 'juez',

		data() {
			return {
				cargando: false,
				error: false,
				unidades: [],
				mensaje: '',
				unidad: '',
				tema: '',
				dim: [],
				valid: true,
				lazy: false,
				code: '',
				value: '',
				existCodigo: true,
				campoRules: [v => !!v || 'Campo requerido'],
				enunciadoRules: [v => !!v || 'Enunciado es requerido'],
				enunciado: '',
				respuesta: '',
				editor: ''

				/*

																					*/
			}
		},
		mixins: [misMixins],
		methods: {
			mostrarAlert() {
				var exist
				if (this.value === '') {
					this.existCodigo = false
				}
				return exist
			},
			guardar() {
				if (this.$refs.formR.validate() && this.enunciado !== '') {
					this.cargando = true

					var id_ = this.obtenerDatos().id
					var _data = {
						enunciado: String(this.enunciado),
						id_unidad: String(this.unidad._id),
						autor: String(id_),
						respuesta: this.respuesta,
						activo: true
					}
					//guardar en el api

					//	var token = String(localStorage.getItem('tokenUser'))
					const ruta = '/actividades/crear/Juez'

					this.axios({
						method: 'post',
						url: ruta, // + user,
						headers: {
							'Content-Type': 'application/json'
							//'x-access-token': token
						},
						data: _data
					})
						.then(response => {
							this.$refs.formR.reset()
						})
						.catch(e => {
							this.error = true
							this.mensaje = 'Error al enviar formulario'
						})
						.finally(() => (this.cargando = false))
				} else {
					this.error = true
					this.mensaje = 'TODOS LOS CAMPOS DEBEN ESTAR COMPLETOS'
				}
			}
		},

		created() {
			this.dim = this.obtenerDimensiones()
			this.unidades = JSON.parse(localStorage.getItem(`datosUnidades`))
		}
		/*	mounted() {
				this.editor = Codemirror.fromTextArea(document.getElementById('editorParejas'), {
					mode: 'text/x-c++src',
					theme: 'dracula',
					lineNumbers: true
				})
			}*/
	}

</script>

<template>

	<v-row justify="center">
		<v-col cols="8" class="pa-0">
			<v-card :width="dim[1]" class="px-10 pb-10 mb-1 mt-6 mx-7 rounded-lg">
				<v-row justify="center">
					<v-col class="pa-0 " cols="10">
						<v-card dark color="red" elevation="6" class="card_cabecera d-flex  align-center">
							<v-card-title class="align-center">

								<span class="headline font-weight-bold">REGISTRO RETOS</span>
							</v-card-title>
						</v-card>
					</v-col>
				</v-row>
				<v-form v-if="cargando===false"
				        ref="formR"
				        v-model="valid"
				        :lazy-validation="lazy">
					<v-row>
						<v-col cols="12" md="12">
							<v-card outlined class="overline pa-3">
								<v-card-text>

									<span>En el siguiente formulario deberá crear un reto para que sea resuelto por los estudiantes. Este será calificado por un juez de programación Online.</span>
								</v-card-text>
							</v-card>
							<v-select v-model="unidad" required
							          :rules="campoRules"
							          :items="unidades"
							          item-text="nombre"
							          label="Seleccione la unidad a la cuál estará dirigida el reto"
							          return-object>
							</v-select>
						</v-col>
					</v-row>
					<v-row>
						<v-col cols="12" md="12">
							<h6>Escriba el enunciado del reto</h6>
							<v-textarea required v-model="enunciado" :rules="campoRules" label="Añadir enunciado del reto"></v-textarea>
						</v-col>
					</v-row>
					<v-row>
						<v-textarea required v-model="respuesta" :rules="campoRules" label="Añadir el resultado esperado"></v-textarea>
					</v-row>
					<v-row>
						<v-btn block x-large
						       :disabled="!valid"
						       color="success"
						       class="mr-4"
						       @click="guardar">
							Guardar
						</v-btn>
					</v-row>
				</v-form>
				<div v-else>
					<v-skeleton-loader height="94" type="list-item-two-line">

					</v-skeleton-loader>
					<v-skeleton-loader height="94" type="list-item-two-line">

					</v-skeleton-loader>
					<v-skeleton-loader height="94" type="list-item-two-line">

					</v-skeleton-loader>
				</div>

			</v-card>
		</v-col>
	</v-row>

</template>
