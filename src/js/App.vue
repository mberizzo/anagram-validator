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
  @import '~element-ui/lib/theme-default/base.css';

  html {
    height: 100%;
  }

  body {
    background-image: linear-gradient(to top, #accbee 0%, #e7f0fd 100%);
  }

  #app {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
</style>
