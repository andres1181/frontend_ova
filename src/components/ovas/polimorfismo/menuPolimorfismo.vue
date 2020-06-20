<script>

	import { misMixins } from '@/mixins/mixins.js'

	import vistaEvaluacion from '@/components/actividades/evaluacion/vistaEvaluacion.vue'

	export default {
		name: 'menuPolimorfismo',
		components: {},
		data: () => ({
			drawer: true,
			e1: 1,
			steps: 8,
			tab: null,
			Evaluacion: vistaEvaluacion,
			avance: [],
			lista: [],
			model: null,
			active: true,
			contenido: 'Introduccion',
			iniciarEvaluacion: false,
			temas: [
				{ titulo: 'Introducción', contenido: 'introduccionP' },
				{ titulo: 'Conceptos', contenido: 'conceptos' },
				{ titulo: 'Sobrecarga', contenido: 'sobrecarga' },
				{ titulo: 'Sobrescritura', contenido: 'sobreescritura' },
				{ titulo: 'Genericidad', contenido: 'genericidad' },
				{ titulo: 'Variables polimorficas', contenido: 'polimorficas' }
			]
		}),
		watch: {
			length(val) {
				this.tab = val - 1
			}
		},
		mixins: [misMixins],

		created() {}
	}

</script>

<template >

	<!-- <v-sheet class="mx-auto"
		         elevation="1"
		         max-width="90%">
			<v-slide-group v-model="model"
			               class="pa-4"
			               center-active
			               mandatory
			               show-arrows>
				<v-slide-item v-for="(tema, i) in temas"
				              :key="i">
					<v-card flat :color="active ? 'orange' : 'grey lighten-1'"
					        class="ma-4"
					        height="100"
					        width="200"
					        @click="$router.push({ name: `${tema.contenido}` }).catch(err => {})">
						<div>
							<v-card-title class="headline"
							              v-text="`TEMA  ${i+1}`"></v-card-title>

							<v-card-subtitle v-text="tema.titulo"></v-card-subtitle>
						</div>

					</v-card>
				</v-slide-item>
			</v-slide-group>
		</v-sheet> -->
	<!-- <v-navigation-drawer max-height="90%"  fixed permanent floating stateless > -->


	<v-list-item-group color="white"  shaped
            sub-group>
		<v-list-item v-for="(tema, i) in temas"
		             :key="i"
		             @click="$router.push({ name: `${tema.contenido}` })">
			<v-list-item-content>
				<v-list-item-subtitle>{{tema.titulo}}</v-list-item-subtitle>
			</v-list-item-content>
		</v-list-item>
		<v-divider></v-divider>

		<v-list-item @click="$router.push({ path: 'evaluacionP' })">
			<v-list-item-content>
				<v-list-item-title>Sopa de letras</v-list-item-title>
			</v-list-item-content>
		</v-list-item>
		<v-list-item @click="$router.push({ path: 'evaluacionP' })">
			<v-list-item-content>
				<v-list-item-title>Evaluación</v-list-item-title>
			</v-list-item-content>
		</v-list-item>
		<!-- <template v-slot:append>
													 <div class="pa-2">
													 <v-btn outlined  depressed   block>Sopa de letras</v-btn>
												 </div>
												 <div class="pa-2">
													 <v-btn outlined dense  block @click="" > Evaluación</v-btn>
												 </div>
					</template> -->
	</v-list-item-group>
	<!-- </v-navigation-drawer> -->

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
