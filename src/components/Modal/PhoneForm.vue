<template>
  <form class="PhoneModal">
    <IntTextInput></IntTextInput>
  </form>
</template>
<script setup>
import { defineAsyncComponent } from "vue";

const IntTextInput = defineAsyncComponent(() =>
  import("@/components/IntTextInput")
);
</script>
<style lang="scss" scoped>
html,
body,
#app {
  min-height: 100%;
  height: 1px;
  margin: 10px 10px;
}
.PhoneModal {
  z-index: 99px;
  top: 0;
  left: 0;
}
</style>
