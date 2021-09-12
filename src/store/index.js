import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        count:10
    },
    actions:{
        aUpdateInfo(context,payload){
            return new Promise((resolve) => {
                setTimeout(()=>{
                    context.commit('setCounter',payload)
                    console.log(payload);
                    resolve(1111)
                },1000)
            })
        }
    },
    mutations:{
        setCounter(state,payload){
            console.log(payload.num)
            state.count += payload.num
        }
    },
    getters:{
        setGetters(state){
            return state.count*state.count
        }
    },
    modules:{

    }
})

export default store