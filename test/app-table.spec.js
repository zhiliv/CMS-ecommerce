import { shallowMount } from '@vue/test-utils'
import Row from '@/components/app/table/table.vue'

describe('app-table.js', () => {
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
  it('Содержимое html для app-table ', () => {
    expect(cmp.element).toMatchSnapshot()
  })
})
