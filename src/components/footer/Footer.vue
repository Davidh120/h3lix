<template>
  <div class="footer-container">
    <a
      href="#home"
      class="footer-logo"
      @click.prevent="scrollToSection('home')"
    >
      <img :src="whiteLogo" alt="logo" />
    </a>

    <span class="footer-copy">© H3LIX. All rights reserved</span>

    <div class="footer-social">
      <a
        v-for="social in socialMedia"
        :href="social.link"
        :key="social.id"
        :id="social.id"
        class="footer-social-icon"
        target="_blank"
      >
        <img :src="social.icon" :alt="social.link" class="icon" />
      </a>
    </div>
  </div>
</template>

<script>
import { whiteLogo } from "../../assets";
import { navLinks, socialMedia } from "../../constants";

export default {
  name: "footer",
  data: function () {
    return {
      whiteLogo,
      navLinks,
      socialMedia,
    };
  },
  methods: {
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../style.scss";

.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #00040fc1;
  box-shadow: rgba(255, 255, 255, 0.241) 0px 7px 29px 0px;
  padding: 0 2rem;

  .footer-logo {
    width: 9rem;
    display: flex;
    align-items: center;

    @media (max-width: 576px) {
      width: 6rem;
    }
  }

  .footer-copy {
    font-size: $small-font-size;

    @media (max-width: 576px) {
      font-size: $smaller-font-size;
    }

    @media (max-width: 350px) {
      font-size: $tiny-font-size;
    }
  }

  .footer-social {
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 1rem;

    .icon {
      z-index: 10;
      width: 1.5rem;
    }

    @media (max-width: 576px) {
      display: none;
    }
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
  }

  @media (max-width: 576px) {
    padding: 0 0.5rem;
  }
}
</style>
