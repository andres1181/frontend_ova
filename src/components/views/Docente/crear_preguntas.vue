<script>

	import crearfalsoVerdadero from '@/components/views/Docente/Preguntas/falsoYverdadero.vue'
	import crearOpcionMultiple from '@/components/views/Docente/Preguntas/CrearOpcionMultiple.vue'
	import ordenar from '@/components/views/Docente/Preguntas/ordenar.vue'

	export default {
		name: 'Crear',
		components: {
			crearfalsoVerdadero,
			crearOpcionMultiple,
			ordenar
		},

		data: () => ({
			//	ver: false,
			select: { text: '', componente: '' },
			id: '12234',
			items: [
				{ text: 'Opción Multiple', componente: 'crearOpcionMultiple' },
				{ text: 'Verdadero y Falso', componente: 'crearfalsoVerdadero' },
				{ text: 'Ordenar', componente: 'ordenar' },
				{ text: 'Parejas', componente: 'crearfalsoVerdadero' }
			]
		}),
		methods: {}
	}

</script>

<template>

	<v-container>
		<v-card class="pa-2">
			<v-row>
				<v-col cols="12" md="12">
					<v-select v-model="select"
					          :items="items"
					          item-text="text"
					          label="Tipo de pregunta"
					          return-object
					          outlined>

					</v-select>

				</v-col>
				<v-col cols="12" md="12">
					<component v-if="select.componente !== ''" :is="select.componente" :id="id"></component>
				</v-col>
			</v-row>

		</v-card>
	</v-container>

</template>

<style>

</style>
