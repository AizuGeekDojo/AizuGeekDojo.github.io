<template>
  <div id="app">
    <Header />
    <Calender />
  </div>
</template>

<script>
import Calender from "./components/calender.vue";
import Header from "./components/header.vue";

export default {
  name: "app",
  components: {
    Calender,
    Header
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
