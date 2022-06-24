import { shallowMount } from '@vue/test-utils'
import Hr from '@/components/app/progress/progress.vue'

describe('app-progress.js', () => {
  let cmp

  beforeEach(() => {
    cmp = shallowMount(Hr, {
      // Создать поверхностный экземпляр компонента
      propsData: {
        classes: 'simple simple-xl',
        styles: 'background: white',
        id: 'indent',
        ariaValuenow: 50,
        ariaValuemin: 50,
        ariaValuemax: 50
      },
    })
  })
  it('Содержимое html для app-progress ', () => {
    expect(cmp.element).toMatchSnapshot()
  })
})
