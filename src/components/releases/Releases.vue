<template>
  <section class="releases section" id="releases">
    <h2 class="section-title">LATEST DROPS</h2>
    <div class="releases-container container">
      <div class="content grid">
        <div class="release" v-for="release in releases" :key="release.id">
          <a :href="release.link" target="_blank">
            <img
              :src="release.image"
              :alt="release.name"
              class="release-img"
            />
          </a>
          <h3>{{ release.name }}</h3>
        </div>
      </div>
      <a
        href="https://www.youtube.com/@h3lixmusic"
        target="_blank"
        class="button subscribe-btn"
        ><i class="uil uil-youtube button-icon"></i>Suscribe to my youtube
        channel</a
      >
    </div>
  </section>
</template>

<script>
import { releases } from "../../constants";

export default {
  name: "releases",
  data: function () {
    return {
      releases,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style.scss";

.content {
  grid-template-columns: repeat(3, 1fr);
  margin: 2rem;
  place-items: center;

  h3 {
    color: $text-color;
    margin-top: 1rem;
    font-size: $small-font-size;
  }

  .release-img {
    width: 20rem;
    height: 20rem;
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
}

.subscribe-btn {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  width: 25rem;
  margin-top: 2rem;

  @media (max-width: 576px) {
    width: 100%;
  }
}
</style>
