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
  answers: [],
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
  },
  setQuestion (state, payload) {
    let idx = state.questions.findIndex(a => {
      console.log('payload ',payload)
      console.log('state.questions ', a);
      return a._id === payload._id})
    console.log('indeksnya yang mau dihapus ', idx)
    state.questions.splice(idx, 1)
  },
  pushNewAnswer (state, payload) {
    console.log('ini jawaban baru ', payload)
    state.answers.push(payload)
  },
  setAnswer (state, payload) {
    console.log('ini jawabannya ', payload)
    state.answers = payload
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
    http.post('/quest', newQuestion,{
      headers: {
        token: localStorage.getItem('accessToken')
      }
    })
    .then(({data}) => {
      console.log('ini pertanyaan baru', data);
      commit('addNewQuestion', data.newQuestion)
      newQuestion.title = ''
      newQuestion.question = ''
    })
    .catch(err => console.error(err))
  },
  gettingIn ({commit}, userLogin){
    http.post('/users/login', userLogin)
    .then(({data}) => {
      console.log('sukses kagak? ', data);
      localStorage.setItem('accessToken', data.usertoken)
      localStorage.setItem('userid', data.id)
      console.log('mau ke komit nih');
      commit('setLoginState', data)
    })
    .catch(err => {
      console.log('gagal login gak?');
      console.error(err);
    })
  },
  inputAnswer ({ commit },newAnswer) {
    var userid = localStorage.getItem('userid')
    console.log(newAnswer)
    var input = {
      question: newAnswer.id,
      answer: newAnswer.answer,
      user: userid
    }
    http.post(`/answer`, input)
    .then(({data}) => {
      console.log('masukkin jawaban ', data.newAnswer)
      commit('pushNewAnswer', data.newAnswer)
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
  },
  deleteQuestion ({ commit }, id) {
    var config = {
      headers: {
        token: localStorage.getItem('accessToken')
      }
    }
    http.delete(`/quest/${id}`, config)
    .then(({data}) => {
      console.log('pertanyaan yang di delete ', data)
      commit('setQuestion', data.deleteQuestion)
    })
    .catch(err => {
      console.log('gagal hapus')
      console.error(err)
    })
  },
  getAnswers ({commit}) {
    http.get('/answer')
    .then(({data}) => {
      console.log('kumpulan jawaban ', data)
      commit('setAnswer', data)
    })
    .catch(err => {
      console.log('error dapat jawban')
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