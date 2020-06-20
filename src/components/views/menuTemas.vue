<script>

	export default {
		name: 'unidad',
		components: {},
		data: () => ({
			color: '#4CBAC4',
			color2: '#3cd3ad',
			color3: '#737373',
			usuario: [],

			value: 23,
			temas: [
				{color: '#385F73', titulo: 'Introducción', contenido: 'introduccionP' },
				{color: '#385F73', titulo: 'Conceptos', contenido: 'conceptos' },
				{ color: '#385F73',titulo: 'Sobrecarga', contenido: 'sobrecarga' },
				{ color: '#385F73',titulo: 'Sobrescritura', contenido: 'sobreescritura' },
				{ color: '#385F73',titulo: 'Genericidad', contenido: 'genericidad' },
				{color: '#385F73', titulo: 'Variables polimorficas', contenido: 'polimorficas' }
			],
			items: [
				{
					color: '#385F73',
					title: 'Polomorfismo',
					artist: 'Foster the People',
					ruta: '/estudiante/unidades/polimorfismo/introduccionP'
				},
				{
					color: '#1F7087',

					title: 'Punteros',
					artist: 'Listen to your favorite artists and albums whenever and wherever, online and offline.',
					ruta: '/estudiante/unidades/polimorfismo/introduccionP'
				},
				{
					color: '#952175',
					title: 'Estilo de programación',
					artist: 'Ellie Goulding'
				}
			],
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
		<!-- <v-col v-for="(uni, i) in unidades"
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
						</v-col> -->

		<v-container>
			<v-row dense>
				<!-- <v-col cols="12">
				          <v-card
				            color="#385F73"
				            dark
				          >
				            <v-card-title class="headline">Unlimited music now</v-card-title>

				            <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>

				            <v-card-actions>
				              <v-btn text>Listen Now</v-btn>
				            </v-card-actions>
				          </v-card>
				        </v-col> -->

				<v-col v-for="(tema, i) in temas"
				       :key="i"
				       cols="3">
					<v-card flat color="white" light  @click="$router.push({ name: `${tema.contenido}` })">

						<v-card-title class="headline" v-text="`Tema: ${i+1}`"></v-card-title>
						<v-card-subtitle v-text="tema.titulo"></v-card-subtitle>
						<!-- <v-card-actions>
							<v-row align="center"
							       justify="end">
								<v-btn text  @click="$router.push({ name: `${tema.ruta}` })">Iniciar</v-btn>
							</v-row>
						</v-card-actions> -->

					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</v-row>

</template>

<style>

	#uni {
		-webkit-border-radius: 15px;
		-moz-border-radius: 15px;
		border-radius: 15px;
	}

</style>
