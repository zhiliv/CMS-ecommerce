<template>
  <div></div>
</template>
<script>
import { strToBool } from '../../../scripts/component/func'
export default {
  props: {
    /*
     * @property {String} hoverClass - Класс при наведении мыши
     * @property {Boolean} checkHover - Проверять ли наведение мыши
     */
    hoverClass: {
      type: String,
      default: '',
      required: true,
    },
    checkHover: {
      type: [Boolean, String],
      default: false,
    },
  },
  data() {
    return {
      hover: false
    }
  },
  watch: {
    hover(val) {
      const classes = this.hoverClass ? this.hoverClass.split(' ') : []
      classes.forEach((cls) => {
        val
          ? this.$refs.item.classList.add(cls)
          : this.$refs.item.classList.remove(cls)
        if (strToBool(this.checkHover)) this.$emit('hover-status', val)
      })
    },
  },
}
</script>
<style>
@import './../../../assets/css/color.css';
li {
  float: left;
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

@media (max-width: 767px) {
  li {
    display: none;
  }
}
</style>
