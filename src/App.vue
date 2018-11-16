<template>
  <div id="app">
    <Header />
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <div id="langage_selecter">
        <langageselecter />
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Header from "./components/header.vue";
import langage_selecter from "./components/langage_selecter.vue";
export default {
  name: "app",
  components: {
    Header,
    langageselecter: langage_selecter
  },

};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  widows: 100%;
}

#nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 20%;
  padding-right: 20%;
  height: 50px;
  background-color: slategrey;
  align-items: center;
}

router-linl {
  margin: auto;
  color: white;
}

@media (max-width: 600px) {
  #nav {
    flex-direction: column;
    height: 50px;
    padding-top: 5px;
    padding-bottom: 5px;
    margin: auto;
  }
  body {
    height: 150%;
  }
}
</style>
