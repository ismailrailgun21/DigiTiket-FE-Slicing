<template>
  <section class="appbar">
    <b-navbar toggleable="xl" type="light" variant="white">
      <div class="d-flex justify-content-between collapse-nav w-100 container-md">
        <b-navbar-toggle target="nav-collapse" @click="navOpen()"></b-navbar-toggle>
        <Logo />
        <div class="py-3">
          <b-button v-b-toggle.collapse-1 variant="?" class="btn" @click="searchOpen()">
            <img src="../assets/images/search.svg" />
          </b-button>
        </div>
      </div>
      <b-collapse id="collapse-1" class="mt-2 container-md" :visible="searchVisible">
        <SearchBar class="w-100" :placeholder="'Temukan Event, Wahana Wisata, Virtual Tour, Lain-lain.'"/>
      </b-collapse>
      <b-collapse id="nav-collapse" :is-nav="windowWidth > 1200 ? true : false" :visible="navVisible">
        <div class="d-block appbar">
          <div
            class="d-flex w-100 container p-3 align-items-center justify-content-between header-lg"
          >
            <div class="d-flex">
              <Logo />
              <SearchBar
                class="col-lg-12"
                :placeholder="'Temukan Event, Wahana Wisata, Virtual Tour, Lain-lain.'"
              />
            </div>
            <div class="text-right">
              <button class="btn btn-login">Login</button>
            </div>
          </div>
          <hr />
          <Navigation class="container" />
        </div>
      </b-collapse>
    </b-navbar>
  </section>
</template>

<script>
import Navigation from "./Navigation";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

export default {
  components: {
    Navigation,
    SearchBar,
    Logo,
  },
  data() {
    return {
      windowWidth: window.innerWidth,
      isNavOpen: false,
      isSearchOpen: false
    };
  },
  mounted() {
    this.$nextTick(this.screenResize());
  },
  destroyed() {
    this.screenResize();
  },
  computed:{
    searchVisible(){
      if(this.isNavOpen)
        return false;
      else
        return null;
    },
    navVisible(){
      if(this.isSearchOpen)
        return false;
      else
        return null;
    }
  },
  methods: {
    screenResize() {
      addEventListener("resize", this.resizeHandler);
    },
    resizeHandler() {
      this.windowWidth = window.innerWidth;
    },
    navOpen(){
      this.isNavOpen = !this.isNavOpen;
      if(this.isNavOpen){
        this.isSearchOpen = false
      }
    },
    searchOpen(){
      this.isSearchOpen = !this.isSearchOpen;
      if(this.isSearchOpen){
        this.isNavOpen = false
      }
    }
  },
};
</script>

<style scoped>
hr {
  margin: 0 !important;
}
.navbar-toggler {
  z-index: 99;
  border: none;
  outline-style: none;
}
.header-lg {
  margin-top: 0 !important;
}
.appbar {
  position: fixed;
  background-color: white !important;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: 1px solid #eee;
  box-shadow: 0px 1px 4px 2px rgba(0, 0, 0, 0.15);
}
.btn-login {
  background-color: #7014a933;
  color: #cd7bff;
  font-size: 19px;
  padding: 0.5rem 2rem;
}
@media (max-width: 1200px) {
  .collapse-nav {
    z-index: 99;
  }
  .header-lg * {
    display: none !important;
  }
  .header-lg {
    margin-top: 3rem !important;
  }
}
</style>