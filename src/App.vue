<template>
  <header class="header">
    <NavBar></NavBar>
  </header>
  <main>
    <Home></Home>
    <About></About>
    <Releases></Releases>
    <Videos></Videos>
  </main>
  <footer></footer>
</template>

<script>
import { NavBar, Home, About, Releases, Videos } from './components'

export default {
  name: "app",
  components: {
    NavBar,
    Home,
    About,
    Releases,
    Videos
  }
};
</script>

<style lang="scss"></style>
