import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify,
  { //estilos de otras cosas…
    theme: {
    themes: {

      light: {
        main: '#3cd3ad',
        primary: '#3cd3ad',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
      },
      dark: {
        primary: '#4cb8c4',
      },
    },
  },
});

export default new Vuetify({
});
