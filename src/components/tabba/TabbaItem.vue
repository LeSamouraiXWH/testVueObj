<template>
    <div class="tabbar-item" @click="btnClick">
       <div :style="activeStyle">
           <slot name="item-text"></slot>
       </div>
    </div>
</template>

<script>
    export default {
        name: "TabbaItem",
        props:{
            path:String,
            activeColor:{
                type:String,
                default:'red'
            }
        },
        methods:{
            btnClick(){
                if(this.path !== this.$route.path){
                    this.$router.push(this.path);
                }
            }
        },
        computed:{
            isActive(){
                return this.$route.path.indexOf(this.path)!==-1
            },
            activeStyle(){
                return this.isActive ? {color:this.activeColor}:{}
            }

        }
    }
</script>

<style scoped>
    .tabbar-item{
        flex:1;
        text-align: center;
        height: 49px;
    }
    .active{
        color:red
    }
</style>