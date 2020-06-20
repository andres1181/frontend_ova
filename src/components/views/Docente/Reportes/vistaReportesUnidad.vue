<script>

	export default {
		name: 'reportesUnidad',
		props: {
			datos: {
				type: String,
				required: true
			}
		},
		data: () => ({
			info: ''
		}),

		methods: {},
		mounted() {
      this.info = JSON.parse(this.datos)
    },
		created() {

		}
	}

</script>

<template>


     <v-row>

      <v-col v-for="(tema, i) in info.temas" :key="i" cols="12">
        <v-card class="ma-2 py-2 px-5">
          <v-card-title class="title font-weight-light mb-2">{{tema.tema}}</v-card-title>
          <v-divider class="my-1"></v-divider>
          <v-progress-linear active
                             background-opacity="0.4"
                             :buffer-value="100"
                             height="25px"
                             class="my-2"
                             dark
                             rounded
                             top
                             :value="tema.desaciertos"
                             color="orange">
            <template><strong>{{ Math.ceil(tema.desaciertos) }}%</strong></template>
          </v-progress-linear>
          <v-divider class="my-2"></v-divider>
        </v-card>
      </v-col>
    </v-row>

</template>
