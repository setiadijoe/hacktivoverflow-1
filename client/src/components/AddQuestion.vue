<template>
<form>
  <fieldset>
    <legend>Legend</legend>
    <div class="form-group">
      <label>Title</label>
      <input type="text" class="form-control" placeholder="Title" v-model="quest.title">
    </div>
    <div class="form-group">
      <label>Question</label>
      <input type="text" class="form-control" placeholder="Question" v-model="quest.question">
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
