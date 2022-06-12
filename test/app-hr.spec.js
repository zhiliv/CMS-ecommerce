import { shallowMount } from '@vue/test-utils'
import Hr from '@/components/app/hr/hr.vue'

describe('app-hr.js', () => {
  let cmp

  beforeEach(() => {
    cmp = shallowMount(Hr, {
      // Создать поверхностный экземпляр компонента
      propsData: {
        classes: 'simple simple-xl',
        styles: 'background: white',
        id: 'indent'
      },
    })
  })
  it('Содержимое html для app-hr ', () => {
    expect(cmp.element).toMatchSnapshot()
  })
})
