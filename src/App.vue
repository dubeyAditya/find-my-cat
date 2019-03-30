<template>
  <div id="app">
    <ImageGallary msg="Which of these are cat ?"/>
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
  margin: 20px 200px 0px 200px;
}
</style>
