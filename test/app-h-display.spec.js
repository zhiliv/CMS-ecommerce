import { shallowMount } from '@vue/test-utils'
import H from '@/components/app/h-display/h-display.vue'

describe('app-h-display.js', () => {
  let cmp

  beforeEach(() => {
    cmp = shallowMount(H, {
      // Создать поверхностный экземпляр компонента
      propsData: {
        classes: 'simple simple-xl',
        styles: 'background: white',
        id: 'indent',
        level: '6',
        size: 4
      },
      slots:{
        default: 'Содержимое'
      }
    })
  })
  it('Содержимое html для app-h-display ', () => {
    expect(cmp.element).toMatchSnapshot()
  })
})
