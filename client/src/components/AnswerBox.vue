<template>
  <form @submit.prevent="inputAnswer(answer)">
    <div class="form-group">
      <label for="exampleTextarea">Input Your Answer</label>
      <textarea class="form-control" rows="3" v-model="answer"></textarea>
      <button type="submit">Submit</button>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      answer: ''
    }
  },
  methods: {
    ...mapActions([
      'inputAnswer'
    ])
  }
}
</script>

<style>

</style>
