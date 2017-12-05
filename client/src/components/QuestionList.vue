<template>
  <div class="col-md-4">
    <question-widget v-for="question in questions" :key="question._id" :question="question" class="list-group"></question-widget>
  </div>
</template>

<script>
import QuestionWidget from '@/components/QuestionWidget'
import { mapActions, mapState } from 'vuex'
export default {
  components : {
    QuestionWidget
  },
  computed: {
    ...mapState(['questions'])
  },
  methods: {
    ...mapActions(['getQuestions'])
  },
  mounted () {
    this.getQuestions()
  }
}
</script>

<style>

</style>
