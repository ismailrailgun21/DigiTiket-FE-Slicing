<template>
  <form class="d-flex align-items-center ml-4">
    <span class="search-icon"><img src="../assets/images/search.svg"/></span>
    <b-form-input size="sm" class="mr-sm-2 search-input w-100 pl-5" :placeholder="placeholder"></b-form-input>
  </form>
</template>

<script>
export default {
  props: {
    placeholder: String
  }
};
</script>

<style scoped>
.search-icon{
  position: relative;
  z-index: 2;
  margin-right: -34px;
}
.search-input{
  position: relative;
  border-radius: 3px;
  height: 59px !important;
  z-index: 1;
}
</style>