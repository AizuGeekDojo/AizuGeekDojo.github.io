<template>
    <Calender />
</template>

<script>
import Calender from "../components/calender.vue";

export default {
  name: "calender",
  components: {
    Calender
  },
  track() {
    this.$ga.page("/calender");
  }
};
</script>

<style>
</style>
