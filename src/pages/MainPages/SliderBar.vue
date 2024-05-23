<template>
  <Carousel>
    <Slide v-for="slide in slides" :key="slide.id">
      <div class="carousel__item">
        <h3>{{ slide.title }}</h3>
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
  { id: '1', title: 'lorEmipSum333', content: 'lorEmipSum333' },
  { id: '2', title: 'lorEmipSum333', content: 'lorEmipSum333' },
  { id: '3', title: 'lorEmipSum333', content: 'lorEmipSum333' },
  { id: '4', title: 'lorEmipSum333', content: 'lorEmipSum333' },
  { id: '5', title: 'lorEmipSum333', content: 'lorEmipSum333' },
]

</script>

<style scoped>
.slider {
  position: relative;
  width: 100%;
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
</style>