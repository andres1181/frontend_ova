<script>

	import quiz from '@/components/views/quiz.vue'
	export default {
		name: 'Declaracion',
		components: {
			quiz
		},
		props: {
			color: {
				type: String,
				required: true
			},
			listaPreguntas: {
				type: Array,
				required: true
			},
			aprobado: {
				type: Boolean,
				required: true
			},
			avance: {
				type: String,
				required: true
			}
		},
		data() {
			return {
				tema: 'pasoReferencia'
			}
		},
		methods: {},
		created() {}
	}

</script>

<template >

	<v-container fluid>
		<v-timeline>
			<v-timeline-item :color="color" small>
				<template v-slot:opposite>
																							<span
																								:class="`headline font-weight-bold ${color}--text`"

																							>Paso por referencia</span>
																						</template>
				<div class="py-4">
					<div>
						<span>A veces nos interesa que una función modifique una variable que esta fuera de su ámbito, esto lo podemos lograr con punteros o utilizando referencias.</span>
					</div>
				</div>
			</v-timeline-item>
	
			<v-timeline-item :color="color" small>

				<div class="py-4">
					<h2 :class="`headline font-weight-light mb-4 ${color}--text`">Utilizando punteros</h2>
					<div>
						<span>Para hacer paso por referencia con punteros no trabajamos directamente con la o las variables que queremos modificar, sino con lo que contiene la posición de memoria de estas variable, a través de un puntero.</span>
					</div>
				</div>
			</v-timeline-item>
		</v-timeline>
		<h2 :class="`headline font-weight-light mb-4 ${color}--text`">Ejemplo 1:</h2>
		<span>Paso por referencia utilizando punteros:</span>
		<iframe width="100%"
		        height="400"
		        src="https://www.youtube-nocookie.com/embed/20Mzqchc5ik"
		        frameborder="0"
		        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
		        allowfullscreen></iframe>
		<v-expansion-panels class=" my-2">
			<v-expansion-panel>
				<v-expansion-panel-header><span>Código fuente</span> <template v-slot:actions>
																			<v-icon color="red">$expand</v-icon>
																		</template></v-expansion-panel-header>
				<v-expansion-panel-content>
					<iframe height="400px"
					        width="100%"
					        src="https://repl.it/@ANDRESFELIPEF31/PasoReferencia?lite=true"
					        scrolling="no"
					        frameborder="no"
					        allowtransparency="true"
					        allowfullscreen="true"
					        sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
				</v-expansion-panel-content>
			</v-expansion-panel>
		</v-expansion-panels>
		<v-timeline>

			<v-timeline-item :color="color" small>
				<div class="py-4">
					<h2 :class="`headline font-weight-light mb-4 ${color}--text`">Utilizando referencias</h2>
					<div>
						<span>En para el caso de paso por referencia utilizando referencias, a los parámetros de entrada de una función se le antepone el operador &.</span>
					</div>
				</div>
			</v-timeline-item>
		</v-timeline>

		<h2 :class="`headline font-weight-light mb-4 ${color}--text`">Ejemplo 2:</h2>
		<span>Paso por referencia utilizando referencias:</span>
		<iframe width="100%"
		        height="400"
		        src="https://www.youtube.com/embed/A4mEAvxe0KU"
		        frameborder="0"
		        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
		        allowfullscreen></iframe>
		<v-expansion-panels class=" my-2">
			<v-expansion-panel>
				<v-expansion-panel-header><span>Código fuente</span> <template v-slot:actions>
																		<v-icon color="red">$expand</v-icon>
																	</template></v-expansion-panel-header>
				<v-expansion-panel-content>
					<iframe height="400px"
					        width="100%"
					        src="https://repl.it/@ANDRESFELIPEF31/PasoReferenciaReferencias?lite=true"
					        scrolling="no"
					        frameborder="no"
					        allowtransparency="true"
					        allowfullscreen="true"
					        sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
				</v-expansion-panel-content>
			</v-expansion-panel>
		</v-expansion-panels>
		<div class=" ma-2">
			<v-row align="center" justify="center">
				<v-col class="text-center" cols="12" sm="12">
					<div>
						<h2 :class="`headline font-weight-light mb-1 ${color}--text`">Quiz</h2>
					</div>
				</v-col>
				<quiz :preguntas="listaPreguntas" :avance="avance" :tema="tema"></quiz>
			</v-row>
		</div>
	</v-container>

</template>

<style>

</style>
