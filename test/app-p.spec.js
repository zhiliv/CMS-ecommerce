import { shallowMount } from '@vue/test-utils'
import P from '@/components/app/p/p.vue'

describe('app-p.js', () => {
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
  it('Содержимое html для app-p ', () => {
    expect(cmp.element).toMatchSnapshot()
  })
})
