<template>
  <section class="total-tiket mt-4 p-5">
    <h4>Pilih Tiket</h4>
    <div class="step d-flex">
      <h5 class="col-6 text-center py-3 text-accent-1">Tentukan Tanggal</h5>
      <h5 class="active col-6 text-center py-3 text-accent-1">Pilih Tiket</h5>
    </div>
    <div class="content mb-4 bg-white">
      <h4 class="px-5 py-3 m-0">Tiket Dewasa</h4>
      <hr />
      <div class="px-5 pt-3 d-flex justify-content-between">
        <p>09 Sep 2020, 06:00-20:30 WIB</p>
        <p>09 Sep 2020, 06:00-20:30 WIB</p>
      </div>
      <a href="#" class="px-5 mb-5">Detail Package</a>
      <hr />
      <div class="d-flex align-items-center justify-content-end py-3">
        <div class="total mr-3">
          <h6>IDR {{ tiket.tiketDewasa.harga }}</h6>
        </div>
        <div class="d-flex mr-5">
          <button class="btn nud" @click="subTiketDewasa()">-</button>
          <div class="px-5 nud nud-value">{{ tiket.tiketDewasa.jumlah }}</div>
          <button class="btn nud" @click="addTiketDewasa()">+</button>
        </div>
      </div>
    </div>
    <div class="content mb-4 bg-white">
      <h4 class="px-5 py-3 m-0">Tiket Anak-Anak (3 - 7 Tahun)</h4>
      <hr />
      <div class="px-5 pt-3 d-flex justify-content-between">
        <p>09 Sep 2020, 06:00-20:30 WIB</p>
        <p>09 Sep 2020, 06:00-20:30 WIB</p>
      </div>
      <a href="#" class="px-5 mb-5">Detail Package</a>
      <hr />
      <div class="d-flex align-items-center justify-content-end py-3">
        <div class="total mr-3">
          <h6>IDR {{ tiket.tiketAnak.harga }}</h6>
        </div>
        <div class="d-flex mr-5">
          <button class="btn nud" @click="subTiketAnak()">-</button>
          <div class="px-5 nud nud-value">{{ tiket.tiketAnak.jumlah }}</div>
          <button class="btn nud" @click="addTiketAnak()">+</button>
        </div>
      </div>
    </div>
    <div class="content mb-4 bg-white">
      <h4 class="px-5 py-3 m-0">Tiket Bayi (0 - 2 Tahun)</h4>
      <hr />
      <div class="px-5 pt-3 d-flex justify-content-between">
        <p>09 Sep 2020, 06:00-20:30 WIB</p>
        <p>09 Sep 2020, 06:00-20:30 WIB</p>
      </div>
      <a href="#" class="px-5 mb-5">Detail Package</a>
      <hr />
      <div class="d-flex align-items-center justify-content-end py-3">
        <div class="total mr-3">
          <h6>IDR {{ tiket.tiketBayi.harga }}</h6>
        </div>
        <div class="d-flex mr-5">
          <button class="btn nud" @click="subTiketBayi()">-</button>
          <div class="px-5 nud nud-value">{{ tiket.tiketBayi.jumlah }}</div>
          <button class="btn nud" @click="addTiketBayi()">+</button>
        </div>
      </div>
    </div>
    <div class="step d-flex justify-content-between">
      <div
        class="col-6 text-center py-3 d-flex justify-content-between total-bayar"
      >
        <span>Total</span>
        <span>{{ total }}</span>
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
export default {
  name: "TotalTiket",
  data() {
    return {
      total: 0,
      tiket: {
        tiketDewasa: {
          jumlah: 0,
          harga: 40000,
        },
        tiketAnak: {
          jumlah: 0,
          harga: 30000,
        },
        tiketBayi: {
          jumlah: 0,
          harga: 0,
        },
      },
    };
  },
  mounted() {
    const currency = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    });
    this.tiket.tiketDewasa.harga = currency
      .format(this.tiket.tiketDewasa.harga)
      .slice(2);
    this.tiket.tiketAnak.harga = currency
      .format(this.tiket.tiketAnak.harga)
      .slice(2);
    this.tiket.tiketBayi.harga = currency
      .format(this.tiket.tiketBayi.harga)
      .slice(2);
  },

  methods: {
    addTiketDewasa() {
      this.tiket.tiketDewasa.jumlah++;
      const tiketDewasa =
        this.tiket.tiketDewasa.jumlah * this.tiket.tiketDewasa.harga * 1000;
      const tiketAnak =
        this.tiket.tiketAnak.jumlah * this.tiket.tiketAnak.harga * 1000;
      const tiketBayi =
        this.tiket.tiketBayi.jumlah * this.tiket.tiketBayi.harga * 1000;
      this.total = tiketDewasa + tiketAnak + tiketBayi;
    },
    addTiketAnak() {
      this.tiket.tiketAnak.jumlah++;
      const tiketDewasa =
        this.tiket.tiketDewasa.jumlah * this.tiket.tiketDewasa.harga * 1000;
      const tiketAnak =
        this.tiket.tiketAnak.jumlah * this.tiket.tiketAnak.harga * 1000;
      const tiketBayi =
        this.tiket.tiketBayi.jumlah * this.tiket.tiketBayi.harga * 1000;
      this.total = tiketDewasa + tiketAnak + tiketBayi;
    },
    addTiketBayi() {
      this.tiket.tiketBayi.jumlah++;
      const tiketDewasa =
        this.tiket.tiketDewasa.jumlah * this.tiket.tiketDewasa.harga * 1000;
      const tiketAnak =
        this.tiket.tiketAnak.jumlah * this.tiket.tiketAnak.harga * 1000;
      const tiketBayi =
        this.tiket.tiketBayi.jumlah * this.tiket.tiketBayi.harga * 1000;
      this.total = tiketDewasa + tiketAnak + tiketBayi;
    },
    subTiketDewasa() {
      if (this.tiket.tiketDewasa.jumlah > 0) this.tiket.tiketDewasa.jumlah--;
      const tiketDewasa =
        this.tiket.tiketDewasa.jumlah * this.tiket.tiketDewasa.harga * 1000;
      const tiketAnak =
        this.tiket.tiketAnak.jumlah * this.tiket.tiketAnak.harga * 1000;
      const tiketBayi =
        this.tiket.tiketBayi.jumlah * this.tiket.tiketBayi.harga * 1000;
      this.total = tiketDewasa + tiketAnak + tiketBayi;
    },
    subTiketAnak() {
      if (this.tiket.tiketAnak.jumlah > 0) this.tiket.tiketAnak.jumlah--;
      const tiketDewasa =
        this.tiket.tiketDewasa.jumlah * this.tiket.tiketDewasa.harga * 1000;
      const tiketAnak =
        this.tiket.tiketAnak.jumlah * this.tiket.tiketAnak.harga * 1000;
      const tiketBayi =
        this.tiket.tiketBayi.jumlah * this.tiket.tiketBayi.harga * 1000;
      this.total = tiketDewasa + tiketAnak + tiketBayi;
    },
    subTiketBayi() {
      if (this.tiket.tiketBayi.jumlah > 0) this.tiket.tiketBayi.jumlah--;
      const tiketDewasa =
        this.tiket.tiketDewasa.jumlah * this.tiket.tiketDewasa.harga * 1000;
      const tiketAnak =
        this.tiket.tiketAnak.jumlah * this.tiket.tiketAnak.harga * 1000;
      const tiketBayi =
        this.tiket.tiketBayi.jumlah * this.tiket.tiketBayi.harga * 1000;
      this.total = tiketDewasa + tiketAnak + tiketBayi;
    },
    next() {
      this.tiket.tiketBayi.jumlah = this.tiket.tiketAnak.jumlah = this.tiket.tiketDewasa.jumlah = this.total = 0;
    },
  },
};
</script>

<style scoped>
hr {
  margin: 0;
  margin-top: 1rem;
}
h2 {
  font-size: 19px;
  font-weight: 400;
}
.content p {
  font-size: 14px;
  font-weight: 400;
}
h6 {
  font-size: 14px;
  font-weight: 700;
}
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

.nud {
  border-radius: 3px;
  border: 1px solid #eadcf2;
  color: #672c89;
  font-size: 14px;
  font-weight: 700;
}
.nud:focus {
  background-color: #eadcf2;
}
.nud:first-child {
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}
.nud:last-child {
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}
.nud-value {
  border-radius: 0px;
  font-size: 12px;
  font-weight: 700;
  padding: 8px 0;
  color: #000;
}
</style>
