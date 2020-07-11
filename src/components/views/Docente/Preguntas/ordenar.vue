<script>

	import { misMixins } from '@/mixins/mixins.js'
	export default {
		name: 'ordenar',
		props: {},
		data: () => ({
			unidades: '',
			unidad: '',
			tema: '',
			temas: '',
			valid: true,
			lazy: false,
			numItems: 3,
			mostrarItems: false,
			campoRules: [v => !!v || 'Campo requerido'],
			enunciadoRules: [v => !!v || 'Enunciado es requerido'],
			enunciado: null,
			numeros: [3, 4, 5, 6, 7, 8],
			tipo: 'ordenar',
			opciones: []
			/*

			    															*/
		}),
		computed: {

		},
		mixins: [misMixins],
		methods: {
			listaTemas() {
				return this.unidad.temas
			},

			crearItems() {
				for (var i = 0; i < this.numItems; i++) {
					this.opciones[i] = {
						posicion: i + 1,
						texto: null
					}
					//}
				}
				this.mostrarItems = true
			},
			guardar() {
				if (this.$refs.form.validate()) {
					var id_ = this.obtenerDatos().id
					var _data = {
						enunciado: String(this.enunciado),
						tipo: String(this.tipo),
						unidad: String(this.unidad.componente),
						tema: String(this.tema.componente),
						autor: String(id_),
						opciones: this.opciones,
						activo: true
					}
					//guardar en el api

					var token = String(localStorage.getItem('tokenUser'))
					const ruta = '/actividades/crear'
					//const host = 'http://localhost:3000'
					//const baseURL = '/api/usuarios/login'

					this.axios({
						method: 'post',
						url: ruta, // + user,
						headers: {
							'Content-Type': 'application/json',
							'x-access-token': token
						},
						data: _data
					})
						.then(response => {

							this.$emit('creada', {creada: true, select: { text: '', componente: '' }})

						})
						.catch(e => {
							// eslint-disable-next-line no-console
							console.log(`Error en el servidor:  ${e}`)
							// eslint-disable-next-line no-console
							console.log(e.response)
						})

				}

				//guardar en el api
			}
		},

		created() {
			this.unidades = this.listaUnidades()
		}
	}

</script>

<template>

	<v-container fluid>
		<v-form ref="form" v-model="valid" :lazy-validation="lazy">
			{{unidad}}
			<v-select v-model="unidad"
			          :items="unidades"
			          :rules="campoRules"
			          required
			          item-text="unidad"
			          label="Seleccione una unidad tematica de la pregunta"
			          return-object>
			</v-select>
			<v-select v-model="tema" required
			          :rules="campoRules"
			          :items="unidad.temas"
			          item-text="tema"
			          label="Seleccione el tema relacionado con la pregunta"
			          return-object>
			</v-select>
			<v-textarea outlined v-model="enunciado" :rules="enunciadoRules" label="Escriba el enunciado de la pregunta" required></v-textarea>
			<v-row v-show="mostrarItems === false">
				<v-col cols="10" sm="10" md="10" lg="10" xl="10" class="pa-0">
					<v-select v-model="numItems" :items="numeros" :rules="campoRules" label="Seleccione el numero de items a ordenar:">
					</v-select>
				</v-col>
				<v-col cols="2" sm="2" md="2" lg="2" xl="2" class="pa-0">
					<v-btn color="success" class="mx-4" large @click="crearItems">
						Continuar
					</v-btn>
				</v-col>
			</v-row>
			<v-row v-show="mostrarItems === true">
				<v-col cols="12" sm="12" md="12" lg="12" xl="12" class="pa-0">
					<v-textarea v-for="(element, index) in opciones"
					            :key="index"
					            v-model="element.texto"
					            :rules="campoRules"
					            :label="'Item # ' + element.posicion"
					            required></v-textarea>
				</v-col>
			</v-row>
			{{mostrarItems}}
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
				<v-btn v-if="mostrarItems" block :disabled="!valid" color="success" class="mr-4" @click="guardar">
					Guardar
				</v-btn>
			</v-row>
		</v-form>
	</v-container>

</template>
