<script setup>
import { defineAsyncComponent } from "vue";
const DownloadCard = defineAsyncComponent(() =>
  import("@/components/DownloadCard")
);
</script>

<template>
  <div class="Footer">
    <div class="Footer__1level">
      <span class="Footer__main-text text-normal-regular">
        Сайт CargoCost.ru собирает метаданные каждого пользователя (cookie,
        данные об IP-адреса и местоположения) для полноценного функционирования
        сайта. Если Вы против обработки этих данных, просьба покинуть
        сайт.</span
      >
      <div class="Footer__divDownload">
        <DownloadCard title="Польз. соглашение.docx"></DownloadCard>
        <DownloadCard title="Правила перевозки.docx"></DownloadCard>
      </div>
    </div>
    <div class="Footer__Icons">
      <img
        :src="require('@/assets/icons/TelegramIcon.jpg')"
        class="Footer__Icon"
      />
      <img :src="require('@/assets/icons/VkIcon.webp')" class="Footer__Icon" />
    </div>
    <div class="Footer__Dog text-normal-regular">
      @CargoCost 2024 Севастополь
      <span class="text-normal-regular">
        Информация на сайте не является публичной офертой</span
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
body,
#app {
  background-color: var(--white);
}
.Footer {
  border-top: 1px solid var(--darkact);
  height: 200px;
  position: relative;
  width: 100%;
  padding: 10px 10px;
  &__1level {
    display: flex;
    gap: 30px;
  }
  &__Dog {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--letters);
  }
  &__divDownload {
    display: flex;
    gap: 5px;
  }
  &__Icon {
    width: 45px;
    height: 45px;
  }
  &__Icons {
    display: flex;
    gap: 50px;
    justify-content: flex-end;
    padding: 20px 20px;
  }
  &__main-text {
    color: var(--letters);
  }
}
</style>
