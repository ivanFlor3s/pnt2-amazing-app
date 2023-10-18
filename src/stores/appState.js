import { defineStore } from 'pinia'

import JSConfetti from 'js-confetti'

const jsConfetti = new JSConfetti()
const MAXIMOS_PUNTOS = 20;

export const appStateStore = defineStore('appState', {
  state: () => ({
    username: '',
    puntaje: 0
  }),
  getters: {
    porcentajePuntaje: (state) => (state.puntaje * 100 )/ MAXIMOS_PUNTOS  
  },
  actions: {
    setUserName(username) {
      this.username = username
    },

    agregarPuntos() {
      //BUG ver forma de frenar el boton de opcion hasta que termina de cargar la imagen
      jsConfetti.addConfetti({
        emojis: ['🌝','🌛','🌞','🌟', '💫'],
     })
      this.puntaje++
    }
  }
})
