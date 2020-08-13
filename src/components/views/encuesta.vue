<script>

	import { misMixins } from '@/mixins/mixins.js'
	export default {
		name: 'Encuesta',

		data: () => ({
			dim: []
		}),
		mixins: [misMixins],
		created() {
			this.dim = this.obtenerDimensiones()
		}
	}

</script>

<template>

	<v-row justify="center">
		<v-col cols="12" class="pa-0">
			<v-card elevation="2" :width="dim[1]" :height="dim[0]" class="pb-4 px-4 mb-3 mt-4 mx-2 rounded-lg">

				<v-row justify="center">
					<v-col class="pa-0 " cols="11">
						<v-card dark color="red" elevation="5" class="card_cabecera rounded-lg d-flex  align-center">
							<v-card-title class="align-center">

								<span class="headline font-weight-bold">Encuesta</span>
							</v-card-title>
						</v-card>
					</v-col>
				</v-row>

				<v-row justify="center">
					<v-col cols="12" sm="12" md="12" lg="12" xl="12" class="pa-0">
						<v-card :height="dim[0]-80" class="overflow-hidden" flat>
							<v-card-title class="headline">Encuesta</v-card-title>
							<v-card-text>
								<iframe v-if="this.obtenerDatos().tipo === 'estudiante'"
								        src="https://docs.google.com/forms/d/e/1FAIpQLScWMKh5cLWVuoP_WOcCN7a_pTIT3KFCskslEs1ooNj-7OYFUQ/viewform?embedded=true"

								        width="100%"
								        height="520"
								        frameborder="0"
								        marginheight="0"
								        marginwidth="0">Cargando…</iframe>
								<iframe v-if="this.obtenerDatos().tipo === 'docente'"
								        src="https://docs.google.com/forms/d/e/1FAIpQLScUE1GXaCxNmx8xTrnO2mlAzaAGQPPEbAKtdHppJmGeeFgRVw/viewform?embedded=true"

								        width="100%"
								        height="520"
								        frameborder="0"
								        marginheight="0"
								        marginwidth="0">Cargando…</iframe>
								<restringido v-else></restringido>
							</v-card-text>
						</v-card>
					</v-col>
				</v-row>

			</v-card>
		</v-col>
	</v-row>

</template>

<style>

</style>
