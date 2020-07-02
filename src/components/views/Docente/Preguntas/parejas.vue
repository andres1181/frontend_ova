<script>
import Codemirror from 'codemirror/lib/codemirror.js'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/clike/clike.js'
import 'codemirror/theme/dracula.css'
import { misMixins } from '@/mixins/mixins.js'
	export default {
		name: 'parejas',
		components: {
		},
		props: {
			id: {
				type: String,
				required: true
			}
		},
		data: () => ({
			unidades: '',
			unidad: '',
			valid: true,
			lazy: false,
			numItems: 0,
			code: '',
			value: '',
existCodigo: true,
			campoRules: [v => !!v || 'Campo requerido'],
			enunciadoRules: [v => !!v || 'Enunciado es requerido'],
			enunciado: null,
			//nuevaOpcionC: '',
			editor: '',

			/*

																*/
		}),
		mixins: [misMixins],
		methods: {
			mostrarAlert(){
				var exist
				if (this.value === '') {
					this.existCodigo = false
				}
				return exist
			},
			guardar() {
				this.value = this.editor.getValue()
		/* else 	if (this.$refs.form.validate()) {
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
				}*/
			}
		},

		created() {
			this.unidades = this.listaUnidades()
		},
		mounted() {
			this.editor = Codemirror.fromTextArea(document.getElementById('editorParejas'), {
				mode: 'text/x-c++src',
				theme: 'dracula',
				lineNumbers: true,

			})
		}
	}

</script>

<template>

	<v-container fluid>
		<v-form ref="form"
		        v-model="valid"
		        :lazy-validation="lazy">
			<v-row>
				<v-col cols="12" md="12">
					<h6>Escriba un código en C++</h6>
						<textarea required :rules="campoRules" v-model="code" rows="20" cols="80" id="editorParejas"></textarea>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="12" md="12">
					<v-select v-model="unidad"
					          :items="unidades"
										:rules="campoRules"
					          item-text="unidad"
					          label="Seleccione una unidad tematica"
					          return-object>
					</v-select>
				</v-col>
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
