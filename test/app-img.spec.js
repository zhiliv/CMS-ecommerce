import { shallowMount } from '@vue/test-utils'
import P from '@/components/app/img/img.vue'

describe('app-img.js', () => {
  let cmp

  beforeEach(() => {
    cmp = shallowMount(P, {
      // Создать поверхностный экземпляр компонента
      propsData: {
        classes: 'simple simple-xl',
        styles: 'background: white',
        id: 'indent',
        src: 'img.jpg'
      },
      slots:{
        default: 'Содержимое'
      }
    })
  })
  it('Содержимое html для app-img ', () => {
    expect(cmp.element).toMatchSnapshot()
  })
})
