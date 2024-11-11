<template>
    <div class="card flex justify-center"></div>
    <Card>
        <template #title>
            <div class="flex align-items-center gap-2">
                <span>Weather Forecast</span>
            </div>
        </template>
        <template #content>
            <p class="m-0">Gib deine Stadt ein, um die aktuelle Wetterlage zu erhalten.</p>
            <div class="flex flex-row gap-2 align-items-center">
                <InputText v-model="city" placeholder="Enter city name" @keyup.enter="getWeather" />
                <Button label="Search" icon="pi pi-search" @click="getWeather" severity="primary" />
            </div>
            <div v-if="weatherData" class="mt-3">
                <div class="flex flex-column gap-2">
                    <h2 class="m-0">{{ weatherData.name }}</h2>
                    <div class="flex align-items-center gap-3">
                        <i class="pi pi-thermometer text-xl"></i>
                        <span class="text-xl">{{ Math.round(weatherData.main.temp) }}°C</span>
                    </div>
                    <div class="flex align-items-center gap-3">
                        <img
                            :src="`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`"
                            :alt="weatherData.weather[0].description"
                            class="weather-icon" />
                        <span class="text-xl">{{ weatherData.weather[0].description }}</span>
                    </div>
                    <div class="flex align-items-center gap-3">
                        <i class="pi pi-cloud text-xl"></i>
                        <span class="text-xl capitalize">{{ weatherData.weather[0].description }}</span>
                    </div>
                    <div class="flex align-items-center gap-3">
                        <i class="pi pi-percentage text-xl"></i>
                        <span class="text-xl">Luftfeuchtigkeit: {{ weatherData.main.humidity }}%</span>
                    </div>
                </div>
            </div>
        </template>
    </Card>
    <br />
</template>

<script setup>
import { ref } from 'vue';
import Card from 'primevue/card';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

const count = ref(0);

const city = ref('');
const weatherData = ref(null);

const getWeather = async () => {
    if (!city.value) return;

    try {
        const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&lang=de&appid=${API_KEY}`
        );

        if (!response.ok) {
            throw new Error('City not found');
        }

        weatherData.value = await response.json();
        console.log(weatherData.value);
    } catch (error) {
        weatherData.value = null;
    }
};

defineProps({
    msg: String
});
</script>

<style scoped></style>
