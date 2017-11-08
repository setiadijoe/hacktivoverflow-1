import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

const http = axios.create({
  baseURL: 'http://localhost:3000/api'
})

const state = {
  loginState : false,
  questions : [],
  accessToken: '',
  user : ''
}

const mutations = {
  getAllQuestions (state, payload) {
    console.log('ini dari mutations ',payload);
    state.questions = payload
  },
  addNewQuestion (state, payload) {
    console.log('ini pertanyaan baru', payload);
    state.questions.push(payload)
  },
  setLoginState (state, status, token) {
    console.log('statusnya berbuah di mutations');
    state.loginState = status
    state.accessToken = token
  }
}

const actions = {
  getQuestions ({ commit }) {
    console.log('jfyhj')
    http.get('/quest')
    .then(({ data }) => {
      console.log('ini daftar pertanyaan ', data);
      commit('getAllQuestions', data)
    })
    .catch(err => console.error(err))
  },
  addQuestions ({ commit }, newQuestion) {
    console.log('lalala');
    console.log('ini new Question ', newQuestion);
    http.post('/quest/addquestion', newQuestion)
    .then(({data}) => {
      console.log('ini pertanyaan baru', data);
      commit('addNewQuestion', data)
    })
    .catch(err => console.error(err))
  },
  gettingIn ({commit}, userLogin){
    http.post('/users/login', userLogin)
    .then(response => {
      console.log('sukses kagak?');
      localStorage.setItem('accessToken', response.data.usertoken)
      let state = true
      console.log('mau ke komit nih');
      commit('setLoginState', state)
    })
    .catch(err => {
      console.log('gagal login gak?');
      console.error(err);
    })
  }
  
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store