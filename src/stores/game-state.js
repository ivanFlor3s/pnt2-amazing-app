import { defineStore } from 'pinia'



export const gameStore = defineStore('game', {
    state: () => ({
        users: []
    }),
    actions: {
        setUsers(users){
            this.users = users;
        }
    }
})