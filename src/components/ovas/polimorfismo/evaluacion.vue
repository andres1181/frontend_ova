<script>

	import verdaderoFalso from '@/components/actividades/evaluacion/examen/verdaderoFalso.vue'
	import opcionMultiple from '@/components/actividades/evaluacion/examen/opcionMultiple.vue'
	import arrastrarSoltar from '@/components/actividades/evaluacion/examen/arrastrarysoltar.vue'

	export default {
		name: 'Evaluacion',
		components: {
			verdaderoFalso,
			opcionMultiple,
			arrastrarSoltar
		},
		data: () => ({
			componente: '',
			cont: 0,
			datos: '',
			resultados: [],
			vistaResultados: false,
			inicio: true,
			preguntas: [
				{
					id: '1234564',
					tipo: 'opcionMultiple',
					enunciado: 'Este deberia ser el enunciado de opcion multiple',
					opciones: [
						{
							respuesta: 'Uno',
							correcta: true
						},
						{
							respuesta: 'Dos',
							correcta: false
						},
						{
							respuesta: 'Tres',
							correcta: false
						},
						{
							respuesta: 'Cuatro',
							correcta: false
						}
					]
				},
				{
					id: '7687678',
					tipo: 'arrastrarSoltar',
					enunciado: 'Este deberia ser el enunciado de Arrastrar y soltar',
					opciones: [
						{
							texto: 'Uno',
							posicion: 1
						},
						{
							texto: 'Dos',
							posicion: 2
						},
						{
							texto: 'Tres',
							posicion: 3
						},
						{
							texto: 'Cuatro',
							posicion: 4
						}
					]
				},
				{
					id: '3453',
					tipo: 'verdaderoFalso',
					enunciado: 'Este deberia ser el enunciado de verdadero Falso',
					opciones: [
						{
							respuesta: 'true'
						}
					]
				}
			]
		}),
		methods: {
			/*	enviarResultado(info) {
							//this.informacion = info
							// eslint-disable-next-line no-console
							console.log('La respuesta es: ' + info)
						},*/
			calificar(array) {
				let tam = array.length
				var completo = false
				var correctas = 0
				for (var i = 0; i < array.length; i++) {
					if (array[i].result === true) {
						correctas = correctas + 1
					}
				}
				if (correctas == tam) {
					completo = true
				}

				return completo
			},
			iniciar() {
				this.componente = this.preguntas[this.cont].tipo
				this.datos = JSON.stringify(this.preguntas[this.cont])
				this.vistaResultados = false
				this.inicio = false
				this.cont = 0
			},
			nuevoIntento() {
				this.cont = 0
				this.vistaResultados = false
				this.inicio = true
				this.componente = ''
				this.resultados = []
			},
			enviarResultado(info) {
				this.resultados.push(info)
				this.cont = this.cont + 1
				this.informacion = this.cont
				if (this.cont < this.preguntas.length) {
					this.componente = this.preguntas[this.cont].tipo
					// eslint-disable-next-line no-console
					console.log(this.preguntas[this.cont].tipo)
					this.datos = JSON.stringify(this.preguntas[this.cont])
				}
				// eslint-disable-next-line no-console
				console.log(this.componente)
				// eslint-disable-next-line no-console
				console.log(info)
				// eslint-disable-next-line no-console
				console.log(this.cont)
				// eslint-disable-next-line no-console
				console.log(JSON.stringify(this.resultados))
			}
		},
		created() {}
	}

</script>

<template>

	<div>
		<component v-show="(!vistaResultados) && (!inicio) && (cont < preguntas.length)" :is="componente" :datos="datos" @click="enviarResultado"></component>
		<!-- <verdaderoFalso :enunciado="Enunciado" @click="enviarResultado"></verdaderoFalso>
				<opcionMultiple :datos="multiple" @click="enviarResultado"></opcionMultiple>-->
		<div v-show="(!vistaResultados) && (inicio)" class="" id="inicio">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
			Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
			dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			<v-btn @click="iniciar">
				Iniciar
			</v-btn>
		</div>
		<div v-show="(cont === preguntas.length) && (!inicio)" class="" id="resultados">
			<h4>Resultados</h4>
			<v-list two-line subheader>
      <v-subheader inset>Folders</v-subheader>

      <v-list-item
        v-for="(item, index) in preguntas"
        :key="item.id"
        @click=""
      >

        <v-list-item-content>
          <v-list-item-title v-text="'Pregunta ' + (index+1) "></v-list-item-title>
          <v-list-item-subtitle v-text="item.enunciado"></v-list-item-subtitle>
        </v-list-item-content>

         <v-list-item-action>
          <v-btn icon>
            <v-icon v-show="!resultados[index].result" color="red lighten-1">mdi-information</v-icon>
						<v-icon v-show="resultados[index].result" color="green lighten-1">mdi-checkbox-marked-circle</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
			</v-list>
			<v-btn @click="">
				Salir
			</v-btn>
			<v-btn @click="nuevoIntento">
				Nuevo intento
			</v-btn>
		</div>
	</div>

</template>

<style>

</style>
