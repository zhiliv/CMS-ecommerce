import { shallowMount } from '@vue/test-utils'
import H from '@/components/app/tr/tr.vue'

describe('app-th.js', () => {
  let cmp

  beforeEach(() => {
    cmp = shallowMount(H, {
      // Создать поверхностный экземпляр компонента
      propsData: {
        classes: 'simple simple-xl',
        styles: 'background: white',
        id: 'indent',
        active: true
      },
      slots:{
        default: 'Содержимое'
      }
    })
  })
  it('Содержимое html для app-th ', () => {
    expect(cmp.element).toMatchSnapshot()
  })
})
