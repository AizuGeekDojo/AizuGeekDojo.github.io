<template>
  <div class="home">
  </div>
</template>

<script>
export default {
  name: "home",
  track() {
    this.$ga.page("/");
  }
};
</script>
