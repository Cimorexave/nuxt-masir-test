<template>
  <button>
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "Button",
  props: ["children"],
};
</script>
