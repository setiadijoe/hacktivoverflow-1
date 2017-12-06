<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <a class="navbar-brand" href="/hacktivoverflow"><img src="../assets/hacktiv.png" class="img-responsive" alt="test"></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor02">
        <ul class="navbar-nav mr-auto">
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <router-link :to="'/login'"><a class="btn btn-default" v-if="loginState === false">Login</a></router-link>
          <button type="button" name="button" class="btn btn-danger" @click="doLogout" v-if="loginState === true">Logout</button>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState ([
      'loginState'
    ])
  },
  methods: {
    ...mapMutations([
      'checkStatus'
    ]),
    doLogout () {
      console.log('masuk ke log out gak?');
      localStorage.clear()
      this.checkStatus()
      this.$router.push('/login')
    }
  },
  created () {
    let user = localStorage.getItem('name')
    let token = localStorage.getItem('accessToken')
    let obj = {
      user: user,
      token: token
    }
    this.checkStatus(obj)
  }
}
</script>

<style>

</style>
