<template>
  <section class="videos section" id="videos">
    <h2 class="section-title">VIDEOS</h2>
    <div class="videos-container container">
      <div class="content grid">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/qlkD_ug27o4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/i6NY7p_SoqU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <a
        href="https://www.youtube.com/@h3lixmusic"
        target="_blank"
        class="button subscribe-btn"
        ><i class="uil uil-youtube button-icon"></i>Watch more</a
      >
    </div>
  </section>
</template>

<script>
export default {
  name: "videos",
  data: function () {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "../../style.scss";

.content {
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  margin: 2rem;

  iframe {
    border-radius: 1rem;
  }

  @media only screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 576px) {
    margin: 1rem 0;

    iframe {
      width: auto;
      height: auto;
    }
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
