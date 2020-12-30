<template>
  <section class="total-tiket mt-4 p-5">
    <h4>Pilih Tiket</h4>
    <div class="step d-flex">
      <h5 class="col-6 text-center py-3 text-accent-1">Tentukan Tanggal</h5>
      <h5 class="active col-6 text-center py-3 text-accent-1">Pilih Tiket</h5>
    </div>
    <OrderCard 
      :title="'Tiket Dewasa'"
      :tiket="tiket.tiketDewasa"
      :detailPackage="'https://digitiket.com/detail-package/semeru'"
    >
      <Order :tiket="tiket.tiketDewasa" />
    </OrderCard>
    <OrderCard 
      :title="'Tiket Anak-Anak (3 - 7 Tahun)'"
      :tiket="tiket.tiketAnak"
      :detailPackage="'https://digitiket.com/detail-package/semeru'"
    >
      <Order :tiket="tiket.tiketAnak" />
    </OrderCard>
    <OrderCard 
      :title="'Tiket Bayi (0 - 2 Tahun)'"
      :tiket="tiket.tiketBayi"
      :detailPackage="'https://digitiket.com/detail-package/semeru'"
    >
      <Order :tiket="tiket.tiketBayi" />
    </OrderCard>
    <div class="step d-flex justify-content-between">
      <div
        class="col-6 text-center py-3 d-flex justify-content-between total-bayar"
      >
        <span>Total</span>
        <span v-text="totalBayar"></span>
      </div>
      <button
        class="btn primary-bg col-5 ml-3 text-center py-3"
        @click="next()"
      >
        Checkout
      </button>
    </div>
  </section>
</template>

<script>
import OrderCard from "./OrderCard";
import Order from "./Order";

export default {
  name: "TotalTiket",
  components: {
    OrderCard,
    Order,
  },
  data() {
    return {
      currency: new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      }),
      tiket: {
        tiketDewasa: {
          jumlah: 0,
          harga: 40000,
          tanggalBerlaku: '09 Sep 2020, 06:00-20:30 WIB'
        },
        tiketAnak: {
          jumlah: 0,
          harga: 30000,
          tanggalBerlaku: '09 Sep 2020, 06:00-20:30 WIB'
        },
        tiketBayi: {
          jumlah: 0,
          harga: 0,
          tanggalBerlaku: '09 Sep 2020, 06:00-20:30 WIB'
        },
      },
    };
  },
  computed: {
    totalBayar() {
      const tiketDewasa =
        this.tiket.tiketDewasa.jumlah * this.tiket.tiketDewasa.harga * 1000;
      const tiketAnak =
        this.tiket.tiketAnak.jumlah * this.tiket.tiketAnak.harga * 1000;
      const tiketBayi =
        this.tiket.tiketBayi.jumlah * this.tiket.tiketBayi.harga * 1000;
      return this.currency.format(tiketDewasa + tiketAnak + tiketBayi).slice(2);
    },
  },
  mounted() {
    this.tiket.tiketDewasa.harga = this.currency
      .format(this.tiket.tiketDewasa.harga)
      .slice(2);
    this.tiket.tiketAnak.harga = this.currency
      .format(this.tiket.tiketAnak.harga)
      .slice(2);
    this.tiket.tiketBayi.harga = this.currency
      .format(this.tiket.tiketBayi.harga)
      .slice(2);
  },

  methods: {
    next() {
      this.tiket.tiketBayi.jumlah = this.tiket.tiketAnak.jumlah = this.tiket.tiketDewasa.jumlah = this.total = 0;
    },
  },
};
</script>

<style scoped>

.total-tiket {
  background-color: #f6f6f6;
  position: relative;
  height: fit-content;
}

.step h5 {
  opacity: 1;
  cursor: pointer;
  font-size: 19px;
  font-weight: 700;
  background-color: white;
  transition: 0.2s;
}
.step h5:hover {
  opacity: 0.75;
  transition: 0.2s;
}

.total-bayar {
  background: #e5e5e5;
  border: 1px solid #ccc9c9;
  border-radius: 3px;
}
</style>
