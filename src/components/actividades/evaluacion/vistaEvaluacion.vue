<script>
import { misMixins } from '@/mixins/mixins.js'

	import cronometro from '@/components/views/cronometro.vue'
	import verdaderoFalso from '@/components/actividades/evaluacion/examen/verdaderoFalso.vue'
	import opcionMultiple from '@/components/actividades/evaluacion/examen/opcionMultiple.vue'
	import arrastrarSoltar from '@/components/actividades/evaluacion/examen/arrastrarysoltar.vue'
	import parejasDefinicion from '@/components/actividades/evaluacion/examen/parejasD.vue'
	import parejasCodigo from '@/components/actividades/evaluacion/examen/parejasC.vue'

	export default {
		name: 'Evaluacion',
		props: {
			unidad: {//para saber a que unidad pertenecen las preguntas
				type: String,
				require: true
			}

		},
		components: {
			cronometro,
			verdaderoFalso,
			opcionMultiple,
			arrastrarSoltar,
			parejasDefinicion,
			parejasCodigo
		},
		data: () => ({

			componente: '',
			iniciarCronometro: false,
			terminar: false,
			cont: 0,
			datos: '',
			resultados: [],
			correctas: 0,
			incorrectas: 0,
			vistaResultados: false,
			inicio: true,
			preguntas: [
				{
					id: '1234564',
					tipo: 'opcionMultiple',
					enunciado: 'Este deberia ser el enunciado de opcion multiple',
					unidad: 'polimorfismo',
					opciones: [
						{
							respuesta: 'Uno',
							correcta: true
						},
						{
							respuesta: 'Dos',
							correcta: false
						},
						{
							respuesta: 'Tres',
							correcta: false
						},
						{
							respuesta: 'Cuatro',
							correcta: false
						}
					]
				},
				{
					id: '7687678',
					tipo: 'arrastrarSoltar',
					enunciado: 'Este deberia ser el enunciado de Arrastrar y soltar',
					opciones: [
						{
							texto: 'Uno',
							posicion: 1
						},
						{
							texto: 'Dos',
							posicion: 2
						},
						{
							texto: 'Tres',
							posicion: 3
						},
						{
							texto: 'Cuatro',
							posicion: 4
						}
					]
				},
				{
					id: '897987',
					tipo: 'parejasDefinicion',
					enunciado: 'Este deberia ser el enunciado de Arrastrar y soltar',
					opciones: [
						{
							concepto: 'Uno',
							definicion: 'Estes es el numero Uno'
						},
						{
							concepto: 'Dos',
							definicion: 'Estes es el numero Dos'
						},
						{
							concepto: 'Tres',
							definicion: 'Estes es el numero Tres'
						},
						{
							concepto: 'Cuatro',
							definicion: 'Estes es el numero Cuatro'
						}
					]
				},
				{
					id: '8787566353',
					tipo: 'parejasCodigo',
					enunciado: 'Este deberia ser el enunciado de Parejas-Codigo',
					opciones: [
						{
							concepto: 'Uno',
							codigo: 'Estes es el codigo Uno'
						},
						{
							concepto: 'Dos',
							codigo: 'Estes es el codigo Dos'
						},
						{
							concepto: 'Tres',
							codigo: 'Estes es el codigo Tres'
						},
						{
							concepto: 'Cuatro',
							codigo: 'Estes es el codigo Cuatro'
						}
					]
				},
				{
					id: '3453',
					tipo: 'verdaderoFalso',
					enunciado: 'Este deberia ser el enunciado de verdadero Falso',
					opciones: [
						{
							respuesta: 'true'
						}
					]
				}
			]
		}),
		mixins: [misMixins],
		methods: {
			solicitarPreguntas() {//solitar datos al backend, a partir de la propiedad unidad

			},
			/*	enviarResultado(info) {
															//this.informacion = info
															// eslint-disable-next-line no-console
															console.log('La respuesta es: ' + info)
														},*/
			/*	calificar(array) {
												let tam = array.length
												var completo = false
												var correctas = 0
												for (var i = 0; i < array.length; i++) {
													if (array[i].result === true) {
														correctas = correctas + 1
													}
												}
												if (correctas == tam) {
													completo = true
												}

												return completo
											},*/
			terminar_E(e) {
				// eslint-disable-next-line no-console
				console.log(e)
				this.terminar = e
				// eslint-disable-next-line no-console
				console.log(this.terminar)
				this.inicio = false
				this.vistaResultados = true
			},
			iniciarResultados() {
				var tam = this.preguntas.length
				for (var i = 0; i < tam; i++) {
					this.resultados.push({ id: this.preguntas[i].id, result: false })
				}
				this.correctas = 0
				this.incorrectas = tam
			},

			iniciar() {
				//Inicia el cuestionario
				this.componente = this.preguntas[this.cont].tipo
				this.datos = JSON.stringify(this.preguntas[this.cont])
				this.iniciarCronometro = true
				this.vistaResultados = false
				this.inicio = false
				this.cont = 0
			},
			nuevoIntento() {
				this.cont = 0
				this.vistaResultados = false
				this.inicio = true
				this.componente = ''
				this.resultados = []
				this.iniciarResultados()
				//this.correctas = 0
				//this.incorrectas = 0
				this.terminar = false
				this.iniciarCronometro = false
			},
			enviarResultado(info) {
				//this.resultados.push(info)
				var i = this.resultados.findIndex(element => element.id === info.id)
				// eslint-disable-next-line no-console
				//console.log(i)
				this.resultados[i].result = info.result
				// eslint-disable-next-line no-console
				//console.log(info.result)

				this.cont = this.cont + 1
				if (this.cont === this.preguntas.length) {
					this.terminar = true
					this.vistaResultados = true
					this.inicio = false
				}
				this.informacion = this.cont
				if (this.cont < this.preguntas.length) {
					this.componente = this.preguntas[this.cont].tipo
					this.datos = JSON.stringify(this.preguntas[this.cont])
				}

				if (info.result === true) {
					this.correctas = this.correctas + 1
					this.incorrectas = this.incorrectas - 1
				}
			}

			/*
										if(inventario.find(element => element.nombre === 'bananas')==null){
							  console.log('No existe imbecil');
							}else {
							  console.log(inventario.find(element => element.nombre === 'bananas'));
							}
										*/
		},
		created() {
			this.iniciarResultados()
		}
	}

