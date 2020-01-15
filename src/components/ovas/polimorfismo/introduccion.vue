<script>

	export default {
		name: 'Introduccion',
		data: () => ({
			numPaginas: 2,
			page: 1,
			items: [
				{
					color: 'red lighten-2',
					icon: 'mdi-star'
				},
				{
					color: 'purple darken-1',
					icon: 'mdi-book-variant'
				},
				{
					color: 'green lighten-1',
					icon: 'mdi-airballoon'
				},
				{
					color: 'indigo',
					icon: 'mdi-buffer'
				}
			]
		}),
		methods: {
			siguientePagina: function(){
				this.page = this.page + 1
			},
			anteriorPagina: function(){
				this.page = this.page - 1
			}
		}
	}

</script>

<template >
	<v-container fluid>
		<v-row justify="center">
	<v-timeline v-show="page == 1" reverse align-top :dense="$vuetify.breakpoint.smAndDown">
		<v-timeline-item
		                 color="red lighten-2"
		                 icon="mdi-book-variant"
		                 fill-dot>
			<v-card color="red lighten-2" dark>
				<v-card-title class="title">Introducción</v-card-title>
				<v-card-text class="white text--primary">
					<p>Uno de los elementos más importantes de la programación orientada a objetos es el polimorfismo y aunque en un principio
						este puede ser parecer complicado de entender, no es tan complicado.</p>
					<!-- <v-btn color="red lighten-2"
					       class="mx-0"
					       outlined>
						Button
					</v-btn> -->
				</v-card-text>
			</v-card>
		</v-timeline-item>
		<v-timeline-item
										 color="red lighten-2"
										 icon="mdi-book-variant"
										 fill-dot>
			<v-card color="red lighten-2" dark>
				<v-card-title class="title">Objetivos</v-card-title>
				<v-card-text class="white text--primary">
					<ol>

						<li value="1">Comprender el concepto de polimorfismo y su uso en la construcción de algoritmos.</li>
						<li>Conocer las caracteristicas, usos y diferencias los tipos de polimorfismo utilizados en C++. </li>
						<li>Comprender el funcionamiento del polimorfismo en la implementación de algoritmos en el lenguaje de programación C++. </li>

					</ol>
					<!-- <v-btn color="red lighten-2"
								 class="mx-0"
								 outlined>
						Button
					</v-btn> -->
				</v-card-text>
			</v-card>
		</v-timeline-item>
		<v-btn color="red lighten-2"
					 class="mx-0"
					 outlined @click="siguientePagina()">
			Siguiente
		</v-btn>
	</v-timeline>
	<v-timeline v-show="page == 2" reverse align-top :dense="$vuetify.breakpoint.smAndDown">
		<v-timeline-item
		                 color="red lighten-2"
		                 icon="mdi-book-variant"
		                 fill-dot>
			<v-card color="red lighten-2" dark>
				<v-card-title class="title">¿Qué es el Polimorfismo?</v-card-title>
				<v-card-text class="white text--primary">
					<p>En su significado general, el polimorfismo se refiere a la cualidad que tiene algo de tomar múltiples formas o diferentes
						estados. El polimorfismo es un concepto utilizado en diferentes áreas, tales como la quimica, biologia, bioquimica,
						genetica e informática. <br> Etimológicamente la palabra polimorfismo tiene origen en el griego: <br>
						<span class="negrita_">Poli (Muchos)  + Morfo (Forma) +  Ismo( Actividad)</span>
						En esta unidad estudiaremos el polimorfismo en la Programación Orientada a Objetos.
					</p>
					<!-- <v-btn color="red lighten-2"
					       class="mx-0"
					       outlined>
						Button
					</v-btn> -->
				</v-card-text>
			</v-card>

		</v-timeline-item>
		<v-timeline-item
										 color="red lighten-2"
										 icon="mdi-book-variant"
										 fill-dot>
			<v-card color="red lighten-2" dark>
				<v-card-title class="title">Objetivos</v-card-title>
				<v-card-text class="white text--primary">
					<p>
						Antes de explicar en qué consiste cada tipo de polimorfismo, en la sección 'Conceptos Previos', daremos un repaso a algunos conceptos necesarios para entender el funcionamiento de los diferentes tipos de polimorfismo.
						<br> Los conceptos que debemos tener en cuenta para comprender el polimorfismo son: <br>
						</p>
						<ol>
							<li value="1"> Herencia</li>
							<li>Funciones virtuales</li>
							<li>Constructores virtuales</li>
							<li>Destructores virtuales</li>
							<li>Clases abstractas</li>
						</ol>
					<!-- <v-btn color="red lighten-2"
								 class="mx-0"
								 outlined>
						Button
					</v-btn> -->
				</v-card-text>
			</v-card>
		</v-timeline-item>
		<v-btn color="red lighten-2"
					 class="mx-0"
					 outlined @click="siguientePagina()">
			Siguiente
		</v-btn>
	</v-timeline>
</v-row>
</v-container>

</template>

<style>

</style>
