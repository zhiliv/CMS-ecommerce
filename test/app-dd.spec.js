import { shallowMount } from '@vue/test-utils'
import ADDRESS from '@/components/app/dd/dd.vue'

describe('app-dd.js', () => {
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
  it('Содержимое html для app-dd ', () => {
    expect(cmp.element).toMatchSnapshot()
  })
})
