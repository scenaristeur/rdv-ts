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
export const store = syncedStore({ positions: {} });

// Create a document that syncs automatically using Y-WebRTC
const doc = getYjsDoc(store);
export const awareness = new Awareness(doc);
export const webrtcProvider = new WebrtcProvider("rdv", doc, {
  awareness,
  signaling: [
    //   //"wss://y-webrtc-signaling-eu.herokuapp.com",
    //   "wss://y-webrtc-signaling-us.herokuapp.com",
    //   "wss://signaling.yjs.dev",
    "wss://noosld-webrtc.glitch.me",
  ],
});

//export const indexDBprovider = new IndexeddbPersistence("rdv", doc);
export const websocketProvider = new WebsocketProvider(
  "wss://yjs-leveldb.glitch.me/rdv",
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