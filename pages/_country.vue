<template>
  <div
    class="detail lg:px-10 h-screen bg-gray-100 dark:bg-slate-800 dark:text-white p-5 flex flex-col items-start"
  >
    <nuxt-link to="/"> Back </nuxt-link>
    <div class="info flex flex-col gap-5 lg:flex-row">
      <img :src="country?.flags?.png" :alt="country?.name?.official + 'flag'" />
      <h1>{{ country?.name?.common }}</h1>
      <div>
        <div class="font-bold flex gap-1">
          Native Name:
          <p
            :key="nativeName + '_' + Math.floor(Math.random() * 5)"
            v-for="nativeName in Object.keys(coutrny.name.nativeName)"
          >
            {{ nativeName }}
          </p>
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
          <p
            :key="capital + '_' + Math.floor(Math.random() * 5)"
            v-for="capital in country.capital"
          >
            {{ capital }}
          </p>
        </div>
      </div>
      <div>
        <div class="font-bold flex gap-1">
          Currencies:
          <p
            :key="currency + '_' + Math.floor(Math.random() * 5)"
            v-for="currency in Object.keys(country.currencies)"
          >
            {{ currency }}
          </p>
        </div>
        <div class="font-bold flex gap-1">
          Languages:
          <p
            :key="Math.floor(Math.radnom() * 10) + '_' + language"
            v-for="language in Object.values(country.languages)"
          >
            {{ language }}
          </p>
        </div>
        <div class="font-bold flex gap-1">
          Border Countries:
          <p
            :key="borderCountry + '_' + Math.floor(Math.radnom() * 10)"
            v-for="borderCountry in country.borders"
          >
            {{ borderCountry }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "layout",
  asyncData({ params, redirect }) {
    console.log(params);
    try {
      let country = {};
      fetch(`https://restcountries.com/v3.1/name/${params.country}`).then(
        (res) => {
          res
            .json()
            .then((res) => {
              country = res[0];
              console.log(country);
            })
            .catch((err) => console.log(err));
        }
      );
      return { country };
    } catch (err) {
      console.error(err);
      redirect("/");
    }
  },
};
</script>
