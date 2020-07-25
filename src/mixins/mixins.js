import jwt_decode from 'jwt-decode';

export const misMixins = {

  methods: {


    obtenerDimensiones: function() {
      var alto = window.innerHeight - (48) // 64 =  margin(*2)
      var ancho = window.innerWidth - (56 + 56) // 96 = (navigation) + margin(*2)
      var dimensiones = [alto, ancho]

      return dimensiones
    },
    shuffle: function(array) {
      var j, x, i
      //Recorremos el array del final hacia delante
      for (i = array.length - 1; i > 0; i--) {
        //Generamos una posicion comprendida entre los valores de nuestro array
        j = Math.floor(Math.random() * (i + 1))
        // Asignamos el valor de la posición actual a una variable
        x = array[i]
        //Intercambiamos los valores de las dos posiciones
        array[i] = array[j]
        array[j] = x
      }
      return array
    },
    obtenerDatos: function() {
      var token = localStorage.getItem("tokenUser")
      let info = jwt_decode(token)
      // eslint-disable-next-line no-console
      //  console.log(info)
      return info
      // this.nombre = info.nombres
      // this.codigo = info.codigo

    },


    cerrarSesion: function() {
  /*    localStorage.removeItem("tokenUser")
      localStorage.removeItem("datosUnidades")
      localStorage.removeItem("datospolimorfismo")
      localStorage.removeItem("datospunterosCont")*/
      localStorage.clear()
      this.$router.push('/')
      this.$router.go()
    },
    mostrarLogin: function() {
      this.$router.push('/login')
    }
  }
}
