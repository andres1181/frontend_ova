<script>

	import { misMixins } from '@/mixins/mixins.js'

	import Conceptos from '@/components/ovas/polimorfismo/conceptos.vue'
	import Genericidad from '@/components/ovas/polimorfismo/genericidad.vue'
	import Introduccion from '@/components/ovas/polimorfismo/introduccion.vue'
	import Polimorficas from '@/components/ovas/polimorfismo/polimorficas.vue'
	import Sobrecarga from '@/components/ovas/polimorfismo/sobrecarga.vue'
	import Sobreescritura from '@/components/ovas/polimorfismo/sobrescritura.vue'
	import vistaEvaluacion from '@/components/actividades/evaluacion/vistaEvaluacion.vue'

	export default {
		name: 'Polimorfismo',
		components: {
			Conceptos,
			Genericidad,
			Introduccion,
			Polimorficas,
			Sobrecarga,
			Sobreescritura,
			vistaEvaluacion
		},
		data: () => ({
			drawer: true,
			e1: 1,
			steps: 8,
			tab: null,
			Evaluacion: vistaEvaluacion,
			avance: [],
			lista: [],
			contenido: 'Introduccion',
			iniciarEvaluacion: false,
			temas: [
				{ _id: '1', titulo: 'Introducción', terminado: false, contenido: 'Introduccion', unidad: 'polimorfismo' },
				{ _id: '2', titulo: 'Conceptos', terminado: false, contenido: 'Conceptos', unidad: 'polimorfismo' },
				{ _id: '3', titulo: 'Sobrecarga', terminado: false, contenido: 'Sobrecarga', unidad: 'polimorfismo' },
				{ _id: '4', titulo: 'Sobrescritura', terminado: false, contenido: 'Sobreescritura', unidad: 'polimorfismo' },
				{ _id: '5', titulo: 'Genericidad', terminado: false, contenido: 'Genericidad', unidad: 'polimorfismo' },
				{
					_id: '6',
					titulo: 'Variables polimorficas',
					terminado: false,
					contenido: 'Polimorficas',
					unidad: 'polimorfismo'
				}
			]
		}),
		watch: {
			length(val) {
				this.tab = val - 1
			}
		},
		mixins: [misMixins],
		methods: {
			evaluacion() {
				this.contenido = 'vistaEvaluacion'
			},
			buscarAvance() {
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
							if (this.lista[i].id_estudiante == id_ && this.lista[i].id_tema.id_unidad == id_unidad) {
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
			//this.buscarAvance()
			// eslint-disable-next-line no-console
			//console.log(this.steps)
			// eslint-disable-next-line no-console
			//console.log(this.temas[0].contenido)
		}
	}

</script>

<template >

	<v-card outlined flat>
		<!-- <v-toolbar color="color-2" dark fixed flat dense class="px-4">

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
					</v-tabs-items> -->
		<v-row>
			<v-col cols="3" sm="3">

					<v-navigation-drawer v-model="drawer"
					                     color="success"
															 fixed
															 class="fijarLeccion"
					                     :right="right"
					                     :permanent="true"
					                     absolute
					                     dark>
						<v-list dense nav
						        class="py-0">
							<v-list-item two-line :class="miniVariant && 'px-0'">
								<!--   <v-list-item-avatar>
								 <img src="https://randomuser.me/api/portraits/men/81.jpg">
							 </v-list-item-avatar> -->

								<v-list-item-content class="text-aling-center">
									<v-list-item-title>Polimorfismo</v-list-item-title>
									<v-list-item-subtitle>Subtext</v-list-item-subtitle>
								</v-list-item-content>
							</v-list-item>

							<v-divider></v-divider>

							<v-list-item v-for="(tema, i) in temas"
							             :key="i"
							             @click="contenido=tema.contenido">
								<!-- <v-list-item-icon>
								 <v-icon>{{ item.icon }}</v-icon>
							 </v-list-item-icon> -->

								<v-list-item-content>
									<v-list-item-title>{{tema.titulo}}</v-list-item-title>
								</v-list-item-content>
							</v-list-item>
						</v-list>

						<template v-slot:append>
						 <div class="pa-2">
						 <v-btn outlined  depressed   block>Sopa de letras</v-btn>
					 </div>
					 <div class="pa-2">
						 <v-btn outlined dense  block @click="evaluacion" > Evaluación</v-btn>
					 </div>
				 </template>
					</v-navigation-drawer>

				<!-- <v-card class="mx-auto"
					        max-width="100%"
					        outlined> -->
				<!-- ggg -->
				<!-- <v-row align="center">
							<v-col v-for="(tema, i) in temas" :key="i" class="text-left" cols="6" sm="6">
								<div class="my-1" 	max-width="100%" width="100%">
									<v-btn  outlined  large @click="contenido=tema.titulo" max-width="100%" width="100%"> <h1>Lección {{i+1}}: </h1>{{tema.titulo}}</v-btn>
								</div>
							</v-col>
						</v-row> -->
				<!-- ggg -->
				<!-- <ul id="listaLecciones">
							<li v-for="(tema, i) in temas" :key="i" class="text-left">
								<v-btn class="my-1" outlined large @click="contenido=tema.contenido" max-width="100%" width="100%" color="success"> {{tema.titulo}}</v-btn>
							</li>
						</ul>
						<v-btn class="my-1" outlined large @click="evaluacion" max-width="100%" width="100%" color="success"> Evaluación</v-btn>
					</v-card> -->
			</v-col>
			<v-col cols="9" sm="9">
				<v-card class="mx-auto"
				        max-width="800"
				        outlined>
					<v-container fluid>

						<component :is="contenido" unidad="polimorfismo"></component>

					</v-container>

				</v-card>
			</v-col>
		</v-row>
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
	#listaLecciones {
		list-style: none;
	}

</style>
