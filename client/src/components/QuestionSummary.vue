<template>
  <div>
    <div class="panel panel-primary" v-for="question in showQuestion" :key="question.id">
      <div class="panel-heading">
        <h3 class="panel-title">Title: {{ question.title }}</h3>
        <h4 class="panel-title">Author: {{ question.author.name}}</h4>
      </div>
      <div class="panel-body">
        Question: {{ question.question }}
      </div>
      <button>Delete</button>
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

<style scoped>
  .panel-body {
    color: yellow;
  }
</style>
