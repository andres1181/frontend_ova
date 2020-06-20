<script>

	export default {
		name: 'menuAdministrador',
		props: {
			nombre: {
				type: String,
				require: true
			}
		},
		data: () => ({
			// v-show="usuario.tipo=='estudiante' && $route.name!='login' && $route.name!='registro'"
		})
	}

</script>

<template>

	<v-navigation-drawer expand-on-hover permanent stateless app dark min-width="56">
		<v-list dense class="grow ">
			<v-list-item two-line class="px-2">
				<v-list-item-avatar>
					<img src="https://randomuser.me/api/portraits/men/81.jpg">
				</v-list-item-avatar>

				<v-list-item-content>
					<v-list-item-title>{{nombre}}</v-list-item-title>
					<v-list-item-subtitle>Administrador</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>

			<!-- <v-list-group prepend-icon="mdi-school">
		          <template v-slot:activator>
		                         <v-list-item-title>Temas</v-list-item-title>
		              </template>

		          <menuPolimorfismo></menuPolimorfismo>

		        </v-list-group> -->

			<v-divider></v-divider>
			<v-list-item @click="$router.push({ path: '/usuario/perfil' })">
				<v-list-item-icon>
					<v-icon>mdi-account</v-icon>
				</v-list-item-icon>
				<v-list-item-content>
					<v-list-item-title>Editar Perfil</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
			<v-list-item @click="">
				<v-list-item-icon>
					<v-icon>mdi-ballot</v-icon>
				</v-list-item-icon>
				<v-list-item-title>Reportes</v-list-item-title>
			</v-list-item>
			<v-list-item @click="$router.push({ name: 'registro' })">
				<v-list-item-icon>
					<v-icon>mdi-ballot</v-icon>
				</v-list-item-icon>
				<v-list-item-title>Registrar usuarios</v-list-item-title>
			</v-list-item>
			<v-list-item @click="$router.push({ name: 'crearGrupo' })">
				<v-list-item-icon>
					<v-icon>mdi-ballot</v-icon>
				</v-list-item-icon>
				<v-list-item-title>Crear grupo</v-list-item-title>
			</v-list-item>
      <v-list-item @click="">
        <v-list-item-icon>
          <v-icon>mdi-ballot</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Registrar Actividades</v-list-item-title>
      </v-list-item>
			<v-list-item @click="">
				<v-list-item-icon>
					<v-icon>mdi-help</v-icon>
				</v-list-item-icon>
				<v-list-item-content>
					<v-list-item-title>Ayuda</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
			<v-divider></v-divider>
			<v-list dense>
				<v-list-item @click="">
					<v-list-item-icon>
						<v-icon>mdi-file-tree</v-icon>
					</v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title>Mapa del sitio</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item @click="">
					<v-list-item-icon>
						<v-icon>mdi-logout</v-icon>
					</v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title>Cerrar Sesión</v-list-item-title>
					</v-list-item-content>
				</v-list-item>

			</v-list>
		</v-list>

	</v-navigation-drawer>

</template>
