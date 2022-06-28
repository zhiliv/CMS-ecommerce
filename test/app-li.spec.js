import { shallowMount } from '@vue/test-utils'
import OL from '@/components/app/li/li.vue'

describe('app-li.js', () => {
  let cmp

  beforeEach(() => {
    cmp = shallowMount(OL, {
      // Создать поверхностный экземпляр компонента
      propsData: {
        classes: 'simple simple-xl',
        styles: 'background: white',
        id: 'indent',
        inline: true
      },

      slots:{
        default: '<li>Тест</li>'
      }
    })
  })
  it('Содержимое html для app-li ', () => {
    expect(cmp.element).toMatchSnapshot()
  })
})
