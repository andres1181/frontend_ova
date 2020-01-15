<script>

	import Introduccion from '@/components/ovas/punteros/introduccion.vue'
	import Declaracion from '@/components/ovas/punteros/declaracion.vue'
	import Operadores from '@/components/ovas/punteros/operadores.vue'
	import Operaciones from '@/components/ovas/punteros/operaciones.vue'
	import Constantes from '@/components/ovas/punteros/constantes.vue'
	import Matrices from '@/components/ovas/punteros/matrices.vue'
	import Mp from '@/components/ovas/punteros/matrices_punteros.vue'
	import Caracteres from '@/components/ovas/punteros/caracteres.vue'
	import Pp from '@/components/ovas/punteros/punteros_punteros.vue'
	import Problemas from '@/components/ovas/punteros/problemas.vue'
	import Evaluacion from '@/components/ovas/punteros/evaluacion.vue'

	export default {
		name: 'Punteros',
		components: {
			Introduccion,
			Declaracion,
			Operadores,
			Operaciones,
			Constantes,
			Matrices,
			Mp,
			Caracteres,
			Pp,
			Problemas,
			Evaluacion
		},
		data: () => ({
			e1: 1,
			steps: 11,
			tab: null,
			temas: [
				{ _id: '1', titulo: 'Introducción', terminado: false, contenido: 'Introduccion' },
				{ _id: '2', titulo: 'Declaración', terminado: false, contenido: 'Declaracion' },
				{ _id: '3', titulo: 'Operadores', terminado: false, contenido: 'Operadores' },
				{ _id: '4', titulo: 'Operaciones aritméticas', terminado: false, contenido: 'Operaciones' },
				{ _id: '5', titulo: 'Punteros constantes', terminado: false, contenido: 'Constantes' },
				{ _id: '6', titulo: 'Punteros y matrices', terminado: false, contenido: 'Matrices' },
				{ _id: '7', titulo: 'Cadenas de caracteres', terminado: false, contenido: 'Caracteres' },
				{ _id: '8', titulo: 'Matrices de punteros', terminado: false, contenido: 'Mp' },
				{ _id: '9', titulo: 'Punteros a punteros', terminado: false, contenido: 'Pp' },
				{ _id: '10', titulo: 'Problemas a evitar', terminado: false, contenido: 'Problemas' },
				{ _id: '11', titulo: 'Evaluación', terminado: false, contenido: 'Evaluacion' }
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
				<h3>Estilo</h3>
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
