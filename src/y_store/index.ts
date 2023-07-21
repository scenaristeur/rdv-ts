import { syncedStore, getYjsDoc } from "@syncedstore/core";
import { WebrtcProvider } from "y-webrtc";
import { WebsocketProvider } from "y-websocket";
import { Awareness } from "y-protocols/awareness";
//import { IndexeddbPersistence } from "y-indexeddb";

// (optional, define types for TypeScript)
type Todo = { completed: boolean, title: string };

// Create your SyncedStore store
const shape = {
  // brains: [],
  // neurones: [],
  positions: {},
};
export const store = syncedStore(shape);

// Create a document that syncs automatically using Y-WebRTC
const doc = getYjsDoc(store);
export const awareness = new Awareness(doc);
export const webrtcProvider = new WebrtcProvider("rdv", doc, {
  awareness,
  signaling: [
    //   //"wss://y-webrtc-signaling-eu.herokuapp.com",
    //   "wss://y-webrtc-signaling-us.herokuapp.com",
    //   "wss://signaling.yjs.dev",
   // "wss://rdv-webrtc.glitch.me/",
   "wss://noosld-webrtc.glitch.me",
  ],
  //maxConns: 20 + Math.floor(Math.random() * 15),
 // filterBcConns: true,
});

//export const indexDBprovider = new IndexeddbPersistence("rdv", doc);
export const websocketProvider = new WebsocketProvider(
  "wss://rdv.glitch.me/rdv",
  "rdv",
  doc
);

webrtcProvider.on("status", (event : any) => {
  console.log("** webrtcProvider in y_store", event.status); // logs "connected" or "disconnected"
});

websocketProvider.on("status", (event : any) => {
  console.log("## websocketProvider in y_store", event.status); // logs "connected" or "disconnected"
});

export const disconnect = () => webrtcProvider.disconnect();
export const connect = () => webrtcProvider.connect();