import {setStore} from '../utils/storage';
const app = {
  state: {
    lang: '',
    user: {}
  },
  mutations: {
    SWITCH_LANG (state, lang) {
      state.lang = lang;
    },
    USER_INIT (state, user) {
      // vuex可以在所有组件中使用，且数据是双向绑定,可保证及时性
      state.user = user;
      // localstroage中的数据可以在js文件中使用
      setStore('user', user);
    }
  },
  actions: {
    switchLang: ({commit}, payload) => {
      commit('SWITCH_LANG', payload);
    },
    userInit: ({commit}, payload) => {
      commit('USER_INIT', payload);
    }
  }
};

export default app;
