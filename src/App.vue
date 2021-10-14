<template>

  <div id="app">
      <router-view></router-view>
        <MainTabBar></MainTabBar>

  </div>

</template>
<script>
  import MainTabBar from "./components/MainTabBar";
  export default {
    name: 'App',
    components:{
      MainTabBar
    }
  }

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  margin-top: 0;
}
  body{
    padding: 0;
    margin: 1px;
  }
</style>
