<script>

	export default {
		name: 'temasOVA',
		data: () => ({
			color: '#4CBAC4',
			color2: '#3cd3ad',
			color3: '#737373',
			items: [
				{
					title: 'Herencia'
				},
				{
					title: 'Perfil'
				},
				{
					title: 'Perfil'
				},
				{
					title: 'Perfil'
				},
				{
					title: 'Perfil'
				},
				{
					title: 'Perfil'
				},
				{
					title: 'Perfil'
				},
				{
					title: 'Perfil'
				},
				{
					title: 'Perfil'
				},
				{
					title: 'Perfil'
				},
				{
					title: 'Perfil'
				},
				{
					title: 'Perfil'
				},
				{
					title: 'Perfil'
				},
				{
					title: 'Perfil'
				},
				{
					title: 'Fin'
				}
			]
		})
	}

</script>

<template>

  <v-expansion-panels accordion>
  <v-expansion-panel
    v-for="(item,i) in 5"
    :key="i"
  >
    <v-expansion-panel-header>Item</v-expansion-panel-header>
    <v-expansion-panel-content>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </v-expansion-panel-content>
  </v-expansion-panel>
</v-expansion-panels>

</template>

<style>

	/* #ovas {
		height: calc(100% - 94px) !important;
		max-height: calc(100% - 94px) !important;
	/*	border-radius: 15px !important;
		max-width: calc(100% - 60px) !important;
		width: calc(100% - 60px) !important;
		margin: auto;
	} */

</style>
