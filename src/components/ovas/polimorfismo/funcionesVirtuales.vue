<script>

	import quiz from '@/components/views/quiz.vue'
	export default {
		name: 'FuncionesVirtuales',
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
				tema: 'funcionesVirtuales'
			}
		},
		methods: {},
		created() {
			console.log('FV Avance');
			console.log(this.avance);
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

																		>Funciones Virtuales</span>
																	</template>
				<div class="py-4">
					<h2 :class="`headline font-weight-light mb-4 ${color}--text`">¿Qué son?</h2>
					<div>
						<span>Las funciones virtuales permiten que las clases derivadas de una clase base, implementen de distintas formas un método creado en una clase base.</span>
					</div>
				</div>
			</v-timeline-item>
			<v-timeline-item :color="color" small>

				<div class="py-4">
					<div>
						<span>Para decirle al compilador que una función es virtual se utiliza la palabra virtual. Así, el compilador sabe que existen diferentes definiciones de una función.</span>
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
						<span>Cuando una función virtual es redefinida en una clase derivada no es necesario definirla nuevamente como Virtual.</span>
					</div>
				</div>
			</v-timeline-item>
		</v-timeline>

		<h2 :class="`headline font-weight-light mb-4 ${color}--text`">Ejemplo:</h2><br>
		<v-expansion-panels>
			<v-expansion-panel>
				<v-expansion-panel-header><span>Código fuente</span> <template v-slot:actions>
											<v-icon color="red">$expand</v-icon>
										</template></v-expansion-panel-header>
				<v-expansion-panel-content>
					<iframe height="400px" width="100%" src="https://repl.it/@ANDRESFELIPEF31/Funciones-vituales?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
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
