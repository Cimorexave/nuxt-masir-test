<template>
  <div class="p-20">
    Error: {{ error.statusCode }} <br>
    {{ error.message }}
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
