<script>

	export default {
		name: 'listOVAs',
		components: {},
		data: () => ({
			color: 'rgb(0, 204, 197)',
			color2: '#ea4c89',
			unidades: [
				{
					title: 'Punteros',
					temas: [{ title: 'Herencia' }, { title: 'Polimorfismo A-doc' }, { title: 'Concurrencia' }]
				},
				{
					title: 'Polimorfismo',
					temas: [{ title: 'Herencia' }, { title: 'Polimorfismo A-doc' }, { title: 'Concurrencia' }]
				},
				{
					title: 'Estilo de programación',
					temas: [{ title: 'Herencia' }, { title: 'Polimorfismo A-doc' }, { title: 'Concurrencia' }]
				}
			],
			items: [
				{
					action: 'mdi-account',
					title: 'Perfil',
					items: [{ title: 'Editar Perfil' }, { title: 'Cerrar Sesión' }]
				},
				{
					action: 'mdi-school',
					title: 'Unidades',
					items: [
						{
							title: 'Punteros',
							temas: [{ title: 'Herencia' }, { title: 'Polimorfismo A-doc' }, { title: 'Concurrencia' }]
						},
						{
							title: 'Polimorfismo',
							temas: [{ title: 'Herencia' }, { title: 'Polimorfismo A-doc' }, { title: 'Concurrencia' }]
						},
						{
							title: 'Estilo de programación',
							temas: [{ title: 'Herencia' }, { title: 'Polimorfismo A-doc' }, { title: 'Concurrencia' }]
						}
					]
				},
				{
					action: 'mdi-poll',
					title: 'Progreso',
					items: [{ title: 'List Item' }]
				},
				{
					action: 'mdi-help',
					title: 'Ayuda',
					items: [{ title: 'Ayuda' }, { title: 'Acerca de' }, { title: 'Mapa del sitio' }]
				},
				{
					action: 'mdi-ballot',
					title: 'Encuesta',
					items: [{ title: 'List Item' }]
				}
			]
		})
	}

</script>

<template>

	<v-container class="ma-0 pa-0">
		<v-row justify="center">
			<v-col cols="12" sm="12" md="12" lg="12" xl="12" class="pa-0">

				<v-list max-height= "100em"
       class="overflow-y-auto">
					<v-list-group prepend-icon="mdi-account" no-action>
						<template v-slot:activator>
												        <v-list-item-content>
												          <v-list-item-title>Perfil</v-list-item-title>
												        </v-list-item-content>
												      </template>

						<v-list-item @click="">
							<v-list-item-content>
								<v-list-item-title >Editar Perfil</v-list-item-title>
							</v-list-item-content>
						</v-list-item>
						<v-list-item @click="">
							<v-list-item-content>
								<v-list-item-title>Cerrar Sesión</v-list-item-title>
							</v-list-item-content>
						</v-list-item>
					</v-list-group>

					<v-list-group prepend-icon="mdi-school" no-action>
						<template v-slot:activator>
																<v-list-item-content>
																	<v-list-item-title>Unidades</v-list-item-title>
																</v-list-item-content>
															</template>

															<v-list-group
															v-for="(unidad, i) in unidades"
															:key="i"
									            no-action
									            sub-group
									            value="true"

									          >
									            <template v-slot:activator>
									              <v-list-item-content>
									                <v-list-item-title>{{unidad.title}}</v-list-item-title>
									              </v-list-item-content>
									            </template>

									            <v-list-item
									              v-for="(tema, i) in unidad.temas"
									              :key="i"
									              link
									            >
									              <v-list-item-title v-text="tema.title"></v-list-item-title>

									            </v-list-item>
									          </v-list-group>
					</v-list-group>

					<v-list-group prepend-icon="mdi-help" no-action>
						<template v-slot:activator>
												        <v-list-item-content>
												          <v-list-item-title>Ayuda</v-list-item-title>
												        </v-list-item-content>
												      </template>

						<v-list-item @click="">
							<v-list-item-content>
								<v-list-item-title >Acerca de</v-list-item-title>
							</v-list-item-content>
						</v-list-item>
						<v-list-item @click="">
							<v-list-item-content>
								<v-list-item-title>Mapa del sitio</v-list-item-title>
							</v-list-item-content>
						</v-list-item>
					</v-list-group>

					<v-list-group prepend-icon="mdi-ballot" no-action>
						<template v-slot:activator>
												        <v-list-item-content>
												          <v-list-item-title>Encuesta</v-list-item-title>
												        </v-list-item-content>
												      </template>

						<v-list-item @click="">
							<v-list-item-content>
								<v-list-item-title >Realizar encuesta</v-list-item-title>
							</v-list-item-content>
						</v-list-item>
					</v-list-group>


				</v-list>

			</v-col>
		</v-row>
	</v-container>

</template>

<style>

</style>
