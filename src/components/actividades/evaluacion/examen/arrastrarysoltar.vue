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
		data: () => ({
			items: null,
			/*
				{
				posicion: number,
				texto: String,
				}
				*/
			/* [
					{
						id: 1,
						name: '<p<#include <iostream>       using namespace std; int main()'
					},
					{
						id: 2,
						name: '{        int a = 0,        b = 0,        c = 0;        cout << "ingrese un numero: ";cin >> a;       '
					},
					{
						id: 3,
						name: 'cout<<" ingrese otro numero: ";cin>>b;'
					},
					{
						id: 4,
						name: 'Karen ldldldl'
					}
				]*/
				info: null,
				enunciado: '',
			result: null,
			enabled: true,
			dragging: false
		}),
		mixins: [misMixins],
		methods: {
			asignarDatos() {
				this.info = JSON.parse(this.datos)
				this.enunciado = this.info.enunciado
				this.items = this.shuffle(this.info.opciones)
			},
			enviarResultado() {
				this.revisarRespuesta()
				this.$emit('click', { id: this.info.id, result: this.result })
			},
			revisarRespuesta() {
				var cont = 0
				var tam = this.items.length
				for (var i = 1; i <= tam; i++) {
					if (this.items[i-1].posicion === i) {
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
			//this.items2 = this.shuffle(this.items)
		}
	}

</script>

<template>

	<div>

		<v-card outlined flat>
			<!-- <v-list>
						<v-list-item>
							<v-list-item-action>
								<h4>2</h4>
							</v-list-item-action>
							<v-list-item-content>
								<v-list-item-title>I'm a item</v-list-item-title>
							</v-list-item-content>
						</v-list-item>
					</v-list> -->
				<p>{{enunciado}}</p>
				<draggable
         :list="items"
         :disabled="!enabled"
         class="list-group "
         ghost-class="ghost"

         @start="dragging = true"
         @end="dragging = false"
       >
         <div
           class="list-group-item element"
           v-for="element in items"
           :key="element.posicion"
         >
           {{ element.texto }}
         </div>
       </draggable>

		</v-card>
		<v-btn @click="enviarResultado">
			Enviar
		</v-btn>
	</div>

</template>

<style >
.element{
	min-height: 50px;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;

}
</style>
