<script>

	import tooltip from '@/components/views/tooltip.vue'
	export default {
		name: 'Introduccion',
		components: {
			tooltip
		},
		props: {
			color: {
				type: String,
				required: true
			}
		},
		data: () => ({
			palabras: [
				{
					palabra: 'función miembro',
					significado: 'En el lenguaje C++ las funciones miembro se declaran, se definen y se llaman.'
				}
			]
		}),
		methods: {}
	}

</script>

<template >

	<v-container fluid>
		<v-timeline>
			<v-timeline-item  :color="color" small>
				<template v-slot:opposite>
			        <span dark
			          :class="`headline font-weight-bold ${color}--text`"

			        >Introducción</span>
			      </template>
				<div class="py-4">
					<h2 :class="`headline font-weight-light mb-4 ${color}--text`">Objetivo</h2>
					<div>
						<span>Esta unidad tiene como objetivo <span class="font-italic"> &lt;&lt;Comprender el concepto de polimorfismo y su uso en la construcción de algoritmos&gt;&gt;.</span> </span>
					</div>
				</div>
			</v-timeline-item>
			<v-timeline-item :color="color" small>
				<div class="py-4">
					<h2 :class="`headline font-weight-light mb-4 ${color}--text`">¿Qué es el Polimorfismo?</h2>
					<div>
						Es la cualidad que tiene algo de tomar múltiples formas o diferentes estados. Es un concepto utilizado
						en áreas, tales como la química, biología, bioquímica, genética e informática.
					</div>

				</div>
			</v-timeline-item>
			<v-timeline-item :color="color" small>

				<div class="py-4">

					<div>
					<span>Es uno de los elementos más
						importantes de la Programación Orientada a Objetos. En C++ el polimorfismo significa que al llamar a una
						<tooltip titulo="función miembro"
						         :texto="palabras[0].significado"
						         	:concepto="palabras[0].palabra"

						         :color="color"></tooltip>, esta se comporta diferente dependiendo del objeto que la llame.</span>	 </div>
				</div>
			</v-timeline-item>
			<v-timeline-item :color="color" small>
				<div class="py-4">
					<div>
						<span>Para entender cómo funciona el polimorfismo en C++, es necesario comprender los siguientes conceptos:</span>
						<ul>
							<li>Herencia</li>
							<li>Funciones Virtuales</li>
							<li>Sobrecarga</li>
							<li>Sobreescritura</li>
						</ul>
					</div>

				</div>
			</v-timeline-item>
			<v-timeline-item :color="color" small>
				<div class="py-4">
					<div>
						<span>En el menú de la derecha podrás encontrar:</span>
						<ul>
							<li>Los enlaces a la explicación de cada uno de estos conceptos</li>
							<li>La actividad práctica de la unidad utilizando un Juez Online. </li>
							<li>Una sopa de letras con palabras relacionada con la unidad</li>
							<li>El Quiz de la unidad</li>
						</ul>
					</div>

				</div>
			</v-timeline-item>
		</v-timeline>
	</v-container>

</template>

<style>

</style>
