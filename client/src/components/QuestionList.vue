<template>
  <div class="col-md-4">
    <QuestionSummary />
  </div>
</template>

<script>
import QuestionSummary from '@/components/QuestionSummary'
import { mapActions } from 'vuex'
export default {
  components : {
    QuestionSummary
  },
  methods : {
    ...mapActions([
      'getQuestions'
    ])
  },
  created : function () {
    this.getQuestions()
  }
}
</script>

<style>

</style>
