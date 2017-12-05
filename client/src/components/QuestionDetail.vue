<template>
  <div class="col-md-8">
    <div class="panel panel-primary">
      <div class="panel-heading" v-if="selected.author">
        <h3 class="panel-title">Title: {{ selected.title }}</h3>
        <h4 class="panel-title">Author: {{ selected.author.name}}</h4>
      </div>
      <div class="panel-body">
        Question: {{ selected.question }}
      </div>
      <button @click="deleteQuestion(selected._id)">Delete</button>
      <button @click.prevent="">Edit</button>
      <answer-box :quest_id="selected._id"></answer-box>
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
    ...mapState(['selected'])
  },
  methods: {
    ...mapActions(['getOneQuestion', 'deleteQuestion'])
  },
  mounted () {
    this.getOneQuestion(this.id)
  },
  watch: {
    id (newId) {
      this.getOneQuestion(newId)
    }
  }
}
</script>

<style>

</style>
