<script>

	import { misMixins } from '@/mixins/mixins.js'
	export default {
		name: 'crearOpcionMultiple',
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
				campoRules: [v => !!v || 'Campo requerido'],
				enunciadoRules: [v => !!v || 'Enunciado es requerido'],
				enunciado: '',
				nuevaOpcionC: '',
				nuevaOpcionesI: [],
				tipo: 'multiple',
				opciones: [],
				error: false,
				mensaje: ''
			}
		},
		mixins: [misMixins],
		methods: {
			guardar() {
				if (this.$refs.form.validate()) {
					this.cargando = true
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
					var id_ = this.obtenerDatos().id
					console.log(id_)
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
							this.$emit('creada', { creada: true, select: { text: '', componente: '' } })
						})
						.catch(e => {
							this.error = true
							this.mensaje = `${e.response.data}`
						})
						.finally(() => (this.cargando = false))
				}
				//limpiar formlario
			}
		},
		//
		created() {}
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
						<span>En el siguiente formulario deberá crear una pregunta del tipo 'Opción Mútiple'. El estudiante deberá elegir de una lista cuatro opciones, la que más se acerque a un interrogante plateado.</span>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
		<v-form v-if="cargando===false"
		        ref="form"
		        v-model="valid"
		        :lazy-validation="lazy">

			<v-select v-model="tema" required
			          :rules="campoRules"
			          :items="temas"
			          item-text="nombre"
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
			<v-row>
				<v-text-field v-model="nuevaOpcionesI[1]" :rules="campoRules" label="Añadir una opción INCORRECTA"></v-text-field>
			</v-row>
			<v-row>
				<v-text-field v-model="nuevaOpcionesI[2]" :rules="campoRules" label="Añadir una opción INCORRECTA"></v-text-field>
			</v-row>
			<v-row>
				<v-alert v-if="error === true" type="error">
					{{mensaje}}
				</v-alert>
				<v-btn block
				       x-large
				       :disabled="!valid"
				       color="success"
				       class="mr-4"
				       @click="guardar">
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
