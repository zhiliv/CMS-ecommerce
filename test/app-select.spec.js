import { shallowMount } from '@vue/test-utils'
import H from '@/components/app/select/select.vue'

describe('app-select.js', () => {
  let cmp

  beforeEach(() => {
    cmp = shallowMount(H, {
      // Создать поверхностный экземпляр компонента
      propsData: {
        classes: 'simple simple-xl',
        styles: 'background: white',
        id: 'indent',
        size: 'sm'
      },
      slots:{
        default: 'Содержимое'
      }
    })
  })
  it('Содержимое html для app-select ', () => {
    expect(cmp.element).toMatchSnapshot()
  })
})
