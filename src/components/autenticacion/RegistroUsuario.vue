<script>

	export default {
		name: 'RegistroUsuario',

		data() {
			return {
				info: {
					nomUsuario: '',
					codigo: '',
					email: '',
					tipo: '',
					contrasena: '',
					contrasena2: ''
				},
				rules: {
					usuarioRules: [v => !!v || 'Campo requerido'],
					codigoRules: '',
					emailRules: '',
					tipoRules: '',
					contrasenaRules: '',
				}
			}
		}
	}

</script>

<template>

 <v-form id="formRegistro">

		<v-text-field :rules="rules.usuarioRules" id="nomUsuario">
		</v-text-field>
		 <v-text-field :rules="rules.codigoRules" id="codUsuario">
		</v-text-field>
		<v-text-field :rules="rules.emailRules" id="emailUsuario">
		</v-text-field>
		<v-radio-group :rules="rules.tipoRules" id="tipoUsuario">
			<v-radio  id="radioDocente"></v-radio>
			<v-radio  id="radioEstudiante"></v-radio>
		</v-radio-group>
		<v-text-field :rules="rules.contrasenaRules" id="contrasena">
		</v-text-field>
		<v-text-field :rules="rules.contrasenaRules" id="repertirContrasena">
		</v-text-field>
	 </v-form>

</template>
