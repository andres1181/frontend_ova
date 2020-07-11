<script>

	import { misMixins } from '@/mixins/mixins.js'
	import crearfalsoVerdadero from '@/components/views/Docente/Preguntas/falsoYverdadero.vue'
	import crearOpcionMultiple from '@/components/views/Docente/Preguntas/CrearOpcionMultiple.vue'
	import ordenar from '@/components/views/Docente/Preguntas/ordenar.vue'
	import analizar from '@/components/views/Docente/Preguntas/analizar.vue'
	import analizarProblema from '@/components/views/Docente/Preguntas/analizarProblemaC.vue'
	// TODO: falta importar analizar codigo y evaluacion
	export default {
		name: 'Crear',
		components: {
			crearfalsoVerdadero,
			crearOpcionMultiple,
			ordenar,
			analizar,
			analizarProblema
		},

		data: () => ({
			creada: false,

			unidades: '',
			select: { text: '', componente: '' },
			items: [
				{ text: 'Opción Multiple', componente: 'crearOpcionMultiple' },
				{ text: 'Verdadero y Falso', componente: 'crearfalsoVerdadero' },
				{ text: 'Ordenar', componente: 'ordenar' },
				{ text: 'Analizar código', componente: 'analizar' },
				{ text: 'Elegir código', componente: 'analizarProblema' }
			]
		}),
		mixins: [misMixins],
		methods: {
			preguntaCreada(e){
				this.creada = true
				this.select = e.select
			}
		},
		created() {
			this.unidades = this.listaUnidades()
			this.dim = this.obtenerDimensiones()
		}
	}

</script>

<template>

	<v-row justify="center">
		<v-col cols="12" class="pa-0">
			<v-card elevation="2" :width="dim[1]" :height="dim[0]" class="pb-4 px-4 mb-7 mt-9 mx-7 rounded-lg">

				<v-row justify="center">
					<v-col class="pa-0 " cols="11">
						<v-card dark color="cyan" elevation="5" class="card_cabecera rounded-lg d-flex  align-center">
							<v-card-title class="align-center">

								<span class="headline font-weight-bold">Crear preguntas</span>
							</v-card-title>
						</v-card>
					</v-col>
				</v-row>

				<v-row justify="center">
					<v-col cols="12" sm="12" md="12" lg="12" xl="12" class="pa-0">
						<v-card :height="dim[0]-80" class="overflow-hidden" flat>

							<v-app-bar dense absolute
							           color="white"
							           scroll-target="#scrolling-techniques-7">

								<v-toolbar-title>{{select.text}}</v-toolbar-title>

								<v-spacer></v-spacer>
								<v-select v-model="select"
								          :items="items"
								          item-text="text"
								          label="Tipo de pregunta"
								          return-object>
								</v-select>

							</v-app-bar>

							<v-sheet id="scrolling-techniques-7"
							         class="mt-12  overflow-y-auto"
							         max-height="calc(100% - 48px)">
								<v-container>
									<v-card class="pa-2" flat>
										<v-row>
											<v-col cols="12" md="12">

											</v-col>
											<v-col cols="12" md="12">
												<v-alert v-if="(creada===true) && (select.componente === '')" type="success" dark icon="mdi-clock-fast">
													<span>La pregunta ha sido creada</span>
												</v-alert>
												<component v-if="select.componente !== ''" :is="select.componente" @creada="preguntaCreada"></component>
											</v-col>
										</v-row>

									</v-card>
								</v-container>
							</v-sheet>
						</v-card>
					</v-col>
				</v-row>

			</v-card>
		</v-col>
	</v-row>

</template>

<style>

</style>
