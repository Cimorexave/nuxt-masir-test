<template>
  <div
    class="lg:px-10 min-h-screen h-max pb-5 bg-gray-100 dark:bg-slate-800 dark:text-white p-5"
  >
    <div class="detail flex flex-col gap-5 lg:gap-16 items-start">
      <nuxt-link
        class="py-2 px-8 rounded-sm shadow-md dark:text-white dark:bg-slate-700 bg-white flex flex-row gap-2 items-center justify-evenly"
        to="/"
      >
        Back
      </nuxt-link>
      <div class="info flex flex-col gap-7 lg:gap-10 lg:flex-row lg:w-full">
        <img
          class="lg:basis-1/3"
          :src="country?.flags?.png"
          :alt="country?.name?.official + 'flag'"
        />
        <div class="txt-info flex flex-col gap-5 lg:p-8">
          <h1 class="font-bold text-xl lg:text-2xl">
            {{ country?.name?.common }}
          </h1>
          <div
            class="middle-info text-sm lg:w-[70%] flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-20"
          >
            <div class="left flex flex-col gap-2 lg:gap-3">
              <div class="font-semibold flex gap-1">
                Native Name:
                <p
                  class="font-normal"
                  :key="nativeName + '_' + Math.floor(Math.random() * 5)"
                  v-for="nativeName in Object.values(
                    country?.name?.nativeName
                  )[0].common"
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

            <div class="right flex flex-col gap-2 lg:gap-3">
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
            </div>
            <div class="font-semibold lg:hidden flex flex-col gap-3 text-lg">
              Border Countries:
              <div class="flex gap-3">
                <button
                  @click="handleBorderCountries(borderCountry)"
                  :key="borderCountry + '_' + Math.floor(Math.random() * 10)"
                  v-for="borderCountry in country?.borders"
                  class="px-5 p-1 text-md shadow-md rounded-sm dark:bg-slate-700 dark:text-white bg-white"
                >
                  {{ borderCountry }},
                </button>
              </div>
            </div>
          </div>
          <div class="font-semibold lg:flex hidden flex-col gap-3 text-lg">
            Border Countries:
            <div class="flex gap-3 max-w-[80%] flex-wrap">
              <button
                :key="borderCountry + '_' + Math.floor(Math.random() * 10)"
                v-for="borderCountry in country?.borders"
                class="px-5 p-1 text-md shadow-md rounded-sm dark:bg-slate-700 dark:text-white bg-white flex "
                @click="handleBorderCountries(borderCountry)"
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
      console.log(name);
      const fullName = this.countries.filter(
        (country) => country.fifa === name
      )[0].name.common;
      console.log(fullName);
      this.$router.replace(`/${fullName}`);
    },
  },
  mounted() {
    try {
      fetch("https://restcountries.com/v3.1/all")
        .then((res) => {
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
      countries: [
        { id: 0, name: "", population: 0, region: "", capital: "", flag: "" },
      ],
    };
  },
};
</script>
