import { shallowMount } from '@vue/test-utils'
import ADDRESS from '@/components/app/dt/dt.vue'

describe('app-dt.js', () => {
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
  it('Содержимое html для app-dt ', () => {
    expect(cmp.element).toMatchSnapshot()
  })
})
