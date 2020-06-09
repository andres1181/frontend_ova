<script>

	export default {
		name: 'crearfalsoVerdadero',
		props: {
			id: {
				type: String,
				required: true
			}
		},
		data() {
			return {
				select: null,
				error: null,
				valid: true,
				lazy: false,
				campoRules: [v => !!v || 'Campo requerido'],
				enunciadoRules: [v => !!v || 'Enunciado es requerido'],
				items: [{ text: 'Verdadero', valor: 'true' }, { text: 'Falso', valor: 'false' }],
				enunciado: '',
				tipo: 'verdaderoFalso',
				respuesta: ''
			}
		},
		methods: {
			guardarRespuesta() {
				//this.$refs.form.validate()
				/*	if (this.$refs.form.validate()) {
								this.respuesta = this.select.valor
								//guardar en el api
								//guardar el error en la respuesta del api
							}*/
			}
			/*	enviarR: function() {
														if (this.$refs.form.validate()) {
															if (correcta) {
																this.mensaje = 'Respuesta correcta!'
																//gurdar en la base de datos
															} else if (!correcta) {
																this.mensaje = 'Respuesta incorrecta!'
																this.intentos = this.intentos + 1
															}
														}
													}*/
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

	<v-container fluid>
		<v-form ref="form"
		        v-model="valid"
		        :lazy-validation="lazy">
			<v-textarea v-model="enunciado" outlined
			            :rules="enunciadoRules"
			            label="Enunciado de la pregunta"
			            required></v-textarea>

			<v-select v-model="select" outlined
			          :items="items"
			          item-text="text"
			          :rules="campoRules"
			          label="La respuesta es: "
			          required></v-select>

			<v-btn :disabled="!valid"
			       color="success"
			       class="mr-4"
			       @click="guardarRespuesta">
				Guardar
			</v-btn>
			<v-alert v-if="error!==null" dense text type="error">
				<strong>Error: </strong> {{error}}
			</v-alert>
		</v-form>

	</v-container>

</template>
