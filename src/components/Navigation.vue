<template>
  <div>
    <b-navbar-nav class="col-lg-9">
      <b-nav-item href="#" class="d-flex align-items-center">
        <img src="../assets/images/attraction.svg" />
        <span class="text-dark ml-3">Attraction</span>
      </b-nav-item>
      <b-nav-item href="#" class="d-flex align-items-center">
        <img src="../assets/images/event.svg" />
        <span class="text-dark ml-3">Event</span>
      </b-nav-item>
      <b-nav-item href="#" class="d-flex align-items-center">
        <img src="../assets/images/virtual.svg" />
        <span class="text-dark ml-3"> Virtual Tour </span>
        <b-badge class="primary-bg">New</b-badge>
      </b-nav-item>
      <b-nav-item href="#">
        <div class="d-flex" @click="show = !show">
          <img src="../assets/images/location.svg" />
          <span class="ml-3 kota">{{ lokasi.saatIni }}</span>
          <span class="ml-3"><img src="../assets/images/dropdown.svg" /></span>
        </div>
        <Dropdown :lokasi="lokasi" v-if="show" />
      </b-nav-item>
    </b-navbar-nav>
    <div class="text-lg-right col-xl-3 m-0 p-0">
      <button class="btn tambah-tiket primary-bg px-lg-5">
        <img src="../assets/images/tambah_tiket.svg" />
        <span class="ml-3 text-center">Buat Tiket</span>
      </button>
    </div>
  </div>
</template>

<script>
import Dropdown from "./Dropdown";
export default {
  name: "Navigation",
  components: {
    Dropdown,
  },
  data() {
    return {
      show: false,
      lokasi: {
        nama: [
          "Jakarta",
          "Dieng",
          "Magelang",
          "Surakarta",
          "Cirebon",
          "Semarang",
          "Bali",
          "Malang",
          "Yogyakarta",
          "Surabaya",
          "Bandung",
        ],
        saatIni: "Semarang",
      },
    };
  },
};
</script>

<style scoped>
a:hover {
  opacity: 1 !important;
}
.badge {
  font-size: 12px !important;
  font-weight: 400 !important;
}

.navbar {
  padding: 0 !important;
  margin-top: 0;
}

.nav-item {
  padding-right: 2rem;
  padding-left: 1rem;
  border: 1px solid #eee;
  position: relative;
  transition: 0.3s all ease;
}

.nav-item span {
  letter-spacing: 1px;
}

.nav-item:hover {
  background-color: #eadcf2;
  transition: 0.3s all ease;
}

.nav-item span,
button .dropdown-toggle {
  font-size: 18px;
  font-weight: 700;
  vertical-align: middle;
}

.nav-item:nth-child(4) {
  border-right: none;
}

.kota {
  color: #f05a86;
}

.tambah-tiket {
  height: 43px;
  border-radius: 0 !important;
}

.tambah-tiket * {
  vertical-align: middle;
}

.tambah-tiket span {
  font-size: 19px;
  font-weight: 700;
}

@media (max-width: 1200px) {
  .nav-item {
    width: 100%;
    border: none;
    padding: 0;
    padding: 1rem;
    transition: 0.5s all ease;
  }

  .nav-item:hover {
    background-color: #eadcf2;
    transition: 0.5s all ease;
  }
  
  .tambah-tiket {
    width: 100%;
    text-align: left;
    margin: 0 !important;
    height: 60px;
  }
}
</style>