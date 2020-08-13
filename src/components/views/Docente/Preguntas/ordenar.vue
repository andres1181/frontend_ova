<script>

	import { misMixins } from '@/mixins/mixins.js'
	export default {
		name: 'ordenar',
		props: {
			temas: {
				type: Array,
				required: true
			}
		},
		data() {
	    return {
			cargando: false,
			unidad: '',
			tema: '',
			valid: true,
			lazy: false,
			numItems: 3,
			mostrarItems: false,
			campoRules: [v => !!v || 'Campo requerido'],
			enunciadoRules: [v => !!v || 'Enunciado es requerido'],
			enunciado: null,
			numeros: [3, 4, 5, 6, 7, 8],
			tipo: 'ordenar',
			opciones: [],
			error: false,
			mensaje: ''


		}
		},
		computed: {

		},
		mixins: [misMixins],
		methods: {

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
					this.cargando = true
					var id_ = this.obtenerDatos().id
					var _data = {
						enunciado: String(this.enunciado),
						tipo: String(this.tipo),
						id_tema: String(this.tema._id),
						id_unidad: String(this.tema.id_unidad._id),
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
							this.error = true
	            this.mensaje = `${e.response.data}`
							// eslint-disable-next-line no-console
							console.log(` ${e}`)
							// eslint-disable-next-line no-console
							console.log(e)
						})
						.finally(() => (this.cargando = false))

				}

				//guardar en el api
			}
		},

		created() {
		}
	}

</script>

<template>

	<v-container fluid>
		<v-row>
			<v-col cols="12" md="12">
				<v-card outlined class="overline pa-3">
					<v-card-title>
						Descripción:
						</v-card-title>
					<v-card-text>
						<span>En el siguiente formulario deberá crear una pregunta del tipo 'Ordenar'. 	Se muestra al estudiante una lista desordenada, este debe ordenarla mediante el mecanismo de arrastrar y soltar.</span>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>

		<v-form v-if="cargando===false" ref="form" v-model="valid" :lazy-validation="lazy">
			<v-select v-model="tema" required
			          :rules="campoRules"
			          :items="temas"
			          item-text="nombre"
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
			<v-row>
			</v-row>
			<v-row>
				<v-alert v-if="error === true" type="error">
		      {{mensaje}}
		    </v-alert>
				<v-btn v-if="mostrarItems" block :disabled="!valid" color="success" class="mr-4" @click="guardar">
					Guardar
				</v-btn>
			</v-row>
		</v-form>
		<div v-else>
			<v-skeleton-loader height="94" type="list-item-two-line">

			</v-skeleton-loader>
			<v-skeleton-loader height="94" type="list-item-two-line">

			</v-skeleton-loader>
			<v-skeleton-loader height="94" type="list-item-two-line">

			</v-skeleton-loader>
		</div>
	</v-container>

</template>
