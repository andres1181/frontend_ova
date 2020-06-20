<script>

	//import Editor from '@/components/views/editor.vue'
	//import Compilador from '@/components/views/compilador.vue'
	import juez from '@/components/views/juez.vue'

	export default {
		name: 'Sobrecarga',
		components: {
			//	Editor,
			//		Compilador,
			juez
		},
		props: {
			tamano: {
				type: Number,
				required: true
			}
			// 	terminado: {
			// 		type: Boolean,
			// 		defalult: false,
			// 		required: true
			// 	}
		},
		data: () => ({
			hidden: false,

			codigo:
				'#include <iostream>\nusing namespace std; \n\nint main() {\nint x=10;\nint y=25;\nint z=x+y;\n\ncout<< "Sum of x+y = " << z;\n}',
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

	<v-card :height="tamano" class="overflow-hidden" flat>
		<v-app-bar dense absolute
		           color="white"
		           scroll-target="#scrolling-techniques-7">

			<v-toolbar-title>Sobrecarga</v-toolbar-title>

			<v-spacer></v-spacer>

			<v-btn text>
				Actividad Practica
			</v-btn>
		</v-app-bar>
		<!-- <v-banner single-line color="white" bottom class="justify-center headline font-weight-light" sticky>

					<span class="font-weight-bold">	Sobrecarga</span>
					<template v-slot:actions>
					       <v-btn
					         color="pink"
									 text
					       >
					         Actividad Practica

					       </v-btn>
					     </template>
				</v-banner> -->
		<!-- <v-fab-transition> -->
		<!-- <v-btn v-show="!hidden" dark fab fixed
												       class="mx-1"
												       @click="anteriorPagina()">
													<v-icon>mdi-arrow-left-thick</v-icon>
												</v-btn> -->
		<!-- </v-fab-transition> -->

		<v-sheet id="scrolling-techniques-7"
		         class="mt-12  overflow-y-auto"
		         max-height="calc(100% - 48px)">
			<v-container>
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

				</v-timeline>

				<div v-show="page == 2">
					<juez nombre="juez1" salida="Sum of x+y = 35"></juez>
				</div>
			</v-container>
		</v-sheet>
		<!-- <iframe height="400px"
														        width="100%"
														        src="https://repl.it/@ANDRESFELIPEF31/SarcasticJudiciousDemos-1?lite=true"
														        scrolling="no"
														        frameborder="no"
														        allowtransparency="true"
														        allowfullscreen="true"
														        sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe> -->
		<!-- <Editor :codigo="codigo"></Editor>
												<Compilador nombre="compilador1" :codigo="codigo"> </Compilador>
												<juez nombre="juez1" salida="Sum of x+y = 35"></juez> -->

		<v-card-actions fixed>
			<v-btn v-show="!hidden" dark @click="anteriorPagina()">
				<v-icon>mdi-arrow-left-thick</v-icon>
			</v-btn>
			<v-btn color="orange" text>
				Share
			</v-btn>
			<v-btn v-show="!hidden"
			       color="pink"
			       dark
			       @click="siguientePagina()">
				<v-icon>mdi-arrow-right-thick</v-icon>
			</v-btn>
			<v-btn color="orange" text>
				Explore
			</v-btn>
		</v-card-actions>

	</v-card>

</template>

<style>

</style>
