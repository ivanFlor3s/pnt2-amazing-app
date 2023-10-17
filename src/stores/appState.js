import { defineStore } from 'pinia'


export const appStateStore = defineStore('appState', {
  state: () => ({
    username : "", 
    puntaje: 0
  }),
  getters: {
  },
  actions: {
    
    setUserName(username){
      this.username = username
    },

    agregarPuntos(){
      this.puntaje ++
    }

  },
})
