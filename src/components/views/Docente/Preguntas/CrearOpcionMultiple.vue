<script>

	export default {
		name: 'crearOpcionMultiple',
		props: {
			id: {
				type: String,
				required: true
			}
		},
		data: () => ({
			valid: true,
			lazy: false,
			campoRules: [v => !!v || 'Campo requerido'],
			enunciadoRules: [v => !!v || 'Enunciado es requerido'],
			enunciado: '',
			nuevaOpcionC: '',
			nuevaOpcionesI: [],
			tipo: 'opcionMultiple',
			opciones: []
			/*

											*/
		}),
		methods: {
			guardar() {
				if (this.$refs.form.validate()) {
					this.opciones.push({
						respuesta: this.nuevaOpcionC,
						correcta: true
					})
					for (var i = 0; i < 3; i++) {
						this.opciones.push({
							respuesta: this.nuevaOpcionesI[i],
							correcta: false
						})
					}

					//guardar en el api
					//limpiar formlario
				}
			}
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
			<v-row>
				<v-text-field outlined v-model="nuevaOpcionC" :rules="campoRules" label="Añadir opción correcta"  ></v-text-field>
			</v-row>
			<v-row>
				<v-text-field outlined v-model="nuevaOpcionesI[0]" :rules="campoRules" label="Añadir opción incorrecta"  ></v-text-field>
			</v-row>
			<v-text-field outlined v-model="nuevaOpcionesI[1]" :rules="campoRules" label="Añadir opción incorrecta"  ></v-text-field>
			<v-row>
				<v-text-field outlined v-model="nuevaOpcionesI[2]" :rules="campoRules" label="Añadir opción incorrecta"  ></v-text-field>
			</v-row>
			<v-row>
				<v-btn :disabled="!valid"
				       color="success"
				       class="mr-4"
				       @click="guardar">
					Guardar
				</v-btn>
			</v-row>
			<p>{{opciones}}</p>

		</v-form>
	</v-container>

</template>
