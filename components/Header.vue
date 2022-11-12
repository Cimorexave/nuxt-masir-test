<template>
  <header
    class="flex flex-row justify-between items-center lg:p-10 lg:py-5 lg:text-lg p-5 w-full dark:bg-slate-700 dark:text-white bg-white shadow-xl"
  >
    <div class="font-bold hover:animate-pulse">Where in the world?</div>
    <button @click="switchMode" class="dark:hover:text-gray-300 hover:text-slate-500 transition-all duration-300">
      {{ isDark ? "Light" : "Dark" }} Mode
    </button>
  </header>
</template>
<script>
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
