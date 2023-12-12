import { defineStore } from 'pinia'

export const appStore = defineStore('app', {
  state: () => ({
    user: null
  }),
  getters: {
    isAdmin: (state) => {
      return state.user && state.user.role === 'ADMIN'
    }
  },
  actions: {
    setUser({ id, name, lastName, email, role }) {
      this.user = { id, name, lastName, email, role }
      sessionStorage.setItem('user', JSON.stringify(this.user))
    },
    logout() {
      this.user = null
      sessionStorage.removeItem('user')
    },
    setUserFromSessionStorage() {
      const user = sessionStorage.getItem('user')
      if (user) {
        this.user = JSON.parse(user)
      }
    }
  }
})
