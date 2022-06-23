import { shallowMount } from '@vue/test-utils'
import H from '@/components/app/output/output.vue'

describe('app-output.js', () => {
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
  it('Содержимое html для app-output ', () => {
    expect(cmp.element).toMatchSnapshot()
  })
})
