<template>
    <div>
        <button @click="clickBtn">点击</button>
        <span>{{$store.getters.setGetters}}</span>
        <span>{{$store.state.count}}</span>
        <button @click="clickCtn">修改</button>
    </div>
</template>

<script>
    export default {
        name: "About",
        methods:{
            clickBtn(){
                this.$store.commit('setCounter',{'num':5})
            },
            clickCtn(){
                this.$store.dispatch('aUpdateInfo',{'num':5}).then(res => {
                    console.log('error');
                    console.log(res)
                })
            }
        }
    }
</script>

<style scoped>

</style>