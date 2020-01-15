<script>

	export default {
		name: 'unidad',
		components: {},
		data: () => ({
			color: '#4CBAC4',
			color2: '#3cd3ad',
			color3: '#737373',
      usuario:[],

			value: 23,
			unidades: [
				{
					titulo: 'Punteros',
					color: '#FF9A40',
					ruta: '/estudiante/unidades/punteros',
					progreso: 10
				},
				{
					titulo: 'Polimorfismo',
					color: '#34CF47',
					ruta: '/estudiante/unidades/polimorfismo',
					progreso: 60
				},
				{
					titulo: 'Estilo de Programación',
					color: '#2DA1AC',
					ruta: '/estudiante/unidades/estilo',
					progreso: 90
				}
			],
			contenido: 'Contenido'
		})
	}

</script>

<template>

	<v-row>
		<v-col v-for="(uni, i) in unidades"
		       :key="i"
		       cols="12"
		       sm="12"
		       md="6"
		       class="my-4">
           <v-hover v-slot:default="{ hover }">
			<v-card id="uni" color="grey lighten-4" height="200px" :elevation="hover ? 12 : 2" >
				<v-toolbar color="white" light justify="center" class="elevation-0">
					<v-spacer vertical class="pa-2"></v-spacer>
					<v-toolbar-title>{{uni.titulo}}</v-toolbar-title>
					<v-spacer vertical class="pa-2"></v-spacer>
				</v-toolbar>

				<v-progress-linear v-model="uni.progreso"
				                   color="#34CF47"
                           dark
				                   height="25"

                           :value='uni.progreso'
				                   >
					<template>
			     <strong>{{ Math.ceil(uni.progreso) }}%</strong>
			   </template>
				</v-progress-linear>
				<v-list class="grow">
					<v-list-item @click="$router.push({ path: uni.ruta })">
            <v-icon class="mx-2">mdi-book-open-page-variant</v-icon>
            <v-divider vertical class="mx-2"></v-divider>
						<v-list-item-content>
							<v-list-item-title>Lección</v-list-item-title>
						</v-list-item-content>
						<v-icon class="mx-2">mdi-arrow-right-drop-circle</v-icon>
					</v-list-item>
					<v-divider></v-divider>

					<v-list-item @click="">

            <v-icon class="mx-2">mdi-iframe-braces</v-icon>
            <v-divider vertical class="mx-2"></v-divider>
						<v-list-item-content>
							<v-list-item-title>Evaluación</v-list-item-title>
						</v-list-item-content>
						<v-icon class="mx-2">mdi-arrow-right-drop-circle</v-icon>
					</v-list-item>
				</v-list>
			</v-card>
       </v-hover>
		</v-col>
	</v-row>

</template>

<style>
#uni{
	-webkit-border-radius: 15px;
-moz-border-radius: 15px;
border-radius: 15px;
}
</style>
