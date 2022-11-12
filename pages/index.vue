<template>
  <div
    style="display: flex"
    class="bg-gray-100 lg:px-10 dark:bg-slate-800 dark:text-white min-h-screen flex-col items-center py-5 gap-10"
  >
    <Actions
      @regionChange="regionChange"
      @sortbypopulation="handleSortByPopulation"
      @searchChange="handleSearch"
      @sortbyname="handleSortByName"
      :isActive="isActive"
    />
    <Main :countries="filteredCountries" />
  </div>
</template>

<script>
import Actions from "../components/Actions.vue";
import Main from "../components/Main.vue";
export default {
  name: "Home",
  layout: "layout",
  components: {
    Actions,
    Main,
  },
  data() {
    return {
      countries: [
        { id: 0, name: "", population: 0, region: "", capital: "", flag: "" },
      ],
      filteredCountries: [
        { id: 0, name: "", population: 0, region: "", capital: "", flag: "" },
      ],
      isActive: String,
    };
  },
  methods: {
    regionChange(region) {
      this.filteredCountries = this.countries.filter(
        (country) => region === country.region
      );
    },
    handleSortByPopulation() {
      this.isActive = "population";
      this.filteredCountries = this.filteredCountries.sort(
        (a, b) => +b.population - +a.population
      );
    },
    handleSearch(keyword) {
      console.log(keyword);
      this.filteredCountries = this.countries.filter((country) =>
        country.name.official.includes(keyword)
      );
    },
    handleSortByName() {
      this.isActive = "name";
      this.filteredCountries = this.filteredCountries.sort((a, b) =>
        a.name.common.localeCompare(b.name.common)
      );
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
            this.filteredCountries = [...res];
          });
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.error(err);
    }
  },
};
</script>
