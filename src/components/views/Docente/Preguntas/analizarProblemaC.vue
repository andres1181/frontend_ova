<script>

import Codemirror from 'codemirror/lib/codemirror.js'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/clike/clike.js'
import 'codemirror/theme/dracula.css'
	import { misMixins } from '@/mixins/mixins.js'
	export default {
		name: 'analizarProblema',
		components: {},
		props: {

		},
		data: () => ({
			unidades: '',
			unidad: '',
			tema: '',
			valid: true,
			lazy: false,
			code1: '',
			code2: '',
			value: '',
			existCodigo: true,
			campoRules: [v => !!v || 'Campo requerido'],
			enunciadoRules: [v => !!v || 'Enunciado es requerido'],
			enunciado: '',
			correcta: null,
			opcionesIncorrectas: [null, null],
			opciones: [],
			tipo: 'analizarProblema',
			//nuevaOpcionC: '',
			editor1: '',
			editor2: ''
			/*

																	*/
		}),
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
						this.opciones.push({
							respuesta: this.editor1.getValue(),
							correcta: true
						})
						this.opciones.push({
							respuesta: this.editor2.getValue(),
							correcta: false
						})
						var id_ = this.obtenerDatos().id
						var _data = {
							enunciado: String(this.enunciado),
							tipo: String(this.tipo),
							unidad: String(this.unidad.componente),
							tema: String(this.tema.componente),
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
								console.log(`Error en el servidor:  ${e}`)
								// eslint-disable-next-line no-console
								console.log(e.response)
							})
					}
					//limpiar formlario

				}

		},

		created() {
			this.unidades = this.listaUnidades()
		},
		mounted() {
			this.editor1 = Codemirror.fromTextArea(document.getElementById('editorCode1'), {
				mode: 'text/x-c++src',
				theme: 'dracula',
				lineNumbers: true
			})
			this.editor2 = Codemirror.fromTextArea(document.getElementById('editorCode2'), {
				mode: 'text/x-c++src',
				theme: 'dracula',
				lineNumbers: true
			})
		}
	}

</script>

<template>

	<v-container fluid>
		<v-form ref="form"
		        v-model="valid"
		        :lazy-validation="lazy">
			<v-row>
				<v-col cols="12" md="12">
					<v-select v-model="unidad"
					          :items="unidades"
					          :rules="campoRules"
					          item-text="unidad"
					          label="Seleccione una unidad tematica"
					          return-object>
					</v-select>
					<v-select v-model="tema"
					required  :rules="campoRules"
					          :items="unidad.temas"
					          item-text="tema"
					          label="Seleccione el tema relacionado con la pregunta"
					          return-object>
					</v-select>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="12" md="12">
					<h6></h6>
					<v-textarea v-model="enunciado"
					            :rules="enunciadoRules"
											outlined
					            label="Escria el enunciado del problema"
					            required>
					</v-textarea>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="12" md="12">
					<h6>Solución correcta al problema en C++</h6>
					<textarea required :rules="campoRules" v-model="code1" rows="20" cols="80" id="editorCode1"></textarea>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="12" md="12">
						<h6>Solución incorrecta al problema en C++</h6>
					<textarea required :rules="campoRules" v-model="code2" rows="20" cols="80" id="editorCode2"></textarea>
				</v-col>
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
	</v-container>

</template>
