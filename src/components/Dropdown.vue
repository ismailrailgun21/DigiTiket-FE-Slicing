<template>
  <div class="dropdown">
    <SearchBar :placeholder="lokasi.saatIni" />
    <hr />
    <ul class="ml-3 mt-3">
      <h4 class="title">Kota Rekomendasi</h4>
      <div class="d-flex flex-wrap">
        <li
          v-for="(rekomendasi, idx) in lokasi.nama"
          :key="idx"
          class="kota col-4"
          @click="selectKota(rekomendasi)"
        >
          {{ rekomendasi }}
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
import SearchBar from "./SearchBar";
export default {
  components: {
    SearchBar,
  },
  props: {
    lokasi: Object,
  },
  methods: {
    selectKota(kota) {
      this.lokasi.saatIni = kota;
    },
  },
};
</script>

<style scoped>
.dropdown {
  position: absolute;
  border-radius: 3px;
  min-width: 400px;
  max-width: 400px;
  min-height: 100px;
  padding: 2rem 1.5rem;
  top: 42px;
  left: 0;
  z-index: 99;
  background: #fafafa;
}
.title {
  font-size: 18px;
  cursor: default;
}
.kota {
  position: relative;
  padding: 0.5rem;
}
@media (max-width:1200px) {
  .dropdown{
    position: relative;
    top: 0;
    background-color: transparent;
  }
  .dropdown:hover{
    color: black;
  }
}
</style>