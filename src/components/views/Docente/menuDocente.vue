<script>

	export default {
		name: 'menuDocente',
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
					<v-list-item-subtitle>Docente</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>

			<v-list-group color="white" prepend-icon="mdi-school">
				<template v-slot:activator>
					<v-list-item-title>Reportes</v-list-item-title>
				</template>

				<v-list-item-group sub-group>
					<v-list-item v-for="(r, i) in reportes"
					             :key="i"
					             @click="$router.push({ name: `${r.contenido}` }).catch(err => {})">
						<v-list-item-content>
							<v-list-item-subtitle>{{r.titulo}}</v-list-item-subtitle>
						</v-list-item-content>
					</v-list-item>

				</v-list-item-group>

			</v-list-group>
			<v-list-item @click="$router.push({ name: 'crearGrupo' }).catch(err => {})">
				<v-list-item-icon>
					<v-icon>mdi-ballot</v-icon>
				</v-list-item-icon>
				<v-list-item-title>Crear grupo</v-list-item-title>
			</v-list-item>
			<v-divider></v-divider>
			<v-list-item @click="($router.push({ path: '/docente/crear_preguntas' }).catch(err => {})) && (titulo='Crear Pregunta')">
				<v-list-item-icon>
					<v-icon>mdi-school</v-icon>
				</v-list-item-icon>
				<v-list-item-content>
					<v-list-item-title>Crear Pregunta</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
			<v-divider></v-divider>

			<v-list-item @click="">
				<v-list-item-icon>
					<v-icon>mdi-ballot</v-icon>
				</v-list-item-icon>
				<v-list-item-title>Encuesta</v-list-item-title>

			</v-list-item>
			<v-divider></v-divider>

			<v-list-item @click="">
				<v-list-item-icon>
					<v-icon>mdi-logout</v-icon>
				</v-list-item-icon>
				<v-list-item-content>
					<v-list-item-title>Cerrar Sesión</v-list-item-title>
				</v-list-item-content>
			</v-list-item>

		</v-list>

	</v-navigation-drawer>

</template>
