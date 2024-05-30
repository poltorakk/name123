import {
    createApp
} from 'vue';
import YandexMaps from 'vue-yandex-maps';

const settings = {
    apiKey: '0b3df6c3-e70a-401c-9a51-c675c570ea00', // ваш API ключ
    lang: 'ru_RU', // язык интерфейса карты
    coordorder: 'latlong', // порядок координат
    version: '2.1' // версия API
};

const app = createApp({});
app.use(YandexMaps, settings);
app.mount('#app');