import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import message from "./assets/message.json";

export default new Vuex.Store({
  state: {
    message: message["ja"]
  },
  mutations: {
    changeMessage: (state, lang) => {
      state.message = message[lang];
    }
  }
});
