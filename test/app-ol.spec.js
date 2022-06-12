import { shallowMount } from '@vue/test-utils'
import OL from '@/components/app/ol/ol.vue'

describe('app-ol.js', () => {
  let cmp

  beforeEach(() => {
    cmp = shallowMount(OL, {
      // Создать поверхностный экземпляр компонента
      propsData: {
        classes: 'simple simple-xl',
        styles: 'background: white',
        id: 'indent',
      },

      slots:{
        default: '<li>Тест</li>'
      }
    })
  })
  it('Содержимое html для app-ol ', () => {
    expect(cmp.element).toMatchSnapshot()
  })
})
