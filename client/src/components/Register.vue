<template>
  <div>
    <form>
      <fieldset>
        <legend>Please Register</legend>
        <div class="form-group">
          <label>Name</label>
          <br>
          <input name="name" placeholder="Enter your name" type="text">
          <small class="form-text text-muted">Just insert your real name</small>
        </div>
        <div class="form-group">
          <label>User Name</label>
          <br>
          <input name="username" placeholder="Enter your username and must be unique" type="text">
          <small class="form-text text-muted">It will show who you are</small>
        </div>
        <div class="form-group">
          <label>Password</label>
          <br>
          <input name="password" placeholder="Enter your password" type="password">
          <small class="form-text text-muted">For your access key</small>
        </div>
        <div class="form-group">
          <label>E-mail</label>
          <br>
          <input name="email" placeholder="Enter your email" type="email">
          <small class="form-text text-muted">For your authentication</small>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
