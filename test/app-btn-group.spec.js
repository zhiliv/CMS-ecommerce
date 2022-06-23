import { shallowMount } from '@vue/test-utils'
import H from '@/components/app/btn-group/btn-group.vue'

describe('app-btn-group.js', () => {
  let cmp

  beforeEach(() => {
    cmp = shallowMount(H, {
      // Создать поверхностный экземпляр компонента
      propsData: {
        classes: 'simple simple-xl',
        styles: 'background: white',
        id: 'indent',
        size: 'vertical',
        role: 'group'
      },
      slots:{
        default: 'Содержимое'
      }
    })
  })
  it('Содержимое html для app-btn-group ', () => {
    expect(cmp.element).toMatchSnapshot()
  })
})
