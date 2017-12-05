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
  selected: '',
  user : ''
}

const mutations = {
  getAllQuestions (state, payload) {
    console.log('ini dari mutations ', payload);
    state.questions = payload
  },
  addNewQuestion (state, payload) {
    console.log('ini pertanyaan baru', payload);
    state.questions.push(payload)
  },
  setLoginState (state, payload) {
    console.log('statusnya berbuah di mutations');
    state.loginState = payload.status
    state.user = payload.user
  },
  OneQuestion (state, payload) {
    state.selected = payload
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
    http.post('/quest', {
      title: newQuestion.title,
      question: newQuestion.question
    },{
      headers: {
        token: localStorage.getItem('accessToken')
      }
    })
    .then(({data}) => {
      console.log('ini pertanyaan baru', data);
      commit('addNewQuestion', data)
    })
    .catch(err => console.error(err))
  },
  gettingIn ({commit}, userLogin){
    http.post('/users/login', userLogin)
    .then(({data}) => {
      console.log('sukses kagak? ', data);
      localStorage.setItem('accessToken', data.usertoken)
      console.log('mau ke komit nih');
      commit('setLoginState', data)
    })
    .catch(err => {
      console.log('gagal login gak?');
      console.error(err);
    })
  },
  inputAnswer ({ commit }, newAnswer) {
    http.post('/answer', newAnswer)
    .then(response => {
      console.log('masukkin jawaban ', response);
    })
    .catch(err => console.error(err))
  },
  getOneQuestion ({ commit }, id) {
    http.get(`/quest/${id}`)
    .then(({data}) => {
      console.log('pertanyaan yang dipilih ', data)
      commit('OneQuestion', data)
    })
    .catch(err => {
      console.log('error nih')
      console.error(err)
    })
  }
  
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store