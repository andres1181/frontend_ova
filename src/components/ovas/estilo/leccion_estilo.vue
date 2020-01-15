<script>

	import Introduccion from '@/components/ovas/estilo/introduccion.vue'
	import Cabecera from '@/components/ovas/estilo/cabecera.vue'
	import Clases from '@/components/ovas/estilo/clases.vue'
	import Funciones from '@/components/ovas/estilo/funciones.vue'
	import Nombres from '@/components/ovas/estilo/nombres.vue'
	import Comentarios from '@/components/ovas/estilo/comentarios.vue'
	import Formateo from '@/components/ovas/estilo/formateo.vue'
	import Bucles from '@/components/ovas/estilo/bucles.vue'
	import Espaciado from '@/components/ovas/estilo/espaciado.vue'
	// import Problemas from '@/components/ovas/punteros/problemas.vue'
	import Evaluacion from '@/components/ovas/punteros/evaluacion.vue'

	export default {
		name: 'Estilo',
		components: {
			Introduccion,
			Cabecera,
			Clases,
			Funciones,
			Nombres,
			Comentarios,
			Formateo,
			Bucles,
			Espaciado,
			Evaluacion
		},
		data: () => ({
			e1: 1,
			steps: 10,
			tab: null,
			temas: [
				{ _id: '1', titulo: 'Introducción', terminado: false, contenido: 'Introduccion' },
				{ _id: '2', titulo: 'Archivos de cabecera', terminado: false, contenido: 'Cabecera' },
				{ _id: '3', titulo: 'Clases', terminado: false, contenido: 'Clases' },
				{ _id: '4', titulo: 'Funciones', terminado: false, contenido: 'Funciones' },
				{ _id: '5', titulo: 'Nombres', terminado: false, contenido: 'Nombres' },
				{ _id: '6', titulo: 'Comentarios', terminado: false, contenido: 'Comentarios' },
				{ _id: '7', titulo: 'Formateo', terminado: false, contenido: 'Formateo' },
				{ _id: '8', titulo: 'Bucles y estructuras de control', terminado: false, contenido: 'Bucles' },
				{ _id: '9', titulo: 'Espaciado', terminado: false, contenido: 'Espaciado' },
				// { _id: '10', titulo: 'Problemas a evitar', terminado: false, contenido: 'Problemas' },
				{ _id: '10', titulo: 'Evaluación', terminado: false, contenido: 'Evaluacion' }
			]
		}),
		watch: {
			length(val) {
				this.tab = val - 1
			}
		},
		methods: {
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
			// eslint-disable-next-line no-console
			console.log(this.steps)
			// eslint-disable-next-line no-console
			console.log(this.temas[0].contenido)
		}
	}

</script>

<template >

	<v-card outlined flat>
		<v-toolbar color="color-2" dark fixed flat dense class="px-4">

				<v-toolbar-title class="text-center justify-center">
					<h3>Punteros</h3>
				</v-toolbar-title>

				<v-spacer></v-spacer>
				<template v-slot:extension>
							<v-tabs v-model="tab" dark centered
							        show-arrows
							        slider-color="yellow"
											dense
							        background-color="transparent">

								<v-tab v-for="(tema, i) in temas" :key="i">
									{{tema.titulo}}
								</v-tab>
							</v-tabs>
							</template>
			</v-toolbar>
			<v-tabs-items v-model="tab">
				<v-tab-item v-for="(tema, i) in temas" :key="i">
					<v-container fluid>

						<component :is="tema.contenido"></component>

					</v-container>
				</v-tab-item>
			</v-tabs-items>

	</v-card>

</template>

<style>

	/* #tabItems {
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
			} */
	.v-window__container {
		height: 100% !important;
		max-height: 100% !important;
	}
	/* #card_2 {
				-webkit-border-radius: 15px;
				-moz-border-radius: 15px;
				border-radius: 15px;
			} */
	.ron {
		-webkit-border-radius: 15px;
		-moz-border-radius: 15px;
		border-radius: 15px;
	}

</style>
