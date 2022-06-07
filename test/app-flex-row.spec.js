import { shallowMount } from '@vue/test-utils'
import flexRow from '@/components/app/flex-row/flex-row.vue'

describe('app-flex-row.js', () => {
  let cmp

  beforeEach(() => {
    cmp = shallowMount(flexRow, {
      // Создать поверхностный экземпляр компонента
      propsData: {
        classes: 'simple',
        styles: 'background: white',
        id: 'indent',
        dFlex: true,
        dInlineFlex: true,
        flexRow: true,
        dSmFlex: true,
        dSmInlineFlex: true,
        dMdFlex: true,
        dMdInlineFlex: true,
        dLgFlex: true,
        dLgInlineFlex: true,
        dXlFlex: true,
        dXlInlineFlex: true,
        dXxlFlex: true,
        dXxlInlineFlex: true,
        flexRowReverse: true,
        flexColumn: true,
        flexColumnReverse: true,
        flexSmRow: true,
        flexSmRowReverse: true,
        flexSmColumn: true,
        flexSmColumnReverse: true,
        flexMdRow: true,
        flexMdRowReverse: true,
        flexMdColumn: true,
        flexMdColumnReverse: true,
        flexLgRow: true,
        flexLgRowReverse: true,
        flexLgColumn: true,
        flexLgColumnReverse: true,
        flexXlRow: true,
        flexXlRowReverse: true,
        flexXlColumn: true,
        flexXlColumnReverse: true,
        flexXxlRow: true,
        flexXxlRowReverse: true,
        flexXxlColumn: true,
        flexXxlColumnReverse: true,
        flexFill: true,
        flexSmFill: true,
        flexMdFill: true,
        flexLgFill: true,
        flexXlFill: true,
        flexXxlFill: true,
        flexGrow: 1,
        flexSmGrow: 1,
        flexMdGrow: 1,
        flexLgGrow: 1,
        flexXlGrow: 1,
        flexXxlGrow: 1,
        flexShrink: 1,
        flexSmShrink: 1,
        flexMdShrink: 1,
        flexLgShrink: 1,
        flexXlShrink: 1,
        flexXxlShrink: 1,
        flexNowrap: true,
        flexWrap: true,
        flexWrapReverse: true,
        flexSmWrap: true,
        flexSmNowrap: true,
        flexSmWrapReverse: true,
        flexMdWrap: true,
        flexMdNowrap: true,
        flexMdWrapReverse: true,
        flexLgWrap: true,
        flexLgNowrap: true,
        flexLgWrapReverse: true,
        flexXlWrap: true,
        flexXlNowrap: true,
        flexXlWrapReverse: true,
        flexXxlWrap: true,
        flexXxlNowrap: true,
        flexXxlWrapReverse: true
      },
    })
  })
  it('Содержимое html для app-flex-row ', () => {
    expect(cmp.element).toMatchSnapshot()
  })
})
