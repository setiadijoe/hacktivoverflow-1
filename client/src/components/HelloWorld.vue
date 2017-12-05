<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
      <add-question></add-question>
      <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AddQuestion from '@/components/AddQuestion'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'My First Vue'
    }
  },
  components : {
    AddQuestion
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
