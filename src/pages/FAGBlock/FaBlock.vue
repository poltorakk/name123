<script setup>
import TitleInfBlock from "@/components/TitleInfBlock.vue";
import QuestionSelect from "./Component/QuestionSelect.vue";
</script>
<template>
  <TitleInfBlock title="Часто задаваемые вопросы"> </TitleInfBlock>
  <QuestionSelect
    title="Помогают ли грузчики грузить вещи?"
    answer="Да"
  ></QuestionSelect>
  <QuestionSelect title="Работаю ли грузчики ночью?"></QuestionSelect>
  <QuestionSelect
    title="Можно ли перевозить вещи без упаковки?"
  ></QuestionSelect>
</template>
<style lang="scss" scoped></style>