</script>

<template>

	<div>
		<div v-if="(!vistaResultados) && (!inicio) && (cont < preguntas.length)">
			<cronometro :iniciar="iniciarCronometro" :duraccion="20" @tiempoAgotado="terminar_E"> </cronometro>
			<component :is="componente" :datos="datos" @click="enviarResultado"></component>
		</div>

		<!-- <verdaderoFalso :enunciado="Enunciado" @click="enviarResultado"></verdaderoFalso>
												<opcionMultiple :datos="multiple" @click="enviarResultado"></opcionMultiple>-->
		<div v-show="(!vistaResultados) && (inicio)" class="" id="inicio">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
			Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
			dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			<v-btn @click="iniciar">
				Iniciar
			</v-btn>
		</div>
		<div v-if="(terminar) && (!inicio) && (vistaResultados)" class="" id="resultados">
			<h4>Resultados</h4>
			<v-row align="center" class="ma-1">
				<v-col class="text-left" cols="6" sm="6">
					<v-alert dense text type="success">
						<strong>Respuestas correctas: </strong> {{correctas}}
					</v-alert>

				</v-col>
				<v-col class="text-left" cols="6" sm="6">
					<v-alert dense text
					         icon="mdi-cancel"
					         type="error">
						<strong>Respuestas incorrectas: </strong> {{incorrectas}}
					</v-alert>

				</v-col>
			</v-row>
			<v-list two-line subheader>

				<v-list-item v-for="(item, index) in preguntas"
				             :key="item.id"
				             @click="">

					<v-list-item-content>
						<v-list-item-title v-text="'Pregunta ' + (index+1) "></v-list-item-title>
						<v-list-item-subtitle v-text="item.enunciado"></v-list-item-subtitle>
					</v-list-item-content>

					<v-list-item-action>
						<v-btn icon>

							<v-icon v-if="(!resultados[index].result)" color="error lighten-1">mdi-cancel</v-icon>
							<v-icon v-if="(resultados[index].result)" color="green lighten-1">mdi-checkbox-marked-circle</v-icon>
						</v-btn>
					</v-list-item-action>
				</v-list-item>
			</v-list>
			<div class="text-center ma-2">
				<v-row align="center" justify="center">
					<v-col class="text-center" cols="6" sm="6">
						<div>
							<v-btn block large dark @click="nuevoIntento">
								<v-icon></v-icon> Nuevo intento
							</v-btn>
						</div>
					</v-col>
					<!-- </v-row>
						<v-row align="center" justify="center"> -->
					<v-col class="text-center" cols="6" sm="6">
						<div>
							<v-btn block large outlined @click="">
								<v-icon></v-icon> Salir
							</v-btn>
						</div>
					</v-col>
				</v-row>
			</div>
		</div>
	</div>

</template>

<style>

</style>
