<template>
  <div class="header-mini">
    <div class="header-mini-topbar">
      <img
        src="../assets/logo.png"
        class="header-mini-logo">
      <div class="header-mini-title"><nuxt-link to="/">Aizu Geek Dojo</nuxt-link></div>
      <hamburger-menu
        ref="hamburger"
        @close-sender="menu" />
    </div>

    <div
      v-if="isMenu"
      class="header-mini-dropdown-menu">
      <nuxt-link
        to="about"
        @click.native="close_menu">About</nuxt-link>
      <nuxt-link
        to="/opentime"
        @click.native="close_menu">予約状況</nuxt-link>
      <nuxt-link
        to="/product"
        @click.native="close_menu">制作物</nuxt-link>
      <nuxt-link
        to="/items"
        @click.native="close_menu">備品</nuxt-link>
      <nuxt-link
        to="/training"
        @click.native="close_menu">講習会</nuxt-link>
      <nuxt-link
        to="/blog"
        @click.native="close_menu">ブログ</nuxt-link>
      <nuxt-link
        to="/members"
        @click.native="close_menu">メンバー</nuxt-link>
      <a href="https://www.youtube.com/user/univaizu">Youtube</a>
    </div>
  </div>
</template>

<script>
import hamburguer_menu from '../components/hamburger-menu'
export default {
  components: {
    'hamburger-menu': hamburguer_menu
  },
  data: function() {
    return {
      isMenu: false
    }
  },
  methods: {
    menu: function() {
      this.isMenu = !this.isMenu
    },
    close_menu: function() {
      this.$refs.hamburger.click_hamburger()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/color';
.header-mini {
  width: 100%;
  height: 60px;
  margin: 0;
  padding: 0;
  .header-mini-topbar {
    z-index: 3;
    box-shadow: 0px 5px 10px #0000003d;
    position: fixed;
    width: 100%;
    background-color: $mainColor1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 60px;
    margin: 0;
    padding: 0;
    .header-mini-logo {
      border-radius: 7px;
      border-style: solid;
      border-width: thin;
      border-color: $hightLightColor;
      margin-left: 15px;
      height: 80%;
      width: auto;
    }

    .header-mini-title {
      a {
        text-decoration: none;
        color: $hightLightColor;
        letter-spacing: 0.05em;
      }
      font-size: 23px;
      font-weight: bold;
      flex-grow: 2;
      width: 50%;
    }
    .header-mini-menu {
      height: 80%;
      width: auto;
    }
  }
  .header-mini-dropdown-menu {
    z-index: 2;
    position: fixed;
    top: 60px;
    height: 100%;
    width: 100%;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: $lastColor2;
    opacity: 0.95;
    font-size: large;
    a {
      margin: 20px;
      padding-bottom: 2px;
      color: $hightLightColor;
      letter-spacing: 0.2em;
      font-weight: 400;
      text-decoration: none;
    }
    :hover {
      border-bottom: $lastColor3 solid 1px;
      margin: 20px 20px 19px 20px;
      color: $lastColor3;
    }
    a:visited {
      text-decoration: none;
    }
  }
}
</style>
