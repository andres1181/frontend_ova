<script>

	import { misMixins } from '@/mixins/mixins.js'
	import restringido from '@/components/views/accesoRestringido.vue'
	export default {
		name: 'menuAdministrador',
		props: {
			nombre: {
				type: String,
				require: true
			}
		},
		mixins: [misMixins],
		components: {
			restringido
		},
		data: () => ({
			dim: []
		}),
		created() {
			this.dim = this.obtenerDimensiones()
		}
	}

</script>

<template>

	<v-row justify="center">
		<v-col cols="8" v-if="this.obtenerDatos().tipo === 'administrador'">
			<v-card elevation="2" :width="dim[1]" :height="dim[0]" class="pb-4 px-4 mb-1 mt-2 mx-7 rounded-lg">
				<v-row justify="center">
					<v-col class="pa-0 " cols="11">
						<v-card dark color="red" elevation="6" class="card_cabecera d-flex  align-center">
							<v-card-title class="align-center">
								<span class="headline font-weight-bold">Menu</span>
							</v-card-title>
						</v-card>
					</v-col>
				</v-row>
				<v-row justify="center">
					<v-col cols="12" class="pa-2">
						<v-card outlined @click="$router.push({ name: 'crearUnidades' }).catch(err => {})">
							<v-card-title class="headline">
								<v-icon large left>
									mdi-chart-tree
								</v-icon size="62"><span class="title font-weight-light">Crear Unidades y Temas</span>
								<v-spacer></v-spacer>
								<v-icon class="mr-1">mdi-arrow-right</v-icon>
							</v-card-title>
						</v-card>
					</v-col>
				</v-row>
				<v-row justify="center">
					<v-col cols="12" class="pa-2">
						<v-card outlined @click="$router.push({ name: 'registroAdministrador' }).catch(err => {})">
							<v-card-title class="headline">
								<v-icon large left>
									mdi-file-document-edit
								</v-icon size="62"><span class="title font-weight-light">Registrar Usarios</span>
								<v-spacer></v-spacer>
								<v-icon class="mr-1">mdi-arrow-right</v-icon>
							</v-card-title>
						</v-card>
					</v-col>
				</v-row>
				<v-row justify="center">
					<v-col cols="12" class="pa-2">
						<v-card outlined @click="$router.push({ name: 'crearJuez' }).catch(err => {})">
							<v-card-title class="headline">
								<v-icon large left>
									mdi-chart-tree
								</v-icon size="62"><span class="title font-weight-light">Crear Actividad Reto</span>
								<v-spacer></v-spacer>
								<v-icon class="mr-1">mdi-arrow-right</v-icon>
							</v-card-title>
						</v-card>
					</v-col>
				</v-row>
				<v-row justify="center">
					<v-col cols="12" class="pa-2">
						<v-card outlined @click="$router.push({ name: 'preguntas' }).catch(err => {})">
							<v-card-title class="headline">
								<v-icon large left>
									mdi-file-document-edit
								</v-icon size="62"><span class="title font-weight-light">Crear Preguntas</span>
								<v-spacer></v-spacer>
								<v-icon class="mr-1">mdi-arrow-right</v-icon>
							</v-card-title>
						</v-card>
					</v-col>
				</v-row>
			</v-card>
		</v-col>
		<v-col v-else cols="12">
			<restringido></restringido>
		</v-col>
	</v-row>

</template>
