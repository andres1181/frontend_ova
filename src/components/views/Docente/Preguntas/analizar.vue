<script>

	import Codemirror from 'codemirror/lib/codemirror.js'
	import 'codemirror/lib/codemirror.css'
	import 'codemirror/mode/clike/clike.js'
	import 'codemirror/theme/dracula.css'
	import { misMixins } from '@/mixins/mixins.js'
	export default {
		name: 'analizar',
		components: {},
		props: {
			temas: {
		    type: Array,
		    required: true
		  }
		},
		data() {
	    return {
			cargando: false,
			unidad: '',
			tema: '',
			valid: true,
			lazy: false,
			code: '',
			value: '',
			existCodigo: true,
			campoRules: [v => !!v || 'Campo requerido'],
			enunciadoRules: [v => !!v || 'Enunciado es requerido'],
			enunciado: '',
			correcta: null,
			opcionesIncorrectas: [null, null],
			opciones: [],
			tipo: 'analizarCodigo',
			//nuevaOpcionC: '',
			editor: ''

			/*

																	*/
		}},
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

					if (this.$refs.form.validate()) {
						this.cargando = true
						this.opciones.push({
							respuesta: this.correcta,
							correcta: true
						})
						for (var i = 0; i < 2; i++) {
							this.opciones.push({
								respuesta: this.opcionesIncorrectas[i],
								correcta: false
							})
						}
						this.enunciado = this.editor.getValue()
						var id_ = this.obtenerDatos().id
						var _data = {
							enunciado: String(this.enunciado),
							tipo: String(this.tipo),
							id_tema: String(this.tema._id),
							id_unidad: String(this.tema.id_unidad._id),
							autor: String(id_),
							opciones: this.opciones,
							activo: true
						}
						//guardar en el api

						var token = String(localStorage.getItem('tokenUser'))
						const ruta = '/actividades/crear'
						//const host = 'http://localhost:3000'
						//const baseURL = '/api/usuarios/login'

						this.axios({
							method: 'post',
							url: ruta, // + user,
							headers: {
								'Content-Type': 'application/json',
								'x-access-token': token
							},
							data: _data
						})
							.then(response => {
								this.$emit('creada', {creada: true, select: { text: '', componente: '' }})
							})
							.catch(e => {
								// eslint-disable-next-line no-console
								console.log(`Error:  ${e}`)
								// eslint-disable-next-line no-console
								console.log(e)
							})
							.finally(() => (this.cargando = false))
					}
					//limpiar formlario

				}

		},

		created() {

		},
		mounted() {
			this.editor = Codemirror.fromTextArea(document.getElementById('editorParejas'), {
				mode: 'text/x-c++src',
				theme: 'dracula',
				lineNumbers: true
			})
		}
	}

</script>

<template>

	<v-container fluid>
		<v-form v-if="cargando===false" ref="form"
		        v-model="valid"
		        :lazy-validation="lazy">
			<v-row>
				<v-col cols="12" md="12">
					<!-- <v-select v-model="unidad"
					          :items="unidades"
					          :rules="campoRules"
					          item-text="unidad"
					          label="Seleccione una unidad tematica"
					          return-object>
					</v-select> -->
					<v-select v-model="tema"
					required  :rules="campoRules"
					          :items="temas"
					          item-text="nombre"
					          label="Seleccione el tema relacionado con la pregunta"
					          return-object>
					</v-select>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="12" md="12">
					<h6>Escriba un código en C++</h6>
					<textarea required :rules="campoRules" v-model="code" rows="20" cols="80" id="editorParejas"></textarea>
				</v-col>
			</v-row>
			<v-row>
				<v-text-field v-model="correcta" :rules="campoRules" label="Añadir una salida CORRECTA"></v-text-field>
			</v-row>
			<v-row>
			<v-text-field v-model="opcionesIncorrectas[0]" :rules="campoRules" label="Añadir una salida INCORRECTA"></v-text-field>
			</v-row>
			<v-row>
				<v-text-field v-model="opcionesIncorrectas[1]" :rules="campoRules" label="Añadir una salida INCORRECTA"></v-text-field>
			</v-row>
			<v-row>
				<v-btn block x-large :disabled="!valid"
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
	</v-container>

</template>
