<template>
  <div>
    <h3>Host App</h3>
    <Mouse></Mouse>
    <Button @btnClick="inc"/>
  </div>
</template>

<script>
import {Button,Mouse} from 'remote_mf/component';

export default {
  components: {
    Button,
    Mouse
  },
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    inc() {
      this.count++;
    }
  }
};
</script>

<style scoped>
h1 {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
