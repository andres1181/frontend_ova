<script>

	import { misMixins } from '@/mixins/mixins.js'
	//import reportesUnidad from '@/components/views/Docente/Reportes/vistaReportesUnidad.vue'
	export default {
		name: 'reportesGlobales',
		props: {
			tipo: {
				type: String,
				required: true
			}
		},
		components: {
			//		reportesUnidad
		},

		data: () => ({
			dim: [],
			dialog: false,
			text: '',
			unidades: [],
			grupos: [
				{
					codigo: '4567',
					nombre: 'IPOO 50',
					unidades: [
						{
							nombre: 'Polimorfismo',
							temas: [
								{
									tema: 'Genericidad',
									aciertos: 40,
									desaciertos: 20
								},
								{
									tema: 'Sobrecarga',
									aciertos: 40,
									desaciertos: 100
								},
								{
									tema: 'Variables Polimorficas',
									aciertos: 40,
									desaciertos: 70
								}
							]
						},
						{
							nombre: 'Punteros',
							temas: [
								{
									tema: 'Genericidad',
									aciertos: 40,
									desaciertos: 10
								},
								{
									tema: 'Sobrecarga',
									aciertos: 40,
									desaciertos: 90
								},
								{
									tema: 'Variables Polimorficas',
									aciertos: 40,
									desaciertos: 10
								}
							]
						}
					]
				},
				{
					codigo: '5678',
					nombre: 'IPOO 51',
					unidades: [
						{
							nombre: 'Polimorfismo',
							temas: [
								{
									tema: 'Genericidad',
									aciertos: 40,
									desaciertos: 30
								},
								{
									tema: 'Sobrecarga',
									aciertos: 40,
									desaciertos: 37
								},
								{
									tema: 'Variables Polimorficas',
									aciertos: 40,
									desaciertos: 10
								}
							]
						}
					]
				}
			],
			unidad: '',
			unidadGrupo: '',
			info: [
				{
					codigoGrupo: '',
					unidad: 'Polimorfismo',
					temas: [
						{
							tema: 'Genericidad',
							aciertos: 40,
							desaciertos: 30
						},
						{
							tema: 'Sobrecarga',
							aciertos: 40,
							desaciertos: 50
						},
						{
							tema: 'Variables Polimorficas',
							aciertos: 40,
							desaciertos: 10
						}
					]
				}
			],
			respuesta: ''
		}),
		mixins: [misMixins],
		methods: {
			seleccionarUnidad() {
				const is = element => element === this.unidad.componente
				var i = this.info.findIndex(is)
				return JSON.stringify(this.info[i])
			}
		},
		mounted() {},
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

								<span class="headline font-weight-bold">Reportes</span>
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

								<v-toolbar-title v-if="tipo==='globales'">Global</v-toolbar-title>
								<v-toolbar-title v-if="tipo==='grupales'">Por grupo</v-toolbar-title>
								<v-spacer></v-spacer>
								<v-select v-if="tipo==='globales'"
								          v-model="unidad"
								          :items="info"
								          item-text="unidad"
								          return-object
								          label="Standard"></v-select>

							</v-app-bar>

							<v-sheet id="scrolling-techniques-7"
							         class="mt-12  overflow-y-auto"
							         max-height="calc(100% - 48px)">
								<v-container>
									<v-row v-if="tipo==='grupales'">
										<v-col cols="12">
											<v-expansion-panels elevation="0">
												<v-expansion-panel v-for="(g, i) in grupos" :key="i">
													<v-expansion-panel-header><span>{{g.codigo}}  - {{g.nombre}}</span></v-expansion-panel-header>
													<v-expansion-panel-content >
														<v-row>
															<v-expansion-panels>
																<v-expansion-panel v-for="(u, i) in g.unidades" :key="i">
																	<v-expansion-panel-header><span>{{u.nombre}}</span></v-expansion-panel-header>
																	<v-expansion-panel-content>
																		<v-col cols="12" v-for="(t, j) in u.temas" :key="j">
																			<v-card class="ma-2 py-2 px-5">
																				<v-card-title class="title font-weight-light mb-2">{{t.tema}}</v-card-title>
																				<v-divider class="my-1"></v-divider>
																				<v-progress-linear active
																				                   background-opacity="0.4"
																				                   :buffer-value="100"
																				                   height="25px"
																				                   class="my-2"
																				                   dark
																				                   rounded
																				                   top
																				                   :value="t.desaciertos"
																				                   color="orange">
																					<template><strong>{{ Math.ceil(t.desaciertos) }}%</strong></template>
																				</v-progress-linear>
																				<v-divider class="my-2"></v-divider>
																			</v-card>
																		</v-col>
																	</v-expansion-panel-content>
																</v-expansion-panel>
															</v-expansion-panels>
														</v-row>
													</v-expansion-panel-content>

												</v-expansion-panel>
											</v-expansion-panels>
											<!-- <v-list dense class="grow ">

															<v-list-item v-for="(g, i) in grupos" :key="i">

																<v-list-item-content>
																	<v-list-item-title><span>{{g.nombre}}</span></v-list-item-title>
																	<v-list-item-subtitle><span>Código grupo: {{g.codigo}}</span></v-list-item-subtitle>

																</v-list-item-content>
																<v-list-item-action>

																</v-list-item-action>

															</v-list-item>

														</v-list> -->
										</v-col>
									</v-row>
									<!-- <reportesUnidad :datos="JSON.stringify(unidad)"> </reportesUnidad> -->
									<v-row v-if="tipo==='globales'">

										<v-col v-for="(tema, i) in unidad.temas" :key="i" cols="12">
											<v-card class="ma-2 py-2 px-5">
												<v-card-title class="title font-weight-light mb-2">{{tema.tema}}</v-card-title>
												<v-divider class="my-1"></v-divider>
												<v-progress-linear active
												                   background-opacity="0.4"
												                   :buffer-value="100"
												                   height="25px"
												                   class="my-2"
												                   dark
												                   rounded
												                   top
												                   :value="tema.desaciertos"
												                   color="orange">
													<template><strong>{{ Math.ceil(tema.desaciertos) }}%</strong></template>
												</v-progress-linear>
												<v-divider class="my-2"></v-divider>
											</v-card>
										</v-col>
									</v-row>
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
