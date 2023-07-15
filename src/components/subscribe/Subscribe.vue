<template>
  <section class="subscribe section" id="subscribe">
    <h2 class="section-title">SUBSCRIBE</h2>
    <div class="subscribe-container container">
      <div class="content grid">
        <div class="subscribe-content">
          <h3 class="">
            Get Ready for Interstellar Tunes: <br />
            Subscribe to our Cosmic Mail List
          </h3>
          <form action="" class="subscribe-form">
            <div class="subscribe-form-box">
              <input
                type="text"
                name="name"
                class="subscribe-form-input"
                v-model="name"
                required
              />
              <label class="subscribe-form-tag"> Name </label>
            </div>
            <div class="subscribe-form-box">
              <input
                type="email"
                name="email"
                class="subscribe-form-input"
                v-model="email"
                required
              />
              <label class="subscribe-form-tag"> Email </label>
            </div>
            <div class="subscribe-form-box">
              <p class="policy">
                By continuing, you agree to H3LIX
                <a :href="policy" target="_blank">privacy policy.</a>
              </p>
            </div>
            <button type="submit" class="button">Subscribe</button>
          </form>
        </div>
        <img :src="h3lix3" alt="h3lix" class="h3lix" />
      </div>
    </div>
  </section>
</template>

<script>
import { h3lix3, policy } from "../../assets";
export default {
  name: "subscribe",
  data: function () {
    return {
      name: "",
      email: "",
      h3lix3,
      policy,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style.scss";

.content {
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  margin: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    .button {
      width: 10rem;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}

.subscribe-content {
  padding: 2rem;
}

.subscribe-form {
  margin-top: 2rem;
}

.subscribe-form-box {
  width: 30rem;

  label {
    position: relative;
    top: -2.7rem;
    left: 0;
    padding: 1rem 0;
    font-size: 16px;
    color: #ffffff;
    pointer-events: none;
    transition: 0.5s;
  }

  input {
    width: 100%;
    padding: 0.5rem 0;
    font-size: 16px;
    color: #ffffff;
    margin-bottom: 1rem;
    border: none;
    border-bottom: 1px solid #ffffff;
    outline: none;
    background: transparent;

    &:focus,
    &:valid {
      ~ label {
        top: -4.5rem;
        font-size: 12px;
      }
    }

    &:-webkit-autofill {
      background-clip: content-box;
    }
  }

  .policy {
    padding: 1rem 0;

    a {
      color: #ffffff;
      text-decoration: underline;
    }
  }
}

.h3lix {
  width: 18rem;
  border-radius: 15px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 10px #993bd9;
}

@media (max-width: 576px) {
  .content {
    margin: 1rem;
  }

  .subscribe-content {
    padding: 0;
  }
  .subscribe-form-box {
    width: 100%;
  }
}
</style>
