import { shallowMount } from '@vue/test-utils'
import P from '@/components/app/small/small.vue'

describe('app-small.js', () => {
  let cmp

  beforeEach(() => {
    cmp = shallowMount(P, {
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
  it('Содержимое html для app-small ', () => {
    expect(cmp.element).toMatchSnapshot()
  })
})
