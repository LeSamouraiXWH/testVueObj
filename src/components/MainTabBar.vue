<template>
        <Tabbar>
            <TabbaItem path="/home">
                <div slot="item-text">首页</div>
            </TabbaItem>
            <TabbaItem path="/category">
                <div slot="item-text">分类</div>
            </TabbaItem>
            <TabbaItem path="/carts">
                <div slot="item-text">购物车</div>
            </TabbaItem>
            <TabbaItem path="/profile">
                <div slot="item-text">我的</div>
            </TabbaItem>
        </Tabbar>
</template>

<script>
    import Tabbar from './tabba/Tabbar'
    import TabbaItem from "./tabba/TabbaItem"
    export default {
        name: "MainTabBar",
        components:{
            Tabbar,
            TabbaItem
        }
    }
</script>

<style scoped>

</style>