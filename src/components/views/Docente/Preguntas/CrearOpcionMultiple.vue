<script>

	import { misMixins } from '@/mixins/mixins.js'
	export default {
		name: 'crearOpcionMultiple',
		props: {

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
			tipo: 'multiple',
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
					var id_ = this.obtenerDatos().id
					console.log(id_);
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
					//limpiar formlario
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
			<v-row>
			<v-text-field v-model="nuevaOpcionesI[1]" :rules="campoRules" label="Añadir una opción INCORRECTA"></v-text-field>
			</v-row>
			<v-row>
				<v-text-field v-model="nuevaOpcionesI[2]" :rules="campoRules" label="Añadir una opción INCORRECTA"></v-text-field>
			</v-row>
			<v-row>
				<v-btn block x-large :disabled="!valid"
				       color="success"
				       class="mr-4"
				       @click="guardar">
					Guardar
				</v-btn>
			</v-row>

		</v-form>
	</v-container>

</template>
