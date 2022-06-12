import { shallowMount } from '@vue/test-utils'
import Row from '@/components/app/g-col/g-col.vue'

describe('app-g-col.js', () => {
  let cmp

  beforeEach(() => {
    cmp = shallowMount(Row, {
      // Создать поверхностный экземпляр компонента
      propsData: {
        gCol: true,
        gColSm: 'auto',
        gColMd: true,
        gColXl: 4,
        gColXxl: 6,
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
  it('Содержимое html для app-g-col ', () => {
    expect(cmp.element).toMatchSnapshot()
  })
})
