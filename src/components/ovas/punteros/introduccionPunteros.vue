<script>

	import tooltip from '@/components/views/tooltip.vue'
	export default {
		name: 'IntroduccionPunteros',
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
					palabra: 'bits',
					significado:
						'Bit es la abreviación de Binary digit, solo puede tomar valores de 1 y 0. Es la unidad mínima de información empleada en informática.'
				},
        {
					palabra: 'bytes',
					significado:
						'Conjuno de 8 bits. Es la unidad basica de información empleada en la computacion.'
				}
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

					        >Introducción</span>
					      </template>
				<div class="py-4">
					<h2 :class="`headline font-weight-light mb-4 ${color}--text`">Objetivo</h2>
					<div>
						<span>Esta unidad tiene como objetivo <span class="font-italic"> &lt;&lt;Comprender el concepto de punteros y algunos de sus usos en la construcción de algotirmos&gt;&gt;.</span>					</span>
					</div>
				</div>
			</v-timeline-item>


			<v-timeline-item :color="color" small>
				<div class="py-4">
					<div>
						<span>Para entender cómo funcionan los puteros es importante saber cómo funciona la memoria de un computador.	La memoria de un ordenador está compuesta por <tooltip titulo="bits"
		         :texto="palabras[0].significado"
              :concepto="palabras[0].palabra"
		         :color="color"></tooltip>.</span>

					</div>

				</div>
			</v-timeline-item>
      <v-timeline-item :color="color" small>
        <div class="py-4">
          <div>
            <span>Estos bits se agrupan en <tooltip titulo="Bytes"
             :texto="palabras[1].significado"
             :concepto="palabras[1].palabra"
             :color="color"></tooltip>. Cada Byte ocupa un espacio de la memoria. Estos espacios en memoria tienen asociados una dirección de memoria. </span>

          </div>

        </div>
      </v-timeline-item>
      <v-timeline-item :color="color" small>
        <div class="py-4">
          <div>
            <span>La mayoría de objetos de C++ no caben en un byte, por lo que utilizan varios bytes consecutivos y su dirección de memoria corresponde al primer byte que ocupen. </span>

          </div>

        </div>
      </v-timeline-item>
      <v-timeline-item :color="color" small>
        <div class="py-4">
          <div>
            <span>Tamaño de los diferentes tipos de datos en C++: </span>
            <ul>
              <li>Int: 4 byte</li>
              <li>Double: 8 byte</li>
              <li>Char: 1 byte</li>
              <li>Float: 4 byte</li>
              <li>Bool: 1 byte</li>
            </ul>
          </div>

        </div>
      </v-timeline-item>
			<v-timeline-item :color="color" small>
				<div class="py-4">
					<div>
						<span>En el menú de la derecha podrás encontrar:</span>
						<ul>
							<li>Los enlaces a cada uno de estos conceptos relacionados con punteros</li>
							<li>La actividad práctica de la unidad utilizando un Juez Online. </li>
							<li>Al finalizar cada tema hay un pequeño quiz. Puedes visualizar si ya lo has aprobado en el menú.</li>
						</ul>
					</div>

				</div>
			</v-timeline-item>
		</v-timeline>
	</v-container>

</template>

<style>

</style>
