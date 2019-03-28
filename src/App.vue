<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ImageGallary msg="Which is my cat"/>
  </div>
</template>

<script>
import ImageGallary from "./components/ImageGallary.vue";

export default {
  name: "app",
  components: {
    ImageGallary
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
