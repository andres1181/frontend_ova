<script>

	export default {
		name: 'Tooltip',
		props: {
			color: {
				type: String,
				required: true
			},
			texto: {
				type: String,
				required: true
			},
			titulo: {
				type: String,
				required: true
			}
		},
		data() {
			return {}
		},
		computed: {
			borderBottomColor: function() {
				return { 'border-bottom-color': this.color, color: this.color }
			}
		}
	}

</script>

<template>

	<v-tooltip light left color="rgba(0, 0, 255, 0.0)">
		<template v-slot:activator="{ on, attrs }">
				         <span
				           v-bind="attrs"
				           v-on="on"
				               class="punteado" :style="borderBottomColor"
				         >{{titulo}}</span>
				       </template>
		<v-card elevation="6"
		        max-width="600"
		        max-height="200"
		        class="rounded-xl pa-6"
            :color="color"
            dark>
			<v-list-item>

				<v-list-item-content>
					<v-list-item-title class="text-lg-h5"><span  class="punteado text-uppercase font-weight-bold">{{titulo}}</span> </v-list-item-title>
				</v-list-item-content>
			</v-list-item>
			<v-card-text class="text-md-body-1">
				{{texto}}
			</v-card-text>
		</v-card>
	</v-tooltip>

</template>

<style>

	.punteado {
		border-bottom-style: dotted;
		border-bottom-width: 4px;
	}

</style>
