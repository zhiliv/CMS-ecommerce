import { shallowMount } from '@vue/test-utils'
import OL from '@/components/app/ol-ul/ol-ul.vue'

describe('app-ol-ul.js', () => {
  let cmp

  beforeEach(() => {
    cmp = shallowMount(OL, {
      // Создать поверхностный экземпляр компонента
      propsData: {
        classes: 'simple simple-xl',
        styles: 'background: white',
        id: 'indent',
        type: 'ul'
      },

      slots:{
        default: '<li>Тест</li>'
      }
    })
  })
  it('Содержимое html для app-ol-ul ', () => {
    expect(cmp.element).toMatchSnapshot()
  })
})
