<script>

	export default {
		name: 'Sobrecarga',
		components: {},
		props: {
			terminado: {
				type: Boolean,
				defalult: false,
				required: true
			}
		},
		data: () => ({
			hidden: false,
			years: [
				{
					color: 'cyan',
					year: '1960'
				},
				{
					color: 'green',
					year: '1970'
				},
				{
					color: 'pink',
					year: '1980'
				},
				{
					color: 'amber',
					year: '1990'
				},
				{
					color: 'orange',
					year: '2000'
				},

				{
					color: 'purple',
					year: '2000'
				}
			],
			numPaginas: 2,
			page: 1,
			items: [
				{
					color: 'red lighten-2',
					icon: 'mdi-star'
				},
				{
					color: 'purple darken-1',
					icon: 'mdi-book-variant'
				},
				{
					color: 'green lighten-1',
					icon: 'mdi-airballoon'
				},
				{
					color: 'indigo',
					icon: 'mdi-buffer'
				}
			]
		}),
		methods: {
			scrollWin: function() {
				window.scrollTo(0, 0)
			},
			siguientePagina: function() {
				if (this.page === this.numPaginas) {
					this.page = this.numPaginas
				} else {
					this.page = this.page + 1
				}
				this.scrollWin()
			},
			anteriorPagina: function() {
				if (this.page === 1) {
					this.page = 1
				} else {
					this.page = this.page - 1
				}
				this.scrollWin()
			}
		},
		created() {
			this.page = 1
		}
	}

</script>

