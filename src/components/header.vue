<template>
  <div id="header">
    <header>
      <h1>GeekDojo WebPage</h1>
    </header>
  </div>
</template>

<script>
export default {
  name: "header"
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

@media only screen and (max-width: 600px) {
  header {
    height: 50px;
  }
}
</style>
