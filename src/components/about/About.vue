<template>
  <section class="about section" id="about">
    <h2 class="section-title">ABOUT H3LIX</h2>
    <div class="about-container container">
      <div class="content grid">
        <div class="description">
          <h3>WHERE MUSIC MEETS SPACE, INSPIRATION SOARS.</h3>
          <p>
            <strong>H3LIX</strong> is an enigmatic and captivating DJ and producer, shrouded in
            mystery and intrigue. His true identity and nature remain veiled,
            adding an extra layer of allure to his personality. With an unmatched
            talent for crafting mesmerizing music, <strong>H3LIX</strong> has become a prominent
            figure in the realm of electronic music, leaving audiences astounded
            and craving for more. <br />
            <br/>
            Stepping into a world of enigma, <strong>H3LIX</strong> possesses an unparalleled
            ability to transport listeners on an ethereal voyage through cosmic
            dimensions. His sonic creations defy conventional boundaries, as
            time itself seems to stand still when immersed in his captivating
            beats. Each track carefully composed by <strong>H3LIX</strong> serves as a gateway to
            a realm where emotions intertwine with the harmonies, evoking a
            sense of wonder and awe.
          </p>
        </div>
        <img :src="h3lix2" alt="h3lix_2" class="h3lix"/>
      </div>
      <a :href="presskit" target="_blank" class="button presskit"><i class="uil uil-file button-icon"></i>Press Kit</a>
    </div>
  </section>
</template>

<script>
import { h3lix2, presskit } from "../../assets";
export default {
  name: "about",
  data: function () {
    return {
      h3lix2,
      presskit,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style.scss";

.content {
  grid-template-columns: 2fr 1fr;
  place-items: center;
  margin-top: 2rem;

  .description {
    background: $secondary-color;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 0 10px #ffffff74;

    h3 {
      text-align: center;
    }

    p {
      text-align: justify;
      margin: 2rem;
    }
  }

  .h3lix {
    width: 18rem;
    border-radius: 15px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 10px #993bd9;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    .description{
      padding: 1rem;
    }

    p{
      margin: 0;
    }

    .h3lix{
      width: 15rem;
    }
  }

  @media (max-width: 576px){
    .description{
      padding: 1rem 0;
    }

    .h3lix{
      width: 15rem;
    }
  }
}

.presskit{
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  width: 25rem;
  margin-top: 2rem;

  @media (max-width: 576px){
    width: 100%;
  }
}
</style>
