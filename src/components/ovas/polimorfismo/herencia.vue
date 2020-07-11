<script>

	//import dedent from 'dedent'
	//	import tooltip from '@/components/views/tooltip.vue
	import editor from '@/components/views/editor.vue'
	export default {
		name: 'Herencia',
		components: {
			//	tooltip
			editor
		},
		props: {
			color: {
				type: String,
				required: true
			}
		},
		data: () => ({
			codigoEditor: [
				'#include <iostream>\nusing namespace std;\n\n/* Con public */\nclass ClaseDerivada : public ClaseBase\n{ .... };\n\n/* Con private */\nclass ClaseDerivada : private ClaseBase\n{ .... };'
			]
		}),
		methods: {}
	}

</script>

<template >

	<v-container fluid>
		<v-timeline>
			<v-timeline-item :color="color" small>
				<template v-slot:opposite>
										        <span
										          :class="`headline font-weight-bold ${color}--text`"

										        >Herencia</span>
										      </template>
				<div class="py-4">
					<h2 :class="`headline font-weight-light mb-4 ${color}--text`">¿Qué es?</h2>
					<div>
						<span>La herencia es una característica que permite la transferencia de código desde una clase Base a una o más clases llamadas derivadas o hijas.</span>
					</div>
				</div>
			</v-timeline-item>
			<v-timeline-item :color="color" small>
				<div class="py-4">
					<div>
						Una clase derivada o hija puede utilizar todos los miembros de la clase base que sean públicos y tener sus propios miembros.
					</div>

				</div>
			</v-timeline-item>
			<v-timeline-item :color="color" small>

				<div class="py-4">
					<div>
						<span>En una clase hija la herencia se declara mediante dos puntos <span class="font-weight-bold">":"</span></span><br>

						<editor nombre="hija" :codigo="codigoEditor[0]"></editor>
					</div>
				</div>
			</v-timeline-item>
			<v-timeline-item :color="color" small>
				<div class="py-4">
					<h2 :class="`font-weight-light mb-4 ${color}--text`">Herencia publica</h2>
					<div>
						<span>Si la clase derivada se declara como public, los miembros que hereda de la clase base conservan el tipo de acceso con el que fueron declarados (public, protected).</span>
					</div>
				</div>
			</v-timeline-item>
			<v-timeline-item :color="color" small>
				<div class="py-4">
					<h2 :class="`font-weight-light mb-4 ${color}--text`">Herencia privada</h2>
					<div>
						<span>Si la clase derivada se declara como private, los miembros publicos y protegidos que hereda de la clase base pasan a ser privados en la clase hija.</span>
					</div>
				</div>
			</v-timeline-item>
			<v-timeline-item :color="color" small>
				<div class="py-4">
					<h2 :class="`font-weight-light mb-4 ${color}--text`">Herencia protegida</h2>
					<div>
						<span>Si la clase derivada se declara como protected, los miembros public que hereda de la clase base pasan a ser protected en la clase hija.</span>
					</div>
				</div>
			</v-timeline-item>
			<v-timeline-item :color="color" small>
				<div class="py-4">
					<h2 :class="`headline font-weight-light mb-4 ${color}--text`">Jerarquia de clases</h2>
					<div>
						<span>Cada clase hija puede convertirse en una clase base y tener sus propias clases hijas.
											</span>
					</div>
				</div>
			</v-timeline-item>
			<v-timeline-item :color="color" small>
				<div class="py-4">

					<div>
						<span>Así mismo, las clases hijas de otras clases hijas puede ser clases base y tener otras clases hijas, esto es conocido como <span class="font-italic">derivación múltiple.</span></span>
					</div>
				</div>
			</v-timeline-item>

		</v-timeline>
		<h2 :class="`headline font-weight-light mb-4 ${color}--text`">Ejemplo:</h2>
		<span>Queremos construir un programa que retorne información de profesores y estudiantes. Ambos tienen información en común: Edad, Nombre, Teléfono, etc.</span>
		<br> <span>También, tienen información única:</span>
		<ul>
			<li>Para el estudiante: Número de créditos, Promedio semestral.</li>
			<li>Para el profesor: Salario, Horas de trabajo.</li>
		</ul>
		<!-- <editor nombre="ejemploHerencia" :codigo="codigoEditor[1]"></editor> -->
		<iframe height="500px"
		        width="100%"
		        src="https://repl.it/@ANDRESFELIPEF31/Profesor?lite=true"
		        scrolling="no"
		        frameborder="no"
		        allowtransparency="true"
		        allowfullscreen="true"
		        sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
	</v-container>

</template>

<style>

</style>
