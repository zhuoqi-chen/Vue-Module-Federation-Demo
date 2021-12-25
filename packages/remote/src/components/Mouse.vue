<template>
  <div>
    <div>
      x: {{x}}
    </div>
    <div>
      y: {{y}}
    </div>
  </div>
</template>

<script>
// import {ref} from '@vue/composition-api';
import { useMouse} from '@vueuse/core';
export default {
  name: 'Mouse',
  setup(props) {
    const {x,y} = useMouse()
    // const x = ref(0)
    // const y = ref(0)
    return {x,y}
  }
}
</script>