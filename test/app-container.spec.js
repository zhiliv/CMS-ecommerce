import { shallowMount } from '@vue/test-utils'
import Container from '@/components/app/container/container.vue'

describe('app-container.js', () => {
  let cmp

  beforeEach(() => {
    cmp = shallowMount(Container, {
      // Создать поверхностный экземпляр компонента
      propsData: {
        breakpoint: 'sm, md, lg, xl, xxl',
        classes: 'simple',
        styles: 'background: white',
        id: 'indent'
      },
    })
  })
  it('Содержимое html для app-container ', () => {
    expect(cmp.element).toMatchSnapshot()
  })
})
