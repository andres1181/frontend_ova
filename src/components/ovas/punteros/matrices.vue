<script>

	import quiz from '@/components/views/quiz.vue'
	export default {
		name: 'Aritmetica',
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
				tema: 'matrices'
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

																			>Matrices dinámicas</span>
																		</template>
				<div class="py-4">
					<h2 :class="`headline font-weight-light mb-4 ${color}--text`">¿Qué son?</h2>
					<div>
						<span>Al igual que los arreglos, las matrices pueden ser dinámicas y definir su tamaño, número de filas o número de columnas (o las dos) según sea necesario.</span>
					</div>
				</div>
			</v-timeline-item>
			<v-timeline-item :color="color" small>

				<div class="py-4">
					<div>
						<span>Para las matrices debemos tener en cuenta que esta  va a estar compuesta por dos cosas. Primero, un arreglo de punteros. Cada elemento de este arreglo es una fila de la matriz.</span>
					</div>
				</div>
			</v-timeline-item>
			<v-timeline-item :color="color" small>

				<div class="py-4">
					<div>
						<span>Segundo, una cantidad de arreglos de elementos igual al número de filas que tendrá la matriz. Es decir, cada fila es un arreglo.</span>
					</div>
				</div>
			</v-timeline-item>
			<v-timeline-item :color="color" small>

				<div class="py-1 px-1">
					<div>
						<img :src="require('../../../assets/matrices.svg')">
					</div>
				</div>
			</v-timeline-item>
			<v-timeline-item :color="color" small>
				<div class="py-4">
					<div>
						<span>Pare crear matrices dinámicas debemos segur los siguientes pasos:</span>
						<ul>
							<li>Inicializar un puntero de punteros con el nombre de la matriz, del tipo que queramos que sea la matriz.</li>
							<li>Reservar memoria con 'new'.</li>
							<li>Mediante un ciclo agregar a cada posición del arreglo del paso 1, un arreglo de elementos del mismo tipo de la matriz.</li>
						</ul>
					</div>
				</div>
			</v-timeline-item>
			<v-timeline-item :color="color" small>
				<div class="py-4">
					<div>
						<ul>
							<li>Para cada arreglo se debe reservar memoria con 'new'.</li>
							<li>Se crea el código necesario para rellenar la matriz.</li>
							<li>Liberar memoria de cada arreglo mediante un ciclo ‘for’.</li>
							<li>Liberar la memoria del arreglo de punteros.</li>
						</ul>
					</div>
				</div>
			</v-timeline-item>
		</v-timeline>
		<h2 :class="`headline font-weight-light mb-4 ${color}--text`">Ejemplo:</h2>
		<span>Crear una matriz de asteriscos de foma dinámica.</span>
		<iframe width="100%"
		        height="400"
		        src="https://www.youtube.com/embed/gYb2Q8SJh0E"
		        frameborder="0"
		        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
		        allowfullscreen></iframe>

		<v-expansion-panels>
			<v-expansion-panel>
				<v-expansion-panel-header><span>Código fuente</span> <template v-slot:actions>
											<v-icon color="red">$expand</v-icon>
										</template></v-expansion-panel-header>
				<v-expansion-panel-content>
					<iframe height="400px"
					        width="100%"
					        src="https://repl.it/@ANDRESFELIPEF31/Matriz-Dinamica-Asteriscos?lite=true"
					        scrolling="no"
					        frameborder="no"
					        allowtransparency="true"
					        allowfullscreen="true"
					        sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
				</v-expansion-panel-content>
			</v-expansion-panel>
		</v-expansion-panels>
		<div class=" ma-2" v-if="aprobado===false">
			<v-row align="center" justify="center">
				<v-col class="text-center" cols="12" sm="12">
					<div>
						<h2 :class="`headline font-weight-light mb-1 ${color}--text`">Quiz</h2>
					</div>
				</v-col>
				<quiz :preguntas="listaPreguntas" :avance="avance" :tema="tema"></quiz>

			</v-row>
		</div>
		<div class=" ma-2" v-else>
			<v-row align="center" justify="center">
				<v-col class="text-center" cols="12" sm="12">
					<v-alert type="success">
						Terminado !!!
					</v-alert>
				</v-col>

			</v-row>
		</div>
	</v-container>

</template>

<style>

</style>
