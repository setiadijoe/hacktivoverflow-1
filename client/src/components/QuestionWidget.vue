<template>
  <div>
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <router-link
        :to="'/hacktivoverflow/'+question._id"
      >  {{ question.title }} </router-link>
    </li>
  </div>
</template>

<script>
export default {
  props: ['question'],
  created () {
    console.log(this.question)
  }
}
</script>

<style>

</style>
