<template>
  <Carousel>
    <Slide v-for="slide in slides" :key="slide.id">
      <div class="carousel__item">
        <h3>{{ slide.title }}</h3>
        <div class="carousel__item__icon">
          <img :src="slide.icon" alt="Icon">
        </div>
        <p>{{ slide.content }}</p>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>
<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const slides = [
  { id: '1', title: 'lorEmipSum333', icon: require('@/assets/img/Logo.svg'), content: 'lorEmipSum333' },
  { id: '2', title: 'lorEmipSum333', icon: require('@/assets/img/Logo.svg'), content: 'lorEmipSum333' },
  { id: '3', title: 'lorEmipSum333', icon: require('@/assets/img/Logo.svg'), content: 'lorEmipSum333' },
  { id: '4', title: 'lorEmipSum333', icon: require('@/assets/img/Logo.svg'), content: 'lorEmipSum333' },
  { id: '5', title: 'lorEmipSum333', icon: require('@/assets/img/Logo.svg'), content: 'lorEmipSum333' },
]

</script>

<style scoped>
.slider {
  position: relative;
  width: 50%;
  overflow: hidden;
}

.slide {
  display: none;
}

.slide.active {
  display: block;
}

.controls {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}

.controls button {
  margin: 0 5px;
}

.carousel__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;

  &__icon {
    width: 100px;
    height: 100px;
    margin-bottom: 16px;

    img {
      width: 200px;
      height: 150px;
      object-fit: contain;
    }
  }
}
</style>