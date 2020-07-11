<script>

	import { misMixins } from '@/mixins/mixins.js'

	import cronometro from '@/components/views/cronometro.vue'
	import falsoVerdadero from '@/components/actividades/evaluacion/examen/falsoVerdaderoE.vue'
	import multiple from '@/components/actividades/evaluacion/examen/multipleE.vue'
	import ordenar from '@/components/actividades/evaluacion/examen/ordenarE.vue'
	import analizarCodigo from '@/components/actividades/evaluacion/examen/analizarCodigoE.vue'
	import analizarProblema from '@/components/actividades/evaluacion/examen/analizarProblemaE.vue'

	export default {
		name: 'Evaluacion',
		props: {
			unidad: {
				//para saber a que unidad pertenecen las preguntas
				type: String,
				require: true
			}
		},
		components: {
			cronometro,
			falsoVerdadero,
			multiple,
			ordenar,
			analizarCodigo,
			analizarProblema
		},
		data: () => ({
			fallos: [],
			iniciarCronometro: false,
			terminar: false,
			cont: 0,
			datos: [],
			resultados: [],
			correctas: 0,
			incorrectas: 5,
			vistaResultados: false,
			inicio: true,
			lista: null,
			preguntas: []
		}),
		mixins: [misMixins],
		methods: {
			actualizarFallos() {
				/*
				fallos: [
				{
				tema: ''
				grupo: ''
				fallos: 0
			}
			]
				*/
			},
			solicitarPreguntas() {
				const ruta = '/actividades/obtenerPorUnidad/' + this.unidad

				this.axios({ method: 'get', url: ruta })
					.then(response => {
						//	eslint-disable-next-line no-console
					//	console.log(response.data)
						this.lista = response.data
						//	eslint-disable-next-line no-console
					//	console.log('Lista:')
						//	eslint-disable-next-line no-console
					//	console.log(this.temas)
					})
					.catch(e => {
						//	eslint-disable-next-line no-console
						console.log(`Error:  ${e.response}`)
					})

			},

			terminar_E(e) {
				// eslint-disable-next-line no-console
				console.log(e)
				this.terminar = e
				// eslint-disable-next-line no-console
				console.log(this.terminar)
				this.inicio = false
				this.vistaResultados = true
			},
			actualizarPreguntas() {//Actualiza la lista de preguntas
				//Inicia el cuestionario
				var lista_preguntas = this.lista

				this.shuffle(lista_preguntas)
				for (var i = 0; i < 5; i++) {
					this.preguntas[i] = lista_preguntas[i]
					this.datos[i] = JSON.stringify(this.preguntas[i])
					this.resultados.push({ id: this.preguntas[i]._id, result: false })
				}
				console.log('Resultados: ')
				console.log(this.resultados)
				console.log('Lista preguntas: ')
				console.log(this.preguntas)
			},

			iniciar() {
				this.actualizarPreguntas()
				this.correctas = 0
				this.incorrectas = 5
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
				//this.correctas = 0
				//this.incorrectas = 0
				this.terminar = false
				this.iniciarCronometro = false
				this.iniciar()
			},
			enviarResultado(info) {
				//this.resultados.push(info)
				var i = this.resultados.findIndex(element => element.id === info.id)

				this.resultados[i].result = info.result
				// eslint-disable-next-line no-console


				this.cont = this.cont + 1
				if (this.cont === this.preguntas.length) {
					this.terminar = true
					this.vistaResultados = true
					this.inicio = false
				}

				/* if (this.cont < this.preguntas.length) {
					this.componente = null
					this.componente = this.preguntas[this.cont].tipo
					this.datos = JSON.stringify(this.preguntas[this.cont])

				}*/
				var cont1 = 0
				var cont2 = 0
				for (var i = 0; i < this.resultados.length; i++) {
					if (this.resultados[i].result === true) {
						cont1 = cont1 + 1
					}else if (this.resultados[i].result === false) {
						cont2 = cont2 + 1
					}
				}
				this.correctas = cont1
				this.incorrectas = cont2
			/*	if (this.resultados[i].result === true) {
					this.correctas = this.correctas + 1
					this.incorrectas = this.incorrectas - 1
				}*/

			}

		},
		created() {
			this.solicitarPreguntas()
			//this.actualizarPreguntas()
		}
	}

</script>

<template>

	<v-container fluid>
		<v-card class="elevation-0">

			<div v-if="(!vistaResultados) && (!inicio) && (cont < preguntas.length)">
				<cronometro :iniciar="iniciarCronometro" :duraccion="10" @tiempoAgotado="terminar_E"> </cronometro>
				<div class="overline mb-4">Pregunta {{cont + 1}}</div>
				<component v-show="(cont === 0)" :is="preguntas[0].tipo" :datos="datos[0]" @click="enviarResultado"></component>
				<component v-show="(cont === 1)" :is="preguntas[1].tipo" :datos="datos[1]" @click="enviarResultado"></component>
				<component v-show="(cont === 2)" :is="preguntas[2].tipo" :datos="datos[2]" @click="enviarResultado"></component>
				<component v-show="(cont === 3)" :is="preguntas[3].tipo" :datos="datos[3]" @click="enviarResultado"></component>
				<component v-show="(cont === 4)" :is="preguntas[4].tipo" :datos="datos[4]" @click="enviarResultado"></component>
			</div>

			<!-- <verdaderoFalso :enunciado="Enunciado" @click="enviarResultado"></verdaderoFalso>
																<opcionMultiple :datos="multiple" @click="enviarResultado"></opcionMultiple>-->
			<v-card class="elevation-0 ma-12" tile v-show="(!vistaResultados) && (inicio)">
				<span>El siguente Quiz: </span><br>
				<ul>
					<li>Cuenta con 6 preguntas relacionadas con la unidad.</li>
					<li>Tiene un límite de tiempo de 10 minutos. </li>
					<li>No hay un limite de intentos.</li>
					<li>Puede ser realizado en cualquier momento.</li>
				</ul>

				<v-row align="center" justify="center">
					<v-col class="text-center" cols="12" sm="4">
						<div class="my-1">
							<v-btn outlined color="info" @click="iniciar">
								Iniciar Quiz
								<v-icon right>mdi-arrow-right-bold</v-icon>
							</v-btn>
						</div>
					</v-col>
				</v-row>
			</v-card>
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
						</v-list-item-content>

						<v-list-item-action>
							<v-btn icon>
								<v-icon v-if="(!resultados[index].result)" color="error lighten-1">mdi-cancel</v-icon>
								<v-icon v-if="(resultados[index].result)" color="green lighten-1">mdi-checkbox-marked-circle</v-icon>
							</v-btn>
						</v-list-item-action>
					</v-list-item>
				</v-list>
				{{resultados}}
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
		</v-card>
	</v-container>

</template>

<style>

</style>
