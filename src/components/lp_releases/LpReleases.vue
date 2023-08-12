<template>
  <section class="LpReleases section" id="LpReleases">
    <div class="LpReleases-container container">
      <div class="content grid">
        <div class="main">
          <h1 class="title">{{ name }}</h1>
          <div class="presave-content">
            <p class="message">{{ msg }}</p>
            <a :href="link" class="button button-flex">Pre Save</a>
          </div>
        </div>
        <div class="image">
          <a :href="releases[image].link" target="_blank">
            <img
              :src="releases[image].image"
              :alt="releases[image].name"
              class="release-img"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { releases } from "../../constants";

export default {
  name: "LpReleases",
  data: function () {
    return {
      releases,
    };
  },
  props: {
    name: String,
    link: String,
    msg: String,
    btnName: String,
    image: Number,
  },
  setup(props) {},
};
</script>

<style lang="scss" scoped>
@import "../../style.scss";

.LpReleases {
  display: flex;
  align-items: center;
  .content {
    grid-template-columns: 2fr 1fr;
    align-items: center;
    margin: 2rem;

    .main {
      .title {
        font-size: 8rem;
        font-family: $h3lix-font;
      }

      .presave-content {
        display: flex;
        align-items: center;
        gap: 2rem;
      }
    }

    .image {
      width: 100%;

      img {
        width: 30rem;
        border-radius: 1rem;
      }
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      row-gap: 2rem;

      .main {
        .title {
          font-size: 6rem;
          text-align: center;
        }

        .presave-content {
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
      }

      .image {
        width: 100%;

        img {
          position: relative;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }

    @media screen and (max-width: 576px) {
      .main {
        .title {
          font-size: 4rem;
        }
      }
    }
  }
}
</style>