<script>

	export default {
		name: 'menuEstudiante',
		props: {
			nombre: {
				type: String,
				require: true
			}
		},
		data: () => ({
			// v-show="usuario.tipo=='estudiante' && $route.name!='login' && $route.name!='registro'"
			reportes: [{ titulo: 'Global', contenido: 'reportesGlobales' }, { titulo: 'Por grupo', contenido: 'reportesGrupales' }]
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
          <v-list-item-subtitle>Estudiante</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
			<v-list-item @click="($router.push({ name: 'unidades' }).catch(err => {})) && (titulo='Unidades')">
        <v-list-item-icon>
          <v-icon>mdi-account</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Unidades</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item @click="($router.push({ path: '/usuario/perfil' }).catch(err => {})) && (titulo='Editar Perfil')">
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
        <v-list-item-title>Encuesta</v-list-item-title>

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
        <v-icon >mdi-file-tree</v-icon>
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
