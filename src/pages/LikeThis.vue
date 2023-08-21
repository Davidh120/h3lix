<template>
  <header class="header">
    <NavBar page></NavBar>
  </header>
  <main>
    <LpReleases
      name="Like This"
      msg="🎶 Be a part of the exclusive premiere! Pre-save now. 🎵🔥 #H3LIX"
      link="/"
      btnName="Pre Save"
      image="0"
    ></LpReleases>
    <Subscribe></Subscribe>
  </main>
  <footer>
    <Footer></Footer>
  </footer>
</template>

<script>
import { NavBar, LpReleases, Subscribe, Footer } from "../components";
export default {
  name: "like this",
  components: {
    NavBar,
    LpReleases,
    Subscribe,
    Footer,
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
@import "../style.scss";
</style>