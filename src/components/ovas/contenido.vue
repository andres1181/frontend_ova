<script>

	export default {
		name: 'Inicio',

		data: () => ({
			color: '#4CBAC4',
			color2: '#3cd3ad',
			color3: '#737373',
			ovas: [
				{
					titulo: 'Punteros',
					img: ''
				},
				{
					titulo: 'Polimorfismo',
					img: ''
				},
				{
					titulo: 'Estilo de Programacion',
					img: ''
				}
			],
			codigoRules: [v => !!v || 'El Código es requerido', v => (v && v.length == 7) || 'El código debe ser de 7 digitos'],
			basicRules: [v => !!v || 'Campo requerido'],
			emailRules: [v => !!v || 'El correo es requerido', v => /.+@.+\..+/.test(v) || 'El correo ingresado no es valido']
		})
	}

</script>

<template>

	<v-card id="cont"
	        class=" fill-height elevation-3 pa-3"
	        tile
	        width="70%">
		<!-- <v-app-bar color="fondo-1" short dark class="elevation-3" width="100%">




					<v-toolbar-title>Page title</v-toolbar-title>

					<v-spacer></v-spacer>

					<v-btn icon>
						<v-icon>mdi-heart</v-icon>
					</v-btn>

					<v-btn icon>
						<v-icon>mdi-magnify</v-icon>
					</v-btn>

					<v-menu left bottom>
						<template v-slot:activator="{ on }">
												          <v-btn icon v-on="on">
												            <v-icon>mdi-dots-vertical</v-icon>
												          </v-btn>
												        </template>

						<v-list>
							<v-list-item v-for="n in 5"
							             :key="n"
							             @click="() => {}">
								<v-list-item-title>Option {{ n }}</v-list-item-title>
							</v-list-item>
						</v-list>
					</v-menu>
				</v-app-bar> -->

	</v-card>

</template>

<style>



</style>
