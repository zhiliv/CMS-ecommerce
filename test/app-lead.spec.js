import { shallowMount } from '@vue/test-utils'
import Hr from '@/components/app/lead/lead.vue'

describe('app-lead.js', () => {
  let cmp

  beforeEach(() => {
    cmp = shallowMount(Hr, {
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
  it('Содержимое html для app-lead ', () => {
    expect(cmp.element).toMatchSnapshot()
  })
})
