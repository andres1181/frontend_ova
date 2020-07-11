<script>

	export default {
		name: 'cronometro',
		props: {
			iniciar: {
				type: Boolean,
				required: true
			},
			duraccion: {
				type: Number,
				required: true
			}
		},
		data: () => ({
			cronometro: '',
			t_agotado: false
		}),
		watch: {
			/*agotado: function(){
	        var i = true
	        this.$emit('tiempoAgotado', i)
	        // eslint-disable-next-line no-console
	        console.log(i)
	      }*/
		},
		methods: {
			iniciarCronometro() {
				var contador_m = 0
				var contador_s = 0

				var s = document.getElementById('segundos')
				var m = document.getElementById('minutos')

				this.cronometro = setInterval(() => {
					if (contador_s === 60) {
						contador_m = contador_m + 1
						contador_s = 0

						if (contador_m < 10) {
							m.innerHTML = '0' + contador_m
						} else {
							m.innerHTML = contador_m
						}

						if (contador_m === this.duraccion) {
							// eslint-disable-next-line no-console
							console.log(contador_m)
							//this.agotado
							this.$emit('tiempoAgotado', true)
						}
					}
					if (contador_s < 10) {
						s.innerHTML = '0' + contador_s + 's'
					} else {
						s.innerHTML = contador_s + 's'
					}

					contador_s = contador_s + 1
				}, 1000)
			},
			deternerCronometro() {}
		},
		mounted() {
			if (this.iniciar) {
				this.iniciarCronometro()
			}
		}
	}

</script>

<template>

	<v-alert type="success" dark icon="mdi-clock-fast">
		<span id="minutos">00</span>:<span id="segundos">00s</span>
	</v-alert>

</template>
