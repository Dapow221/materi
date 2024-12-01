<template>
    <NavBar page="Login" />
    <div class="container w-75">
      <div class="row d-flex mt-4 p-2 border rounded">
        <div class="col">
          <img class="w-100" src="../assets/groceries.png" alt="image" />
        </div>
        <div class="col bg-dark rounded text-white">
          <form @submit.prevent="submitHandler" >
            <h1>Sign In</h1>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input v-model="loginData.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input v-model="loginData.password" type="password" class="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import NavBar from '../Navbar.vue'
  
  export default {
    emits: ['submitHandler'],
    components: {
      NavBar,
    },
    data() {
      return {
        loginData: {
          email: "",
          password: ""
        }
      }
    },
    methods: {
      submitHandler() {
        this.$emit('submitHandler', this.loginData)
      }
    }
  }
  </script>
  
  <style lang="scss" scoped></style>