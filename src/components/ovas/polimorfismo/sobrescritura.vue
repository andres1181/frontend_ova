<script>

	export default {
		name: 'Sobreescritura',
		components: {},
		props: {
			color: {
				type: String,
				required: true
			}
		},
		data: () => ({}),
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
	</v-container>

</template>

<style>

</style>
