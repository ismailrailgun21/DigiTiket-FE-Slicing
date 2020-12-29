<template>
  <footer>
    <div class="container d-md-flex justify-content-start mt-5 w-100">
      <div>
        <h2>Langganan Newsletter</h2>
        <div>
          <p>
            Jadi orang yang pertama tahu info & promosi Wisata, Event, Terbaru.
            Gratis.
          </p>
          <form class="w-75">
            <b-form-input
              size="sm"
              class="mr-sm-2 newsletter w-100"
              placeholder="Masukkan Email"
            ></b-form-input>
          </form>
        </div>
        <div class="mt-5 mb-3">
          <h2 class="my-3">Download DigiTiket Apps</h2>
          <button class="btn">
            <img src="../assets/images/google_play.svg" />
          </button>
        </div>
      </div>
      <div class="ml-5">
        <h2>Perusahaan</h2>
        <ul>
          <li
            v-for="direction in perusahaan"
            :key="direction.name"
            class="pb-3"
          >
            <a :href="direction.url">{{ direction.name }}</a>
          </li>
        </ul>
      </div>
      <div class="ml-5">
        <h2>Bantuan</h2>
        <ul>
          <li v-for="direction in bantuan" :key="direction.name" class="pb-3">
            <a :href="direction.url">{{ direction.name }}</a>
          </li>
        </ul>
      </div>
      <div class="ml-5">
        <h2>Berkolaborasi</h2>
        <div>
          <img src="../assets/images/kolaborasi.jpg" />
        </div>
        <h2>Metode Pembayaran</h2>
        <div class="ml-n4">
          <img src="../assets/images/metode_pembayaran.jpg" />
        </div>
      </div>
    </div>
    <hr />
    <div class="copyright py-4 container d-flex justify-content-between">
      <span>Copyright &copy; 2020 - DigiTiket. All rights reserved.</span>
      <ul class="socmed-box">
        <li>
          <a href="#">
            <img src="../assets/images/logo-instagram.svg" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../assets/images/logo-twitter.svg" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../assets/images/logo-whatsapp.svg" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../assets/images/logo-youtube.svg" />
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      perusahaan: [
        {
          name: "Karir",
          url: "/career",
        },
        {
          name: "Blog",
          url: "/blog",
        },
        {
          name: "Jadi Partner DigiTiket",
          url: "/partner",
        },
        {
          name: "DigiTiket Press Room",
          url: "/press",
        },
        {
          name: "Brand Guidelines",
          url: "/brand",
        },
        {
          name: "Alamat Kantor",
          url: "/address",
        },
      ],
      bantuan: [
        {
          name: "Cara Pesan",
          url: "/how-to-order",
        },
        {
          name: "FAQ",
          url: "/faq",
        },
        {
          name: "Kebijakan",
          url: "/policy",
        },
        {
          name: "Kebijakan dan Privasi",
          url: "/privacy-policy",
        },
        {
          name: "Syarat dan Ketentuan",
          url: "/terms",
        },
      ],
    };
  },
};
</script>

<style scoped>
h2 {
  font-size: 20px;
}
a {
  color: #373737 !important;
}
.newsletter {
  height: 49px;
}
.copyright {
  font-size: 14px;
  margin-bottom: 0.5rem;
}
.socmed-box {
  display: flex;
}
.socmed-box li{
  margin: 0 1rem;
}
@media (max-width: 768px) {
  .ml-5 {
    margin-left: 0 !important;
  }
}
</style>