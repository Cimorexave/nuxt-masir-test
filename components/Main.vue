<template>
  <main class="gap-12 flex flex-col items-center">
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
  data() {
    return {
      countries: [
        { id: 0, name: "", population: 0, region: "", capital: "", flag: "" },
      ],
    };
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
