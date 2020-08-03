<script>

	import { misMixins } from '@/mixins/mixins.js'

	import cronometro from '@/components/views/cronometro.vue'
	import falsoVerdadero from '@/components/actividades/evaluacion/examen/falsoVerdaderoE.vue'
	import multiple from '@/components/actividades/evaluacion/examen/multipleE.vue'
	import ordenar from '@/components/actividades/evaluacion/examen/ordenarE.vue'
	import analizarCodigo from '@/components/actividades/evaluacion/examen/analizarCodigoE.vue'
	import analizarProblema from '@/components/actividades/evaluacion/examen/analizarProblemaE.vue'
	import triki from '@/components/views/juegos/triki.vue'

	export default {
		name: 'Evaluacion',
		props: {
			preguntas: {
				type: Array,
				require: true
			},
			tema: {
				type: String,
				require: true
			},
			avance: {
				type: String,
				require: true
			}
		},
		components: {
			triki,
			cronometro,
			falsoVerdadero,
			multiple,
			ordenar,
			analizarCodigo,
			analizarProblema
		},
		data() {
			return {
				datosUnidad: {},
				vistResult: 0,
				usuario: {},
				fallos: [],
				avances: {},
				triki: false,
				verQuiz: false,
				iniciarCronometro: false,
				terminar: false,
				cont: 0,
				datos: [],
				resultados: [],
				correctas: 0,
				incorrectas: 2,
				vistaResultados: false,
				inicio: true,
				lista: {},
				preguntasQuiz: []
				//	preguntas: []
			}
		},
		mixins: [misMixins],
		methods: {
			actualizarAvance() {
				const ruta = '/estudiante/avanceTema/actualizar/' + this.avance //obtego las actividades que pertenecen a esa unidad
				var _data = {
					aprobado: true
				}
				this.axios({
					method: 'put',
					url: ruta,
					headers: {
						'Content-Type': 'application/json'
					},
					data: _data
				})
					.then(response => {
						console.log('actualizarAvance')
						console.log(response)
						this.$router.go()
					})
					.catch(e => {
						console.log(`${e}`)
					})
			},
			elegirPreguntas() {
				//Elegir preguntas del tema
				var preguntasTema = []
				for (var i = 0; i < this.preguntas.length; i++) {
					if (this.preguntas[i].id_tema.componente === this.tema) {
						preguntasTema.push(this.preguntas[i])
					}
				}
				return preguntasTema
			},

			terminar_E(e) {
				// eslint-disable-next-line no-console

				this.terminar = e

				this.inicio = false
				this.vistaResultados = true
			},
			actualizarPreguntas() {
				//Actualiza la lista de preguntas
				//Inicia el cuestionario
				var lista_preguntas = this.lista

				this.shuffle(lista_preguntas)
				for (var i = 0; i < 2; i++) {
					this.preguntasQuiz[i] = lista_preguntas[i]
					this.datos[i] = JSON.stringify(this.preguntasQuiz[i])
					this.resultados.push({ id: this.preguntasQuiz[i]._id, result: false })
				}
			},
			iniciar() {
				this.triki = true
				this.verQuiz = false
				this.terminar = false
				this.inicio = false
				this.vistaResultados = false
			},
			iniciarQuiz() {
		/*		var result_ = document.getElementById('resultados')
				setTimeout(() => {
					result_.refresh()
				}, 1)*/
				this.resultados.length = 0
				this.vistResult = this.vistResult + 1
				this.cont = 0
				this.correctas = 0
				this.incorrectas = 2
				this.actualizarPreguntas()
				this.triki = false
				this.verQuiz = true
				this.iniciarCronometro = true
				this.vistaResultados = false
				this.inicio = false
			},
			enviarResultado(info) {
				//this.resultados.push(info)
				var i = this.resultados.findIndex(element => element.id === info.id)

				this.resultados[i].result = info.result

				this.cont = this.cont + 1
				if (this.cont === this.preguntasQuiz.length) {
					this.terminar = true
					this.verQuiz = false

					this.vistaResultados = true
					this.inicio = false

				}

				var cont1 = 0
				var cont2 = 0
				for (var i = 0; i < this.resultados.length; i++) {
					if (this.resultados[i].result === true) {
						cont1 = cont1 + 1
					} else if (this.resultados[i].result === false) {
						cont2 = cont2 + 1
					}
				}
				this.correctas = cont1
				this.incorrectas = cont2
				if (this.correctas === 2) {
					console.log('Correctas: ' + this.correctas)
					this.actualizarAvance()
					this.$router.go()
				}
			}
		},
		created() {
			console.log('quiz Avance')
			console.log(this.avance)
			this.usuario = this.obtenerDatos()
			this.lista = this.elegirPreguntas()
			//this.solicitarPreguntas()
			//this.actualizarPreguntas()
		}
	}

</script>

<template>

	<v-container fluid>
		<v-card class="elevation-0  pa-3" outlined>
			<div v-if="(!vistaResultados) && (!inicio) && (!triki) && (verQuiz) && (cont < lista.length)">
				<cronometro :iniciar="iniciarCronometro" :duraccion="5" @tiempoAgotado="terminar_E"> </cronometro>
				<div class="overline mb-4">Pregunta {{cont + 1}}</div>
				<div v-show="(cont === 0)">
					<component  :is="preguntasQuiz[0].tipo" :datos="datos[0]" @click="enviarResultado"></component>
				</div>
				<div v-show="(cont === 1)">
					<component  :is="preguntasQuiz[1].tipo" :datos="datos[1]" @click="enviarResultado"></component>
				</div>
			</div>
			<v-card class="elevation-0 mt-1 pa-3" v-show="(!vistaResultados) && (inicio)">
				<span>El siguente Quiz: </span>
				<br>
				<br>
				<ul>
					<li>Cuenta con 2 preguntas.</li>
					<li>Tiene un límite de tiempo de 5 minutos. </li>
					<li>Puede ser realizado en cualquier momento.</li>
				</ul>

				<v-row align="center" justify="center">
					<v-col class="text-center" cols="12" sm="12">
						<div class="my-1">
							<v-btn block x-large dark color="success" @click="iniciar">
								Iniciar
								<!-- <v-icon right>mdi-arrow-right-bold</v-icon> -->
							</v-btn>
						</div>
					</v-col>
				</v-row>
			</v-card>
			<div v-if="(triki) && (!terminar) && (!inicio) && (!vistaResultados) && (!verQuiz)" class="">
				<v-row align="center" justify="center">
					<v-col class="text-center" cols="12" sm="12">
						<div align="center" class="my-1">
							<span class="overline">Antes de iniciar Intenta ganarle a la maquina</span>
							<triki/>
						</div>
					</v-col>
				</v-row>
				<v-row align="center" justify="center">
					<v-col class="text-center" cols="12" sm="12">
						<div class="my-1">
							<v-btn block x-large dark color="success" @click="iniciarQuiz">
								ir al Quiz
								<!-- <v-icon right>mdi-arrow-right-bold</v-icon> -->
							</v-btn>
						</div>
					</v-col>
				</v-row>
			</div>
			<div v-if="(terminar) && (!inicio) && (vistaResultados) && (!verQuiz)" :key="vistResult" class="" id="resultados">
				<span class="overline">Resultados</span class="overline">
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

								<v-list-item v-for="(item, index) in preguntasQuiz"
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

							<div class="text-center ma-2" >
								<v-row align="center" justify="center">
									<v-col class="text-center" cols="12" sm="12">
										<div>
											<v-btn block x-large dark color="success" dark @click="iniciarQuiz">
												Nuevo intento
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
