<template>
  <div id="app">
    <router-link to="/home">首页 </router-link>
    <router-link :to="'/about/'+userId">关于</router-link>
    <keep-alive>
      <router-view/>
    </keep-alive>

  </div>

</template>
<script>

export default {

  data(){
    return {
      userId:'123'
    }
  },
  name: 'App'

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
    margin: 0;
  }
</style>
