<template>
<div>
  <form @submit.prevent="fillAnswer(quest_id, answer)">
    <div class="form-group">
      <label for="exampleTextarea">Input Your Answer</label>
      <textarea class="form-control" rows="3" v-model="answer"></textarea>
      <button type="submit">Submit</button>
    </div>
  </form>
  <form v-for="ans in answers" :key="ans._id">
    <div class="card text-white bg-warning mb-3" style="max-width: 20rem;">
      <div class="card-header">Answered by {{ ans.user.name }}</div>
      <div class="card-body">
        <h4 class="card-title">The answer is</h4>
        <p class="card-text">{{ ans.answer }}</p>
      </div>
    </div>
  </form>
</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  props:['quest_id'],
  data () {
    return {
      answer: ''
    }
  },
  computed: {
    ...mapState(['answers'])
  },
  created () {
    this.getAnswers()
  },
  methods: {
    ...mapActions([
      'inputAnswer', 'getAnswers'
    ]),
    fillAnswer (quest_id, answer) {
      let obj = {
          id : quest_id,
          answer: answer
      }
      this.inputAnswer(obj)
    }
  }
}
</script>

<style>

</style>
