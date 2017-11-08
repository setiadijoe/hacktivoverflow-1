<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">HacktivOverFlow</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor02">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#/addquestion">Add Question</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <router-link :to="'/login'"><a class="btn btn-default" v-if="!loginState">Login</a></router-link>
          <button type="button" name="button" class="btn btn-danger" @click="doLogout" v-if="loginState">Logout</button>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      token: ''
    }
  },
  computed: {
    ...mapState ([
      'loginState'
    ])
    // set : function () {
    //   store.dispatch('setLoginState', !this.loginState, this.token)
    // }
  },
  created: function () {
    this.getting()
  },
  methods: {
    ...mapMutations([
      'setLoginState'
    ]),
    getting () {
      console.log('masuk ke sini gak?');
      if (localStorage.getItem('accessToken') === null ) {
        console.log('kondisi if');
        this.loginState = false
        this.$router.push('/login')
      } else {
        console.log('kondisi else');
        this.loginState = true     
        this.token = localStorage.getItem('accessToken')
      }
    },
    doLogout () {
      console.log('masuk ke log out gak?');
      localStorage.clear()
      // this.$store.commit('setLoginState', false)
      console.log(this.token);
      this.token = ''
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>
