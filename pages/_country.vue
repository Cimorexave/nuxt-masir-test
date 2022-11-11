<template>
  <div
    class="detail h-screen bg-gray-100 dark:bg-slate-800 dark:text-white p-5 flex flex-col items-start"
  >
    <nuxt-link to="/"> Back </nuxt-link>
    <div class="info flex flex-col gap-5 lg:flex-row">
      <img :src="country?.flags?.png" :alt="country?.name?.official + 'flag'" />
      <h1>{{ country?.name?.official }}</h1>
      <div>
        <div class="font-bold flex gap-1">
          Native Name:
          <p>{{}}</p>
        </div>
        <div class="font-bold flex gap-1">
          Population:
          <p>{{ country.population }}</p>
        </div>
        <div class="font-bold flex gap-1">
          Region:
          <p>{{ country.region }}</p>
        </div>
        <div class="font-bold flex gap-1">
          Subregion:
          <p>{{ country.subregion }}</p>
        </div>
        <div class="font-bold flex gap-1">
          Capital:
          <p>{{}}</p>
        </div>
      </div>
      <div>
        <div class="font-bold flex gap-1">
          Currencies:
          <p>{{}}</p>
        </div>
        <div class="font-bold flex gap-1">
          Languages:
          <p>{{}}</p>
        </div>
        <div class="font-bold flex gap-1">
          Border Countries:
          <p>{{}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "layout",
  async asyncData({ params, redirect }) {
    console.log(params);
    try {
      let country = {};
      fetch(`https://restcountries.com/v3.1/name/${params.country}`).then(
        (res) => {
          res.json().then((res) => {
            country = res[0];
            console.log(country);
          });
        }
      );
      return { country };
    } catch (err) {
      console.error(err);
      redirect("/");
    }
  },
  data() {
    return {
      country: Object,
    };
  },
};
</script>
