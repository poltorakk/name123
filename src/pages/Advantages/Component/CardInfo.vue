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
  <div class="CardInfo">
    <div class="CardInfo__divicontitle">
      <img
        class="CardInfo__icon"
        :src="require('@/assets/icons/Chevron up.svg')"
      />
      <span class="CardInfo__title text-normal-regular"> {{ title }}</span>
    </div>
    <span class="CardInfo__text text-normal-regular"> {{ text }}</span>
  </div>
</template>
<style lang="scss" scoped>
.CardInfo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 20px;
  padding: 20px 24px;
  box-shadow: 0px 0px 15px rgba(112, 112, 112, 0.2);
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
