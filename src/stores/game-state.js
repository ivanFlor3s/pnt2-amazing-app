import { defineStore } from 'pinia'



export const gameStore = defineStore('game', {
    state: () => ({
        users: []
    }),
    getters: {
        getUsers(){
            return this.users;
        }
    },
    actions: {
        setUsers(users){
            this.users = users;
        }
    }
})