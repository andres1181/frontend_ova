<script>

	import { misMixins } from '@/mixins/mixins.js'
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
				unidades: '',
				unidad: '',
				tema: '',
				select: null,
				error: null,
				valid: true,
				lazy: false,
				campoRules: [v => !!v || 'Campo requerido'],
				enunciadoRules: [v => !!v || 'Enunciado es requerido'],
				radioRules: [v => !!v || 'Seleccione una opción'],
				items: [{ text: 'Verdadero', valor: 'true' }, { text: 'Falso', valor: 'false' }],
				enunciado: '',
				tipo: 'verdaderoFalso',
				respuesta: ''
			}
		},
		mixins: [misMixins],
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
		},
		//
		created() {
			this.unidades = this.listaUnidades()
		}
	}

</script>

<template>

	<v-container fluid>
		<v-form ref="form"
		        v-model="valid"
		        :lazy-validation="lazy">
			<v-select v-model="unidad"
			          :items="unidades"
			          item-text="unidad"
								:rules="campoRules"
			          label="Seleccione una unidad tematica"
			          return-object>
			</v-select>
			<v-select v-model="tema"
			          :items="unidad.temas"
			          item-text="tema"
								:rules="enunciadoRules"
			          label="Seleccione un tema"
			          return-object>
			</v-select>
			<v-textarea v-model="enunciado"
			            :rules="campoRules"
			            	outlined

			            label="Escriba el enunciado de la pregunta"
			            required></v-textarea>

			<v-radio-group v-model="respuesta" row mandatory class="ma-0" :rules="radioRules" required>
				<v-radio label="Verdadero" value="false"></v-radio>
				<v-radio label="Falso" value="true"></v-radio>
			</v-radio-group>

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
