<script>

	import quiz from '@/components/views/quiz.vue'
	export default {
		name: 'Punteros',
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
				tema: 'punteros'
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

																			>Punteros</span>
																		</template>
				<h2 :class="`headline font-weight-light mb-4 ${color}--text`">¿Qué son los punteros?</h2>
				<div>
					Son variables que permiten almacenar la dirección de memoria de otra variable. En C++, utilizamos punteros para señalar y
					manipular objetos.
				</div>
			</v-timeline-item>
			<v-timeline-item :color="color" small>

				<div class="py-4">

					<div>
						<span>Utilizamos punteros en el mundo real cuando señalamos objetos con el dedo índice o cuando señalamos una parte importante de una presentación o de un libro.
							</span>
					</div>
				</div>
			</v-timeline-item>
			<v-timeline-item :color="color" small>

				<div class="py-4">
					<h2 :class="`headline font-weight-light mb-4 ${color}--text`">Declaración</h2>
					<div>
						<span>La declaración de un puntero es similar a la declaración de otros objetos, la única diferencia es que se debe añadir un * antes del identificador del objeto. Existen 3 formas declarar un puntero:</span>
					</div>
				</div>
			</v-timeline-item>
			<v-timeline-item :color="color" small>

				<div class="py-4">
					<div>
						<span>Existen tres formas de declarar un puntero:</span>
						<ul>
							<li><span>&lt;tipo&gt;  *&lt;identificador&gt;</span></li>
							<li><span>&lt;tipo&gt;  *  &lt;identificador&gt;</span></li>
							<li><span>&lt;tipo&gt;*  &lt;identificador&gt;</span></li>
						</ul>
					</div>
				</div>
			</v-timeline-item>
			<v-timeline-item :color="color" small>

				<div class="py-4">
					<div>
						<span>Cuando se declara una función virtual, esta permanecerá como una Función virtual en todas las capas de la jerarquía de clases.</span>
					</div>
				</div>
			</v-timeline-item>
			<v-timeline-item :color="color" small>

				<div class="py-4">
					<div>
						<span>La declaración de una función como virtual, permite que si una función es invocada a través de puntero a la clase Base o de un puntero a la clase Derivada, siempre se llama la función definida en la clase derivada.</span>
					</div>
				</div>
			</v-timeline-item>
			<v-timeline-item :color="color" small>
				<div class="py-4">
					<div>
						<span>--EJEMPLO---</span>
					</div>
				</div>
			</v-timeline-item>
			<v-timeline-item :color="color" small>
				<div class="py-4">
					<div>
						<span>Cuando una función virtual es redefinida en una clase derivada no es necesario definirla nuevamente como Virtual.</span>
					</div>
				</div>
			</v-timeline-item>
		</v-timeline>
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
