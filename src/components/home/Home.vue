<template>
  <section class="home section" id="home">
    <div class="container">
      <div class="home-content grid">
        <div class="home-social">
          <a
            v-for="social in socialMedia"
            :href="social.link"
            :key="social.id"
            :id="social.id"
            className="home-social-icon"
            target="_blank"
          >
            <img :src="social.icon" :alt="social.link" class="icon"/>
          </a>
        </div>
        <div class="main">
          <h1 class="title section-title">HELIX</h1>
          <img :src="h3lix1" alt="h3lix" class="portrait" />
          <!-- <div class="phrase">
            <p>"Music transcends dimensions, unlocking limitless realms of expression"</p>
          </div> -->
        </div>
        <div class="deco">
          <span class="stick"></span>
          <span class="rhombus"></span>
          <span class="stick"></span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { h3lix1 } from "../../assets";
import { socialMedia } from "../../constants";

export default {
  name: "home",
  data: function () {
    return {
      h3lix1,
      socialMedia,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style.scss";

.home {
  display: flex;
  align-items: center;
  max-height: 100%;
}

.home-content {
  grid-template-columns: 1fr 2fr 1fr;
  column-gap: 10rem;
  align-items: center;
  max-height: 100%;

  @media (max-width: 768px) {
    column-gap: 5rem;
  }

  @media (max-width: 576px) {
    grid-template-areas:
      'main'
      'deco'
      'social';
    grid-template-columns: 1fr;
  }

  @media (min-width: 577px) {
    grid-template-areas: 'social main deco';
    grid-template-columns: 1fr 2fr 1fr;
  }
}

.main {
  grid-area: main;
}

.home-social {
  grid-area: social;
}

.deco {
  grid-area: deco;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.title {
  position: absolute;
  z-index: 10;
  font-size: 10rem;
}

.home-social {
  display: flex;
  flex-direction: column;
  row-gap: $mb-2-5;
  align-items: center;
  justify-content: center;
  margin-right: 10rem;

  .icon {
    z-index: 10;
    width: 1.5rem;
    transition: .5s ease;
  }
}

.portrait {
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
  max-width: 100%;
  max-height: 100%;
  width: 30rem;
  border-radius: 36%;
  filter: contrast(110%);
  filter: drop-shadow(0 0 10px #993bd9);
}

.phrase{
  background-color: #4040406d;
  border-radius: 10px;
  padding: 1rem;
  object-fit: contain;
  text-align: center;
}

.deco {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 10rem;

  .stick {
    background-color: #fff;
    width: 2px;
    height: 5rem;
    margin: $mb-2-5;
  }

  .rhombus {
    width: 30px;
    height: 30px;
    border: 2px solid #fff;
    transform: rotate(45deg);
  }
}

/* breakpoints*/
/*extra large*/
@media only screen and (max-width: 1200px) {
  .home-social{
    margin-right: 2rem;
  }

  .deco{
    margin-left: 2rem;
  }

}
/*large devices*/
@media screen and (max-width: 992px) {
  .title {
    font-size: 8rem;
  }

  .home-social{
    margin-right: 0;
  }

  .deco{
    margin-left: 0;
  }
}

/*medium devices*/
@media screen and (max-width: 768px) {
  .title {
    font-size: 6rem;
  }
}

@media screen and (max-width: 576px) {
  .title {
    font-size: 4rem;
  }

  .portrait {
    width: 25rem;
  }

  .home-social {
    flex-direction: row;
    margin: auto;
    column-gap: $mb-2-5;
    width: 16rem;
  }

  .deco {
    flex-direction: row;
    align-items: center;

    .stick {
      width: 5rem;
      height: 2px;
      margin: $mb-2;
    }
  }

  .phrase{
    display: none;
  }
}

/*small devices*/
@media screen and (max-width: 350px) {
  .title {
    font-size: 4rem;
  }

  .portrait {
    width: 18rem;
  }

  .home-social {
    width: 15rem;
  }

  .deco {
    flex-direction: row;
    align-items: center;

    .stick {
      width: 3.5rem;
      height: 2px;
      margin: $mb-2;
    }
  }
}
</style>
