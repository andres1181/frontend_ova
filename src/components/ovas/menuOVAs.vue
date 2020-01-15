<script>

	export default {
		name: 'Inicio',

		data: () => ({
			color: '#4CBAC4',
			color2: '#3cd3ad',
			color3: '#737373',
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

			codigoRules: [v => !!v || 'El Código es requerido', v => (v && v.length == 7) || 'El código debe ser de 7 digitos'],
			basicRules: [v => !!v || 'Campo requerido'],
			emailRules: [v => !!v || 'El correo es requerido', v => /.+@.+\..+/.test(v) || 'El correo ingresado no es valido']
		})
	}

</script>

<template>

	<v-card id="menu"
	        class="fill-height elevation-3 "
					tile
	        width="26%"

					>
		<v-navigation-drawer permanent stateless
		                     width="100%">
			<v-row class="fill-height" no-gutters>
				<v-navigation-drawer dark mini-variant
				                     mini-variant-width="56"
				                     permanent>
					<v-list-item>
						<v-list-item-avatar>
							<v-img src="https://randomuser.me/api/portraits/women/75.jpg"></v-img>
						</v-list-item-avatar>
					</v-list-item>

					<v-divider></v-divider>

				</v-navigation-drawer>

				<!-- <v-list class="grow">
	          <v-list-item
	            v-for="link in links"
	            :key="link"
	            link
	          >
	            <v-list-item-title v-text="link"></v-list-item-title>
	          </v-list-item>
	        </v-list> -->
				<v-list class="grow">
					<v-list-group prepend-icon="mdi-account" no-action>
						<template v-slot:activator>
																	<v-list-item-content>
																		<v-list-item-title>Perfil</v-list-item-title>
																	</v-list-item-content>
																</template>

						<v-list-item @click="">
							<v-list-item-content>
								<v-list-item-title>Editar Perfil</v-list-item-title>
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

						<v-list-group v-for="(unidad, i) in unidades"
						              :key="i"
						              no-action
						              sub-group
						              value="true">
							<template v-slot:activator>
																	<v-list-item-content>
																		<v-list-item-title>{{unidad.title}}</v-list-item-title>
																	</v-list-item-content>
																</template>


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
								<v-list-item-title>Acerca de</v-list-item-title>
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
								<v-list-item-title>Realizar encuesta</v-list-item-title>
							</v-list-item-content>
						</v-list-item>
					</v-list-group>

				</v-list>
				<v-list dense nav>

					<v-list-item v-for="item in items"
					             :key="item.title"
					             @click="">
						<v-list-item-action>
							<v-icon>{{ item.icon }}</v-icon>
						</v-list-item-action>

						<v-list-item-content>
							<v-list-item-title>{{ item.title }}</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list>
			</v-row>
		</v-navigation-drawer>

	</v-card>

</template>

<style >

	#menu {
		height: 100%;
		max-height: 100%;

	}

</style>
