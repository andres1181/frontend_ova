<script>

	//import Editor from '@/components/views/editor.vue'
	//import Compilador from '@/components/views/compilador.vue'
	//import juez from '@/components/views/juez.vue'
	import quiz from '@/components/views/quiz.vue'
	export default {
		name: 'Sobrecarga',
		components: {
			//	Editor,
			//		Compilador,
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
				hidden: false,
				tema: 'sobrecarga',
				codigo:
					'#include <iostream>\nusing namespace std; \n\nint main() {\nint x=10;\nint y=25;\nint z=x+y;\n\ncout<< "Sum of x+y = " << z;\n}'
			}
		}
	}

</script>

<template >

	<v-container fluid>
		<v-timeline>
			<v-timeline-item :color="color" small>
				<template v-slot:opposite>
																			<span
																				:class="`headline font-weight-bold ${color}--text`"

																			>Sobrecarga</span>
																		</template>
				<div class="py-4">
					<h2 :class="`headline font-weight-light mb-4 ${color}--text`">¿Qué es?</h2>
					<div>
						<span>Es una propiedad de C++, que permite que dos o más funciones tengan el mismo nombre.</span>
					</div>
				</div>
			</v-timeline-item>
			<v-timeline-item :color="color" small>

				<div class="py-4">
					<div>
						<span>Condiciones para que haya sobrecarga de funciones:</span>
						<ul>
							<li>Dos o más funciones tienen el mismo nombre.</li>
							<li>En la declaración los tipos de parámetros son diferentes en cada función.</li>
							<li>El número de parámetros debe ser diferente en cada función.</li>
						</ul>
					</div>
				</div>
			</v-timeline-item>
			<v-timeline-item :color="color" small>

				<div class="py-4">
					<div>
						<span>Si la sobrecarga se realiza en una misma clase, es simplemente sobrecarga. Pero si se realiza dentro de una jerarquía de clases, decimos que hay polimorfismo. </span>
					</div>
				</div>
			</v-timeline-item>
			<v-timeline-item :color="color" small>

				<div class="py-4">
					<h2 :class="`headline font-weight-light mb-4 ${color}--text`">¿Por qué usar sobrecarga?</h2>
					<div>
						<span>Evita que utilicemos diferentes nombres para funciones que hacen lo mismo. El tiempo de ejecución usando no se incrementa al usar Sobrecarga. </span>
					</div>
				</div>
			</v-timeline-item>
		</v-timeline>
		<h2 :class="`headline font-weight-light mb-4 ${color}--text`">Ejemplo:</h2>
		<span>Queremos construir un programa que retorne información de un vendedor sobrecargando una función.</span>

		<iframe width="100%"
		        height="400"
		        src="https://www.youtube-nocookie.com/embed/7gj1T_iCCIA"
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
					        src="https://repl.it/@ANDRESFELIPEF31/Sobrecarga-Vendedor?lite=true"
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
