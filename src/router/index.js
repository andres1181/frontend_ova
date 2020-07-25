import Vue from 'vue'
import Router from 'vue-router'

import Ayuda from '@/components/views/ayuda.vue'
import Encuesta from '@/components/views/encuesta.vue'
import Login from '@/components/autenticacion/login.vue'
import Grupo from '@/components/autenticacion/grupos.vue'
import Registro from '@/components/autenticacion/registro.vue'
import Preguntas from '@/components/views/Docente/crear_preguntas.vue'
import InicioDocente from '@/components/views/Docente/menuDocente.vue'
//Polimorfismo
//import Polimorfismo from '@/components/ovas/polimorfismo/leccion.vue'

import Polimorfismo from '@/components/ovas/polimorfismo/polimorfismo.vue'
import MenuUnidades from '@/components/ovas/menuUnidades.vue'
import MenuAdministrador from '@/components/views/administrador/menuAdministrador.vue'
import CrearUnidades from '@/components/views/administrador/crearUnidades.vue'
import RegistroAdministrador from '@/components/views/administrador/registro_administrador.vue'
import Punteros from '@/components/ovas/punteros/punterosCont.vue'
import Perfil from '@/components/views/editar_perfil.vue'


Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/usuario/perfil', // /:id',
      component: Perfil,
      name: 'perfil',
    },
    {
      path: '/usuario/docente/Inicio', // /:id',
      component: InicioDocente,
      name: 'inicioDocente',
    },
    {
      path: '/usuario/administrador/Inicio', // /:id',
      component: MenuAdministrador,
      name: 'inicioAdministrador',
    },
    {
      path: '/usuario/administrador/registro', // /:id',
      component: RegistroAdministrador,
      name: 'registroAdministrador',
    },
    {
      path: '/usuario/administrador/crearUnidades', // /:id',
      component: CrearUnidades,
      name: 'crearUnidades',
    },

    {
      path: '/estudiante/unidades',
      component: MenuUnidades,
      name: 'unidades'

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

    // fin Rutas polimorfismo -----------------------------
    // inicio Rutas Estilo -----------------------------

    {
      path: '/editarPerfil',
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
      name: 'mapa'
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
      path: '/',
      name: 'login',
      component: Login
    }
  ],

  mode: 'history'
})
