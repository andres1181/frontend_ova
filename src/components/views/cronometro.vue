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

				this.cronometro = setInterval(()  =>  {
					if (contador_s === 60) {
						contador_m = contador_m + 1
						contador_s = 0
						m.innerHTML = contador_m

						if (contador_m === this.duraccion) {
              // eslint-disable-next-line no-console
    					console.log(contador_m)
							//this.agotado
              this.$emit('tiempoAgotado', true)
						}
					}
					s.innerHTML = contador_s
					contador_s = contador_s + 1
				}, 1000)
			},
			deternerCronometro() {}
		},
    mounted(){
      if (this.iniciar) {
        this.iniciarCronometro()
      }
    }
	}

</script>

<template>

	<div class="">
     <span id="minutos">0</span>:<span id="segundos">0</span>
  </div>

</template>
