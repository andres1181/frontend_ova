<script>

	export default {
		name: 'Arreglos',
		components: {},
		props: {
			color: {
				type: String,
				required: true
			}
		},
		data: () => ({}),
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

																	>Arreglos Dinamicos</span>
																</template>
				<div class="py-4">
					<h2 :class="`headline font-weight-light mb-4 ${color}--text`">¿Qué es?</h2>
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
	</v-container>

</template>

<style>

</style>
