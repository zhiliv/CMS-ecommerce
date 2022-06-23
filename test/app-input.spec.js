import { shallowMount } from '@vue/test-utils'
import H from '@/components/app/input/input.vue'

describe('app-input.js', () => {
  let cmp

  beforeEach(() => {
    cmp = shallowMount(H, {
      // Создать поверхностный экземпляр компонента
      propsData: {
        classes: 'simple simple-xl',
        styles: 'background: white',
        id: 'indent',
        value: 'тест',
        placeholder: 'Предпоказ текста'
      },
      slots:{
        default: 'Содержимое'
      }
    })
  })
  it('Содержимое html для app-input ', () => {
    expect(cmp.element).toMatchSnapshot()
  })
})
