<template>
  <StylePages></StylePages>
  <SeparatyLine></SeparatyLine>
  <br />
  <br />

  <div class="SideBar_OrderForm">
    <SliderBar></SliderBar>
    <OrderForm></OrderForm>
  </div>
  <FooterComponent></FooterComponent>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
import StylePages from "@/components/StylePages";
import SliderBar from "@/pages/MainPages/SliderBar";
import FooterComponent from "@/components/FooterComponent";

const SeparatyLine = defineAsyncComponent(() =>
  import("@/components/SeparatyLine")
);
const OrderForm = defineAsyncComponent(() =>
  import("@/pages/MainPages/OrderForm")
);
</script>

<style>
html,
body,
#app {
  min-height: 100%;
  height: 1px;
  margin: 10px 10px;
}
.SideBar_OrderForm {
  display: flex;
  gap: 5px;
  width: 100%;
}
</style>
