<template>
  <div>
    <form @submit.prevent="signin">
      <fieldset>
        <legend>Login Please</legend>
        <div class="form-group">
          <label>User Name</label>
          <br>
          <input name="username" placeholder="Enter your username" type="text" v-model="login.username">
          <small class="form-text text-muted">It will show who you are</small>
        </div>
        <div class="form-group">
          <label>Password</label>
          <br>
          <input name="password" placeholder="Enter your password" type="password" v-model="login.password">
          <small class="form-text text-muted">For your access key</small>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        <small class="form-text text-muted">don't have any user? just register</small>
        <router-link to="/register" class="btn btn-info">Register</router-link>
      </fieldset>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  data () {
    return {
      login : {
        username: '',
        password: ''
      }
    }
  },
  computed: {
    ...mapState([
      'loginState'
    ]),
    set : function () {
      store.dispatch('setLoginState', !loginState)
    }
  },
  methods: {
    ...mapMutations([
      'setLoginState'
    ]),
    ...mapActions([
      'gettingIn'
    ]),
    signin () {
      this.gettingIn(this.login)
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
