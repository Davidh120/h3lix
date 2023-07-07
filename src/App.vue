<template>
  <header class="header">
    <NavBar></NavBar>
  </header>
  <main>
    <Home></Home>
    <About></About>
  </main>
  <footer></footer>
</template>

<script>
import { NavBar, Home, About } from './components'

export default {
  name: "app",
  components: {
    NavBar,
    Home,
    About
  }
};
</script>

<style lang="scss"></style>
