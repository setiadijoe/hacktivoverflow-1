<template>
  <div>
    <form action="localhost:8080/" method="post">
      <fieldset>
        <legend>Please Register</legend>
        <div class="form-group">
          <label>Name</label>
          <br>
          <input name="name" placeholder="Enter your name" type="text" v-model="register.name">
          <small class="form-text text-muted">Just insert your real name</small>
        </div>
        <div class="form-group">
          <label>User Name</label>
          <br>
          <input name="username" placeholder="Enter your username and must be unique" type="text" v-model="register.username">
          <small class="form-text text-muted">It will show who you are</small>
        </div>
        <div class="form-group">
          <label>Password</label>
          <br>
          <input name="password" placeholder="Enter your password" type="password" v-model="register.password">
          <small class="form-text text-muted">For your access key</small>
        </div>
        <div class="form-group">
          <label>E-mail</label>
          <br>
          <input name="email" placeholder="Enter your email" type="email" v-model="register.email">
          <small class="form-text text-muted">For your authentication</small>
        </div>
        <button type="submit" class="btn btn-primary" v-on:click="sendUserData()">Submit</button>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      register: {
        name: '',
        username: '',
        password: '',
        email: ''
      }
    }
  },
  methods: {
    sendUserData () {
      this.$http.post('/users/register', this.register)
      .then(response => {
        console.log('berhasil gak?');
        console.log(response);
        this.$router.push('/')
      })
      .catch(err => {
        console.log('gagal gak?');
        console.log(err);
      })
    }
  }
}
</script>

<style>

</style>
