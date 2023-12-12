import { defineStore } from 'pinia'



export const appStore = defineStore('app', {
    state: () => ({
        user: null,
    }),
    actions: {
        setUser({id, name, lastName, email}){
            this.user = {id, name, lastName, email};
            sessionStorage.setItem('user', JSON.stringify(this.user)); 
        },
        logout(){
            this.user = null;
            sessionStorage.removeItem('user');
        },
        setUserFromSessionStorage(){
            const user = sessionStorage.getItem('user');
            if(user){
                this.user = JSON.parse(user);
            }
        }
    }
})