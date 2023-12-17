import { defineStore } from 'pinia'



export const gameStore = defineStore('game', {
    state: () => ({
        users: [],
        currentGame: null,
    }),
    getters: {
        getUsers(){
            return this.users;
        },
        maxScore(state){
            return state.currentGame?.scoreMax;
        }
    },
    actions: {
        setUsers(users){
            this.users = users;
        },
        setCurrentGame(game){
            console.log('seteo game',game)
            this.currentGame = game;
        }
    }
})