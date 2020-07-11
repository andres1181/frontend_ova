<script>

	import { misMixins } from '@/mixins/mixins.js'

	import IntroduccionPunteros from '@/components/ovas/punteros/introduccionPunteros.vue'
	import Punteros from '@/components/ovas/punteros/punteros.vue'
	import Referencias from '@/components/ovas/punteros/referencias.vue'
	import PasoReferencia from '@/components/ovas/punteros/pasoporreferencia.vue'
	import Matrices from '@/components/ovas/punteros/matrices.vue'
	import Arreglos from '@/components/ovas/punteros/arreglos.vue'
	import VistaEvaluacion from '@/components/actividades/evaluacion/vistaEvaluacion.vue'
	import Juez from '@/components/views/juez.vue'

	export default {
		name: 'PunterosCont',
		components: {
			IntroduccionPunteros,
			Punteros,
			PasoReferencia,
			Referencias,
			Arreglos,
			Matrices,
			Juez,
			VistaEvaluacion
		},
		mixins: [misMixins],
		data: () => ({
			unidades: '',
			fixed: true,
			dim: [],
			color: 'orange',
			temaActual: 0,
			componente: 'IntroduccionPunteros',
			temas: [
				{ titulo: 'Introducción', contenido: 'IntroduccionPunteros', color: 'orange' },
				{ titulo: 'Punteros', contenido: 'Punteros', color: 'lime' },
				{ titulo: 'Referencias', contenido: 'Referencias', color: 'purple' },
				{ titulo: 'Paso por referencia', contenido: 'PasoReferencia', color: 'pink' },
				{ titulo: 'Arreglos dinamicos', contenido: 'Arreglos', color: 'cyan' },
				{ titulo: 'Matrices dinamicas', contenido: 'Matrices', color: 'amber' }
			]
		}),
		// watch: {
		// 	length(val) {
		// 		this.tab = val - 1
		// 	}
		// },
		methods: {
			// siguienteTema(n) {
			// 	if (n === this.steps) {
			// 		this.e1 = this.steps
			// 	} else {
			// 		this.e1 = n + 1
			// 	}
			// },
			// anteriorTema(n) {
			// 	if (n === 1) {
			// 		this.e1 = 1
			// 	} else {
			// 		this.e1 = n - 1
			// 	}
			// },
			// seleccionarTema(t){
			// 	this.temaActual = t
			// }
		},
		created() {
			this.dim = this.obtenerDimensiones()
			this.unidades = this.listaUnidades()
		}
	}

</script>

<template >

	<v-row justify="center">
		<v-col cols="12" class="pa-0">
			<v-card elevation="2" :width="dim[1]" :height="dim[0]" class="pb-2 px-4 mb-3 mt-7 mx-7 rounded-lg">
				<v-row justify="center">
					<v-col class="pa-0 " cols="11">
						<v-card dark color="cyan" elevation="5" class="card_cabecera rounded-lg d-flex  align-center">
							<v-card-title class="align-center">
								<span class="headline font-weight-bold">Punteros y Referencias</span>
							</v-card-title>
						</v-card>
					</v-col>
				</v-row>

				<v-row justify="start">
					<v-col class="pa-0 " cols="10">
						<v-card :height="dim[0]-80"
						        :fixed="fixed"
						        flat
						        class="overflow-hidden ">

							<v-app-bar dense absolute
							           color="white"
							           scroll-target="#scrolling-techniques-p">

								<v-btn v-if="temaActual!== 0" icon
								       color="cyan"
								       @click="(componente = temas[temaActual - 1].contenido) && (color = temas[temaActual - 1].color) && (temaActual = temaActual - 1)">
									<v-icon>mdi-arrow-left-bold</v-icon>
								</v-btn>

								<v-spacer></v-spacer>
								<v-toolbar-title v-if="(componente !== 'Juez') && (componente !== 'VistaEvaluacion')">{{temas[temaActual].titulo}}</v-toolbar-title>

								<v-toolbar-title v-if="(componente === 'Juez')">Actividad Práctica</v-toolbar-title>
								<v-toolbar-title v-if="(componente === 'VistaEvaluacion')">Quiz</v-toolbar-title>

								<v-spacer></v-spacer>

								<v-btn v-if="temaActual!== 5" icon
								       color="cyan"
								       @click="(componente = temas[temaActual + 1].contenido) && (color = temas[temaActual + 1].color) && (temaActual = temaActual + 1)">

									<v-icon>mdi-arrow-right-bold</v-icon>
								</v-btn>

							</v-app-bar>

							<v-sheet id="scrolling-techniques-p"
							         class="mt-10 pa-2  overflow-y-auto"
							         max-height="calc(100% - 48px)">
								<component :color="color" :is="componente"></component>
							</v-sheet>

						</v-card>
					</v-col>
					<v-col class="pa-0 " cols="2">
						<v-card :height="dim[0]-80"
						        :fixed="fixed"
						        flat
						        class="overflow-hidden ml-2">
							<v-navigation-drawer right permanent absolute light>
								<v-list-item-group shaped sub-group>
									<v-list-item v-for="(tema, i) in temas"
									             :key="i"
									             @click="(componente = tema.contenido) && (color = tema.color) && (temaActual = i)">
										<v-list-item-content>
											<v-list-item-subtitle>{{tema.titulo}}</v-list-item-subtitle>
										</v-list-item-content>
									</v-list-item>
									<v-divider></v-divider>

									<v-list-item @click="componente = 'Juez'">
										<v-list-item-content>
											<v-list-item-title>Actividad práctica</v-list-item-title>
										</v-list-item-content>
									</v-list-item>
									<v-list-item @click="componente = 'VistaEvaluacion'">
										<v-list-item-content>
											<v-list-item-title>Quiz</v-list-item-title>
										</v-list-item-content>
									</v-list-item>
								</v-list-item-group>
							</v-navigation-drawer>
						</v-card>
					</v-col>
				</v-row>
			</v-card>

		</v-col>

		<v-col cols="3" sm="3" md="" lg="3" xl="3" class="pa-0">

		</v-col>
	</v-row>

</template>

<style>



</style>
