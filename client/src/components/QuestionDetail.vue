<template>
  <div class="col-md-12">
    <div class="panel panel-success">
      <div class="panel-heading" v-if="selected.author">
        <h3 class="panel-title">Title: {{ selected.title }}</h3>
        <h4 class="panel-title">Author: {{ selected.author.name}}</h4>
      </div>
      <div class="panel-body">
        Question: {{ selected.question }}
      </div>
      <button v-if="user === selected.author.name" @click="deleteQuestion(selected._id)">Delete</button>
      <button @click.prevent="">Edit</button>
      <answer-box :quest_id="id"></answer-box>
    </div>
   <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-lg">Large modal</button>

    <div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          ...
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AnswerBox from '@/components/AnswerBox'
import { mapActions, mapState } from 'vuex'
export default {
  props: ['id'],
  components: {
    AnswerBox
  },
  computed: {
    ...mapState(['selected', 'user'])
  },
  methods: {
    ...mapActions(['getOneQuestion', 'deleteQuestion', 'getAnswers'])
  },
  mounted () {
    this.getOneQuestion(this.id)
  },
  watch: {
    id (newId) {
      this.getOneQuestion(newId)
      this.getAnswers(newId)
    }
  }
}
</script>

<style>

</style>
