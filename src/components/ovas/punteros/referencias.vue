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
				<template v-slot:opposite>
								<v-card class="mx-auto pa-3" outlined><v-list-item-title class="grey--text">tipo_objeto & nombre_refencia  = variable_a_referenciar</v-list-item-title></v-card>
				</template>
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
		</v-timeline>
		<h2 :class="`headline font-weight-light mb-4 ${color}--text`">Ejemplo:</h2>
		<v-expansion-panels>
			<v-expansion-panel>
				<v-expansion-panel-header><span>Código fuente</span> <template v-slot:actions>
										<v-icon color="red">$expand</v-icon>
									</template></v-expansion-panel-header>
				<v-expansion-panel-content>
				<iframe height="400px" width="100%" src="https://repl.it/@ANDRESFELIPEF31/Referencia?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
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
