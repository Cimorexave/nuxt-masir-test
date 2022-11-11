<template>
  <div
    class="bg-gray-100 dark:bg-slate-800 dark:text-white min-h-screen flex flex-col items-center py-5 gap-10"
  >
    <Actions />
    <Main />
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
};
</script>
