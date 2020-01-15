<script>

	export default {
		name: 'falsoVerdadero',
		props: {
			pregunta: {
				type: String,
				require: true,
				default: 'X'
			},
			respuesta: {
				type: String,
				require: true,
				default: 'falso'
			}
		},
		data() {
			return {
				selected: 'null',
				mensaje: '',
				intentos: 0,
				valid: true

				// ,
				//				options: [opcionIncorrecta, opcionCorrecta]
			}
		},
		methods: {
			guardarRespuesta: function() {
				
			},
			enviarR: function() {
				if (this.$refs.form.validate()) {
					if (correcta) {
						this.mensaje = 'Respuesta correcta!'
						//gurdar en la base de datos
					} else if (!correcta) {
						this.mensaje = 'Respuesta incorrecta!'
						this.intentos = this.intentos + 1
					}
				}
			}
			// 	aleatorio() {
			// 		var tam = options.length
			//
			// 		for (var i = 0; i < tam; i++) {
			// 			aleatorio = Math.floor(Math.random() * options.length)
			// 			seleccion = options[aleatorio]
			// 			trace(seleccion)
			// 			options.splice(aleatorio, 1)
			// 		}
			// 	}
		}
		//
		// created() {
		// 	this.aleatorio()
		// }
	}

</script>

<template>

	<div>
		<v-form :label="pregunta"
		        ref="form"
		        v-model="valid"
		        lazy-validation>
			<v-radio-group v-model="selected" row mandatory class="ma-0" :rules="radioRules" required>
				<v-radio label="Verdadero" value="verdadero">Verdadero</v-radio>
				<v-radio label="Falso" value="falso">Falso</v-radio>
			</v-radio-group>
			<v-btn :color="this.color2" dark large @click="enviarR">Enviar
				<v-icon>mdi-check</v-icon>
			</v-btn>
		</v-form>

		<div class="mt-3">Selected: <strong>{{ mensaje }}</strong></div>
		<div class="mt-3" v-if="selected === respuesta"> <strong>{{ mensaje }}</strong></div>
		<div class="mt-3" v-else-if="selected != respuesta"> <strong>{{ mensaje }}</strong></div>
	</div>

</template>
