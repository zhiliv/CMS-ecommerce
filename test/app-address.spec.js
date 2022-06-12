import { shallowMount } from '@vue/test-utils'
import ADDRESS from '@/components/app/address/address.vue'

describe('app-address.js', () => {
  let cmp

  beforeEach(() => {
    cmp = shallowMount(ADDRESS, {
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
  it('Содержимое html для app-address ', () => {
    expect(cmp.element).toMatchSnapshot()
  })
})
