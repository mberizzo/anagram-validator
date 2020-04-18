<template>
  <div id="app">
    <div class="grid-content bg-purple-dark">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
  html {
    height: 100%;
  }

  body {
    background: url('https://source.unsplash.com/random/1400x800') center center;
    background-size: cover;
  }

  #app {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
</style>
