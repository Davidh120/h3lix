<template>
  <nav :class="['navBar', scrolled ? 'bg-nav' : 'bg-non-nav']">
    <a href="#home" class="nav-logo" @click.prevent="">
      <img :src="whiteLogo" alt="logo" />
    </a>

    <ul :class="{ 'nav-list': true, 'open-menu': showMenu }">
      <a href="#home" class="nav-logo2" @click.prevent="">
        <img :src="whiteLogo" alt="logo" />
      </a>
      <li v-for="nav in navLinks" :key="nav.id">
        <a :href="'#' + nav.id" class="nav-link" @click.prevent="scrollToSection(nav.id), showMenu = !showMenu"><i :class="nav.icon "></i>{{ nav.title }}</a>
      </li>
    </ul>

    <div
      :class="{ burger: true, 'open-menu': showMenu }"
      @click="showMenu = !showMenu"
    >
      <span class="line-1"></span>
      <span class="line-2"></span>
      <span class="line-3"></span>
    </div>
  </nav>
</template>

<script>
import { whiteLogo } from "../../assets";
import { navLinks } from "../../constants";

export default {
  name: "navBar",
  data: function () {
    return {
      whiteLogo,
      navLinks,
      showMenu: false,
      scrolled: false
    };
  },
  mounted(){
    const handleScroll = () => {
      if (window.scrollY > 0) {
        this.scrolled=true;
      } else {
        this.scrolled=false;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  },
  methods: {
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../style.scss";

.navBar {
  height: calc(#{$header-height} + 1rem);
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1rem;
}

.nav-logo {
  position: absolute;
  top: 50%;
  left: 2rem;
  transform: translate(0%, -50%);
  width: 9rem;
}

.nav-logo2 {
  display: none;
}

.nav-list {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 2rem;
}

.nav-link {
  font-size: $normal-font-size;
  color: $title-color;
  font-weight: map-get($font-weights , $key: normal);
  transition: 0.3s;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -ms-transition: 0.3s;
  -o-transition: 0.3s;

  &:hover {
    color: $secondary-color;
  }

  i{
    opacity: 0;
    margin-right: 0.5rem;
  }
}

.burger {
  display: none;
  width: 2rem;
  height: 2rem;
  position: fixed;
  right: 1rem;
  cursor: pointer;

  span {
    background-color: #fff;
    width: 100%;
    height: 3px;
    margin-bottom: 5px;
    border-radius: 5px;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: transform 0.5s, width 0.5s;
  }

  .line-1 {
    transform: translate(-50%, -10px);
  }

  .line-3 {
    transform: translate(-50%, 7px);
  }
}

.open-menu {
  .line-1 {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  .line-3 {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  .line-2 {
    width: 0;
  }
}

.bg-nav {
  background: #00040fd9;
  transition: 1s;
  -webkit-transition: 1s;
  -moz-transition: 1s;
  -ms-transition: 1s;
  -o-transition: 1s;
}

.bg-non-nav {
  background: transparent;
  transition: 1s;
  -webkit-transition: 1s;
  -moz-transition: 1s;
  -ms-transition: 1s;
  -o-transition: 1s;
}

/* breakpoints*/
/*medium devices*/
@media screen and (max-width: 768px) {
  .nav-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 3rem;
    position: fixed;
    top: 0;
    right: 100%;
    width: 91%;
    height: auto;
    border-radius: 0 0 10px 0;
    background: rgb(131, 58, 180);
    background: linear-gradient(
      124deg,
      rgba(77, 77, 77, 1) 0%,
      rgb(91, 23, 137) 87%
    );
    transition: 0.5s;

    &.open-menu {
      right: 9%;
    }

    li{
      margin-top: 2rem;
    }
  }

  .nav-link {
    &:hover {
      color: $title-color;
    }

    i{
      opacity: 1;
    }
  }

  .burger {
    display: block;
  }

  .nav-logo{
    left: 0;
  }

  .nav-logo2 {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 9rem;
  }
}

@media screen and (max-width: 576px) {
  .nav-list{
    width: 84%;

    &.open-menu {
      right: 16%;
    }
  }
}
</style>
