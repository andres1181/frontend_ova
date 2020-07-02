<script>

	import { misMixins } from '@/mixins/mixins.js'
	export default {
		name: 'crearOpcionMultiple',
		props: {
			id: {
				type: String,
				required: true
			}
		},
		data: () => ({
			unidades: '',
			unidad: '',
			tema: '',
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
		mixins: [misMixins],
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
			<v-select v-model="unidad" required
			          :items="unidades"
			          item-text="unidad"
			          :rules="campoRules"
			          label="Seleccione una unidad tematica"
			          return-object>
			</v-select>
			<v-select v-model="tema" required
			          :rules="campoRules"
			          :items="unidad.temas"
			          item-text="tema"
			          label="Seleccione un tema"
			          return-object>
			</v-select>
			<v-textarea v-model="enunciado"
			            :rules="enunciadoRules"
									outlined
			            label="Escria el enunciado de la pregunta"
			            required>
			</v-textarea>
			<v-row>
				<v-text-field v-model="nuevaOpcionC" :rules="campoRules" label="Añadir opción CORRECTA"></v-text-field>
			</v-row>
			<v-row>
				<v-text-field v-model="nuevaOpcionesI[0]" :rules="campoRules" label="Añadir una opción INCORRECTA"></v-text-field>
			</v-row>
			<v-text-field v-model="nuevaOpcionesI[1]" :rules="campoRules" label="Añadir una opción INCORRECTA"></v-text-field>
			<v-row>
				<v-text-field v-model="nuevaOpcionesI[2]" :rules="campoRules" label="Añadir una opción INCORRECTA"></v-text-field>
			</v-row>
			<v-row>
				<v-btn :disabled="!valid"
				       color="success"
				       class="mr-4"
				       @click="guardar">
					Guardar
				</v-btn>
			</v-row>

		</v-form>
	</v-container>

</template>
