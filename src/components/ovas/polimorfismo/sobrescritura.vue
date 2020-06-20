<script>
export default {
  name: 'Sobreescritura',
  components: {},
  data: () => ({
    hidden: false,
    years: [
      {
        color: 'cyan',
        year: '1960'
      },
      {
        color: 'green',
        year: '1970'
      },
      {
        color: 'pink',
        year: '1980'
      },
      {
        color: 'amber',
        year: '1990'
      },
      {
        color: 'orange',
        year: '2000'
      },

      {
        color: 'purple',
        year: '2000'
      }
    ],
    numPaginas: 2,
    page: 1,
    items: [
      {
        color: 'red lighten-2',
        icon: 'mdi-star'
      },
      {
        color: 'purple darken-1',
        icon: 'mdi-book-variant'
      },
      {
        color: 'green lighten-1',
        icon: 'mdi-airballoon'
      },
      {
        color: 'indigo',
        icon: 'mdi-buffer'
      }
    ]
  }),
  methods: {
    scrollWin: function() {
      window.scrollTo(0, 0)
    },
    siguientePagina: function() {
      if (this.page === this.numPaginas) {
        this.page = this.numPaginas
      } else {
        this.page = this.page + 1
      }
      this.scrollWin()
    },
    anteriorPagina: function() {
      if (this.page === 1) {
        this.page = 1
      } else {
        this.page = this.page - 1
      }
      this.scrollWin()
    }
  },
  created() {
    this.page = 1
  }
}

</script>

<template >


<div class="">

</div>
</template>

<style>

</style>
