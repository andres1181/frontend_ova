<script>
import {
  misMixins
} from '@/mixins/mixins.js'
export default {
  name: 'crearfalsoVerdadero',
  props: {
    temas: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      cargando: false,
      unidad: '',
      tema: '',
      select: null,
      error: null,
      valid: true,
      lazy: false,
      campoRules: [v => !!v || 'Campo requerido'],
      enunciadoRules: [v => !!v || 'Enunciado es requerido'],
      radioRules: [v => !!v || 'Seleccione una opción'],
      items: [{
        text: 'Verdadero',
        valor: 'true'
      }, {
        text: 'Falso',
        valor: 'false'
      }],
      enunciado: '',
      tipo: 'falsoVerdadero',
      respuesta: '',
			opciones: []
    }
  },
  mixins: [misMixins],
  methods: {
    guardar() {
      if (this.$refs.form.validate()) {
        this.cargando = true
        this.opciones.push({
          respuesta: this.respuesta
        })
        var id_ = this.obtenerDatos().id
        var _data = {
          enunciado: String(this.enunciado),
          tipo: String(this.tipo),
          id_tema: String(this.tema._id),
          id_unidad: String(this.tema.id_unidad._id),
          autor: String(id_),
          opciones: this.opciones,
          activo: true
        }
        //guardar en el api

        var token = String(localStorage.getItem('tokenUser'))
        const ruta = '/actividades/crear'
        //const host = 'http://localhost:3000'
        //const baseURL = '/api/usuarios/login'

        this.axios({
            method: 'post',
            url: ruta, // + user,
            headers: {
              'Content-Type': 'application/json',
              'x-access-token': token
            },
            data: _data
          })
          .then(response => {
            this.$emit('creada', {creada: true, select: { text: '', componente: '' }})
          })
          .catch(e => {
            // eslint-disable-next-line no-console
            this.error = e
            this.opciones = []
            console.log(`Error en el servidor:  ${e}`)
            // eslint-disable-next-line no-console
            console.log(e.response)
          })
          .finally(() => (this.cargando = false))
      }
      //limpiar formlario

    }

  },
  //
  created() {
  }
}
</script>

<template>
<v-container fluid>
  <v-form v-if="cargando===false" ref="form" v-model="valid" :lazy-validation="lazy">
    <!-- <v-select v-model="unidad" :items="unidades" item-text="unidad" :rules="campoRules" label="Seleccione una unidad tematica" return-object>
    </v-select> -->
    <v-select v-model="tema" :items="temas" item-text="nombre" :rules="enunciadoRules" label="Seleccione un tema" return-object>
    </v-select>
    <v-textarea v-model="enunciado" :rules="campoRules" outlined label="Escriba el enunciado de la pregunta" required></v-textarea>

    <v-radio-group v-model="respuesta" row  class="ma-0" :rules="radioRules" required>
      <v-radio label="Verdadero" value="true"></v-radio>
      <v-radio label="Falso" value="false"></v-radio>
    </v-radio-group>

    <v-btn block :disabled="!valid" color="success" class="mr-4" x-large @click="guardar">
      Guardar
    </v-btn>
    <v-alert v-if="error!==null" dense text type="error">
      <strong>Error: </strong> {{error}}
    </v-alert>
  </v-form>

  <div v-else>
    <v-skeleton-loader height="94" type="list-item-two-line">

    </v-skeleton-loader>
    <v-skeleton-loader height="94" type="list-item-two-line">

    </v-skeleton-loader>
    <v-skeleton-loader height="94" type="list-item-two-line">

    </v-skeleton-loader>
  </div>

</v-container>
</template>
