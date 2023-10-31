import { reactive } from "vue";
import { io } from "socket.io-client";

export const state = reactive({
  connected: false,
  fooEvents: [],
  barEvents: [],
  totalConnecions: 0,
});

// "undefined" means the URL will be computed from the `window.location` object

//export const socket = io(URL);

export const socket = io('ws://localhost:3000', {
    transports: ['websocket']
})


socket.on("new user", (params) => {
    console.log('params cuando new user',params)
    state.totalConnecions = params.total
});


socket.on("disconnect", () => {
  state.connected = false;
});

socket.on("foo", (...args) => {
  state.fooEvents.push(args);
});

socket.on("bar", (...args) => {
  state.barEvents.push(args);
});

socket.on('nuevoPunto', (name) => {
  console.log('el USUARIO ' + name + 'Hizo un punto')
})