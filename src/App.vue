<template>
<div id="app">

  <Navbar />

  <main>
    <router-view/>
  </main>

</div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
