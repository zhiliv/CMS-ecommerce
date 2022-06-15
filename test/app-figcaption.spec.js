import { shallowMount } from '@vue/test-utils'
import Container from '@/components/app/figcaption/figcaption.vue'

describe('app-figcaption.js', () => {
  let cmp

  beforeEach(() => {
    cmp = shallowMount(Container, {
      // Создать поверхностный экземпляр компонента
      propsData: {
        classes: 'simple',
        styles: 'background: white',
        id: 'indent',
      },
    })
  })
  it('Содержимое html для app-figcaption ', () => {
    expect(cmp.element).toMatchSnapshot()
  })
})
