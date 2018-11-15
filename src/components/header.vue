<template>
  <div id="header">
    <header>
      <router-link to="/">
        <h1>Aizu Geek Dojo WebPage</h1>
      </router-link>
    </header>
  </div>
</template>

<script>
export default {
  name: "headerComponent"
};
</script>

<style>
header {
  max-height: 200px;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aquamarine;
}

header router-link {
  text-decoration: none;
}

@media only screen and (max-width: 600px) {
  header {
    height: 50px;
  }
}

@media only screen and (max-width: 400px) {
  header {
    font-size: 60%;
    width: 100%;
  }
}
</style>
