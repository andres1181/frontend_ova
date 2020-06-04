<script>

	export default {
		name: 'VerdaderoFalso',
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
			respuestaCorrecta: null
		}),
		methods: {
			//https://es.stackoverflow.com/questions/308080/vue-retornar-informaci%C3%B3n-de-un-componente-hijo-al-padre-por-propiedades
			//<verdaderoFalso :respuestaEs="corregir"></verdaderoFalso> corregir seria la funcion en el padre
			crearDatos() {
				this.enunciado = this.info.enunciado
				this.respuestaCorrecta = this.info.opciones[0].respuesta
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
			this.info = JSON.parse(this.datos)
			this.crearDatos()
		}
	}

</script>

<template>

	<v-container fluid>
		<p>{{enunciado}}</p>
		<v-radio-group v-model="respuestaUsuario" row>
			<v-radio label="Verdadero" value='true'></v-radio>
			<v-radio label="Falso" value='false'></v-radio>
		</v-radio-group>
		<h6>Respuesta: {{respuestaUsuario}}</h6>
		<v-btn @click="enviarResultado">
			Enviar
		</v-btn>
	</v-container>

</template>
