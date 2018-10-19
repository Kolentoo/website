<template>
  <div id="app">

    <router-view/>

  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  @import 'assets/css/common.css';
  /* @import 'assets/css/font/font.css'; */
  @import 'assets/css/core.css';


#app {
  font-family: PingFangSC-Medium, Arial, sans-serif,Microsoft YaHei;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
  html{
    overflow-x:hidden ;
  }

  
</style>
