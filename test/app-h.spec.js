import { shallowMount } from '@vue/test-utils'
import H from '@/components/app/h/h.vue'

describe('app-h.js', () => {
  let cmp

  beforeEach(() => {
    cmp = shallowMount(H, {
      // Создать поверхностный экземпляр компонента
      propsData: {
        classes: 'simple simple-xl',
        styles: 'background: white',
        id: 'indent',
        level: '6',
      },
      slots:{
        default: 'Содержимое'
      }
    })
  })
  it('Содержимое html для app-h ', () => {
    expect(cmp.element).toMatchSnapshot()
  })
})
