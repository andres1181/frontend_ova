<script>

	import quiz from '@/components/views/quiz.vue'
	export default {
		name: 'Referencias',
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
				tema: 'referencias'
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

																		>Referencias</span>
																	</template>
				<div class="py-4">
					<h2 :class="`headline font-weight-light mb-4 ${color}--text`">¿Qué son?</h2>
					<div>
						<span>En C++ las referencias permiten darle un alias a una variable y realizar cambios sobre dicha variable utilizando el alias.</span>
					</div>
				</div>
			</v-timeline-item>
			<v-timeline-item :color="color" small>

				<div class="py-4">
					<div>
						<span>Para crear una referencia se utiliza el operador & antes de nombre de la referencia.</span>
					</div>
				</div>
			</v-timeline-item>
			<v-timeline-item :color="color" small>

				<div class="py-4">
					<div>
						<span>Las referencias tienen algunas características que las hacen diferentes a los punteros:</span>
						<ul>
							<li>Las referencias no pueden almacenar un valor nulo</li>
							<li>Las referencias deben inicializarse al momento en que se crean</li>
							<li>Las referencias no pueden reasignarse a otra variable</li>
						</ul>
					</div>
				</div>
			</v-timeline-item>
			<v-timeline-item :color="color" small>

				<div class="py-4">
					<h2 :class="`headline font-weight-light mb-4 ${color}--text`">Ejemplo</h2>
					<div>
						<span></span>
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
