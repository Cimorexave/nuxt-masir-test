<template>
  <div class="p-20 dark:bg-slate-800 dark:text-white h-screen bg-gray-100">
    Error: {{ error.statusCode }} <br />
    {{ error.message }} <br />
    <nuxt-link to="/">Back</nuxt-link>
  </div>
</template>
<script>
export default {
  props: ["error"],
  layout: "layout",
  mounted() {
    console.log(this.error);
  },
};
</script>
