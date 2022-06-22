import { shallowMount } from '@vue/test-utils'
import Row from '@/components/app/table-responsive/table-responsive.vue'

describe('app-table-responsive.js', () => {
  let cmp

  beforeEach(() => {
    cmp = shallowMount(Row, {
      // Создать поверхностный экземпляр компонента
      propsData: {
        classes: 'simple',
        styles: 'background: white',
        id: 'indent',
        responsive: 'true'
      },
    })
  })
  it('Содержимое html для app-table-responsive ', () => {
    expect(cmp.element).toMatchSnapshot()
  })
})