<template >

	<v-container fluid
	             class="screen fill-height"
	             style="
									    height: calc(100% - 48px) !important;
									    max-height: calc(100% - 48px) !important;
									">
		<v-row justify="center"
		       style="
									    height: calc(100% - 48px) !important;
									    max-height: calc(100% - 48px) !important;">
			<v-col cols="1">

				<v-fab-transition>
					<v-btn v-show="!hidden"
					       color="pink"
					       dark
					       bottom
					       fixed
					       fab
					       class="my-5"
					       @click="anteriorPagina()">
						<v-icon>mdi-arrow-left-thick</v-icon>
					</v-btn>
				</v-fab-transition>

			</v-col>
			<v-col cols="10">
				<v-timeline v-show="page == 1">

					<v-timeline-item :color="years[0].color" small>
						<template v-slot:opposite>
									         <span
									          :class="`headline font-weight-bold ${years[0].color}--text`"
									          v-text="'Sobrecarga'"
									        ></span>
									      </template>
						<div class="py-4">

							<div>
								<p>Es una característica de la programación orientada a objetos y puede ser aplicada a constructores o métodos.
								</p>
							</div>
						</div>
					</v-timeline-item>
					<v-timeline-item :color="years[0].color" small>
						<template v-slot:opposite>

									      </template>
						<div class="py-4">

							<div>

								<p>Para que exista sobrecarga se debe cumplir que:
								</p>
								<ol>
									<li value="1">Dos o más funciones pueden compartir un nombre.</li>
									<li>En la declaración los tipos de parámetros sean diferentes.</li>
								</ol>
							</div>
						</div>
					</v-timeline-item>
					<v-timeline-item :color="years[0].color" small>
						<template v-slot:opposite>
									        <div class="">
									          <img src="" alt="">
									          <img src="" alt="">
									        </div>
									      </template>
						<div class="py-4">

							<div>
								<h2 :class="`headline font-weight-light mb-4 ${years[1].color}--text`">Ejemplo:</h2>
								<p>Supongamos que queremos construir una función que permita conocer el volumen de un cubo. Dicha función recibiria el
									valor de uno de los lados, sera de tipo entero y esta se multiplicaria tres veces para obtener el resultado.</p>
							</div>
						</div>
					</v-timeline-item>
					<v-timeline-item :color="years[0].color" small>
						<template v-slot:opposite>
									        <div class="">
	                          <p>Hasta hora el planteamiento es correcto, pero ¿Qué pasaria si una persona ingresa un número que no es de tipo entero?, se presentaria
	                						un error. Para solucionar este error podemos recurrir a la sobrecarga de la función <em>volumen</em> por cada tipo de
	                						dato, asi:
	                					</p>

									        </div>
									      </template>
						<div class="py-4">

							<div>
								<img src="" alt="">
								<img src="" alt="">

							</div>
						</div>
					</v-timeline-item>
					<v-timeline-item :color="years[0].color" small>
						<template v-slot:opposite>
									        <div class="">
									          <img src="" alt="">

									        </div>
									      </template>
						<div class="py-4">

							<div>
								<p>De esta forma se ejecutara solo la función que corresponda al tipo de dato ingresado por el ususario.</p>

							</div>
						</div>
					</v-timeline-item>
					<v-timeline-item :color="years[0].color" small>
						<template v-slot:opposite>
									        <div class="">
									          <img src="" alt="">

									        </div>
									      </template>
						<div class="py-4">

							<div>
								<h2 :class="`headline font-weight-light mb-4 ${years[0].color}--text`">Sobrecarga de constructores:</h2>
								<p>Un constructor es una función y puede sobrecargarse. No puede haber varios constructores con un mismo número y tipo
									de argumentos.
								</p>
							</div>
						</div>
					</v-timeline-item>
				</v-timeline>

				<v-timeline v-show="page == 2">
					<v-timeline-item :color="years[1].color" small>
						<template v-slot:opposite>
								            <span
								             :class="`headline font-weight-bold ${years[1].color}--text`"
								             v-text="'Quiz'"
								           ></span>
									      </template>
						<div class="py-4">

							<div>
								<h2 :class="`headline font-weight-light mb-4 ${years[0].color}--text`">Ejemplo:</h2>
								<p>Supongamos que tenemos la clase <strong> Tabla </strong>
									<v-tooltip bottom>
										<template v-slot:activator="{ on }">
	                          <v-icon light dense v-on="on">mdi-comment </v-icon>
	                        </template>
										<span> Sus atributos son: <em>titulo, columnas</em> y<em> filas</em> </span>
									</v-tooltip>.</p>
							</div>
						</div>
					</v-timeline-item>
					<v-timeline-item :color="years[1].color" small>
						<template v-slot:opposite>

												</template>
						<div class="py-4">

							<div class="">
								<img src="" alt="">
							</div>
						</div>
					</v-timeline-item>
					<v-timeline-item :color="years[0].color" small>
						<template v-slot:opposite>
														<div class="">
										          <img src="" alt="">

										        </div>
												</template>
						<div class="py-4">

							<div>

								<p>Creamos dos constructores, el primero no recibe datos e inicializa los atributos por defecto.</p>
							</div>
						</div>
					</v-timeline-item>
					<v-timeline-item :color="years[0].color" small>
						<template v-slot:opposite>
	                          <div class="">
	                            <img src="" alt="">

	                          </div>
	                      </template>
						<div class="py-4">

							<div>

								<p>El segundo recibe datos que el usuario ingrese e inicializa los atributos con estos valores.</p>
							</div>
						</div>
					</v-timeline-item>
					<v-timeline-item :color="years[1].color" small>
						<template v-slot:opposite>
														<div class="py-4">
															<div>
																<p>El compilador decide el construtor a utilizar en tiempo de ejecución de acuerdo a los datos ingresados</p>
															</div>
														</div>
												</template>
						<div class="py-4">
							<div>

							</div>
						</div>
					</v-timeline-item>
				</v-timeline>

				<iframe height="400px"
				        width="100%"
				        src="https://repl.it/@ANDRESFELIPEF31/SarcasticJudiciousDemos-1?lite=true"
				        scrolling="no"
				        frameborder="no"
				        allowtransparency="true"
				        allowfullscreen="true"
				        sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
			</v-col>

			<v-col cols="1">
				<v-fab-transition>
					<v-btn v-show="!hidden"
					       color="pink"
					       dark
					       centered
					       bottom
					       fixed
					       fab
					       class="my-5"
					       @click="siguientePagina()">
						<v-icon>mdi-arrow-right-thick</v-icon>
					</v-btn>
				</v-fab-transition>
			</v-col>
		</v-row>
	</v-container>

</template>

<style>

</style>
