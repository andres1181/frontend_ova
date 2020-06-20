<script>

	import { misMixins } from '@/mixins/mixins.js'

	import Sobrecarga from '@/components/ovas/polimorfismo/sobrecarga.vue'
	import menuPolimorfismo from '@/components/ovas/polimorfismo/menuPolimorfismo.vue'
	export default {
		name: 'polimorfismo',
		components: {
			Sobrecarga,
			menuPolimorfismo
		},
		data: () => ({
			alto: '',
			ancho: '',
			a: 0,
			an: 0,
			fixed: true,
			ed_nom: true,
			ed_correo: true,
			ed_cod: true,
			isError: false,
			error: '',
			mensaje: '',
			isUpdate: false,
			valid: true,
			usuario: [],
			codigoRules: [v => (v && v.length == 7) || 'El código debe ser de 7 digitos'],
			basicRules: [v => !!v || 'Campo requerido'],
			emailRules: [v => !!v || 'El correo es requerido', v => /.+@.+\..+/.test(v) || 'El correo ingresado no es valido']
		}),
		mixins: [misMixins],

		methods: {},
		created() {
			this.a = window.innerHeight
			this.an = window.innerWidth
			this.alto = window.innerHeight - 64 // 96 = (app-bar) - margin(12*2)
			this.ancho = window.innerWidth - (56 + 56) // 96 = (app-bar) - margin(12*2)
			this.buscarDatos()
		}
	}

</script>

<template>

	<v-row justify="center">
		<v-col cols="12" class="pa-0">
			<v-card elevation="2" :width="ancho" :height="alto" class="pb-4 px-4 mb-7 mt-9 mx-7 rounded-lg">
				<v-row justify="center">
					<v-col class="pa-0 " cols="11">
						<v-card dark color="cyan" elevation="4" class="card_cabecera rounded-lg d-flex  align-center">
							<v-card-title class="align-center">
								<span class="headline font-weight-bold">Polimorfismo</span>
							</v-card-title>
						</v-card>
					</v-col>
				</v-row>

				<v-row justify="start">
					<v-col class="pa-0 " cols="10">
						<v-card :height="alto-80"
						        :fixed="fixed"
						        flat
						        class="overflow-hidden ">
							<Sobrecarga :tamano="alto-80"></Sobrecarga>
						</v-card>
					</v-col>
					<v-col class="pa-0 " cols="2">
						<v-card :height="alto-80"
						        :fixed="fixed"
						        flat
						        class="overflow-hidden ml-2">
							<v-navigation-drawer right permanent absolute light>
								<menuPolimorfismo></menuPolimorfismo>
							</v-navigation-drawer>
						</v-card>
					</v-col>
				</v-row>
			</v-card>

		</v-col>

		<v-col cols="3" sm="3" md="" lg="3" xl="3" class="pa-0">

		</v-col>
	</v-row>

</template>

<style>

	#editar_perfil {
		-webkit-border-radius: 12px;
		-moz-border-radius: 12px;
		border-radius: 12px;
	}
	.card_cabecera {
		position: relative;
		align-self: center;
		min-height: 50px;
		top: -20px;
		z-index: 1;
		color: '#4CBAC4';
	}

</style>
