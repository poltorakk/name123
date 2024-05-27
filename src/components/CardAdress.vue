<template>
  <div class="cardInputBefore__icon-div">
    <div class="cardInputBefore__icon"></div>
  </div>
  <div class="cardInput" :class="{ 'cardInput--time': CardInputTime }">
    <div class="cardInput__text text-normal-regular">
      <div class="cardInput__title">{{ title }}</div>
      <div class="cardInput__placeholder">{{ placeholder }}</div>
    </div>
  </div>
</template>
<script setup></script>
<script>
export default {
  name: "IntTextInput",
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    CardInputTime: {
      type: Boolean,
      required: "true",
    },
  },
};
</script>
<style lang="scss" scoped>
.cardInput {
  border: 1px solid var(--darkact);
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  background-color: var(--white);
  padding: 10px 20px;
  justify-content: space-between;
  height: auto;
  width: 100%;
  margin-right: 2%;
  &__text {
    font-size: 14px;
    display: flex;
    gap: 10px;
    justify-content: center;
    flex-direction: column;
  }
  &__placeholder {
    color: var(--action);
  }
  &__title {
    color: var(--letters);
    font-weight: bold;
  }
}
.cardInputBefore {
  &__icon-div {
    border: 1px solid var(--darkact);
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    background-color: var(--nowhite);
    align-items: center;
    display: flex;
    width: 10%;
    justify-content: center;
    border-right-width: 0px;
    height: auto;
  }
  &__icon {
    height: 20px;
    width: 15px;
    cursor: default;
    background: var(--darkact);
    mask-image: url("@/assets/icons/Twoline.svg");
    mask-size: 16px;
    display: inline-block;
  }
}
.cardInput--time {
  border: 1px solid var(--darkact);
  border-radius: 12px;
  background-color: var(--back);
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  gap: 5px;
}
</style>
