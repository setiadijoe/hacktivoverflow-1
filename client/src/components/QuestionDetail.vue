<template>
  <div class="col-md-8">
    <div class="panel panel-primary" v-for="question in showQuestion" :key="question.id">
      <div class="panel-heading">
        <h3 class="panel-title">Title: {{ question.title }}</h3>
        <h4 class="panel-title">Author: {{ question.author.name}}</h4>
      </div>
      <div class="panel-body">
        Question: {{ question.question }}
      </div>
      <button>Delete</button>
      <answer-box></answer-box>
    </div>
  </div>
</template>

<script>
import AnswerBox from '@/components/AnswerBox'
export default {
  components: {
    AnswerBox
  }
}
</script>

<style>

</style>
