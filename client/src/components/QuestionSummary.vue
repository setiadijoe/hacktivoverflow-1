<template>
  <div>
    <div class="panel panel-primary" v-for="question in questions" :key="question._id">
      <div class="panel-heading">
        <h3 class="panel-title">Title: {{ question.title }}</h3>
        <h4 class="panel-title">Author: {{ question.author.name}}</h4>
      </div>
      <div class="panel-body">
        Question: {{ question.question }}
      </div>
      <button>Delete</button>
    </div>
        <!-- Large modal -->
   
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  computed : {
    ...mapState([
      'questions'
    ])
  },
  methods: {
    ...mapActions([
      'getQuestions'
    ])
  },
  created: function () {
    this.getQuestions()
  }

}
</script>

<style scoped>
  .panel-body {
    color: yellow;
  }
</style>
