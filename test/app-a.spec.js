import { shallowMount } from '@vue/test-utils'
import Hr from '@/components/app/a/a.vue'

describe('app-a.js', () => {
  let cmp

  beforeEach(() => {
    cmp = shallowMount(Hr, {
      // Создать поверхностный экземпляр компонента
      propsData: {
        classes: 'simple simple-xl',
        styles: 'background: white',
        id: 'indent',
        href: '/testlink'
      },
      slots:{
        default: 'Содержимое'
      }
    })
  })
  it('Содержимое html для app-a ', () => {
    expect(cmp.element).toMatchSnapshot()
  })
})
