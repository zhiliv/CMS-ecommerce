import { shallowMount } from '@vue/test-utils'
import OL from '@/components/app/pre-code-kbd-samp/pre-code-kbd-samp.vue'

describe('app-pre-code-kbd-samp.js', () => {
  let cmp

  beforeEach(() => {
    cmp = shallowMount(OL, {
      // Создать поверхностный экземпляр компонента
      propsData: {
        classes: 'simple simple-xl',
        styles: 'background: white',
        id: 'indent',
        type: 'code'
      },

      slots:{
        default: '<li>Тест</li>'
      }
    })
  })
  it('Содержимое html для app-ol-ul ', () => {
    expect(cmp.element).toMatchSnapshot()
  })
})
