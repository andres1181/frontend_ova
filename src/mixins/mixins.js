import jwt_decode from 'jwt-decode';

export const misMixins = {
  methods:{
    obtenerDatos: function(){
      var token = localStorage.getItem("tokenUser")
      let info = jwt_decode(token)
      // eslint-disable-next-line no-console
    //  console.log(info)
      return info
      // this.nombre = info.nombres
      // this.codigo = info.codigo

    },


    cerrarSesion: function(){
      localStorage.removeItem("tokenUser")
      this.$router.push('/registro')
    },
    mostrarLogin: function(){
      this.$router.push('/login')
    }
  }
}
