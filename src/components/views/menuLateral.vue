<script>
export default {
  name: 'editarPerfil',
  components: {},
  props: {
    id: {
      type: String,
      required: true
    },
    tipo: {
      type: String,
      required: true
    }
  },
  data: () => ({})}
</script>
<template>
  <v-list-item two-line>
    <v-list-item-avatar>
      <img src="https://randomuser.me/api/portraits/women/81.jpg">
    </v-list-item-avatar>

    <v-list-item-content>
      <v-list-item-title>{{usuario.codigo}}</v-list-item-title>
      <v-list-item-subtitle>{{usuario.tipo}}</v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>
<style>

</style>
