import { shallowMount } from '@vue/test-utils'
import ABBR from '@/components/app/abbr/abbr.vue'

describe('app-abbr.js', () => {
  let cmp

  beforeEach(() => {
    cmp = shallowMount(ABBR, {
      // Создать поверхностный экземпляр компонента
      propsData: {
        classes: 'simple simple-xl',
        styles: 'background: white',
        id: 'indent',
        title: 'Подсказка'
      },

      slots:{
        default: 'Содержимое'
      }
    })
  })
  it('Содержимое html для app-abbr ', () => {
    expect(cmp.element).toMatchSnapshot()
  })
})
