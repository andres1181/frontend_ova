import {
  shallowMount,
  mount,
  createLocalVue
} from '@vue/test-utils'
import vuetify from "vuetify"
import Vue from 'vue';
import registro from '@/components/autenticacion/registro.vue'


describe('registro', () => {
  let wrapper;
  beforeEach(() => {
    Vue.use(vuetify)
    wrapper = mount(registro, {
      data: {
        usuario: {
  				email: '',
  				codigo: '',
  				nombres: '',
  				contrasena: '',
  				contrasena2: '',
  				tipoUsuario: 'estudiante',
  				grupo: ''
  			}
      }
    })
  })
  test('Se renderiza correctamente', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  it("Existe un elemento  llamado <<formRegistro>>", () => {
   const getElementById = wrapper.find('#formRegistro')
   expect(getElementById.element.id).toBe('formRegistro')
  })
  const data = registro.data()
  it("Los datos se inicializan correctamente", () => {
    expect(data.usuario.nombres).toBe('')
    expect(data.usuario.codigo).toBe('')
    expect(data.usuario.email).toBe('')
    expect(data.usuario.tipoUsuario).toBe('estudiante')
    expect(data.usuario.contrasena).toBe('')
    expect(data.usuario.contrasena2).toBe('')
  })
  it("Existe un elemento llamado <<nomUsuario>>", () => {
    const getElementById = wrapper.find('#nomUsuario')
    expect(getElementById.element.id).toBe('nomUsuario')
  })
  it("Existe un elemento llamado <<codUsuario>>", () => {
    const getElementById = wrapper.find('#codUsuario')
    expect(getElementById.element.id).toBe('codUsuario')
  })
  it("Existe un elemento llamado <<emailUsuario>>", () => {
    const getElementById = wrapper.find('#emailUsuario')
    expect(getElementById.element.id).toBe('emailUsuario')
  })


})
//expect(wrapper.find('.regis').exists())
