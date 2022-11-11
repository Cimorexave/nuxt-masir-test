<template>
  <div
    class="actions w-full flex lg:flex-row lg:justify-between flex-col items-center gap-5"
  >
    <input
      @change="handleSearch"
      type="text"
      placeholder="Search for a country..."
      class="rounded-md shadow-md dark:bg-slate-700 bg-white w-[90%] lg:w-[50%] p-5 text-gray-100"
    />
    <div
      class="input-select text-center bg-white dark:bg-slate-700 p-5 rounded-md shadow-md"
    >
      <label for="region">Filter By Region: </label>
      <select @change="handleSelect" name="region" id="region">
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Americas">Americas</option>
        <option value="Oceaniea">Oceaniea</option>
        <option value="Africa">Africa</option>
      </select>
      <label for="region">Sort By: </label>
      <select @change="handleSort" name="region" id="region">
        <option value="Popularity">Popularity</option>
      </select>
    </div>
  </div>
</template>
<script>
export default {
  name: "Actions",
  methods: {
    handleSelect(e) {
      this.$emit("regionChange", e.target.value);
    },
    handleSort(e) {
      this.$emit("sortChange", e.target.value);
    },
    handleSearch(e) {
      this.$emit("searchChange", e.target.value);
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
