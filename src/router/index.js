import Vue from 'vue'
import Router from 'vue-router'

import Ayuda from '@/components/views/ayuda.vue'
import Encuesta from '@/components/views/encuesta.vue'
import Login from '@/components/autenticacion/login.vue'
import Grupo from '@/components/autenticacion/grupos.vue'
import Registro from '@/components/autenticacion/registro.vue'
import Unidades from '@/components/views/card_unidad.vue'
import Preguntas from '@/components/views/Docente/crear_preguntas.vue'
import Polimorfismo from '@/components/ovas/polimorfismo/leccion.vue'
import Punteros from '@/components/ovas/punteros/leccion_punteros.vue'
import Estilo from '@/components/ovas/estilo/leccion_estilo.vue'
import Perfil from '@/components/views/editar_perfil.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/usuario/perfil',// /:id',
      component: Perfil,
      name: 'perfil',
    },
    // UserHome will be rendered inside User's <router-view>
    // when /user/:id is matched

    // UserHome will be rendered inside User's <router-view>
    // when /user/:id is matched
    {
      path: '/estudiante/unidades',
      component: Unidades,
      name: 'unidades',
      meta: {
        reload: true,
      },
    },
    {
      path: '/estudiante/unidades/punteros',
      component: Punteros,
      name: 'punteros'

    },
    {
      path: '/estudiante/unidades/polimorfismo',
      component: Polimorfismo,
      name: 'polimorfismo'
    },
    {
      path: '/estudiante/unidades/estilo',
      component: Estilo,
      name: 'estilo'

    },
    {
      path: '/estudiante/perfil',
      component: Perfil,
      name: 'perfl'
    },
    {
      path: '/ayuda',
      component: Ayuda,
      name: 'ayuda'

    },
    {
      path: '/encuesta',
      component: Encuesta,
      name: 'encuesta'
    },
    {
      path: '/mapa_del_sitio',
      component: Encuesta,
      name: 'encuesta'
    },
    {
      path: '/docente/crear_preguntas',
      component: Preguntas,
      name: 'preguntas',
      meta: {
        reload: true,
      }
    },
    {
      path: '/docente/crear_grupo',
      component: Grupo

    },
    {
      path: '/registro',
      name: 'registro',
      component: Registro
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ],

  mode: 'history'
})
