<template>
  <header class="header">
    <NavBar></NavBar>
  </header>
  <main>
    <Home></Home>
    <About></About>
    <Releases></Releases>
  </main>
  <footer></footer>
</template>

<script>
import { NavBar, Home, About, Releases } from './components'

export default {
  name: "app",
  components: {
    NavBar,
    Home,
    About,
    Releases
  }
};
</script>

<style lang="scss"></style>
