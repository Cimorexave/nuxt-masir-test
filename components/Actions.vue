<template>
  <div
    class="actions w-full flex lg:flex-row lg:justify-between flex-col items-center gap-5"
  >
    <input
      @input="handleSearch"
      type="text"
      placeholder="Search for a country..."
      class="rounded-md shadow-md dark:bg-slate-700 bg-white w-[90%] lg:w-[50%] p-5 text-gray-100"
    />
    <div
      class="input-select flex flex-row justify-end gap-1 lg:gap-3 text-center"
    >
      <div
        class="flex items-center justify-evenly bg-white w-3 px-5 p-3 rounded-md shadow-md"
      >
        <label for="region">Filter By Region: </label>
        <select
          class="text-center"
          @change="handleSelect"
          name="region"
          id="region"
        >
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Americas">Americas</option>
          <option value="Oceaniea">Oceania</option>
          <option value="Africa">Africa</option>
        </select>
      </div>
      <button
        :class="
          isActive === 'population'
            ? 'bg-gray-200 dark:bg-slate-600 text-sm p-5 rounded-md shadow-md'
            : 'bg-white dark:bg-slate-700 text-sm p-5 rounded-md shadow-md'
        "
        @click="handleSortByPopulation"
      >
        Sort By Population
      </button>
      <button
        :class="
          isActive === 'name'
            ? 'bg-gray-200 dark:bg-slate-600 text-sm p-5 rounded-md shadow-md'
            : 'bg-white dark:bg-slate-700 text-sm p-5 rounded-md shadow-md'
        "
        @click="handleSortByName"
      >
        Sort By Name
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Actions",
  props: ["isActive"],
  methods: {
    handleSelect(e) {
      this.$emit("regionChange", e.target.value);
    },
    handleSortByPopulation(e) {
      this.$emit("sortbypopulation");
    },
    handleSearch(e) {
      this.$emit("searchChange", e.target.value);
    },
    handleSortByName(e) {
      this.$emit("sortbyname");
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
};
</script>
