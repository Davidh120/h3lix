<template>
  <section class="contact section" id="contact">
    <h2 class="section-title">BOOKING REQUEST</h2>
    <div class="contact-container container">
      <div class="content">
        <div class="contact-options">
          <h3 class="section-subtitle">Contact</h3>
          <p class="description">
            Get ready for an unforgettable DJ experience. From club nights to
            epic raves, I bring the beats that will make you move. Contact me
            now to turn up the volume and take your event to the next level.
          </p>
          <div class="contact-info">
            <h4>Address</h4>
            <p>Bogota D.C, Colombia</p>
          </div>
          <div class="contact-info">
            <h4>Email</h4>
            <a href="mailto:helixbooking@hotmail.com" target="_blank"
              >helixbooking@hotmail.com</a
            >
          </div>
        </div>
        <div class="contact-content">
          <h3 class="section-subtitle">Contact Form</h3>
          <form action="" class="contact-form">
            <div class="contact-form-box">
              <input
                type="text"
                name="name"
                class="contact-form-input"
                v-model="name"
                required
              />
              <label class="contact-form-tag"> Name </label>
            </div>
            <div class="contact-form-box">
              <input
                type="email"
                name="email"
                class="contact-form-input"
                v-model="email"
                required
              />
              <label class="contact-form-tag"> Email </label>
            </div>
            <div class="contact-form-box">
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="8"
                class="contact-form-input"
                v-model="message"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <button type="submit" class="button">Send</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "contact",
  data: function () {
    return {
      name: "",
      email: "",
      message: ""
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style.scss";

.content {
  display: flex;
  justify-content: space-between;
  margin: 4rem;

  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
  }
}

.section-subtitle {
  font-size: $h3-font-size;
}

.contact-options {
  padding: 2rem;
  display: flex;
  flex-direction: column;

  .description {
    text-align: center;
    margin-bottom: 2rem;
  }

  .contact-info {
    text-align: center;
    margin-bottom: 2rem;

    p {
      color: $container-color;
      margin-top: 1rem;
    }

    a {
      text-decoration: none;
      color: $container-color;
    }
  }
}

.contact-content {
  padding: 2rem;
  border-radius: 10px;
  background: #1d1a1a;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 7px 29px 0px;
}

.contact-form-box {
  position: relative;
  width: 30rem;
}

.contact-form-box {
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

  textarea {
    padding: 1rem;
    font-size: 16px;
    color: #ffffff;
    margin-bottom: 1rem;
    border: 1px solid #ffffff;
    border-radius: 5px;
    outline: none;
    background: transparent;
    width: 100%;
  }
}

.button {
  width: 10rem;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}

@media (max-width: 576px) {
  .content {
    margin: 1rem;
  }

  .contact-options{
    padding: 0;
  }

  .contact-content {
    padding: 1rem;
  }
  .contact-form-box {
    width: 100%;
  }
}
</style>
