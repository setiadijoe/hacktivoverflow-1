<template>
  <div class="col-md-12">
    <div class="panel panel-success" v-if="enableEdit === false">
      <div class="panel-heading" v-if="selected.author">
        <h3 class="panel-title">Title: {{ selected.title }}</h3>
        <h4 class="panel-title">Author: {{ selected.author.name}}</h4>
      </div>
      <div class="panel-body">
        Question: {{ selected.question }}
      </div>
      <div class="btn-group-control" role="group" aria-label="Basic example" >
        <button type="button" class="btn btn-info fa fa-thumbs-up" aria-hidden="true" @click="upVoteQuestion(selected._id)">{{ selected.like.length }}</button>
        <button v-if="user === selected.author.name" class="btn btn-danger" @click="deleteQuestion(selected._id)">Delete</button>
        <button class="btn btn-warning" @click.prevent="openEditForm()" v-if="user === selected.author.name">Edit</button>
        <button type="button" class="btn btn-warning fa fa-thumbs-down" aria-hidden="true" @click="downVoteQuestion(selected._id)">{{ selected.dislike.length }}</button>
      </div>
      <answer-box :quest_id="id"></answer-box>
    </div>
    <div class="panel panel-info" v-if="enableEdit === true">
      <div class="form-group">
        <label class="col-form-label col-form-label-lg" for="inputLarge">Title</label>
        <input class="form-control form-control-lg" type="text" id="inputLarge" v-model="question.title">
      </div>
      <div class="form-group">
        <label class="col-form-label" for="inputDefault">Question</label>
        <input type="text" class="form-control" v-model="question.question" id="inputDefault">
      </div>
      <button type="button" class="btn btn-info" @click="changeQuestion()">Save</button>
    </div>
  </div>
</template>

<script>
import AnswerBox from '@/components/AnswerBox'
import { mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
      question: {
        title: '',
        question: ''
      },
      enableEdit: false
    }
  },
  props: ['id'],
  components: {
    AnswerBox
  },
  computed: {
    ...mapState(['selected', 'user'])
  },
  methods: {
    ...mapActions([
      'getOneQuestion', 
      'deleteQuestion', 
      'getAnswers',
      'updateQuestion',
      'upVoteQuestion',
      'downVoteQuestion'
      ]),
    openEditForm () {
      this.enableEdit = true
      this.question.title = this.selected.title
      this.question.question = this.selected.question
    },
    changeQuestion () {

      let obj = {
        id: this.id,
        quest: this.question
      }
      console.log('check dulu aja ', obj);
      this.updateQuestion(obj)
      this.enableEdit = false
    }
  },
  created () {
    this.getOneQuestion(this.id)
  },
  watch: {
    id (newId) {
      this.getOneQuestion(newId)
      this.getAnswers(newId)
    }
  }
}
</script>

<style>

</style>
