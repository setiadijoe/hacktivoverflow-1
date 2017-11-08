<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
      <QuestionList></QuestionList>
      <question-detail></question-detail>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import QuestionList from '@/components/QuestionList'
import QuestionDetail from '@/components/QuestionDetail'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'My First Vue'
    }
  },
  components : {
    QuestionList,
    QuestionDetail
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
