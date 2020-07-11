<script>

	export default {
		name: 'falsoVerdaderoE',
		props: {
			datos: {
				type: String,
				required: true
			}
		},
		components: {},
		data: () => ({
			info: null,
			id: '',
			correcto: false ,
			enunciado: '',
			respuestaUsuario: null,
			respuestaCorrecta: ''
		}),
		methods: {
			//https://es.stackoverflow.com/questions/308080/vue-retornar-informaci%C3%B3n-de-un-componente-hijo-al-padre-por-propiedades
			//<verdaderoFalso :respuestaEs="corregir"></verdaderoFalso> corregir seria la funcion en el padre
			crearDatos() {
				this.info = JSON.parse(this.datos)
				this.id = this.info._id
				this.enunciado = this.info.enunciado
				this.respuestaCorrecta = this.info.opciones[0].respuesta
				console.log('Correcta Verdadero: ');
				console.log(this.respuestaCorrecta);
				console.log('Enunciado: ');
				console.log(this.enunciado);
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
				this.$emit('click', {id: this.id, result: this.correcto})
			}
		},
		created() {

			this.crearDatos()
		}
	}

</script>

<template>

	<v-container fluid>
		<span>Diga si la siguiente afirmación es verdadera o falsa:</span> <br>
		<!-- <v-radio-group v-model="respuestaUsuario" row>
			<v-radio label="Verdadero" value='true'></v-radio>
			<v-radio label="Falso" value='false'></v-radio>
		</v-radio-group> -->
		<v-card outlined class="pa-2 ma-1">

		<span>{{enunciado}}</span>
	</v-card>
		<v-row align="center" justify="center">
			<v-col class="text-center" cols="6" sm="6">
				<div class="mx-1">
					<v-btn block x-large outlined  @click="(respuestaUsuario = 'true') && enviarResultado()">
						Verdadero
					</v-btn>
				</div>
			</v-col>
			<v-col class="text-center"  cols="6" sm="6">
				<div class="mx-1">
					<v-btn block x-large outlined  @click="(respuestaUsuario = 'false') && enviarResultado()">
						Falso
					</v-btn>
				</div>
			</v-col>
				</v-row>


	</v-container>

</template>
