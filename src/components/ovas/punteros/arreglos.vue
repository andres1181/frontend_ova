<script>

	import quiz from '@/components/views/quiz.vue'
	export default {
		name: 'Arreglos',
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
				tema: 'arreglos'
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

																				>Arreglos Dinámicos</span>
																			</template>
				<div class="py-4">
					<h2 :class="`headline font-weight-light mb-4 ${color}--text`">¿Qué son?</h2>
					<div>
						<span>Cuando creamos arreglos en C++ de la forma tradicional debemos darle un tamaño inicial, sin la posibilidad de modificarlo.</span>
					</div>
				</div>
			</v-timeline-item>
			<v-timeline-item :color="color" small>

				<div class="py-4">
					<div>
						<span>Con punteros podemos crear arreglos a los que se les puede definir su tamaño al ejecutar el programa según sea necesario.</span>
					</div>
				</div>
			</v-timeline-item>
			<v-timeline-item :color="color" small>

				<div class="py-4">
					<div>
						<span>Para esto, debemos tener en cuenta que es importante utilizar new para reservar espacio de memoria para el arreglo y deleted para liberar ese espacio de memoria cuando ya no necesitemos el arreglo.</span>
					</div>
				</div>
			</v-timeline-item>
			<v-timeline-item :color="color" small>

				<div class="py-4">
					<div>
						<span>Pare crear arreglos dinámicos debemos segur los siguientes pasos:</span>
						<ul>
							<li>Inicializar un puntero del mismo tipo del arreglo como Null.</li>
							<li>Crear una variable para el tamaño del arreglo inicializada.</li>
							<li>Determinar el tamaño del arreglo, ya sea por consola o implícito en el código.</li>

						</ul>
					</div>
				</div>
			</v-timeline-item>
			<v-timeline-item :color="color" small>
				<div class="py-4">
					<div>
						<ul>
							<li>Se crea un arreglo utilizando new, con el puntero creado anteriormente y se le asigna como parámetro el tamaño anterior.</li>
							<li>Se crea el código necesario para rellenar el arreglo. </li>
							<li>Se limpia la memoria utilizando el operador deleted. </li>
						</ul>
					</div>
				</div>
			</v-timeline-item>

		</v-timeline>

		<h2 :class="`headline font-weight-light mb-4 ${color}--text`">Ejemplo:</h2>
		<span>Queremos construir un programa que retorne el promedio de un grupo de notas, utilizando un arreglo dinámico.</span>
		<iframe width="100%"
		        height="400"
		        src="https://www.youtube-nocookie.com/embed/kA3jx5JFe6M"
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
					        src="https://repl.it/@ANDRESFELIPEF31/arreglos-dinamicos?lite=true"
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
