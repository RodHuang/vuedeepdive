<script>
import { defineComponent, h, onMounted, ref } from "vue";

export default defineComponent({
  props: ['size'],
  render() {
    const slot = this.$slots.default
        ? this.$slots.default()
        : []

    return h('div', {class: 'stack'}, slot.map(child => {
      return h('div', {class: `m-${this.$props.size}`}, [
          child
      ])
    }))
  },
})
</script>
<style>
.m-4 {
  margin: 10px;
}
</style>