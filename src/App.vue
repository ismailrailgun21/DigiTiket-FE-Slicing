<template>
  <div id="app">
    <AppBar />
    <div class="body">
      <Preview />
      <Tip />
      <div class="container-md d-lg-flex justify-content-between">
        <ContentInfo class="col-lg-6 p-0 pr-2"/>
        <TotalTiket class="col-lg-6 p-0 pl-2"/>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import AppBar from "./components/AppBar";
import Preview from "./components/Preview";
import Tip from "./components/Tip";
import ContentInfo from "./components/ContentInfo";
import TotalTiket from "./components/TotalTiket";
import Footer from "./components/Footer";

export default {
  name: 'App',
  components: {
    AppBar,
    Preview,
    Tip,
    ContentInfo,
    TotalTiket,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
}
.body{
  position: relative;
  z-index: 1;
  margin-top: 150px;
}
.search-input{
  box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.1);
  border-color: 1px solid #E0E0E0 !important;
}
@media(max-width:1200px){
  .body{
    margin-top: 90px;
  }
}
</style>
