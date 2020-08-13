<script>

	import { misMixins } from '@/mixins/mixins.js'

	import sobrecarga from '@/components/ovas/polimorfismo/sobrecarga.vue'
	import funcionesVirtuales from '@/components/ovas/polimorfismo/funcionesVirtuales.vue'
	import IntroduccionP from '@/components/ovas/polimorfismo/introduccion.vue'
	import herencia from '@/components/ovas/polimorfismo/herencia.vue'
	import sobreescritura from '@/components/ovas/polimorfismo/sobrescritura.vue'
	import restringido from '@/components/views/accesoRestringido.vue'
	import Juez from '@/components/views/juez.vue'
	export default {
		name: 'polimorfismo',
		components: {
			sobrecarga,
			funcionesVirtuales,
			herencia,
			sobreescritura,
			restringido,
			IntroduccionP,
			Juez
		},
		data: () => ({
			datosUnidad: {},
			listaActividades: {},
			fixed: true,
			color: 'red',
			componente: 'IntroduccionP',
			dim: [],
			temaActual: 0,
			aprobado: false,
			idAvance: '',
			temas: [
				{ titulo: 'Herencia', componente: 'herencia', aprobado: false, avance: '' },
				{ titulo: 'Funciones Virtuales', componente: 'funcionesVirtuales', aprobado: false, avance: '' },
				{ titulo: 'Sobreescritura', componente: 'sobreescritura', aprobado: false, avance: '' },
				{ titulo: 'Sobrecarga', componente: 'sobrecarga', aprobado: false, avance: '' }

			],

		}),
		mixins: [misMixins],

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
			actualizarTema(tema, i) {
				this.temaActual = i
				this.componente = tema.componente
				this.color = 'red'
				this.aprobado = tema.aprobado
				this.idAvance = tema.avance
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
			this.datosUnidad = JSON.parse(localStorage.getItem(`datospolimorfismo`))
			this.obtenerActividades(this.datosUnidad._id)
			this.obtenerAvances(this.obtenerDatos().id)
			this.esAprobado()
		},
		mounted: function() {
			window.addEventListener('scroll', this.scrollListener)
		},
		beforeDestroy: function() {
			window.removeEventListener('scroll', this.scrollListener)
		}
	}

</script>

<template>

	<v-row justify="center">
		<v-col cols="12" class="pa-0" v-if="this.obtenerDatos().tipo === 'estudiante'">
			<v-card elevation="2" :width="dim[1]" :height="dim[0]" class="pb-4 px-4 mb-1 mt-6 mx-7 rounded-lg">
				<v-row justify="center">
					<v-col class="pa-0 " cols="11">
						<v-card dark color="red" elevation="6" class="card_cabecera d-flex  align-center">
							<v-card-title class="align-center">
								<span class="headline font-weight-bold">POLIMORFISMO</span>
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
							           class="elevation-0"
							           color="white"
							           scroll-target="#scrolling-techniques-p">
								<!-- <v-btn v-if="temaActual!== 0" icon
										       color="amber"
										       @click="(componente = temas[temaActual - 1].componente) && (color = 'red') && (temaActual = temaActual - 1)">
											<v-icon>mdi-arrow-left-bold</v-icon>
										</v-btn> -->

								<v-toolbar-title v-if="(componente !== 'Juez') && (componente !== 'IntroduccionP')"><span :class="`headline font-weight-light grey--text`">{{temas[temaActual].titulo}}</span></v-toolbar-title>

								<v-toolbar-title v-if="(componente === 'Juez')"><span :class="`headline font-weight-light grey--text`">Actividad Práctica </span></v-toolbar-title>
								<v-toolbar-title v-if="(componente === 'IntroduccionP')"><span :class="`headline font-weight-light grey--text`">Introducción</span></v-toolbar-title>

								<!-- <v-btn v-if="temaActual!== 4" icon
										       color="amber"
										       @click="(componente = temas[temaActual + 1].componente) && (color = temas[temaActual + 1].color) && (temaActual = temaActual + 1)">

											<v-icon>mdi-arrow-right-bold</v-icon>
										</v-btn> -->
							</v-app-bar>
							<!-- <v-bottom-navigation height="40" scroll-target="#scrolling-techniques-p" absolute horizontal> -->

							<!-- </v-bottom-navigation> -->
							<v-sheet id="scrolling-techniques-p"
							         class="mt-12 pa-2  overflow-y-auto"
							         max-height="calc(100% - 48px)">
								<component :color="color"
								           :listaPreguntas="listaActividades"
								           :unidad="datosUnidad"
								           :aprobado="aprobado"
								           :avance="idAvance"
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

									<v-list-item @click="componente = 'IntroduccionP'">
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
											<v-list-item-subtitle>Reto</v-list-item-subtitle>
										</v-list-item-content>
									</v-list-item>

								</v-list-item-group>
							</v-navigation-drawer>
						</v-card>
					</v-col>
				</v-row>
			</v-card>

		</v-col>

		<v-col v-else cols="12">
			<restringido></restringido>
		</v-col>
	</v-row>

</template>

<style>



</style>
