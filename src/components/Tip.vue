<template>
  <div class="container-md mt-3">
    <div class="bg-tip p-2 d-flex">
      <div class="mx-3 my-3">
        <InfoTip />
      </div>
      <p class="my-3">Free wahana: Kora-kora, Mini Train, Flying Elephant</p>
    </div>
  </div>
</template>

<script>
import InfoTip from "./InfoTip";
export default {
  components:{
    InfoTip
  }
}
</script>

<style>
.bg-tip{
  background-color: #EADCF2;
}
</style>