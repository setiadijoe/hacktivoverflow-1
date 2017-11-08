<template>
  <div>
    <div class="panel panel-primary" v-for="question in showQuestion" :key="question.id">
      <div class="panel-heading">
        <h3 class="panel-title">Title: {{ question.title }}</h3>
        <h3 class="panel-title">Author: {{ question.author}}</h3>
      </div>
      <div class="panel-body">
        Question: {{ question.question }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  prop : ['questions'],
  computed : {
    showQuestion () {
      return this.questions()
    }
  },
  methods: {
    ...mapActions([
      'getQuestions'
    ]),
    ...mapState([
      'questions'
    ])
  },
  created: function () {
    this.questions()
  }

}
</script>

<style>

</style>
