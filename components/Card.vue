<template>
  <button
    @click="handleCard"
    class="card dark:bg-slate-700 bg-white flex flex-col items-center max-w-[90%] w-[90%] lg:w-full lg:h-[27rem] rounded-md shadow-lg gap-3"
  >
    <img
      :src="country.flags?.png"
      :alt="country.name.official + 'flag'"
      class="w-full rounded-t-md object-cover"
    />
    <div class="info w-full p-5 flex flex-col items-start gap-5 pb-5 lg:pb-10">
      <h1 class="name font-bold text-lg">
        {{ country.name.common }}
      </h1>
      <div class="flex flex-col items-start gap-1">
        <div class="flex gap-1">
          <div class="font-semibold">Population:</div>
          {{ country.population }}
        </div>
        <div class="flex gap-1">
          <div class="font-semibold">Region:</div>
          {{ country.region }}
        </div>
        <div
          class="flex gap-1"
          :key="capital + '_' + Math.floor(Math.random() * 250)"
          v-for="capital in country.capital"
        >
          <div class="font-semibold">Population:</div>
          {{ capital }}
        </div>
      </div>
    </div>
  </button>
</template>
<script>
export default {
  name: "Card",
  props: {
    country: Object,
  },
  methods: {
    handleCard() {
      this.$router.push(`/${this.country.name.common}`);
    },
  },
};
</script>
<style scoped>
img {
  aspect-ratio: 4 / 3;
}
</style>
