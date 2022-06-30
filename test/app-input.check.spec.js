import { shallowMount } from '@vue/test-utils'
import H from '@/components/app/input-check/input-check.vue'

describe('app-input-check.js', () => {
  let cmp

  beforeEach(() => {
    cmp = shallowMount(H, {
      // Создать поверхностный экземпляр компонента
      propsData: {
        classes: 'simple simple-xl',
        styles: 'background: white',
        id: 'indent',
        value: 'тест',
        placeholder: 'Предпоказ текста',
        type: 'radio'
      },
      slots:{
        default: 'Содержимое'
      }
    })
  })
  it('Содержимое html для app-input-check ', () => {
    expect(cmp.element).toMatchSnapshot()
  })
})
