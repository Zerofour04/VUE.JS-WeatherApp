<template>
    
    <div class="card flex justify-center">
        <Card>
            <template #title>
                <div class="flex align-items-center gap-2">
                    <span>Weather Forecast</span>
                </div>
            </template>
            <template #content>
                <div v-if="weatherData" class="mt-3">
                    <div class="flex flex-column gap-2">
                        <h2 class="m-0">{{ weatherData.name }}</h2>
                        <div class="flex align-items-center gap-3">
                            <img 
                                :src="`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`" 
                                :alt="weatherData.weather[0].description"
                                class="weather-icon"
                            />
                            <span class="text-xl">{{ Math.round(weatherData.main.temp) }}°C</span>
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
                <p v-else class="m-0">
                    Gib deine Stadt ein, um die aktuelle Wetterlage zu erhalten.
                </p>
            </template>
        </Card>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Card from 'primevue/card';
import Menubar from 'primevue/menubar';

const weatherData = ref(null);

const handleWeatherData = (data) => {
    weatherData.value = data;
};

const handleWeatherError = () => {
    weatherData.value = null;
};

defineProps({
    msg: String
});
</script>
