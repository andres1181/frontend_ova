<script>

	import { misMixins } from '@/mixins/mixins.js'

	import draggable from 'vuedraggable'
	export default {
		name: 'arrastrarSoltar',
		props: {
			datos: {
				type: String,
				require: true
			}
		},

		components: {
			draggable
			// SortableItem,
			// SortableList
		},
		data() {
			return {
				opciones: null,
				info: null,
				enunciado: '',
				result: null,
				enabled: true,
				dragging: false
			}
		},
		mixins: [misMixins],
		methods: {
			asignarDatos() {
				this.info = JSON.parse(this.datos)
				this.enunciado = this.info.enunciado
				this.opciones = this.shuffle(this.info.opciones)
			},
			enviarResultado() {
				this.revisarRespuesta()
				this.$emit('click', { id: this.info._id, result: this.result })
			},
			revisarRespuesta() {
				var cont = 0
				var tam = this.opciones.length
				for (var i = 1; i <= tam; i++) {
					if (this.opciones[i - 1].posicion === i) {
						cont = cont + 1
					}
				}
				if (cont === tam) {
					this.result = true
				} else {
					this.result = false
				}
			}
		},
		created() {
			this.asignarDatos()
		}
	}

</script>

<template>

	<v-container fluid>

		<v-card outlined class=" pa-2 ma-2">
			<p>{{enunciado}}</p>
		</v-card>
		<draggable :list="opciones"
		           :disabled="!enabled"
		           class="list-group "
		           ghost-class="ghost"
		           @start="dragging = true"
		           @end="dragging = false">
			<v-card color="blue-grey" dark
			        class="ma-2 pa-4 list-group-item element"
			        v-for="element in opciones"
			        :key="element.posicion">
				{{ element.texto }}
			</v-card>
		</draggable>

		<v-btn block color="secondary" dark @click="enviarResultado">
			Enviar
		</v-btn>
	</v-container>

</template>

<style >

	.element {
		min-height: 50px;
	}
	.ghost {
		opacity: 0.5;
		background: #c8ebfb;
	}

</style>
