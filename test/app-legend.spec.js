import { shallowMount } from '@vue/test-utils'
import H from '@/components/app/legend/legend.vue'

describe('app-legend.js', () => {
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
  it('Содержимое html для app-legend ', () => {
    expect(cmp.element).toMatchSnapshot()
  })
})
