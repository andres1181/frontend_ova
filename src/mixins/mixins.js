import jwt_decode from 'jwt-decode';

export const misMixins = {
  methods: {

    // Crear actividades


    listaUnidades: function() {
      var unidades = []
      unidades.push({
        unidad: 'Polimorfismo',
        componente: 'polimorfismo',
        temas: [{
            tema: 'Herencia',
            componente: 'herencia',
          },
          {
            tema: 'Funciones Virtuales',
            componente: 'funcionesVirtuales',
          },
          {
            tema: 'Sobrecarga',
            componente: 'sobrecarga',
          },

          {
            tema: 'Sobreescritura',
            componente: 'sobreescritura',
          }
        ]
      })
      unidades.push({
        unidad: 'Punteros y Referencias',
        componente: 'punteros',
        temas: [{
            tema: 'Punteros',
            componente: 'punteros'
          },
          {
            tema: 'Referencias',
            componente: 'referencias'
          },
          {
            tema: 'Paso por referencia',
            componente: 'pasoReferencia'
          },
          {
            tema: 'Arreglos dinámicos',
            componente: 'arreglos'
          },
          {
            tema: 'Matrices dinámicos',
            componente: 'matrices'
          }
        ]
      })
      return unidades
    },
    obtenerDimensiones: function() {
      var alto = window.innerHeight - 48 // 64 =  margin(*2)
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
      localStorage.removeItem("tokenUser")
      this.$router.push('/registro')
    },
    mostrarLogin: function() {
      this.$router.push('/login')
    }
  }
}
