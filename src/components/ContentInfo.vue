<template>
  <section class="content-info mt-4">
    <article class="p-5">
      <div class="content mb-5">
        <h2>Virtual Tour Semeru</h2>
        <hr />
        <p>
          {{ mainInfo }}
        </p>
        <div class="d-flex justify-content-end">
          <span>Share</span>
          <ul class="socmed-box d-flex ml-4">
            <li>
              <a href="#">
                <img src="../assets/images/instagram-share.svg" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="../assets/images/twitter-share.svg" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="../assets/images/whatsapp-share.svg"/>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="../assets/images/link.svg" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="content mb-5">
        <h2>About</h2>
        <hr />
        <div>
          <h4 class="title">Alamat</h4>
          <p>Darmawangsa</p>
          <p>
            Jl. Darmawangsa Raya, Satriajaya, Tambun Utara, Bekasi, Jawa Barat
            17510, Bekasi, Jawa Barat
          </p>
        </div>
      </div>
      <div class="content mb-5">
        <h2>Tiket Water Splash</h2>
        <hr />
        <div>
          <h4 class="title">Alamat</h4>
          <p>Darmawangsa</p>
          <p>
            Jl. Darmawangsa Raya, Satriajaya, Tambun Utara, Bekasi, Jawa Barat
            17510, Bekasi, Jawa Barat
          </p>
        </div>
      </div>
      <div class="content mb-3">
        <h2>Peta Lokasi</h2>
        <hr />
        <MapLocation />
      </div>
    </article>
  </section>
</template>

<script>
import MapLocation from "./MapLocation";
export default {
  components: {
    MapLocation,
  },
  data() {
    return {
      mainInfo: "Fasilitas yang di tawarkan di Water Splash Darmawangsa pengunjung bisa menjadi member dan keuntungannya setiap pembelian tiket masukmendapatkan potongan harga sebesar 2000 sampai 3000 rupiah dari harga tiket masuk normal. Water Splash Darmawangsa Residence menyediakan 3 kolam renang diantaranya, 1 kolam renang untuk dewasa atau remaja, dan yang 2 kolam renang khusus untuk anak-anak, tersedia pula seluncuran air yang di katagorikan untuk anak-anak karena memiliki ketinggian yang cukup rendah."
    }
  }
};
</script>
<style scoped>
.content {
  position: relative;
  overflow: hidden;
}
.content-info {
  position: relative;
}
.socmed-box li{
  margin: 0 0.6rem;
}
article {
  border: 1px solid #f2f2ff;
  border-radius: 3px;
}
</style>