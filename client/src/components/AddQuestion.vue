<template>
<form class="card border-warning mb-3">
  <fieldset>
    <legend>Do You Have Any Question ?</legend>
    <div class="form-group">
      <div><label>Title</label></div>
      <input type="text" class="form col-md-8" placeholder="Title" v-model="quest.title">
    </div>
    <div class="form-group">
      <div><label>Question</label></div>
      <input type="text" class="form col-md-8" placeholder="Question" v-model="quest.question">
    </div>
    <button type="submit" class="btn btn-primary" @click.prevent="addQuestions(quest)">Submit</button>
  </fieldset>
</form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      quest: {
        title : '',
        question : ''
      }
    }
  },
  methods: {
    ...mapActions([
      'addQuestions'
    ])
  }
}
</script>

<style>

</style>
