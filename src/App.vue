<template>
  <div id="app">
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components:{
    
  }
}
</script>

<style>
#app {
  font-family: 'MicrosoftYaHei', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.main{
  width: 100%;
  background-color: #F5F5F5;
  height: 100%;
  /* overflow: auto; */
  z-index: -100;
}
.ad_header {
  position: fixed;
  top: 0;
}
</style>
