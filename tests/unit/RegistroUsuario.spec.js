import {
  shallowMount,
  mount,
  createLocalVue
} from '@vue/test-utils'
import vuetify from "vuetify"
import Vue from 'vue';
import RegistroUsuario from '@/components/autenticacion/RegistroUsuario.vue'


describe('RegistroUsuario', () => {
  let wrapper;
  beforeEach(() => {
    Vue.use(vuetify)

    wrapper = mount(RegistroUsuario)
  })

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it("Existe un elemento  llamado <<formRegistro>>", () => {
    const getElementById = wrapper.find('#formRegistro')
    expect(getElementById.element.id).toBe('formRegistro')
  })

  const data = RegistroUsuario.data()
  it("Los datos se inicializan correctamente", () => {

    expect(data.info.nomUsuario).toBe('')
    expect(data.info.codigo).toBe('')
    expect(data.info.email).toBe('')
    expect(data.info.tipo).toBe('')
    expect(data.info.contrasena).toBe('')
    expect(data.info.contrasena2).toBe('')

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
  it("Existen un elemento para el tipo de usuario llamado radioDocente", () => {
    const getElementById = wrapper.find('#radioDocente')
    expect(getElementById.element.id).toBe('radioDocente')
  })
  it("Existen un elemento para el tipo de usuario llamado radioEstudiante", () => {
    const getElementById = wrapper.find('#radioEstudiante')
    expect(getElementById.element.id).toBe('radioEstudiante')
  })
  it("Existen un elemento  llamado <<tipoUsuario>>", () => {
    const getElementById = wrapper.find('#tipoUsuario')
    expect(getElementById.element.id).toBe('tipoUsuario')
  })
  it("Existe un elemento llamado <<contrasena>>", () => {
    const getElementById = wrapper.find('#contrasena')
    expect(getElementById.element.id).toBe('contrasena')
  })
  it("Existe un elemento llamado <<repertirContrasena>>", () => {
    const getElementById = wrapper.find('#repertirContrasena')
    expect(getElementById.element.id).toBe('repertirContrasena')
  })

  it("Existen variables para almacenar las reglas de los campos", () => {

    expect(data.rules.usuarioRules).toBe('[v => !!v || 'Campo requerido']')
    const barByName = wrapper.findComponent({ name: 'bar' }) // => finds Bar by `name`
expect(barByName.exists()).toBe(true)

  })


  /*expect(data.rules.codigoRules).exists()
  expect(data.rules.emailRules).exists()
  expect(data.rules.tipoRules).exists()
  expect(data.rules.contrasenaRules).exists()*/

  // it("Tiene un boton llamado registrar", () => {
  //   const getElementById = wrapper.find('#registrar')
  //   expect(getElementById.element.id).toBe('registrar')
  // })
})
//expect(wrapper.find('.regis').exists())
