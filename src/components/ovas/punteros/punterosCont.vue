<script>

	import { misMixins } from '@/mixins/mixins.js'

	import IntroduccionPunteros from '@/components/ovas/punteros/introduccionPunteros.vue'
	import punteros from '@/components/ovas/punteros/punteros.vue'
	import referencias from '@/components/ovas/punteros/referencias.vue'
	import pasoReferencia from '@/components/ovas/punteros/pasoporreferencia.vue'
	import matrices from '@/components/ovas/punteros/matrices.vue'
	import arreglos from '@/components/ovas/punteros/arreglos.vue'
	import restringido from '@/components/views/accesoRestringido.vue'
	//import VistaEvaluacion from '@/components/actividades/evaluacion/vistaEvaluacion.vue'
	import Juez from '@/components/views/juez.vue'

	export default {
		name: 'PunterosCont',
		components: {
			IntroduccionPunteros,
			punteros,
			pasoReferencia,
			referencias,
			arreglos,
			matrices,
			Juez,
			restringido
			//	VistaEvaluacion
		},
		mixins: [misMixins],
		data() {
			return {
				datosUnidad: {},
				listaActividades: {},
				fixed: true,
				dim: [],
				color: 'red',
				temaActual: 0,
				aprobado: false,
				componente: 'IntroduccionPunteros',
				idAvance: '',
				temas: [
					{ titulo: 'Punteros', componente: 'punteros', aprobado: false, avance: '' },
					{ titulo: 'Referencias', componente: 'referencias', aprobado: false, avance: '' },
					{ titulo: 'Paso por referencia', componente: 'pasoReferencia', aprobado: false, avance: '' },
					{ titulo: 'Arreglos dinámicos', componente: 'arreglos', aprobado: false, avance: '' },
					{ titulo: 'Matrices dinámicas', componente: 'matrices', aprobado: false, avance: '' }
				]
			}
		},

		methods: {
			obtenerAvances(id) {
				const ruta = '/estudiante/listarAvances/tema/' + id

				this.axios({
					method: 'get',
					url: ruta
				})
					.then(response => {
						localStorage.setItem(`avances`, JSON.stringify(response.data))
					})
					.catch(e => {
						this.isError = true
						this.error = `${e}`
					})
			},
			actualizarTema(tema, i) {
				this.temaActual = i
				this.componente = tema.componente
				this.color = 'red'
				this.aprobado = tema.aprobado
				this.idAvance = tema.avance
			},
			esAprobado() {
				var avances = JSON.parse(localStorage.getItem(`avances`))
				for (var i = 0; i < this.temas.length; i++) {
					var encontrado = false
					for (var j = 0; j < avances.length && encontrado === false; j++) {
						if (avances[j].id_tema.componente === this.temas[i].componente) {
							encontrado = true
							this.temas[i].avance = avances[j]._id
							if (avances[j].aprobado === true) {
								this.temas[i].aprobado = true
							} else {
								this.temas[i].aprobado = false
							}
						}
					}
				}
			},
			obtenerActividades(id_unidad) {
				const ruta = '/actividades/obtenerPorUnidad/' + id_unidad //obtego las actividades que pertenecen a esa unidad
				var self = this
				this.axios({ method: 'get', url: ruta })
					.then(response => {
						//	eslint-disable-next-line no-console
						//	console.log(response.data)
						self.listaActividades = response.data

						return true
						//	eslint-disable-next-line no-console
						//	console.log('Lista:')
						//	eslint-disable-next-line no-console
					})
					.catch(e => {
						//	eslint-disable-next-line no-console
						console.log(`Error:  ${e}`)
					})
			}
		},
		created() {
			this.dim = this.obtenerDimensiones()
			this.datosUnidad = JSON.parse(localStorage.getItem(`datospunterosCont`))
			this.obtenerActividades(this.datosUnidad._id)
			this.obtenerAvances(this.obtenerDatos().id)
			this.esAprobado()
		}
	}

</script>

<template >

	<v-row justify="center">
		<v-col v-if="this.obtenerDatos().tipo === 'estudiante'" cols="12" class="pa-0">
			<v-card elevation="2" :width="dim[1]" :height="dim[0]" class="pb-4 px-4 mb-1 mt-9 mx-7 rounded-lg">
				<v-row justify="center">
					<v-col class="pa-0 " cols="11">
						<v-card dark color="red" elevation="5" class="card_cabecera rounded-lg d-flex  align-center">
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
						        class="overflow-hidden elevation-0">

							<v-app-bar dense absolute
							           color="white"
							           class="elevation-0"
							           scroll-target="#scrolling-techniques-p">

								<v-toolbar-title class="headline font-weight-bold"
								                 v-if="(componente !== 'Juez') && (componente !== 'IntroduccionPunteros')"><span :class="`headline font-weight-light grey--text`">{{temas[temaActual].titulo}}</span></v-toolbar-title>

								<v-toolbar-title class="headline font-weight-light" v-if="(componente === 'Juez')">Actividad Práctica</v-toolbar-title>

								<v-toolbar-title v-if="(componente === 'IntroduccionPunteros')"><span :class="`headline font-weight-light grey--text`">Introducción</span></v-toolbar-title>

							</v-app-bar>

							<v-sheet id="scrolling-techniques-p"
							         class="mt-12 pa-2   overflow-y-auto"
							         max-height="calc(100% - 48px)">
								<component :color="color"
								           :listaPreguntas="listaActividades"
								           :unidad="datosUnidad"
								           :aprobado="aprobado"
								           :avance="idAvance"
								           nombre="juezUni"
								           :is="componente"></component>
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
									<v-list-item @click="componente = 'IntroduccionPunteros'">
										<v-list-item-content>
											<v-list-item-subtitle>Introducción</v-list-item-subtitle>
										</v-list-item-content>
									</v-list-item>
									<v-list-item v-for="(tema, i) in temas"
									             :key="i"
									             @click="actualizarTema(tema, i)">
										<v-list-item-content>
											<v-list-item-subtitle>{{tema.titulo}}</v-list-item-subtitle>
										</v-list-item-content>
										<v-list-item-icon>
											<v-icon v-if="(tema.aprobado === false)" color="error lighten-1">mdi-cancel</v-icon>
											<v-icon v-else color="green lighten-1">mdi-checkbox-marked-circle</v-icon>
										</v-list-item-icon>
									</v-list-item>
									<v-divider></v-divider>

									<v-list-item @click="componente = 'Juez'">
										<v-list-item-content>
											<v-list-item-subtitle>Actividad práctica</v-list-item-subtitle>
										</v-list-item-content>
									</v-list-item>

								</v-list-item-group>
							</v-navigation-drawer>
						</v-card>
					</v-col>
				</v-row>
			</v-card>

		</v-col>

		<v-col v-else>
			<restringido></restringido>
		</v-col>
	</v-row>

</template>

<style>



</style>
