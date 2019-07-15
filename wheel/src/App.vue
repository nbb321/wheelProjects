<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/about">About</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
*{
    list-style: none;
    margin: 0;
    padding: 0;
}
body,html{
  width: 100%;
  height: 100%;
  margin: 0;
  
}
#app{
  width: 100%;
  height: 100%;

}
</style>
