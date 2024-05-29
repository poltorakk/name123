<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    answer: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      isAnswerOpen: false,
    };
  },
  methods: {
    toggleAnswer() {
      this.isAnswerOpen = !this.isAnswerOpen;
    },
  },
};
</script>
<template>
  <div class="Question" @click="toggleAnswer">
    <span class="Question__title text-normal-regular">{{ title }}</span>
    <button class="Question__button">
      <img :src="require('@/assets/icons/Add.svg')" class="Question__icon" />
    </button>
  </div>
  <div class="Answer" :class="{ 'is-open': isAnswerOpen }">
    <p class="Answer__text text-normal-regular">{{ answer }}</p>
  </div>
</template>
<style lang="scss" scoped>
.Question {
  cursor: pointer;
  border-radius: 12px;
  display: flex;
  gap: 15px;
  border: 1px solid var(--action);
  padding: 40px 36px;
  justify-items: self-start;
  width: 50%;
  justify-content: space-between;
  margin: 16px auto;

  &__title {
    font-size: 32px;
    color: var(--letters);
  }
  &__button {
    border-radius: 20px;
    border: 1px solid var(--darkact);
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
  }
  &__icon {
    width: 20px;
    height: 20px;
  }
}
.Answer {
  border-radius: 16px;
  border: 1px solid var(--darkact);
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: max-height 0.3s ease-out, opacity 0.3s ease-out;
  padding: 30px 36px;
  width: 40%;
  justify-content: center;
  display: flex;
  margin: 0 auto;
  &__text {
    font-size: 32px;
    color: var(--action);
  }
}

.Answer.is-open {
  max-height: 500px;
  opacity: 1;
}
</style>
