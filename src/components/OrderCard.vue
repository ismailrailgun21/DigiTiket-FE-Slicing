<template>
  <div class="content mb-4 bg-white">
    <h4 class="px-5 py-3 m-0">{{ title }}</h4>
    <hr />
    <div class="px-5 pt-3 d-flex justify-content-between">
      <p>{{ tiket.tanggalBerlaku }}</p>
      <p>{{ tiket.tanggalBerlaku }}</p>
    </div>
    <a href="#" class="px-5 mb-5">Detail Package</a>
    <hr />
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    tiket: Object,
    detailPackage: String,
  },
};
</script>

<style scoped>
hr {
  margin: 0;
}
h4 {
  font-size: 19px;
  font-weight: 400;
}
.content p {
  font-size: 14px;
  font-weight: 400;
}
</style>