<script>

	import { misMixins } from '@/mixins/mixins.js'
	import Editor from '@/components/views/editor.vue'
	//	import draggable from 'vuedraggable'
	export default {
		name: 'parejasCodigo',
		props: {
			datos: {
				type: String,
				require: true
			}
		},

		components: {
			Editor
			//draggable
		},
		data: () => ({
			//definiciones: [],
			conceptos: [],
			unidad: '',
			respuestas: [],
			items: [],
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
			result: null
		}),
		mixins: [misMixins],
		methods: {
			asignarDatos() {
				this.info = JSON.parse(this.datos)
				this.enunciado = this.info.enunciado
				this.items = this.shuffle(this.info.opciones)
				var tam = this.items.length

				for (var i = 0; i < tam; i++) {
					this.conceptos[i] = this.items[i].concepto
				}

				this.shuffle(this.conceptos)
			},
			enviarResultado() {
				this.revisarRespuesta()
				this.$emit('click', { id: this.info.id, result: this.result })
			},
			revisarRespuesta() {
				var n = 0
				var tam = this.items.length
				// eslint-disable-next-line no-console
				console.log(this.items[0].concepto)
				for (var i = 0; i < tam; i++) {
					if (this.items[i].concepto === this.respuestas[i]) {
						n = n + 1
						// eslint-disable-next-line no-console
						console.log('n: ' + n)
					}
				}
				if (n === tam) {
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

		<v-card outlined class="mx-auto">
			<v-card outlined flat>
				<p>Analiza el codigo y elige a que tema corresponde</p>
			</v-card>
			<v-container>
				<v-row >
					<v-col >
			<Editor :codigo="items[0].codigo"></Editor>
			<v-list-item-title class="headline mb-1">
				<v-select v-model="respuestas[0]"
									:items="conceptos"
									item-text="concepto"
										label="Temas: "

									dense
									solo></v-select>
			</v-list-item-title>
		</v-col>
		</v-row >
		</v-container>
	<!--			<v-container>
				<v-row dense>
<Editor v-for="(item, i) in items"
			 :key="i"
			 cols="12" :codigo="item.codigo"></Editor>
					<v-col v-for="(item, i) in items"
					       :key="i"
					       cols="12">
						<v-card outlined class="pa-1">
							<v-list-item-title class="headline mb-1">
								<v-select v-model="respuestas[i]"
								          :items="conceptos"
								          item-text="concepto"
								          dense
								          solo></v-select>
							</v-list-item-title>



						 <div class="d-flex flex-no-wrap justify-space-between">
									<div>
										<v-card-title
														class="headline"
														v-text="item.title"
													></v-card-title>

										<v-card-subtitle  v-text="item.definicion"></v-card-subtitle>
									</div>


								</div>
						</v-card>

					</v-col>
				</v-row>
			</v-container>-->

		</v-card>
		{{respuestas}}
		<v-btn @click="enviarResultado">
			Enviar
		</v-btn>
	</div>

</template>

<style >



</style>
