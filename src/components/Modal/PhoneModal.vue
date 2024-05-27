<template>
  <PhoneForm></PhoneForm>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { defineAsyncComponent } from "vue";

const PhoneForm = defineAsyncComponent(() =>
  import("@/components/Modal/PhoneForm")
);
const backgroundStyles = ref({
  width: "100%",
  height: "100%",
});

onMounted(() => {
  updateBackgroundSize();
  window.addEventListener("resize", updateBackgroundSize);
});

function updateBackgroundSize() {
  backgroundStyles.value = {
    width: `${window.innerWidth}vw`,
    height: `${window.innerHeight}vh`,
  };
}
</script>
<style lang="scss" scoped>
html,
body,
#app {
  min-height: 100%;
  height: 1px;
  margin: 10px 10px;
}
.Modal {
  &__Background {
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
  }
}
</style>
