<template>
  <header
    class="flex flex-row justify-between items-center lg:p-10 lg:py-5 lg:text-lg p-5 w-full dark:bg-slate-700 dark:text-white bg-white shadow-xl"
  >
    <div class="font-bold">Where in the world?</div>
    <button @click="switchMode" class="">
      <!-- <v-icon> {{ mdiWeatherNight }} </v-icon> -->
      {{ isDark ? "Light" : "Dark" }} Mode
    </button>
  </header>
</template>
<script>
import { mdiWeatherNight } from "@mdi/js";
export default {
  name: "Header",
  data() {
    return {
      isDark: false,
    };
  },
  methods: {
    switchMode() {
      this.isDark = !this.isDark;
      this.$emit("switchedMode", this.isDark);
    },
  },
};
</script>
