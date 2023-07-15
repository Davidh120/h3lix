<template>
  <header class="header">
    <NavBar></NavBar>
  </header>
  <main>
    <Home></Home>
    <About></About>
    <Releases></Releases>
    <Videos></Videos>
    <Subscribe></Subscribe>
    <Contact></Contact>
  </main>
  <footer></footer>
</template>

<script>
import { NavBar, Home, About, Releases, Videos, Subscribe, Contact } from './components'

export default {
  name: "app",
  components: {
    NavBar,
    Home,
    About,
    Releases,
    Videos,
    Subscribe,
    Contact
  }
};
</script>

<style lang="scss"></style>
