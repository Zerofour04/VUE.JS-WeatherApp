<template>
    <Header @weather-data="handleWeatherData" @weather-error="handleWeatherError" />
    <WeatherApp :weatherData="weatherData" />
</template>

<script setup>
import { ref } from 'vue';
import Header from './components/Header.vue';
import WeatherApp from './components/WeatherApp.vue';

const weatherData = ref(null);

const handleWeatherData = (data) => {
    weatherData.value = data;
};

const handleWeatherError = () => {
    weatherData.value = null;
};
</script>
