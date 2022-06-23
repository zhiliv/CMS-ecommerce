import { shallowMount } from '@vue/test-utils'
import H from '@/components/app/caption/caption.vue'

describe('app-caption.js', () => {
  let cmp

  beforeEach(() => {
    cmp = shallowMount(H, {
      // Создать поверхностный экземпляр компонента
      propsData: {
        classes: 'simple simple-xl',
        styles: 'background: white',
        id: 'indent',
        captionTop: true
      },
      slots:{
        default: 'Содержимое'
      }
    })
  })
  it('Содержимое html для app-caption ', () => {
    expect(cmp.element).toMatchSnapshot()
  })
})
