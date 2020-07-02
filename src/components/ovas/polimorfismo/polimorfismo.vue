<script>

	import { misMixins } from '@/mixins/mixins.js'

	import Sobrecarga from '@/components/ovas/polimorfismo/sobrecarga.vue'
	import FuncionesVirtuales from '@/components/ovas/polimorfismo/funcionesVirtuales.vue'
	import IntroduccionP from '@/components/ovas/polimorfismo/introduccion.vue'
	import Herencia from '@/components/ovas/polimorfismo/herencia.vue'
	import Sobreescritura from '@/components/ovas/polimorfismo/sobrescritura.vue'
	import VistaEvaluacion from '@/components/actividades/evaluacion/vistaEvaluacion.vue'
	//	import menuPolimorfismo from '@/components/ovas/polimorfismo/menuPolimorfismo.vue'
	export default {
		name: 'polimorfismo',
		components: {
			Sobrecarga,
			FuncionesVirtuales,
			Herencia,
			Sobreescritura,
			VistaEvaluacion,
			IntroduccionP
			//	menuPolimorfismo
		},
		data: () => ({
			unidades: '',
			fixed: true,
			ed_nom: true,
			ed_correo: true,
			ed_cod: true,
			isError: false,
			error: '',
			mensaje: '',
			isUpdate: false,
			valid: true,
			color: 'orange',
			usuario: [],
			componente: 'IntroduccionP',
			dim: [],
			temas: [
				{ titulo: 'Introducción', contenido: 'IntroduccionP', color: 'orange' },
				//	{ titulo: 'Conceptos', contenido: 'Conceptos' },
				{ titulo: 'Herencia', contenido: 'Herencia', color: 'purple' },
				{ titulo: 'Funciones Virtuales', contenido: 'FuncionesVirtuales', color: 'pink' },
				{ titulo: 'Sobrecarga', contenido: 'Sobrecarga', color: 'cyan' },
				{ titulo: 'Sobrescritura', contenido: 'Sobreescritura', color: 'amber' }
			],
			codigoRules: [v => (v && v.length == 7) || 'El código debe ser de 7 digitos'],
			basicRules: [v => !!v || 'Campo requerido'],
			emailRules: [v => !!v || 'El correo es requerido', v => /.+@.+\..+/.test(v) || 'El correo ingresado no es valido']
		}),
		mixins: [misMixins],

		methods: {},
		created() {
			this.dim = this.obtenerDimensiones()
			this.unidades = this.listaUnidades()
			//	this.buscarDatos()
		}
	}

</script>

<template>

	<v-row justify="center">
		<v-col cols="12" class="pa-0">
			<v-card elevation="2" :width="dim[1]" :height="dim[0]" class="pb-4 px-4 mb-7 mt-9 mx-7 rounded-lg">
				<v-row justify="center">
					<v-col class="pa-0 " cols="11">
						<v-card dark color="cyan" elevation="4" class="card_cabecera rounded-lg d-flex  align-center">
							<v-card-title class="align-center">
								<span class="headline font-weight-bold">Polimorfismo</span>
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
							           scroll-target="#scrolling-techniques-7">

								<v-toolbar-title></v-toolbar-title>

							</v-app-bar>
							<v-sheet id="scrolling-techniques-7"
							         class="mt-12  overflow-y-auto"
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
								<v-list-item-group color="white" shaped sub-group>
									<v-list-item v-for="(tema, i) in temas"
									             :key="i"
									             @click="(componente = tema.contenido) && (color = tema.color)">
										<v-list-item-content>
											<v-list-item-subtitle>{{tema.titulo}}</v-list-item-subtitle>
										</v-list-item-content>
									</v-list-item>
									<v-divider></v-divider>

									<v-list-item @click="componente = 'evaluacionP'">
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

	#editar_perfil {
		-webkit-border-radius: 12px;
		-moz-border-radius: 12px;
		border-radius: 12px;
	}
	.card_cabecera {
		position: relative;
		align-self: center;
		min-height: 50px;
		top: -20px;
		z-index: 1;
		color: '#4CBAC4';
	}

</style>
