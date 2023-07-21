<template>
  <div>
    <ol-map :loadTilesWhileAnimating="true" :loadTilesWhileInteracting="true" style="height: 400px" ref="map">
      <ol-view ref="view" :center="center" :rotation="rotation" :zoom="zoom" :projection="projection" />

      <ol-tile-layer>
        <ol-source-osm />
      </ol-tile-layer>


      <ol-context-menu-control :items="contextMenuItems" />

      <ol-vector-layer>
        <ol-source-vector ref="markers"> </ol-source-vector>
        <ol-style>
          <ol-style-icon :src="marker" :scale="0.05"></ol-style-icon>
        </ol-style>
      </ol-vector-layer>



      <ol-vector-layer>
        <ol-source-vector>
          <ol-feature>
            <ol-geom-point :coordinates="coordinate"></ol-geom-point>
            <ol-style>
              <ol-style-circle :radius="radius">
                <ol-style-fill :color="fillColor"></ol-style-fill>
                <ol-style-stroke :color="strokeColor" :width="strokeWidth"></ol-style-stroke>
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

    <button @click="() => fakeMove()" type="button">
      change coordinates
    </button>

    <button @click="() => resetMarkers()" type="button">
      reset markers
    </button>
    {{ awareness.clientID }} ,
    <hr>
    {{ coordinate }}
  </div>
</template>

<script setup lang="ts">
// import marker from "@/assets/marker.png";
import marker from "@/assets/marker.png";
import * as Vue from "vue";
import { ref, inject } from "vue";
import type { View } from "ol";
import type { ObjectEvent } from "ol/Object";

import { store as y_store, awareness } from '@/y_store/';

console.log(y_store)
import { enableVueBindings, observeDeep } from "@syncedstore/core";
import { Coordinate } from "ol/coordinate";

enableVueBindings(Vue);

const center = ref([40, 40]);
const projection = ref("EPSG:4326");
const zoom = ref(12);
const rotation = ref(0);
const view = ref<View>();
const map = ref(null);

const contextMenuItems = ref([]);

let markers = ref(null);
const Feature = inject("ol-feature");
const Geom = inject("ol-geom");


const radius = ref(8);
const strokeWidth = ref(3);
const strokeColor = ref("red");
const fillColor = ref("white");
let coordinate = ref([0, 0]);

let name = 'Euser_' + Date.now()
let color = '#ffb61e'

// awareness.on('change', (changes: any) => {
//   console.log(" on change awareness", changes)
//   // Whenever somebody updates their awareness information,
//   // we log all awareness information from all users.
//   console.log("changes values",Array.from(awareness.getStates().values()))
// })
awareness.on('update', (updates: any) => {
  console.log(" on updates awareness", updates)
  // Whenever somebody updates their awareness information,
  // we log all awareness information from all users.
  let values = Array.from(awareness.getStates().values())
  console.log("updates values", values)
  values.forEach(v => {
    let coor = v.user.coordinate
    console.log("##", v.user.name, coor[0], coor[1])
  });



})

const updateAwareness = () => {
  awareness.setLocalStateField('user', {
    // Define a print name that should be displayed
    name: name,
    // Define a color that should be associated to the user:
    color: color, // should be a hex color,
    coordinate: coordinate.value
  })
  console.log("awareness local", awareness)
  let clientID = awareness.clientID
  y_store.positions[clientID] = coordinate.value
}


const positionsUpdate = (e: void) => {
  console.log("position", e)
  if (markers.value != null) {
    // markers.value.getSource().clear()
    // e.forEach(position => { console.log("POS", position) })
    for (let [clientID  , position] of Object.entries(y_store.positions)) {
      if (clientID  != awareness.clientID) {
        console.log("clientID", clientID, position[0], position[1])
        const feature = new Feature({
          geometry: new Geom.Point(position),
        });
        markers.value.source.addFeature(feature);
      }
    }
  }

}




observeDeep(y_store.positions, positionsUpdate)


const geoLocChange = (event: ObjectEvent) => {

  view.value?.setCenter(event.target?.getPosition());
  coordinate.value = event.target?.getPosition()
  console.log(coordinate)
  updateAwareness()
};



const fakeMove = () => {
  coordinate.value = coordinate.value.map((a) => a + 0.1)
  console.log(coordinate)
  updateAwareness()
}

const resetMarkers  = () => {
  markers = ref(null);
  console.log(y_store.positions)
  // for (const [key, value] of y_store.positions) { 
  //   console.log(key, value)
  //  }

}

contextMenuItems.value = [
  {
    text: "Center map here",
    classname: "some-style-class", // add some CSS rules
    callback: (val: { coordinate: Coordinate | undefined; }) => {
      view.value.setCenter(val.coordinate);
    }, // `center` is your callback function
  },
  {
    text: "Add a Marker",
    classname: "some-style-class", // you can add this icon with a CSS class
    // instead of `icon` property (see next line)
    icon: marker, // this can be relative or absolute
    callback: (val: { coordinate: Coordinate; }) => {
      console.log(val);
      const feature = new Feature({
        geometry: new Geom.Point(val.coordinate),
      });
      markers.value.source.addFeature(feature);
    },
  },
  "-", // this is a separator
];

</script>