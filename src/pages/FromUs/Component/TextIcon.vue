<script>
export default {
  props: {
    text: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
  },
};
</script>
<template>
  <div class="TextIcon">
    <div class="TextIcon__divicontitle">
      <img
        class="TextIcon__icon"
        :src="require('@/assets/icons/Chevron up.svg')"
      />
      <span class="TextIcon__title text-normal-regular"> {{ title }}</span>
    </div>
    <span class="TextIcon__text text-normal-regular"> {{ text }}</span>
  </div>
</template>
<style lang="scss" scoped>
.TextIcon {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &__text {
    font-size: 19px;
    text-align: justify;
    color: var(--letters);
    line-height: 30px;
  }
  &__icon {
    margin-bottom: 10px;
  }
  &__title {
    margin: 30px 0px;
    font-size: 20px;
    font-weight: bold;
  }
  &__divicontitle {
    display: flex;
    gap: 30px;
  }
}
</style>
