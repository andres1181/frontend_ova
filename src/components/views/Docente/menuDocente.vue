<script>

	import { misMixins } from '@/mixins/mixins.js'
	export default {
		name: 'menuDocente',
		props: {
			nombre: {
				type: String,
				require: true
			}
		},
		mixins: [misMixins],
		data: () => ({
			// v-show="usuario.tipo=='estudiante' && $route.name!='login' && $route.name!='registro'"
			dim: [],
			reportes: [
				{ titulo: 'Global', contenido: 'reportesGlobales' },
				{ titulo: 'Por grupo', contenido: 'reportesGrupales' }
			]
		}),
		created() {
			this.dim = this.obtenerDimensiones()
		}
	}

</script>

<template>

	<v-row justify="center">
		<v-col cols="8">
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
						<v-card outlined @click="$router.push({ name: 'preguntas' }).catch(err => {})">
							<v-card-title class="headline">
								<v-icon large left>
									mdi-file-document-edit
								</v-icon size="62"><span class="title font-weight-light">Crear Actividades</span>
								<v-spacer></v-spacer>
								<v-icon class="mr-1">mdi-arrow-right</v-icon>
							</v-card-title>

							<!-- <v-card-actions>
									<v-btn text @click="$router.push({ name: 'preguntas' }).catch(err => {})">
										Crear Actividades

									</v-btn>
								</v-card-actions> -->
						</v-card>
					</v-col>
				</v-row>
				<v-row justify="center">
					<v-col cols="12" class="pa-2">
						<v-card outlined @click="$router.push({ name: 'crearGrupo' }).catch(err => {})">
							<v-card-title class="headline">
								<v-icon large left>
									mdi-account-group
								</v-icon size="62"><span class="title font-weight-light">Grupos</span>
								<v-spacer></v-spacer>
								<v-icon class="mr-1">mdi-arrow-right</v-icon>
							</v-card-title>
							<!--
								<v-card-actions>
									<v-btn text @click="$router.push({ name: 'crearGrupo' }).catch(err => {})">
										Grupos
									</v-btn>
								</v-card-actions> -->
						</v-card>
					</v-col>
				</v-row>

			</v-card>
		</v-col>
	</v-row>

</template>
