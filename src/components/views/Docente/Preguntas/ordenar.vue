<script>

	import { misMixins } from '@/mixins/mixins.js'
	export default {
		name: 'ordenar',
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
			numItems: 3,
			mostrarItems: false,
			campoRules: [v => !!v || 'Campo requerido'],
			enunciadoRules: [v => !!v || 'Enunciado es requerido'],
			enunciado: null,
			//nuevaOpcionC: '',
			nuevaOpcionesI: [],
			numeros: [3, 4, 5, 6, 7, 8],
			tipo: 'opcionMultiple',
			items: []
			/*

																		*/
		}),
		mixins: [misMixins],
		methods: {
			guardar() {
				if (this.$refs.form.validate()) {
					this.items.push({
						respuesta: this.nuevaOpcionC,
						correcta: true
					})
					for (var i = 0; i < 3; i++) {
						this.items.push({
							respuesta: this.nuevaOpcionesI[i],
							correcta: false
						})
					}

					//guardar en el api
				}
			},
			crearItems() {
				for (var i = 0; i < this.numItems; i++) {
					this.items.push({
						posicion: i + 1,
						texto: null
						// this.numItems = this.numItems + 1
						// //	for (var i = 0; i < this.numItems; i++) {
						// this.items.push({
						// 	posicion: this.numItems,
						// 	texto: null
					})
					//}
				}
				this.mostrarItems = true
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
			<v-select v-model="unidad"
			          :items="unidades"
								 :rules="campoRules"
								required
			          item-text="unidad"
			          label="Seleccione una unidad tematica relacionada con la pregunta"
			          return-object>
			</v-select>
			<v-select v-model="tema"
			required  :rules="campoRules"
			          :items="unidad.temas"
			          item-text="tema"
			          label="Seleccione el tema relacionado con la pregunta"
			          return-object>
			</v-select>
			<v-textarea outlined
			            v-model="enunciado"
			            :rules="enunciadoRules"
			            label="Escriba el enunciado de la pregunta"
			            required></v-textarea>
			<v-row v-if="!mostrarItems">
				<v-col cols="10" sm="10" md="10" lg="10" xl="10" class="pa-0">
				<v-select v-model="numItems"
				          :items="numeros"
									:rules="campoRules"
				          label="Seleccione el numero de items:">
				</v-select>	</v-col>
				<v-col cols="2" sm="2" md="2" lg="2" xl="2" class="pa-0">
				<v-btn color="success"
				       class="mx-4"
							 large
				       @click="crearItems">
					Continuar
				</v-btn>
	</v-col>
			</v-row>
			<v-row v-if="mostrarItems">
				<v-col cols="12" sm="12" md="12" lg="12" xl="12" class="pa-0">
					<v-textarea v-for="(element, index) in items"
					            :key="index"
					            v-model="element.texto"
					            :rules="campoRules"
					            :label="'Texto posición ' + element.posicion"
					            required></v-textarea>
				</v-col>
			</v-row>

			<v-row>
				<!--	<v-text-field  type="number" v-model="numItems" :rules="campoRules" placeholder="Número de Items" solo></v-text-field>
										:disabled="!(numItems>0)" -->
				<!-- <v-btn color="success"
						       class="mr-4"
						       @click="crearItems">
							Añadir
						</v-btn> -->
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
