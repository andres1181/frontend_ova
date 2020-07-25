<script>

	import quiz from '@/components/views/quiz.vue'
	export default {
		name: 'Sobreescritura',
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
				tema: 'sobreescritura'
			}
		},
		methods: {
			scrollWin: function() {
				window.scrollTo(0, 0)
			}
		},
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

																			>Sobre escritura</span>
																		</template>
				<div class="py-4">
					<h2 :class="`headline font-weight-light mb-4 ${color}--text`">¿Qué es?</h2>
					<div>
						<span>Es la una característica de la programación orientada a objetos que permite que una función declarada en una clase base, pueda ser utilizada en sus clases hijas. </span>
					</div>
				</div>
			</v-timeline-item>
			<v-timeline-item :color="color" small>

				<div class="py-4">

					<div>
						<span>En la sobre escritura, a diferencia de la sobrecarga, la función conserva su nombre y tipo de datos de entrada y de salida. </span>
					</div>
				</div>
			</v-timeline-item>
		</v-timeline>
		<div class=" ma-2" v-if="aprobado===false">
			<v-row align="center" justify="center">
				<v-col class="text-center" cols="12" sm="12">
					<div>
						<h2 :class="`headline font-weight-light mb-1 ${color}--text`">Quiz</h2>
					</div>
				</v-col>
				<quiz :preguntas="listaPreguntas" :avance="avance"  :tema="tema"></quiz>

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
