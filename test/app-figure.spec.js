import { shallowMount } from '@vue/test-utils'
import Container from '@/components/app/figure/figure.vue'

describe('app-figure.js', () => {
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
  it('Содержимое html для app-figure ', () => {
    expect(cmp.element).toMatchSnapshot()
  })
})
