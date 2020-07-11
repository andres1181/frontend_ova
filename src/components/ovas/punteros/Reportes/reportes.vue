<script>

	import reportesGrupales from '@/components/views/Docente/Reportes/reportesGrupales.vue'

	export default {
		name: 'reportes',
		//Agregar un prop con codigo de entrada
		// Para el juez:
		//
		/*	props: {
					datos: {
		        type: String,
		        required: true
		      }
				},*/
		components: {
			reportesGrupales //debe mostrar reporte separados por grupos
			// TODO: reportes generales debe mostrar un reporte global
		},
		data: () => ({})
	}

</script>

<template>



			<reportesGrupales>
			</reportesGrupales>



</template>

<style>

	#resultado {
		text-align: left;
		height: 120px;
		background-color: black;
		color: gray;
	}

</style>
