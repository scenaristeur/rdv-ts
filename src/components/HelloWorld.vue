<template>
  <div>
  <ol-map :loadTilesWhileAnimating="true" :loadTilesWhileInteracting="true" style="height: 400px" ref="map">
    <ol-view ref="view" :center="center" :rotation="rotation" :zoom="zoom" :projection="projection" />

    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>


    <ol-vector-layer >
      <ol-source-vector>
        <ol-feature>
          <ol-geom-point :coordinates="coordinate"></ol-geom-point>
          <ol-style>
            <ol-style-circle :radius="radius">
              <ol-style-fill :color="fillColor"></ol-style-fill>
              <ol-style-stroke
                :color="strokeColor"
                :width="strokeWidth"
              ></ol-style-stroke>
            </ol-style-circle>
          </ol-style>
        </ol-feature>
      </ol-source-vector>
    </ol-vector-layer>

    <ol-geolocation :projection="projection" @change:position="geoLocChange">

    </ol-geolocation>
  </ol-map>

  <button @click="() => (coordinate = coordinate.map((a) => a + 0.1))"
  type="button" >
  change coordinates
</button>
{{  coordinate }}
</div>
</template>

<script setup lang="ts">
//import hereIcon from "../assets/logo.png";
import { ref } from "vue";
import type { View } from "ol";
import type { ObjectEvent } from "ol/Object";

const center = ref([40, 40]);
const projection = ref("EPSG:4326");
const zoom = ref(12);
const rotation = ref(0);
const view = ref<View>();
const map = ref(null);


const radius = ref(8);
const strokeWidth = ref(3);
const strokeColor = ref("red");
const fillColor = ref("white");
let  coordinate = ref([0,0]);

const geoLocChange = (event: ObjectEvent) => {

  view.value?.setCenter(event.target?.getPosition());
  coordinate.value = event.target?.getPosition()
  console.log(coordinate)
};
</script>