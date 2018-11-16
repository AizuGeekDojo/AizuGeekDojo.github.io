<template>
    <div id="langage_selecter">
      <button v-if="select_lang != 'ja'" v-on:click="changeLang">en</button>
      <button v-if="select_lang != 'en'" v-on:click="changeLang">ja</button>
    </div>
</template>

<script>
const default_lang =
  (
    window.navigator.userLanguage ||
    window.navigator.language ||
    window.navigator.browserLanguage
  ).substr(0, 2) == "ja"
    ? "ja"
    : "en";

export default {
  name: "langageselecter",
  data() {
    return {
      select_lang: default_lang
    };
  },
  methods: {
    changeLang: function() {
      if (this.select_lang == "ja") {
        this.select_lang = "en";
      } else {
        this.select_lang ="ja";
      }
      
    }
  },
  watch: {
    select_lang: function(val) {
      this.$store.commit("changeMessage", val);
    }
  }
};
</script>

<style>
</style>
