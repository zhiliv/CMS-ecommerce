import { shallowMount } from '@vue/test-utils'
import H from '@/components/app/input-range/input-range.vue'

describe('app-input-range.js', () => {
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
  it('Содержимое html для app-input-range ', () => {
    expect(cmp.element).toMatchSnapshot()
  })
})
