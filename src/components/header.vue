<template>
  <div id="header">
    <header>
      <div id="header">
        <router-link id="title" to="/">
          <h1>Aizu Geek Dojo WebPage</h1>
        </router-link>
      </div>
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
  width: 100%;
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
