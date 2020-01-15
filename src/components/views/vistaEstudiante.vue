<script>

	import { misMixins } from '@/mixins/mixins.js'
	import axios from 'axios'
	// import Menu from '@/components/ovas/menuOVAs.vue'
	import Unidad from '@/components/views/card_unidad.vue'
	import Polimorfismo from '@/components/ovas/polimorfismo/leccion.vue'
	import EditarPerfil from '@/components/views/editar_perfil.vue'
	export default {
		name: 'Inicio',
		components: {
			Unidad,
			EditarPerfil,
			Polimorfismo
		},
		data: () => ({
			color: '#4CBAC4',
			color2: '#3cd3ad',
			color3: '#737373',
			usuario: [],
			titulo: 'Unidades',
			error: '',
			ovas: 'Menu',
			contenido: 'Unidad',

			codigoRules: [v => !!v || 'El Código es requerido', v => (v && v.length == 7) || 'El código debe ser de 7 digitos'],
			basicRules: [v => !!v || 'Campo requerido'],
			emailRules: [v => !!v || 'El correo es requerido', v => /.+@.+\..+/.test(v) || 'El correo ingresado no es valido']
		}),
		mixins: [misMixins],
		methods: {
			buscarDatos() {
				var token = String(localStorage.getItem('tokenUser'))
				var id_ = this.obtenerDatos().id
				// eslint-disable-next-line no-console
				//console.log(`EL ID ES: ${id_}`);

				const host = 'http://localhost:3000'
				const baseURL = `/api/usuarios/me/${id_}`

				axios({
					method: 'get',
					url: host + baseURL, // + user,
					headers: {
						'content-type': 'application/json',
						'x-access-token': token
					}
				})
					.then(response => {
						this.usuario = response.data
						// eslint-disable-next-line no-console
						//	console.log(this.usuario);
					})
					.catch(e => {
						this.error = `Error:  ${e}`
					})
			}
		},
		created() {
			this.buscarDatos()
		}
	}

</script>

<template>

	<v-container class="ma-0 pa-0 fill-height">
		<v-row width="100%" class=" fill-height overflow-y-scroll">
			<v-col cols="3" class="pa-0">
				<v-card id="menu"
				        class="fill-height elevation-4"
				        tile
				        width="100%">
					<v-navigation-drawer class="fondo-1" dark permanent  stateless width="100%">
						<v-row class="fill-height" no-gutters>

							<v-list class="grow pa-4">
								<v-list-item two-line>
									<v-list-item-avatar>
										<img src="https://randomuser.me/api/portraits/women/81.jpg">
									</v-list-item-avatar>

									<v-list-item-content>
										<v-list-item-title>{{usuario.codigo}}</v-list-item-title>
										<v-list-item-subtitle>{{usuario.tipo}}</v-list-item-subtitle>
									</v-list-item-content>
								</v-list-item>
								<v-list-item>
									<v-list-item-title class="headline">{{usuario.nombres}}</v-list-item-title>
								</v-list-item>
								<v-divider></v-divider>
								<v-list-item @click="(contenido='EditarPerfil') && (titulo='Editar Perfil')">
									<v-icon class="mx-2">mdi-account</v-icon>

									<v-list-item-content>
										<v-list-item-title>Editar Perfil</v-list-item-title>
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
								<v-list-item @click="(contenido='Polimorfismo') && (titulo='Polimorfismo')">
									<v-icon class="mx-2">mdi-logout</v-icon>
									<v-list-item-content>
										<v-list-item-title>Polimorfismo</v-list-item-title>
									</v-list-item-content>
								</v-list-item>
							</v-list>

						</v-row>
					</v-navigation-drawer>

				</v-card>

			</v-col>
			<v-col cols="9" class="pa-0">
				<v-toolbar id="barra" dense dark fixed class="fondo-2 elevation-2 px-4" width="100%">
					<v-toolbar-title>{{titulo}}</v-toolbar-title>
					<v-spacer></v-spacer>
					<v-menu
        v-model="menu"
        :close-on-content-click="false"
        :nudge-width="200"
        offset-x
      >
        <template v-slot:activator="{ on }">
          <v-btn
            color="indigo"
            dark
            v-on="on"
          >
            Menu as Popover
          </v-btn>
        </template>

        <v-card>
          <v-list>
            <v-list-item>
              <v-list-item-avatar>
                <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>John Leider</v-list-item-title>
                <v-list-item-subtitle>Founder of Vuetify.js</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-btn
                  :class="fav ? 'red--text' : ''"
                  icon
                  @click="fav = !fav"
                >
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list>
            <v-list-item>
              <v-list-item-action>
                <v-switch v-model="message" color="purple"></v-switch>
              </v-list-item-action>
              <v-list-item-title>Enable messages</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-action>
                <v-switch v-model="hints" color="purple"></v-switch>
              </v-list-item-action>
              <v-list-item-title>Enable hints</v-list-item-title>
            </v-list-item>
          </v-list>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn text @click="menu = false">Cancel</v-btn>
            <v-btn color="primary" text @click="menu = false">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
			<v-menu
        v-model="menu"
        :close-on-content-click="false"
        :nudge-width="200"
        offset-x
      >
        <template v-slot:activator="{ on }">
          <v-btn
            color="indigo"
            dark
            v-on="on"
          >
            Menu as Popover
          </v-btn>
        </template>

        <v-card>
          <v-list>
            <v-list-item>
              <v-list-item-avatar>
                <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>John Leider</v-list-item-title>
                <v-list-item-subtitle>Founder of Vuetify.js</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-btn
                  :class="fav ? 'red--text' : ''"
                  icon
                  @click="fav = !fav"
                >
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list>
            <v-list-item>
              <v-list-item-action>
                <v-switch v-model="message" color="purple"></v-switch>
              </v-list-item-action>
              <v-list-item-title>Enable messages</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-action>
                <v-switch v-model="hints" color="purple"></v-switch>
              </v-list-item-action>
              <v-list-item-title>Enable hints</v-list-item-title>
            </v-list-item>
          </v-list>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn text @click="menu = false">Cancel</v-btn>
            <v-btn color="primary" text @click="menu = false">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
				</v-toolbar>

				<v-card class="cont fill-height elevation-0 pa-8">
					<EditarPerfil v-show="contenido=='EditarPerfil'"></EditarPerfil>
					<Polimorfismo v-show="contenido=='Polimorfismo'"> </Polimorfismo>
					<!-- <component :is="contenido"></component> -->
					<Unidad v-show="contenido=='Unidad'"> </Unidad>
				</v-card>

			</v-col>
		</v-row>

	</v-container>

</template>

<style>

	#menu {
		height: 100%;
		max-height: 100%;
	}

	#barra {
		border-bottom-left-radius: 0px;
		border-bottom-right-radius: 0px;
	}
	#contenido {
		height: 100%;
		max-height: 100%;
		overflow-y: auto;
	}
	.ovas {
	}

</style>
