	<script>


	 import Login from '@/components/autenticacion/login.vue'
	 import Registro from '@/components/autenticacion/registro.vue'


		export default {
			name: 'Inicio',
			components: {
				Login,
				Registro
			},

			data: () => ({
				color: '#4CBAC4',
				color2: '#3cd3ad',
				color3: '#737373',
				formulario: 'Registro'
			})
		}
//mdi-account-details mdi-account
	</script>

	<template>

		<v-container class="ma-0 pa-0 fill-height">
			<v-row width="100%" class=" fill-height overflow-y-auto">
				<v-col cols="2" class="pa-0">
					<v-card id="menu"
					        class="fill-height elevation-4"
					        tile
					        width="100%">
						<v-navigation-drawer class="fondo-1" dark permanent stateless width="100%">
							<v-row class="fill-height" no-gutters>

								<v-list class="grow pa-4">
									<v-list-item>
										<v-list-item-content>
											<v-list-item-title>¿Ya tienes una cuenta?</v-list-item-title>
										</v-list-item-content>
									</v-list-item>
									<v-divider></v-divider>
									<v-list-item @click="(contenido='EditarPerfil') && (titulo='Editar Perfil')">
										<v-icon class="mx-2">mdi-account</v-icon>

										<v-list-item-content>
											<v-list-item-title>Login</v-list-item-title>
										</v-list-item-content>
									</v-list-item>
									<v-divider></v-divider>
									<v-list-item @click="(contenido='Unidad') && (titulo='Unidades')">
										<v-icon class="mx-2">mdi-school</v-icon>

										<v-list-item-content>
											<v-list-item-title>Unidades</v-list-item-title>
										</v-list-item-content>
									</v-list-item>
									<v-divider></v-divider>
									<v-list-item @click="">
										<v-icon class="mx-2">mdi-help</v-icon>
										<v-list-item-content>
											<v-list-item-title>Ayuda</v-list-item-title>
										</v-list-item-content>
									</v-list-item>
									<v-divider></v-divider>
									<v-list-item @click="">
										<v-icon class="mx-2">mdi-ballot</v-icon>
										<v-list-item-content>
											<v-list-item-title>Encuesta</v-list-item-title>
										</v-list-item-content>
									</v-list-item>
									<v-divider></v-divider>
									<v-list-item @click="">
										<v-icon class="mx-2">mdi-file-tree</v-icon>
										<v-list-item-content>
											<v-list-item-title>Mapa del sitio</v-list-item-title>
										</v-list-item-content>
									</v-list-item>
									<v-divider></v-divider>
									<v-list-item @click="">
										<v-icon class="mx-2">mdi-logout</v-icon>
										<v-list-item-content>
											<v-list-item-title>Cerrar Sesión</v-list-item-title>
										</v-list-item-content>
									</v-list-item>
									<v-divider></v-divider>
								</v-list>

							</v-row>
						</v-navigation-drawer>

					</v-card>

				</v-col>
				<v-col cols="10" class="pa-0">


					<v-card id="conten_" class=" fill-height elevation-0 pa-8" color="rgba(255, 255, 255, 0.0)">
						<v-row justify="center" class="altura">
							<v-col cols="10" sm="10" md="4" lg="4" xl="4">
									<component :is="formulario"></component>

							</v-col>
						</v-row>

					</v-card>

				</v-col>
			</v-row>

		</v-container>
	</template>
	<style>
		#conten_ {
			height: 100%  !important;
			max-height: 100%   !important;
			background-color: rgba(255, 255, 255, 0);
			margin: 0;
			max-width: 100% !important;
			width:100% !important;
			overflow-y: auto;
		}
	</style>
