<template>
  <button @click="click">Remote button</button>
</template>

<script>
import Vue from 'vue';
console.log("Button Component",{Vue});
export default {
  methods: {
    click() {
      this.$emit("btnClick");
    }
  }
}
</script>

