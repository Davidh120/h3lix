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
  <footer>
    <Footer></Footer>
  </footer>
</template>

<script>
import { NavBar, Home, About, Releases, Videos, Subscribe, Contact, Footer } from './components'
import { Scroll } from './components/Scroll'
import { onMounted } from 'vue';

export default {
  name: "app",
  components: {
    NavBar,
    Home,
    About,
    Releases,
    Videos,
    Subscribe,
    Contact,
    Footer
  },
  setup() {
    onMounted(() => {
      Scroll();
    });
  }
};
</script>

<style lang="scss"></style>
