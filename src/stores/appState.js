import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const appStateStore = defineStore('appState', {
  state: () => ({
    username : "" 
  }),
  getters: {
  },
  actions: {
    
    setUserName(username){
      this.username = username
    }

  },
})
