<template>
  <div>
   <p>你好</p>
      <router-link to="/home/message1">消息1 </router-link>
      <router-link to="/home/message2">消息2</router-link>
          <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',

  activated(){
      this.$router.push(this.path)
  },
    beforeRouteLeave(to,from,next){
      this.path = this.$route.path
        next()
    }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

  .container{
    min-width: 800px;
    height: 600px;
    background: gray;
    display: flex;
  }

  .box{
    width:200px;
    height: 600px;
    background: pink;
    order:-1
  }

  .box1 {
    height: 600px;
    background: aquamarine;
    width:auto;
    flex:1;
    order:0
  }

  .box2 {
    width:200px;
    height: 600px;
    background: skyblue;
    order:1


  }

</style>