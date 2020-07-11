<script>

	//import Editor from '@/components/views/editor.vue'
	//import Compilador from '@/components/views/compilador.vue'
	//import juez from '@/components/views/juez.vue'

	export default {
		name: 'Sobrecarga',
		components: {
			//	Editor,
			//		Compilador,
		//	juez
		},
		props: {
			color: {
				type: String,
				required: true
			}
		},
		data: () => ({
			hidden: false,

			codigo:
				'#include <iostream>\nusing namespace std; \n\nint main() {\nint x=10;\nint y=25;\nint z=x+y;\n\ncout<< "Sum of x+y = " << z;\n}'
		}),
		methods: {
			// scrollWin: function() {
			// 	window.scrollTo(0, 0)
			// },
			// siguientePagina: function() {
			// 	if (this.page === this.numPaginas) {
			// 		this.page = this.numPaginas
			// 	} else {
			// 		this.page = this.page + 1
			// 	}
			// 	this.scrollWin()
			// },
			// anteriorPagina: function() {
			// 	if (this.page === 1) {
			// 		this.page = 1
			// 	} else {
			// 		this.page = this.page - 1
			// 	}
			// 	this.scrollWin()
			// }
		},
		created() {
		//	scrollWin: function() {
	      window.scrollTo(0, 0)
	    //},
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
	</v-container>

</template>

<style>

</style>
