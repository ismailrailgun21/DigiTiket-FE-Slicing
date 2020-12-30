<template>
  <div class="d-flex align-items-center justify-content-end py-3">
    <div class="total mr-3">
      <h6>IDR {{ tiket.harga }}</h6>
    </div>
    <div class="d-flex mr-5">
      <button class="btn nud" @click="subTiket()">-</button>
      <div class="px-5 nud nud-value">{{ tiket.jumlah }}</div>
      <button class="btn nud" @click="addTiket()">+</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tiket: Object,
  },
  methods: {
    addTiket() {
      this.tiket.jumlah++;
    },
    subTiket() {
      if (this.tiket.jumlah > 0) this.tiket.jumlah--;
    },
  },
};
</script>

<style scoped>
h6 {
  font-size: 14px;
  font-weight: 700;
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