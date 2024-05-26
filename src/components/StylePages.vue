<script setup>
import { defineAsyncComponent, ref } from "vue";
const SeparatyLine = defineAsyncComponent(() =>
  import("@/components/SeparatyLine")
);
const DropdownMenu = defineAsyncComponent(() =>
  import("@/components/DropdownMenu")
);
// const SecondaryButton = defineAsyncComponent(() => import('@/components/SecondaryButton'));

const dropdownitem = ref(Array(6).fill("lorEmipSum333"));
</script>

<template>
  <div class="Header">
    <div class="Header_City_Logo">
      <img :src="require('@/assets/img/Logo.svg')" class="Header__logo" />
      <!-- <DropdownMenu buttonTextProp="Город"></DropdownMenu> -->
    </div>
    <div class="Header_NavigationMenu">
      <DropdownMenu
        buttonTextProp="Цены"
        :options="dropdownitem"
        :size="medium"
      ></DropdownMenu>
      <!-- <DropdownMenu buttonTextProp="Услуги"></DropdownMenu> -->
      <!-- <SecondaryButton buttonText="Войти" secondURL="/assets/icons/LogoCompany.svg" firstURL="/assets/icons/LogoCompany.svg"></SecondaryButton> -->
    </div>
  </div>
  <SeparatyLine></SeparatyLine>
</template>

<style lang="scss" scoped>
body,
#app {
  background-color: var(--white);
}
.Header {
  display: flex;
  align-items: center;
  &__logo {
    height: 60px;
    width: 150px;
  }
}
</style>
