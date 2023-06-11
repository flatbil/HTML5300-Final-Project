<template>
  <div class="home">
    <AppMenu/>
    <div v-custom-directive class="container">
      <!-- Jumbotron Creates a large, full-width heading with additional styling for emphasis.-->
      <div class="jumbotron text-center border border-gray p-4">
        <!-- Large heading display-4: Sets the heading to a large display size.-->
        <h1 class="display-4">HTML5 300!</h1>
        <!-- Lead paragraph -->
        <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada tempus quam, vitae laoreet purus consectetur et.</p>
        <!-- Horizontal divider my-4: Adds vertical margin to the horizontal divider.-->
        <hr class="my-4">
        <!-- Normal paragraph -->
        <p>See some pretty Pictures for lesson 8.</p>
        <!-- Primary button -->
        <nuxt-link to="/images" class="btn btn-primary btn-lg" role="button">Images</nuxt-link>
      </div>
      <div class="jumbotron text-center">
        <h1>Weather Information</h1>
        <div v-if="weatherData">
          <p>High Temperature: {{ highTempFahrenheit ? highTempFahrenheit.toFixed(2) + '°F' : 'Loading...' }}</p>
          <p>Low Temperature: {{ lowTempFahrenheit ? lowTempFahrenheit.toFixed(2) + '°F' : 'Loading...' }}</p>
        </div>
        <div v-else>
          Loading...
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import AppMenu from '~/components/AppMenu.vue';
import axios from 'axios';
import { NormalModuleReplacementPlugin } from 'webpack';

export default {
  name: 'AppHome',
  directives: {
    // testing Custom Directive
    'custom-directive': {
      bind(el) {
        el.style.color = 'blue';
        el.style.fontWeight = 'bold';
      },
    }
  },
  components: {
    AppMenu
  },
  data() {
    return {
      weatherData: null,
      highTempFahrenheit: null,
      lowTempFahrenheit: null,
    };
  },
  async mounted() {
    try {
      const apiKey = 'c7c7c7ea75a1d9a2aa19b6922fa5818d';
      const city = 'Seattle';
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

      const response = await axios.get(apiUrl);
      this.weatherData = response.data;

      
      // Convert temperatures from Kelvin to Fahrenheit
      const temperatureKelvin = response.data.main.temp;
      const temperatureFahrenheit = (temperatureKelvin * 9/5) - 459.67;

      // Convert high and low temperatures to Fahrenheit
      const highTempKelvin = response.data.main.temp_max;
      const lowTempKelvin = response.data.main.temp_min;
      const highTempFahrenheit = (highTempKelvin * 9/5) - 459.67;
      const lowTempFahrenheit = (lowTempKelvin * 9/5) - 459.67;


      const temperature = response.data.main.temp;
      console.log(`Temperature in ${city}: ${temperature}°C`);
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.border-gray {
  border-color: gray;
}
</style>
