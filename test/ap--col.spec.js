import { shallowMount } from '@vue/test-utils'
import Row from '@/components/app/col/col.vue'

describe('app-col.js', () => {
  let cmp

  beforeEach(() => {
    cmp = shallowMount(Row, {
      // Создать поверхностный экземпляр компонента
      propsData: {
        col: true,
        colSm: 'auto',
        colMd: true,
        colXl: 4,
        colXxl: 6,
        offset: 3,
        offsetSm: 2,
        offsetMd: 3,
        offsetXl: 4,
        offsetXxl: 6,
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
