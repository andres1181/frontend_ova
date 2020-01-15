<script>

	import { misMixins } from '@/mixins/mixins.js'

	import Conceptos from '@/components/ovas/polimorfismo/conceptos.vue'
	import Genericidad from '@/components/ovas/polimorfismo/genericidad.vue'
	import Introduccion from '@/components/ovas/polimorfismo/introduccion.vue'
	import Polimorficas from '@/components/ovas/polimorfismo/polimorficas.vue'
	import Sobrecarga from '@/components/ovas/polimorfismo/sobrecarga.vue'
	import Sobreescritura from '@/components/ovas/polimorfismo/sobrescritura.vue'
	import Evaluacion from '@/components/ovas/polimorfismo/evaluacion.vue'

	export default {
		name: 'Polimorfismo',
		components: {
			Conceptos,
			Genericidad,
			Introduccion,
			Polimorficas,
			Sobrecarga,
			Sobreescritura,
			Evaluacion
		},
		data: () => ({
			e1: 1,
			steps: 8,
			tab: null,
			avance: [],
			lista: [],

			temas: [
				{ _id: '1', titulo: 'Introducción', terminado: false, contenido: 'Introduccion', unidad:'polimorfismo' },
				{ _id: '2', titulo: 'Conceptos', terminado: false, contenido: 'Conceptos', unidad:'polimorfismo' },
				{ _id: '3', titulo: 'Sobrecarga', terminado: false, contenido: 'Sobrecarga', unidad:'polimorfismo' },
				{ _id: '4', titulo: 'Sobrescritura', terminado: false, contenido: 'Sobrescritura', unidad:'polimorfismo' },
				{ _id: '5', titulo: 'Genericidad', terminado: false, contenido: 'Genericidad', unidad:'polimorfismo' },
				{ _id: '6', titulo: 'Variables polimorficas', terminado: false, contenido: 'Polimorficas', unidad:'polimorfismo' },
				{ _id: '7', titulo: 'Evaluación', terminado: false, contenido: 'Evaluacion', unidad:'polimorfismo' }
			]
		}),
		watch: {
			length(val) {
				this.tab = val - 1
			}
		},
		mixins: [misMixins],
		methods: {
			buscarAvance(){
				var token = String(localStorage.getItem('tokenUser'))
				var id_ = this.obtenerDatos().id
				var id_unidad = '5e1351e0327cef0c5c97312e'
				const ruta = '/estudiante/avance/tema'
				this.axios({
					method: 'get',
					url: ruta, //host + baseURL, // + user,
					headers: {
						'content-type': 'application/json',
						'x-access-token': token
					}
				})
					.then(response => {
						this.lista = response.data
						for (var i = 0; i < this.lista.length; i++) {

							if ((this.lista[i].id_estudiante == id_) && (this.lista[i].id_tema.id_unidad == id_unidad)) {
								this.avance.push(this.lista[i])
							}
						}

					})
					.catch(e => {
						this.error = `Error:  ${e}`
					})
					//	eslint-disable-next-line no-console
					console.log('Avance')
					//	eslint-disable-next-line no-console
					console.log(this.avance)

			},
			siguienteTema(n) {
				if (n === this.steps) {
					this.e1 = this.steps
				} else {
					this.e1 = n + 1
				}
			},
			anteriorTema(n) {
				if (n === 1) {
					this.e1 = 1
				} else {
					this.e1 = n - 1
				}
			}
		},
		created() {
			this.steps = this.temas.length
			this.buscarAvance()
			// eslint-disable-next-line no-console
			//console.log(this.steps)
			// eslint-disable-next-line no-console
			//console.log(this.temas[0].contenido)
		}
	}

</script>

<template >

	<v-card outlined flat>
		<v-toolbar color="color-2" dark fixed flat dense class="px-4">

			<v-toolbar-title class="text-center justify-center">
				<h3>Polimorfismo</h3>
			</v-toolbar-title>

			<v-spacer></v-spacer>
			<template v-slot:extension>
					<v-tabs v-model="tab" dark centered
					        show-arrows
					        slider-color="yellow"
									dense
					        background-color="transparent">

						<v-tab v-for="(a, i) in avance" :key="i">
							{{a.id_tema.titulo}}
						</v-tab>
					</v-tabs>
					</template>
		</v-toolbar>
		<v-tabs-items v-model="tab">
			<v-tab-item v-for="(a, i) in avance" :key="i">
				<v-container fluid>

					<component :is="a.id_tema.componente" :terminado="a.terminado"></component>

				</v-container>
			</v-tab-item>
		</v-tabs-items>

	</v-card>

</template>

<style>

	#tabItems {
		height: calc(100% - 64px) !important;
		max-height: calc(100% - 64px) !important;
		-webkit-border-radius: 15px;
		-moz-border-radius: 15px;
		border-radius: 15px;
	}
	#cucu {
		height: 100% !important;
		max-height: 100% !important;
		-webkit-border-radius: 15px;
		-moz-border-radius: 15px;
		border-radius: 15px;
	}
	.v-window__container {
		height: 100% !important;
		max-height: 100% !important;
	}
	#card_2 {
		-webkit-border-radius: 15px;
		-moz-border-radius: 15px;
		border-radius: 15px;
	}
	.ron {
		-webkit-border-radius: 15px;
		-moz-border-radius: 15px;
		border-radius: 15px;
	}

</style>
