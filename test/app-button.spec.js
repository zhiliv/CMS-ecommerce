import { shallowMount } from '@vue/test-utils'
import P from '@/components/app/button/button.vue'

describe('app-button.js', () => {
  let cmp

  beforeEach(() => {
    cmp = shallowMount(P, {
      // Создать поверхностный экземпляр компонента
      propsData: {
        classes: 'simple simple-xl',
        styles: 'background: white',
        id: 'indent',
        type: 'primary',
        size: 'lg'
      },
      slots:{
        default: 'Содержимое'
      }
    })
  })
  it('Содержимое html для app-button ', () => {
    expect(cmp.element).toMatchSnapshot()
  })
})
