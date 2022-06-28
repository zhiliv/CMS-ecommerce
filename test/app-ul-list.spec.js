import { shallowMount } from '@vue/test-utils'
import OL from '@/components/app/ul-list/ul-list.vue'

describe('app-ul-list.js', () => {
  let cmp

  beforeEach(() => {
    cmp = shallowMount(OL, {
      // Создать поверхностный экземпляр компонента
      propsData: {
        classes: 'simple simple-xl',
        styles: 'background: white',
        id: 'indent',
        unstyled: true
      },

      slots:{
        default: '<li>Тест</li>'
      }
    })
  })
  it('Содержимое html для app-ul-list ', () => {
    expect(cmp.element).toMatchSnapshot()
  })
})
