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
  checkStatus (state, payload) {
    console.log('datanya masukk gak?? ',payload)
    if (payload !== undefined) {
      state.user = payload.user
      state.loginState = true
    } else {
      state.loginState = false
      state.user = ''
    }
  },
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
  },
  updateQuestion (state, payload) {
    console.log('pertanyaan baru ', payload)
    let idx = state.questions.findIndex(a => {
      return a._id === payload._id
    })
    state.questions.splice(idx, 1, payload)
    state.selected = payload
  },
  removeOneAnswer (state, payload) {
    let idx = state.answers.findIndex(a => {
      console.log('payload ', payload)
      console.log('state.questions ', a);
      return a._id === payload._id
    })
    console.log('indeksnya yang mau dihapus ', idx)
    state.answers.splice(idx, 1)
  },
  addLikeAndDislike (state, payload) {
    console.log('manipulasi state answer ', payload)
    let idx = state.answers.findIndex(a => {
      console.log('payload ', payload)
      console.log('state.questions ', a);
      return a._id === payload._id
    })
    state.answers[idx].like = payload.like
    state.answers[idx].dislike = payload.dislike
  },
  addLikeDislikeQuestion (state, payload) {
    console.log('manipulasi state answer ', payload)
    let idx = state.questions.findIndex(a => {
      console.log('state.questions ', a);
      return a._id === payload._id
    })
    state.questions[idx].like = payload.like
    state.questions[idx].dislike = payload.dislike
    state.selected = state.questions[idx]
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
      localStorage.setItem('name', data.user)
      console.log('mau ke komit nih');
      commit('setLoginState', data)
    })
    .catch(err => {
      console.log('gagal login gak?');
      console.error(err);
    })
  },
  inputAnswer ({ commit }, thisAnswer) {
    console.log(thisAnswer)
    var input = {
      question: thisAnswer.id,
      answer: thisAnswer.answer
    }
    var config = {
      headers: {
        token: localStorage.getItem('accessToken')
      }
    }
    http.post(`/answer`, input, config)
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
    swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        swal(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
    var config = {
      headers: {
        token: localStorage.getItem('accessToken')
      }
    }
    http.delete(`/quest/${id}`, config)
    .then(({data}) => {
      console.log('pertanyaan yang di delete ', data)
      commit('setQuestion', data.deleteQuestion)
      this.$router.push('/hacktivoverflow')
    })
    .catch(err => {
      console.log('gagal hapus')
      console.error(err)
    })
  },
  getAnswers ({commit}, id) {
    console.log('ini idnya bukan ? ', id)
    http.get(`/answer/${id}`)
    .then(({data}) => {
      console.log('kumpulan jawaban ', data)
      commit('setAnswer', data)
    })
    .catch(err => {
      console.log('error dapat jawban')
      console.error(err)
    })
  },
  deleteOneAnswer ({commit}, id) {
    console.log('dapat idnya gak? ', id)
    var config = {
      headers: {
        token: localStorage.getItem('accessToken')
      }
    }
    http.delete(`/answer/${id}`, config)
    .then(({data})=> {
      console.log('jawaban yang dihapus ', data.deleteAnswer)
      commit('removeOneAnswer', data.deleteAnswer)
    })
    .catch(err => {
      console.log('gagal hapus jawaban ')
      console.error(err)
    })
  },
  likeTheAnswer ({ commit }, id) {
    var config = {
      headers: {
        token: localStorage.getItem('accessToken')
      }
    }
    http.put(`/answer/like/${id}`, {}, config)
    .then(({data}) => {
      console.log('ini lho yang ngelike ', data)
      commit('addLikeAndDislike', data)
    })
    .catch(err => {
      console.log('gagal kasih like')
      console.error(err)
    })
  },
  dislikeTheAnswer ({commit}, id) {
    var config = {
      headers: {
        token: localStorage.getItem('accessToken')
      }
    }
    http.put(`/answer/dislike/${id}`, {}, config)
    .then(({data}) => {
      console.log('ini yang di dislike ', data)
      commit('addLikeAndDislike', data)
    })
    .catch(err => {
      console.log('ini errornya ')
      console.error(err)
    })
  },
  updateQuestion ({commit}, edit) {
    console.log('Ini yang mau diedit ', edit.quest)
    console.log('Ini idnya ', edit.id)
    var config = {
      headers: {
        token: localStorage.getItem('accessToken')
      }
    }
    http.put(`/quest/${edit.id}`, edit.quest, config)
    .then(({data}) => {
      console.log('ini yang baru lho ', data)
      commit('updateQuestion', data.newQuestion)
    })
    .catch(err => {
      console.log('ini error')
      console.error(err)
    })
  },
  upVoteQuestion ({commit}, id) {
    var config = {
      headers: {
        token: localStorage.getItem('accessToken')
      }
    }
    http.put(`/quest/like/${id}`, {}, config)
    .then(({data}) => {
      console.log('Vote question ', data)
      commit('addLikeDislikeQuestion', data)
    })
    .catch(err => console.error(err))
  },
  downVoteQuestion ({commit}, id) {
    var config = {
      headers: {
        token: localStorage.getItem('accessToken')
      }
    }
    http.put(`/quest/dislike/${id}`, {}, config)
    .then(({data}) => {
      console.log('Down Vote Question ', data)
      commit('addLikeDislikeQuestion', data)
    })
    .catch(err => console.error(err))
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store