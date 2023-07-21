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

    <ol-geolocation :projection="projection" @change:position="geoLocChange" />

    <ol-zoom-control />
    <ol-zoomslider-control />
    <ol-scaleline-control />
    <ol-rotate-control />
  </ol-map>

  <button @click="() => (coordinate = coordinate.map((a) => a + 0.1))"
  type="button" >
  change coordinates !
</button>
{{  coordinate }}
</div>
</template>

<script setup lang="ts">
//import hereIcon from "../assets/logo.png";
import * as Vue from "vue";
import { ref } from "vue";
import type { View } from "ol";
import type { ObjectEvent } from "ol/Object";

import {store as y_store} from '@/y_store/';

console.log(y_store)
import { enableVueBindings, observeDeep } from "@syncedstore/core";
enableVueBindings(Vue);

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



const positionsUpdate = (e: void) => {
  console.log(e)
  // if (markers.value != null) {
  //   // markers.value.getSource().clear()
  //   // e.forEach(position => { console.log("POS", position) })
  //   for (let [clientID, position] of Object.entries(ystore.positions)) {
  //     if (clientID != awareness.clientID) {
  //       console.log("clientID", clientID, position[0], position[1])
  //       const feature = new Feature({
  //         geometry: new Geom.Point(position),
  //       });
  //       markers.value.source.addFeature(feature);
  //     }
  //   }
  // }

}




observeDeep(y_store.todos, positionsUpdate)


const geoLocChange = (event: ObjectEvent) => {

  view.value?.setCenter(event.target?.getPosition());
  coordinate.value = event.target?.getPosition()
  console.log(coordinate)
};
</script>