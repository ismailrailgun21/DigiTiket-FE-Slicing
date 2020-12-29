<template>
  <div id="mapContainer" class="basemap"></div>
</template>

<script>
import mapboxgl from "mapbox-gl";
export default {
  name: "MapLocation",
  data() {
    const accessToken =
      "pk.eyJ1Ijoia2lkZG9zdGEiLCJhIjoiY2tjMzhrMzVsMDl0aDJ2cDNyNHB2aXk1ZCJ9.jsFKSTK8sflOBy4Cf-V1Ig";
    return {
      address: "Jl. Dharmawangsa Raya, Satriajaya, Tambun Utara, Bekasi",
      accessToken,
    };
  },
  async mounted() {
    mapboxgl.accessToken = this.accessToken;
    const uri = `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.address.split(' ').join('%20')}.json?access_token=${this.accessToken}`;
    const map =new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [107.811279, -7.045399],
      zoom: 10,
    });
    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav, "top-left");
    const location = fetch(uri);
    const resJson = await (await location).json();
    new mapboxgl.Marker()
      .setLngLat([resJson.features[0].center[0], resJson.features[0].center[1]])
      .addTo(map);
    map.flyTo({
      center: [resJson.features[0].center[0],resJson.features[0].center[1]],
      zoom: 14
    })
  },
};
</script>

<style scoped>
.basemap {
  position: relative;
  width: 35rem;
  height: 20rem;
}
@media (max-width: 1200px){
  .basemap{
    width: 26rem;
  }
}
@media (max-width: 992px){
  .basemap{
    width: 100vw;
  }
}
</style>