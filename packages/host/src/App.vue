<template>
  <div>
    <h3>Host App</h3>
    <Button @btnClick="inc"/>
  </div>
</template>

<script>
import Button from 'remote_mf/Button';

export default {
  components: {
    Button,
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
