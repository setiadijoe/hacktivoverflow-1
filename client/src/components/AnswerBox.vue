<template>
  <div>
    <form @submit.prevent="fillAnswer(quest_id, answer)">
      <div class="form-group">
        <label for="exampleTextarea">Input Your Answer</label>
        <textarea class="form-control" rows="3" v-model="answer"></textarea>
        <button type="submit" class="btn btn-secondary">Submit</button>
      </div>
    </form>
    <form v-for="ans in answers" :key="ans._id">
      <div class="card text-white bg-secondary mb-3" style="max-width: 100%;">
        <div class="card-header">Answered by {{ ans.user.name||user }}</div>
        <div class="card-body">
          <p class="card-text">{{ ans.answer }}</p>
        </div>
        <div class="btn-group-control" role="group" aria-label="Basic example" >
          <button type="button" class="btn btn-info col-md-2 fa fa-thumbs-up" aria-hidden="true" @click="likeTheAnswer(ans._id)">{{ ans.like.length }}</button>
          <button type="button" class="btn btn-danger col-md-6" v-if="user === ans.user.name" @click="deleteOneAnswer(ans._id)">Delete</button>
          <button type="button" class="btn btn-warning col-md-2 fa fa-thumbs-down" aria-hidden="true" @click="dislikeTheAnswer(ans._id)">{{ ans.dislike.length }}</button>
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
    ...mapState(['answers', 'user'])
  },
  created () {
    this.getAnswers(this.quest_id);
  },
  methods: {
    ...mapActions([
      'inputAnswer', 
      'getAnswers', 
      'deleteOneAnswer',
      'likeTheAnswer',
      'dislikeTheAnswer'
    ]),
    fillAnswer (quest_id, answer) {
      let obj = {
          id : quest_id,
          answer: answer
      }
      this.inputAnswer(obj)
      this.answer = ''
      window.location.reload()
    }
  }
}
</script>

<style>

</style>
