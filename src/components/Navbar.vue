<template>
<div>
  <!-- Navbar -->
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#">AgapeText</b-navbar-brand>


    <b-navbar-nav class="ml-auto">
      <b-nav-item>
        <b-button v-b-modal.register>
          Register
        </b-button>
      </b-nav-item>

      <b-nav-item>
        <b-button v-b-modal.login>
          Login
        </b-button>
      </b-nav-item>
    </b-navbar-nav>
  </b-navbar>


  <!-- MODAL -->
  <UsersModal />


</div>
</template>

<script>
import UsersModal from './UsersModal'

export default {
  name: "Navbar",
  components: {
    UsersModal,
  }
}
</script>

<style scoped>
nav {
  height: 64px !important;
}

</style>