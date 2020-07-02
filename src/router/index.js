import Vue from 'vue'
import Router from 'vue-router'

import Ayuda from '@/components/views/ayuda.vue'
import Encuesta from '@/components/views/encuesta.vue'
import Login from '@/components/autenticacion/login.vue'
import Grupo from '@/components/autenticacion/grupos.vue'
import Registro from '@/components/autenticacion/registro.vue'
import Unidades from '@/components/views/menuUnidades.vue'
import Temas from '@/components/views/menuTemas.vue'
import Preguntas from '@/components/views/Docente/crear_preguntas.vue'
//Polimorfismo
//import Polimorfismo from '@/components/ovas/polimorfismo/leccion.vue'

import Polimorfismo from '@/components/ovas/polimorfismo/polimorfismo.vue'



import Punteros from '@/components/ovas/punteros/leccion_punteros.vue'
import Estilo from '@/components/ovas/estilo/leccion_estilo.vue'
import Perfil from '@/components/views/editar_perfil.vue'

import Reportes from '@/components/views/Docente/Reportes/reportesGlobales.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/usuario/estudiante/inicio',// /:id',
      component: Temas,
      name: 'temas',
    },
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
    // inicio Rutas polimorfismo -----------------------------
  {
      path: '/estudiante/unidades/polimorfismo',
      component: Polimorfismo,
      name: 'polimorfismo'
    },
    // {
    //   path: '/estudiante/unidades/polimorfismo/introduccionP',
    //   component: IntroduccionP,
    //   name: 'introduccionP'
    // },
    // {
    //   path: '/estudiante/unidades/polimorfismo/conceptos',
    //   component: Conceptos,
    //   name: 'conceptos'
    // },
    // {
    //   path: '/estudiante/unidades/polimorfismo/genericidad',
    //   component: Genericidad,
    //   name: 'genericidad'
    // },
    // {
    //   path: '/estudiante/unidades/polimorfismo/polimorficas',
    //   component: Polimorficas,
    //   name: 'polimorficas'
    // },
    // {
    //   path: '/estudiante/unidades/polimorfismo/sobrecarga',
    //   component: Sobrecarga,
    //   name: 'sobrecarga'
    // },
    // {
    //   path: '/estudiante/unidades/polimorfismo/sobreescritura',
    //   component: Sobreescritura,
    //   name: 'sobreescritura'
    // },
    // {
    //   path: '/estudiante/unidades/polimorfismo/evaluacionP',
    //   component: VistaEvaluacion,
    //   name: 'evaluacionP',
    //   props: { unidad: 'polimorfismo' }
    // },
    // fin Rutas polimorfismo -----------------------------
    // inicio Rutas Estilo -----------------------------
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
      path: '/reportes/globales',
      component: Reportes,
      name: 'reportesGlobales',
      props: { tipo: 'globales' },
      meta: {
        reload: true,
      }
    },

    {
      path: '/reportes/grupales',
      component: Reportes,
      name: 'reportesGrupales',
      props: { tipo: 'grupales' },
      meta: {
        reload: true,
      }
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
      path: '/crear_grupo',
      component: Grupo,
      name: 'crearGrupo',

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
