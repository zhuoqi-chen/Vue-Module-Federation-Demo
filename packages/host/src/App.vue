<template>
  <div>
    <h3>Host App</h3>
    <Mouse></Mouse>
  </div>
</template>

<script>
import {Mouse} from 'remote_mf/component';

export default {
  components: {
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
