<template>
  <div :class="isDark ? 'dark' : ''">
    <Header @switchedMode="switchMode" />
    <!-- the content goes:  -->
    <Nuxt />
  </div>
</template>
<script>
export default {
  name: "layout",
  data() {
    return {
      isDark: false,
    };
  },
  methods: {
    switchMode(isDark) {
      console.log(isDark);
      this.isDark = isDark;
    },
  },
};
</script>
<style>
*,
html,
body {
  font-family: "Open Sans", sans-serif;
}
</style>
