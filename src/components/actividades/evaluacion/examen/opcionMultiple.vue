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
		components: {},
		data: () => ({
			info: null,
			correcto: null,
			enunciado: '',
			respuestaUsuario: null,
			respuestaCorrecta: null,
			opcion0: '',
			opcion1: '',
			opcion2: '',
			opcion3: ''
		}),
		mixins: [misMixins],
		methods: {
			//https://es.stackoverflow.com/questions/308080/vue-retornar-informaci%C3%B3n-de-un-componente-hijo-al-padre-por-propiedades
			//<verdaderoFalso :respuestaEs="corregir"></verdaderoFalso> corregir seria la funcion en el padre
			crearJsonPregunta() {

				this.shuffle(this.info.opciones)
				this.enunciado = this.info.enunciado
				this.opcion0 = this.info.opciones[0].respuesta
				this.opcion1 = this.info.opciones[1].respuesta
				this.opcion2 = this.info.opciones[2].respuesta
				this.opcion3 = this.info.opciones[3].respuesta

				/*asigno a la variable respuestaCorrecta, la opcion que es correcta en el json */
				for (var i = 0; i < this.info.opciones.length; i++) {
					if (this.info.opciones[i].correcta) {
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
				this.$emit('click', {id: this.info.id, result: this.correcto})
			}
		},
		created() {
			/* Convierto la propiedad 'datos' del componente en un JSON */
			this.info = JSON.parse(this.datos)
			//this.info = this.datos
			this.crearJsonPregunta()
		}
	}

</script>

<template>

	<v-container fluid>
		<p>{{enunciado}}</p>
		<v-radio-group v-model="respuestaUsuario" row>
			<v-radio :label="opcion0" :value="opcion0"></v-radio>
			<v-radio :label="opcion1" :value="opcion1"></v-radio>
			<v-radio :label="opcion2" :value="opcion2"></v-radio>
			<v-radio :label="opcion3" :value="opcion3"></v-radio>
		</v-radio-group>
		<h6>Respuesta: {{respuestaUsuario}}</h6>
		<v-btn @click="enviarResultado">
			Enviar
		</v-btn>
		{{info}}
	</v-container>

</template>
