import { shallowMount } from '@vue/test-utils'
import H from '@/components/app/label/label.vue'

describe('app-label.js', () => {
  let cmp

  beforeEach(() => {
    cmp = shallowMount(H, {
      // Создать поверхностный экземпляр компонента
      propsData: {
        classes: 'simple simple-xl',
        styles: 'background: white',
        id: 'indent'
      },
      slots:{
        default: 'Содержимое'
      }
    })
  })
  it('Содержимое html для app-label ', () => {
    expect(cmp.element).toMatchSnapshot()
  })
})
