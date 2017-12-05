<template>
  <div class="col-md-8">
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h3 class="panel-title">Title: {{ selected.title }}</h3>
        <h4 class="panel-title">Author: {{ selected.author.name}}</h4>
      </div>
      <div class="panel-body">
        Question: {{ selected.question }}
      </div>
      <button>Delete</button>
      <answer-box></answer-box>
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
    ...mapActions(['getOneQuestion'])
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
