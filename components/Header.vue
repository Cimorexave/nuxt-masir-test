<template>
  <header
    class="flex flex-row justify-between items-center p-5 w-full bg-white shadow-xl"
  >
    <div class="font-bold">Where in the world?</div>
    <button class="">
      <!-- <v-icon> {{ mdiWeatherNight }} </v-icon> -->
      Dark Mode
    </button>
  </header>
</template>
<script>
import { mdiWeatherNight } from "@mdi/js";
export default {
  name: "Header",
};
</script>
