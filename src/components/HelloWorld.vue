<template>
  <div class="hello">
    <img alt="Vue logo" src="./../assets/logo.png">
    <h1>Hello Viewers!</h1>
    <router-link :to="{ name: 'tryout-menu'}">
      <h3>Click here to open tryout menu</h3>
    </router-link>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
