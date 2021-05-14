<template>
<div>

  <!-- Register -->
  <b-modal 
    id="register"
    centered 
    no-stacking
    size="lg"
    title="Register"
    hide-footer
  >
    <b-container fluid>
      <b-form>
        <b-form-group
          label="Email"
          label-for="email"
        >
          <b-form-input type="email" id="email" v-model="registerUser.email" trim></b-form-input>
        </b-form-group>

        <b-form-group
          label="Username"
          label-for="username"
        >
          <b-form-input type="text" id="username" v-model="registerUser.username" trim></b-form-input>
        </b-form-group>
        
        <b-form-group
          label="Password"
          label-for="password"
        >
          <b-form-input type="password" id="password" v-model="registerUser.password"></b-form-input>
        </b-form-group>

        <b-form-group
          label="Confirm your password"
          label-for="confirmPassword"
        >
          <b-form-input type="password" id="confirmPassword" v-model="registerUser.confirmPassword"></b-form-input>
        </b-form-group>
      </b-form>
    </b-container>

    <div class="button_container">
      <b-button @click="handleRegisterSubmit" variant="success">Register</b-button>
      <b-button variant="primary" v-b-modal.login>Already have an Account?</b-button>
    </div>
  </b-modal>


  <!-- Login -->
  <b-modal 
    id="login"
    centered 
    no-stacking
    size="lg"
    title="Login"
    hide-footer
  >

    <b-container fluid>
      <b-form>
        <b-form-group
          label="Email"
          label-for="email"
        >
          <b-form-input type="email" id="email" v-model="loginUser.email" trim></b-form-input>
        </b-form-group>

        <b-form-group
          label="Password"
          label-for="password"
        >
          <b-form-input type="password" id="password" v-model="loginUser.password"></b-form-input>
        </b-form-group>
      </b-form>
    </b-container>

    <div class="button_container">
      <b-button @click="handleLoginSubmit" variant="success">Login</b-button>
      <b-button variant="primary" v-b-modal.register>No Account yet? Register Now</b-button>
    </div>


  </b-modal>

</div>
</template>

<script>
const AUTH_SERVER = "http://localhost:6060"

export default {
  name: "UsersModal",
  data() {
    return {
      registerUser: {
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
      },

      loginUser: {
        email: '',
        password: '',
      },

      submitted: false,
    }
  },
  methods: {
    logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('user');
    },

    handleRegisterSubmit(e) {
      this.submitted = true
    },

    handleLoginSubmit(e) {
      this.submitted = true
      
      const requestOptions = {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(this.loginUser)
      }

      return fetch(`${AUTH_SERVER}/login`, requestOptions)
        .then(res => console.log(res))
    },
  }

}
</script>

<style scoped>
.button_container{
  display: flex;
  justify-content: space-between;
  margin: 2rem 1rem;
}

</style>