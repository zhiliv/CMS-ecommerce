import { shallowMount } from '@vue/test-utils'
import Row from '@/components/app/row/row.vue'

describe('app-row.js', () => {
  let cmp

  beforeEach(() => {
    cmp = shallowMount(Row, {
      // Создать поверхностный экземпляр компонента
      propsData: {
        rowCols: 'auto',
        rowColsSm: 'auto',
        rowColsMd: 'auto',
        rowColsLg: 'auto',
        rowColsXl: 'auto',
        rowColsXxl: 'auto',
        classes: 'simple',
        styles: 'background: white',
        id: 'indent'
      },
    })
  })
  it('Содержимое html для app-row ', () => {
    expect(cmp.element).toMatchSnapshot()
  })
})
