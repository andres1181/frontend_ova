<script>

	export default {
		name: 'Introduccion',
		components: {},

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
			numPaginas: 5,
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
									          v-text="'Herencia'"
									        ></span>
									      </template>
						<div class="py-4">

							<div>
								<p>La herencia permite la transferencia de código desde una clase <span class="negrita_">Base</span> a una o más clases
									<span class="negrita_">Derivadas</span>. En C++ en una clase hija la herencia se declara mediante dos puntos <span
									class="negrita_">":"</span>, así:
								</p>
								<p>
									<span>class <span class="negrita_">NombreClaseDerivada </span> <span class="subrayar_ negrita_">:</span> <span class="subrayar_">public</span>								<span class="negrita_">NombreClaseBase </span>{ ... }</span>
									<v-tooltip bottom light max-width="300px">
										<template v-slot:activator="{ on }">
														<v-icon light dense v-on="on">mdi-comment </v-icon>
													</template>
										<span>Los dos puntos <strong>" : " </strong> significan que la clase derivada podra utilizar todos los miembros	de la clase base que sean publicos.</span>
									</v-tooltip>
								</p>
								<p>

								</p>
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
								<p>Supongamos que tenemos las clases <span class="negrita_">EstudiantePregrado</span> y <span class="negrita_">EstudianteMaestria</span>;
									estas clases tienen muchos atributos en común como
									<v-tooltip bottom light max-width="300px">
										<template v-slot:activator="{ on }">
														<v-icon light dense v-on="on">mdi-comment </v-icon>
													</template>
										<span><em>Edad, Código, Nombres y Apellidos</em></span>
									</v-tooltip>. La clases también pueden tener en común la función <span class="negrita_"> ObtenerPromedio() </span>.
									<br>
								</p>
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

								<p>Podríamos escribir en cada una de las clases estos atributos y métodos, pero eso sería costoso e innecesario</p>

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
								<p>En cambio, podríamos crear una clase base llamada <span class="negrita_">Estudiante</span>, la cual implemente todo
									lo que las clases <span class="negrita_">EstudiantePregrado</span> y <span class="negrita_">EstudianteMaestria</span>								tienen en común.
									<v-tooltip bottom light max-width="300px">
										<template v-slot:activator="{ on }">
														<v-icon light dense v-on="on">mdi-comment </v-icon>
													</template>
										<span>De esta forma evitamos repetir código innecesario.</span>
									</v-tooltip>.
								</p>

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
								<p>
									En <span class="negrita_">C++ </span> la implementacion de la clase base quedaria así.
								</p>

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
								<p>Las clases derivadas <span class="negrita_">EstudiantePregrado</span> y <span class="negrita_">EstudianteMaestria</span>
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
								             v-text="'Funciones Virtuales'"
								           ></span>
									      </template>
						<div class="py-4">

							<div>
								<p>El segundo concepto importante es el de <span class="negrita_">Función virtual</span>, esta debe ser declarada en
									una clase base mediante la palabra <strong> 'virtual' </strong> como se muestra en la siguiente figura.</p>
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

					<v-timeline-item :color="years[1].color" small>
						<template v-slot:opposite>
														<div class="">
										          <img src="" alt="">

										        </div>
												</template>
						<div class="py-4">
							<div>
								<p>Una <strong>Función virtual</strong> puede ser utilizada e implementada de forma diferente en las clases derivadas
									de la clase base en la que fue definida.</p>
							</div>
						</div>
					</v-timeline-item>

					<v-timeline-item :color="years[1].color" small>
						<template v-slot:opposite>
														<div class="py-4">
															<div>
																<p>Cuando se declara una función virtual, esta permanecera como una Función virtual en todas la capas de clases derivadas que existan. Es decir, si crea una nueva clase que derive de la clase derivada y no de la clase base, la nueva clase podra implementar la función y esta seguira siendo virtual. </p>
															</div>
														</div>
												</template>
						<div class="py-4">
							<div>
								<p>Cuando una función virtual es redefinida en una clase derivada no es necesario definirla nuevamente como <strong>Virtual</strong>,
									pero no es un error hacerlo.</p>
							</div>
						</div>
					</v-timeline-item>

					<v-timeline-item :color="years[1].color" small>
						<template v-slot:opposite>

												</template>
						<div class="py-4">
							<div>
								<p>Si existen varias versiones de una función en diferentes clases derivadas, <strong>C++</strong> llamara en tiempo
									de ejecución a la función que este en la clase a la cual se esta haciendo referencia.</p>
							</div>
						</div>
					</v-timeline-item>

					<v-timeline-item :color="years[1].color" small>
						<template v-slot:opposite>

												</template>
						<div class="py-4">
							<div>
								<p>Si en una clase derivada no se redefine una función virtual, entonces se utiliza la función de la clase base. A continuación
									veremos un ejemplo del uso de funciones virtuales.</p>
							</div>
						</div>
					</v-timeline-item>

				</v-timeline>

				<v-timeline v-show="page == 3">
					<v-timeline-item :color="years[2].color" small>
						<template v-slot:opposite>
													<span
													 :class="`headline font-weight-bold ${years[2].color}--text`"
													 v-text="'Constructores virtuales'"
												 ></span>
											</template>
						<div class="py-4">

							<div>
								<p>En <strong>C++</strong> no esta permitido del uso de <strong> Constructores virtuales </strong>, debido a que existen
									problemas de implementación y podria ser muy peligroso. En la sección 27.3 del C++ se aborda este tema.</p>
							</div>
						</div>
					</v-timeline-item>

					<v-timeline-item :color="years[2].color" small>
						<template v-slot:opposite>

											</template>
						<div class="py-4">

							<div>
								<p>[...] En un constructor, el mecanismo de llamada virtual está deshabilitado porque la anulación de las clases derivadas
									aún no ha sucedido. Los objetos se construyen desde la base hacia arriba, <strong>"base antes de derivada" </strong>.</p>
							</div>
						</div>
					</v-timeline-item>

					<v-timeline-item :color="years[2].color" small>
						<template v-slot:opposite>
													<span
													 :class="`headline font-weight-bold ${years[2].color}--text`"
													 v-text="'Destructores virtuales'"
												 ></span>
											</template>
						<div class="py-4">
							<div>
								<p>Los destructores sirven para eliminar un objeto de determinada clase, terminando su ambito temporal y liberando memoria
									y recursos utilizados por dicho objeto.</p>
							</div>
						</div>
					</v-timeline-item>

					<v-timeline-item :color="years[2].color" small>
						<template v-slot:opposite>

											</template>
						<div class="py-4">
							<div>
								<p>En el caso de los <strong> Destructores virtuales </strong> se deben utilizar en una clase base para asegurar que
									siempre seran llamados los destructores de las clases derivadas. Un destructor virtual se declara antecediendo el
									simbolo
									<strong> ~ </strong> a la declaración.</p>
							</div>
						</div>
					</v-timeline-item>

					<v-timeline-item :color="years[2].color" small>
						<template v-slot:opposite>

											</template>
						<h2 :class="`headline font-weight-light mb-4 ${years[1].color}--text`">Ejemplo:</h2>
						<div class="py-4">
							<div>
								<p>En el siguiente ejemplo veremos para que sirven los desctructores virtuales. Supongamos que queremos destruir un objeto
									una clase base A. Ademas, tenemos una clase derivada B y una clase C que deriva de la clase derivada B.</p>
							</div>
						</div>
					</v-timeline-item>

					<v-timeline-item :color="years[2].color" small>
						<template v-slot:opposite>

											</template>
						<div class="py-4">
							<div>
								<p>Definicón de la clase A:</p>
							</div>
						</div>
					</v-timeline-item>
					<v-timeline-item :color="years[2].color" small>
						<template v-slot:opposite>

											</template>
						<div class="py-4">
							<div>
								<p>Definicón de la clase B:</p>
							</div>
						</div>
					</v-timeline-item>
					<v-timeline-item :color="years[2].color" small>
						<template v-slot:opposite>

											</template>
						<div class="py-4">
							<div>
								<p>Definicón de la clase C:</p>
							</div>
						</div>
					</v-timeline-item>

					<v-timeline-item :color="years[2].color" small>
						<template v-slot:opposite>

											</template>
						<div class="py-4">
							<div>
								<p>Creando el Objeto de la clase C</p>
							</div>
						</div>
					</v-timeline-item>

					<v-timeline-item :color="years[2].color" small>
						<template v-slot:opposite>

											</template>
						<div class="py-4">
							<div>
								<p>Eliminando el objeto de la clase C:</p>
							</div>
						</div>
					</v-timeline-item>

					<v-timeline-item :color="years[2].color" small>
						<template v-slot:opposite>

											</template>
						<div class="py-4">
							<div>
								<p>Destrución de la clase A:</p>
								<ol>
									<li value="1"> Se construye el objeto A</li>
									<li>Se construye el objeto B</li>
									<li>Se construye el objeto C</li>
									<li>Se destruye el objeto C</li>
									<li>Se destruye el objeto B</li>
									<li>Se destruye el objeto A</li>
								</ol>
							</div>
						</div>
					</v-timeline-item>

					<v-timeline-item :color="years[2].color" small>
						<template v-slot:opposite>

											</template>
						<div class="py-4">
							<div>
								<p>¿Qué pasa si no se define un constructor virtual?:</p>
								<ol>
									<li value="1"> Se construye el objeto A</li>
									<li>Se construye el objeto B</li>
									<li>Se construye el objeto C</li>
									<li>Se destruye el objeto A</li>
								</ol>
								<p>Los objetos B y C no se destruyen</p>
							</div>
						</div>
					</v-timeline-item>

					<v-timeline-item :color="years[2].color" small>
						<template v-slot:opposite>

											</template>
						<div class="py-4">
							<div>
								<p>Pregunta</p>
							</div>
						</div>
					</v-timeline-item>

				</v-timeline>

				<v-timeline v-show="page == 4">
					<v-timeline-item :color="years[4].color" small>
						<template v-slot:opposite>
													<span
													 :class="`headline font-weight-bold ${years[4].color}--text`"
													 v-text="'Clases abstractas'"
												 ></span>
											</template>
						<div class="py-4">

							<div>
								<p>Son clases de las que no se pueden declarar instancias
									<v-tooltip bottom>
										<template v-slot:activator="{ on }">
															<v-icon light dense v-on="on">mdi-comment </v-icon>
														</template>
										<span>Es decir, no se pueden declarar objetos de una clase abstracta</span>
									</v-tooltip>. Para que una clase sea abstracta debe poseer al menos un metodo virtual puro y es una clase base para
									otras clases concretas.
								</p>
							</div>
						</div>
					</v-timeline-item>

					<v-timeline-item :color="years[4].color" small>
						<template v-slot:opposite>

											</template>
						<div class="py-4">

							<div>
								<p>Un método virtual puro es aquel que se declara en una clase base abstracta y se iguala a cero. Pero su definición
									le corresponde a clases derivadas concretas</p>
							</div>
						</div>
					</v-timeline-item>

					<v-timeline-item :color="years[4].color" small>
						<template v-slot:opposite>
													<div class="">
														<img src="" alt="">

													</div>
											</template>
						<div class="py-4">
							<div>
								<p>Si una clase hereda de una clase abstracta y no se define los metodos virtuales puro heredados, entonces la clase
									heredera se convierte en una clase abstracta.</p>
							</div>
						</div>
					</v-timeline-item>

					<v-timeline-item :color="years[4].color" small>
						<template v-slot:opposite>

											</template>
						<div class="py-4">
							<div>
								<p>En el siguiente ejemplo podemos ver la el funcionamiento de una clase abstracta. </p>
							</div>
						</div>
					</v-timeline-item>

					<v-timeline-item :color="years[4].color" small>
						<template v-slot:opposite>

											</template>
						<div class="py-4">
							<h2 :class="`headline font-weight-light mb-4 ${years[1].color}--text`">Ejemplo:</h2>
							<div>
								<p>Si existen varias versiones de una función en diferentes clases derivadas, <strong>C++</strong> llamara en tiempo
									de ejecución a la función que este en la clase a la cual se esta haciendo referencia.</p>
							</div>
						</div>
					</v-timeline-item>

					<v-timeline-item :color="years[4].color" small>
						<template v-slot:opposite>

											</template>
						<div class="py-4">
							<div>
								<p>Si en una clase derivada no se redefine una función virtual, entonces se utiliza la función de la clase base. A continuación
									veremos un ejemplo del uso de funciones virtuales.</p>
							</div>
						</div>
					</v-timeline-item>

				</v-timeline>

				<v-timeline v-show="page == 5">
					<v-timeline-item :color="years[5].color" small>
						<template v-slot:opposite>
												<span
												 :class="`headline font-weight-bold ${years[5].color}--text`"
												 v-text="'Quiz'"
											 ></span>
										</template>

					</v-timeline-item>

					<v-timeline-item :color="years[5].color" small>
						<template v-slot:opposite>

										</template>
						<div class="py-4">
							<h2 :class="`headline font-weight-light mb-4 ${years[1].color}--text`">Pregunta 1</h2>
							<div>
								<p>Un método virtual puro es aquel que se declara en una clase base abstracta y se iguala a cero. Pero su definición
									le corresponde a clases derivadas concretas</p>
							</div>
						</div>
					</v-timeline-item>

					<v-timeline-item :color="years[5].color" small>
						<template v-slot:opposite>
												<div class="">
													<img src="" alt="">

												</div>
										</template>
						<div class="py-4">
							<h2 :class="`headline font-weight-light mb-4 ${years[1].color}--text`">Pregunta 2</h2>
							<div>
								<p>Si una clase hereda de una clase abstracta y no se define los metodos virtuales puro heredados, entonces la clase
									heredera se convierte en una clase abstracta.</p>
							</div>
						</div>
					</v-timeline-item>

					<v-timeline-item :color="years[5].color" small>
						<template v-slot:opposite>

										</template>
						<div class="py-4">
							<h2 :class="`headline font-weight-light mb-4 ${years[1].color}--text`">Pregunta 3</h2>
							<div>
								<p>En el siguiente ejemplo podemos ver la el funcionamiento de una clase abstracta. </p>
							</div>
						</div>
					</v-timeline-item>

				</v-timeline>
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
