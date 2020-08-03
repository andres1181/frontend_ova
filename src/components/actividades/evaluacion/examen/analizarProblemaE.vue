<script>

	import { misMixins } from '@/mixins/mixins.js'
	import Editor from '@/components/views/editor.vue'
	//	import draggable from 'vuedraggable'
	export default {
		name: 'analizarProblema',
		props: {
			datos: {
				type: String,
				require: true
			}
		},

		components: {
			Editor
		},
		data() {
			return {
				editor1: '',
				editor2: '',
				respuestaCorrecta: null,
				respuestaUsuario: null,
				info: null,
				correcto: null
			}
		},
		mixins: [misMixins],
		methods: {
			asignarDatos() {
				this.info = JSON.parse(this.datos)
				this.shuffle(this.info.opciones)
				this.editor1 = this.info.opciones[0].respuesta
				this.editor2 = this.info.opciones[1].respuesta
				console.log({ opcionesO: this.info.opciones[0].respuesta, opciones1: this.info.opciones[1].respuesta })
				console.log({ opcionesO: this.info.opciones[0].correcta, opciones1: this.info.opciones[1].correcta })

				/*asigno a la variable respuestaCorrecta, la opcion que es correcta en el json */
				for (var i = 0; i < this.info.opciones.length && this.respuestaCorrecta !== null; i++) {
					if (this.info.opciones[i].correcta === true) {
						this.respuestaCorrecta = `${i}`
					}
				}
			},
			enviarResultado() {
				this.revisarRespuesta()
				this.$emit('click', { id: this.info._id, result: this.correcto })
			},
			revisarRespuesta() {
				console.log({ Usuario: this.respuestaUsuario, correcta: this.respuestaCorrecta })
				if (this.respuestaUsuario === this.respuestaCorrecta) {
					this.correcto = true
				} else {
					this.correcto = false
				}
			}
		},
		created() {
			this.asignarDatos()
		}
	}

</script>

<template>

	<div>

		<v-card outlined class=" pa-3">
			<p>Elija la mejor solución para el siguiente problema:</p>
		</v-card>
		<v-card class="ma-3">
			<Editor :codigo="editor1" nombre="EditorAnalizar1"></Editor>
			<v-card-actions class="pa-0">
				<v-btn block x-large dark tile
				       color="red"
				       @click="(respuestaUsuario = `0`) && enviarResultado()">
					Elegir
				</v-btn>
			</v-card-actions>
		</v-card>
		<v-card class="ma-3">
			<Editor :codigo="editor2" nombre="EditorAnalizar2"></Editor>
			<v-card-actions class="pa-0">
				<v-btn block x-large dark tile
				       color="red"
				       @click="(respuestaUsuario = `1`) && enviarResultado()">
					Elegir
				</v-btn>
			</v-card-actions>
		</v-card>
	</div>

</template>

<style >



</style>
