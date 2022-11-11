<template>
  <main class="gap-12 flex flex-col lg:grid lg:grid-cols-4 items-center">
    <div
      v-for="country in countries"
      :key="country.id"
      class="content flex flex-col items-center"
    >
      <Card :country="country" />
    </div>
  </main>
</template>
<script>
import Card from "./Card.vue";
export default {
  name: "Main",
  components: {
    Card,
  },
  props: ["countries"],
};
</script>
