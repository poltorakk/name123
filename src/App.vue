<template>
  <StylePages></StylePages>
  <SeparatyLine></SeparatyLine>
  <SliderBar></SliderBar>
  <OrderForm></OrderForm>
  <br />
  <br />
  <AdditionalSecondaryButton></AdditionalSecondaryButton>
  <br />
  <CalendarInput></CalendarInput>
  <SearchInput></SearchInput>
  <PhoneModal></PhoneModal>
  <FooterComponent></FooterComponent>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
import StylePages from "@/components/StylePages";
import SliderBar from "@/pages/MainPages/SliderBar";
import FooterComponent from "@/components/FooterComponent";
import PhoneModal from "@/components/Modal/PhoneModal";

const SeparatyLine = defineAsyncComponent(() =>
  import("@/components/SeparatyLine")
);
const OrderForm = defineAsyncComponent(() =>
  import("@/pages/MainPages/OrderForm")
);
const AdditionalSecondaryButton = defineAsyncComponent(() =>
  import("@/components/AdditionalSecondaryButton")
);
const CalendarInput = defineAsyncComponent(() =>
  import("@/components/CalendarInput")
);
const SearchInput = defineAsyncComponent(() =>
  import("@/components/SearchInput")
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
</style>
