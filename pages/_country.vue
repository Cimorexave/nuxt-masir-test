<template>
  <div
    class="lg:px-10 min-h-screen h-max pb-5 bg-gray-100 dark:bg-slate-800 dark:text-white p-5"
  >
    <div class="detail flex flex-col gap-5 items-start">
      <nuxt-link
        class="py-2 px-8 rounded-sm shadow-md dark:text-white dark:bg-slate-700 bg-white flex flex-row gap-2 items-center justify-evenly"
        to="/"
      >
        <i></i>
        Back
      </nuxt-link>
      <div class="info flex flex-col gap-7 lg:flex-row">
        <img
          :src="country?.flags?.png"
          :alt="country?.name?.official + 'flag'"
        />
        <h1 class="font-bold text-xl">{{ country?.name?.common }}</h1>
        <div class="flex flex-col gap-3">
          <div class="font-semibold flex gap-1">
            Native Name:
            <p
              class="font-normal"
              :key="nativeName + '_' + Math.floor(Math.random() * 5)"
              v-for="nativeName in Object.values(country?.name?.nativeName)[0]
                .common"
            >
              {{ nativeName }}
            </p>
          </div>
          <div class="font-semibold flex gap-1">
            Population:
            <p class="font-normal">{{ country?.population }}</p>
          </div>
          <div class="font-semibold flex gap-1">
            Region:
            <p>{{ country?.region }}</p>
          </div>
          <div class="font-semibold flex gap-1">
            Subregion:
            <p class="font-normal">{{ country?.subregion }}</p>
          </div>
          <div class="font-semibold flex gap-1">
            Capital:
            <p
              class="font-normal"
              :key="capital + '_' + Math.floor(Math.random() * 5)"
              v-for="capital in country?.capital"
            >
              {{ capital }},
            </p>
          </div>
        </div>
        <div class="flex flex-col gap-3">
          <div class="font-semibold flex gap-1">
            Top Level Domain:
            <p
              class="font-normal"
              :key="tld + '_' + Math.floor(Math.random() * 5)"
              v-for="tld in country?.tld"
            >
              {{ tld }},
            </p>
          </div>
          <div class="font-semibold flex gap-1">
            Currencies:
            <p
              class="font-normal"
              :key="currency + '_' + Math.floor(Math.random() * 5)"
              v-for="currency in Object.keys(country?.currencies)"
            >
              {{ currency }},
            </p>
          </div>
          <div class="font-semibold flex gap-1">
            Languages:
            <p
              class="font-normal"
              :key="Math.floor(Math.random() * 10) + '_' + language"
              v-for="language in Object.values(country?.languages)"
            >
              {{ language }},
            </p>
          </div>
          <div class="font-semibold flex flex-col gap-3 text-lg">
            Border Countries:
            <div class="flex gap-3">
              <button
                @click="handleBorderCountries(borderCountry)"
                :key="borderCountry + '_' + Math.floor(Math.random() * 10)"
                v-for="borderCountry in country?.borders"
                class="px-8 p-2 text-md shadow-md rounded-sm dark:bg-slate-700 dark:text-white"
              >
                {{ borderCountry }},
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "layout",
  async asyncData({ params }) {
    const country = await fetch(
      `https://restcountries.com/v3.1/name/${params.country}`
    )
      .then((res) => res.json())
      .catch((err) => console.error(err));
    console.log(country[0]);
    return {
      country: country[0],
    };
  },
  methods: {
    handleBorderCountries(name) {
      const fullName = this.countries.filter(country => country.altSpelling[0] === name).name.common
      this.$router.push(`/${fullName}`);
    },
  },
  mounted() {
    try {
      fetch("https://restcountries.com/v3.1/all")
        .then((res) => {
          console.log(res);
          res.json().then((res) => {
            console.log(res);
            this.countries = [...res];
          });
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.error(err);
    }
  },
  data() {
    return {
      countries = Array
    }
  }
};
</script>
