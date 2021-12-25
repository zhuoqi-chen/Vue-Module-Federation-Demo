<template>
  <div>
    <h3>Remote App</h3>
    <Mouse></Mouse>
    <Content :count="count"/>
    <Button @btnClick="inc"/>
  </div>
</template>

<script>
import Content from "./components/Content";
import Button from './components/Button';
import { Mouse } from './components/index.js';

export default {
  components: {
    Content,
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
