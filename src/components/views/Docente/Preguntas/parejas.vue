<script>

	export default {
		name: 'parejas',
		props: {
			id: {
				type: String,
				required: true
			}
		},
		data: () => ({
			valid: true,
			lazy: false,
			numItems: 0,
			campoRules: [v => !!v || 'Campo requerido'],
			enunciadoRules: [v => !!v || 'Enunciado es requerido'],
			enunciado: null,
			//nuevaOpcionC: '',
			nuevaOpcionesI: [],
			tipo: 'opcionMultiple',
			items: []
			/*

																*/
		}),
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
				this.numItems = this.numItems + 1
				//	for (var i = 0; i < this.numItems; i++) {
				this.items.push({
					posicion: this.numItems,
					texto: null
				})
				//}
			}
		},
		//
		created() {}
	}

</script>

<template>

	<v-container fluid>
		<v-form ref="form"
		        v-model="valid"
		        :lazy-validation="lazy">
			<v-row>
				<v-col cols="12" md="12">
					<v-textarea outlined
					            v-model="enunciado"
					            :rules="enunciadoRules"
					            label="Enunciado de la pregunta"
					            required></v-textarea>
				</v-col>
			</v-row>
			<v-row v-if="numItems>0">
				<v-col cols="12" md="12">
					<v-textarea outlined
					            v-for="(element, index) in items"
					            :key="index"
					            v-model="element.texto"
					            :rules="campoRules"
					            label="Texto"

					            required></v-textarea>
				</v-col>
			</v-row>
			<v-row>
				<!--	<v-text-field  type="number" v-model="numItems" :rules="campoRules" placeholder="Número de Items" solo></v-text-field>
								:disabled="!(numItems>0)" -->
				<v-btn color="success"
				       class="mr-4"
				       @click="crearItems">
					Añadir
				</v-btn>
			</v-row>
			<v-row>
				<v-btn :disabled="!valid"
				       color="success"
				       class="mr-4"
				       @click="guardar">
					Guardar
				</v-btn>
			</v-row>
			<p>{{items}}</p>

		</v-form>
	</v-container>

</template>
