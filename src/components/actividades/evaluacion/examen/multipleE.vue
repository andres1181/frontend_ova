<script>

	import { misMixins } from '@/mixins/mixins.js'

	export default {
		name: 'opcionMultiple',
		props: {
			datos: {
				type: String,
				required: true
			}
		},
		data() {
			return {
				info: null,
				correcto: false,
				id: '',
				enunciado: null,
				respuestaUsuario: null,
				respuestaCorrecta: '',
				opcion0: '',
				opcion1: '',
				opcion2: '',
				opcion3: ''
			}
		},
		mixins: [misMixins],
		methods: {
			//https://es.stackoverflow.com/questions/308080/vue-retornar-informaci%C3%B3n-de-un-componente-hijo-al-padre-por-propiedades
			//<verdaderoFalso :respuestaEs="corregir"></verdaderoFalso> corregir seria la funcion en el padre
			crearJsonPregunta() {
				this.info = JSON.parse(this.datos)
				this.shuffle(this.info.opciones)
				this.enunciado = this.info.enunciado
				this.opcion0 = this.info.opciones[0].respuesta
				this.opcion1 = this.info.opciones[1].respuesta
				this.opcion2 = this.info.opciones[2].respuesta
				this.opcion3 = this.info.opciones[3].respuesta

				/*asigno a la variable respuestaCorrecta, la opcion que es correcta en el json */
				for (var i = 0; i < this.info.opciones.length; i++) {
					if (this.info.opciones[i].correcta === true) {
						this.respuestaCorrecta = this.info.opciones[i].respuesta
					}
				}

			},
			revisarRespuesta() {
				if (this.respuestaUsuario === this.respuestaCorrecta) {
					this.correcto = true
				} else {
					this.correcto = false
				}
			},
			enviarResultado() {
				this.revisarRespuesta()
				this.$emit('click', { id: this.info._id, result: this.correcto })
			}
		},
		created() {
			/* Convierto la propiedad 'datos' del componente en un JSON */

			//this.info = this.datos
			this.crearJsonPregunta()
		}
	}

</script>

<template>

	<v-container fluid>
		<v-card outlined class=" pa-3 ma-2">
			<p>{{enunciado}}</p>
		</v-card>
		<span>Elige la opción correcta:</span>
		<v-row align="center" justify="center">
			<v-col class="text-center" cols="12" sm="12">
				<div class="mx-2">
					<v-btn block x-large color="blue-grey" dark @click="(respuestaUsuario = opcion0) && enviarResultado()">
						{{opcion0}}
					</v-btn>
				</div>
			</v-col>
			<v-col class="text-center" cols="12" sm="12">
				<div class="mx-2">
					<v-btn block x-large color="blue-grey" dark @click="(respuestaUsuario = opcion1) && enviarResultado()">
						{{opcion1}}
					</v-btn>
				</div>
			</v-col>
			<v-col class="text-center" cols="12" sm="12">
				<div class="mx-2">
					<v-btn block x-large color="blue-grey" dark @click="(respuestaUsuario = opcion2) && enviarResultado()">
						{{opcion2}}
					</v-btn>
				</div>
			</v-col>
			<v-col class="text-center" cols="12" sm="12">
				<div class="mx-2">
					<v-btn block x-large color="blue-grey" dark @click="(respuestaUsuario = opcion3) && enviarResultado()">
						{{opcion3}}
					</v-btn>
				</div>
			</v-col>
		</v-row>

		<!-- <v-btn x-large dark @click="enviarResultado">
					Siguiente
				</v-btn> -->
	</v-container>

</template>
