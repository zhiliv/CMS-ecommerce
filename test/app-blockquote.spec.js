import { shallowMount } from '@vue/test-utils'
import ADDRESS from '@/components/app/blockquote/blockquote.vue'

describe('app-blockquote.js', () => {
  let cmp

  beforeEach(() => {
    cmp = shallowMount(ADDRESS, {
      // Создать поверхностный экземпляр компонента
      propsData: {
        classes: 'simple simple-xl',
        styles: 'background: white',
        id: 'indent',
        footer: true
      },

      slots:{
        default: 'Содержимое'
      }
    })
  })
  it('Содержимое html для app-blockquote ', () => {
    expect(cmp.element).toMatchSnapshot()
  })
})
