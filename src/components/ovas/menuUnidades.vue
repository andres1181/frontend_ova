<script>

	import { misMixins } from '@/mixins/mixins.js'

	export default {
		name: 'MenuUnidades',
		mixins: [misMixins],
		data() {
			return {
				unidades: [],
				dim: []
			}
		},
		created() {
			this.dim = this.obtenerDimensiones()
			this.unidades.push(JSON.parse(localStorage.getItem(`datospolimorfismo`)))
			this.unidades.push(JSON.parse(localStorage.getItem(`datospunterosCont`)))
			console.log(this.unidades)
		}
	}

</script>

<template>

	<v-row justify="center">
		<v-col cols="12" class="pa-0">
			<v-card elevation="2" :width="dim[1]" :height="dim[0]" class="pb-4 px-4 mb-1 mt-2 mx-7 rounded-lg">
				<v-row justify="center">
					<v-col class="pa-0 " cols="11">
						<v-card dark color="red" elevation="4" class="card_cabecera rounded-lg d-flex  align-center">
							<v-card-title class="align-center">
								<span class="headline font-weight-bold">Unidades</span>
							</v-card-title>
						</v-card>
					</v-col>
				</v-row>
				<v-row justify="center">
					<v-col cols="12" class="pa-2">
						<v-card outlined @click="$router.push({ name: 'punteros' }).catch(err => {})">
							<v-card-title class="headline">
								<v-icon large left>
									mdi-chart-tree
								</v-icon size="62"><span class="title font-weight-light">Punteros y Referencias</span>

							</v-card-title>
								<v-card-text>
									<ul>
										<li>Punteros</li>
										<li>Referencias</li>
										<li>Paso por referencia</li>
										<li>Arreglos dinámicos</li>
										<li>Matrices dinámicas</li>
									</ul>
								</v-card-text>
							<!--
								<v-card-actions>
									<v-btn text @click="$router.push({ name: 'reportes' }).catch(err => {})">
										Ver reportes

									</v-btn>
								</v-card-actions> -->
						</v-card>
					</v-col>
				</v-row>
				<v-row justify="center">
					<v-col cols="12" class="pa-2">
						<v-card outlined @click="$router.push({ name: 'polimorfismo' }).catch(err => {})">
							<v-card-title class="headline">
								<v-icon large left>
									mdi-chart-tree
								</v-icon size="62"><span class="title font-weight-light">Polimorfismo</span>

							</v-card-title>
							<v-card-text>
								<ul>
									<li>Herencia</li>
									<li>Funciones virtuales</li>
									<li>Sobrecarga</li>
									<li>Sobreescritura</li>
								</ul>
							</v-card-text>
							<!--
								<v-card-actions>
									<v-btn text @click="$router.push({ name: 'reportes' }).catch(err => {})">
										Ver reportes

									</v-btn>
								</v-card-actions> -->
						</v-card>
					</v-col>
				</v-row>
			</v-card>


		</v-col>
	</v-row>

</template>
