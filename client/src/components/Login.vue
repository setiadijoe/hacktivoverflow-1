<template>
  <div>
    <form action="localhost:8080/" method="post">
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
        <button type="submit" class="btn btn-primary" v-on:click="gettingIn()">Submit</button>
        <small class="form-text text-muted">don't have any user? just register</small>
        <router-link to="/register" class="btn btn-info">Register</router-link>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      login : {
        username: '',
        password: '',
      }
    }
  },
  methods: {
    gettingIn () {
      this.$http.post('/users/login', this.login)
      .then(response => {
        localStorage.setItem('accessToken', response.data.usertoken)
        this.$router.push('/')
        console.log('berhasil login gak?');
        console.log(response);
      })
      .catch(err => {
        console.log('gagal login gak?');
        console.log(err);
      })
    },
    gettingOut () {
      localStorage.removeItem('accessToken')
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
