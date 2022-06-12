import { shallowMount } from '@vue/test-utils'
import Row from '@/components/app/grid/grid.vue'

describe('app-grid.js', () => {
  let cmp

  beforeEach(() => {
    cmp = shallowMount(Row, {
      // Создать поверхностный экземпляр компонента
      propsData: {
        classes: 'simple',
        styles: 'background: white',
        id: 'indent'
      },
    })
  })
  it('Содержимое html для app-grid ', () => {
    expect(cmp.element).toMatchSnapshot()
  })
})
