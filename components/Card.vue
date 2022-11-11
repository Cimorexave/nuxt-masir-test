<template>
  <button
    class="card flex flex-col items-center max-w-[90%] w-[90%] rounded-md shadow-lg gap-3"
  >
    <img
      :src="country.flags?.png"
      :alt="country.name.official + 'flag'"
      class="w-full rounded-t-md"
    />
    <div class="info w-full p-5 flex flex-col items-start gap-5 pb-5">
      <h1 class="name font-bold text-lg">{{ country.name.official }}</h1>
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
};
</script>
<style scoped>
img {
  aspect-ratio: 4 / 3;
}
</style>
