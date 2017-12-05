<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
      <add-question></add-question>
      <div class="row">
        <div class="col-md-4">
          <question-list></question-list>
        </div>
        <div class="col-md-8">
          <router-view></router-view>
        </div>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AddQuestion from '@/components/AddQuestion'
import QuestionList from '@/components/QuestionList'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'My First Vue'
    }
  },
  components : {
    AddQuestion,
    QuestionList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
