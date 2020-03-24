<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Navbar from './components/Navbar.vue';

export default Vue.extend({
  components: { Navbar },
});
</script>

<style lang="scss">
@import './styles/reset.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.title {
  margin: 0 auto;
  max-width: 50%;
  text-align: left;
  margin-bottom: 30px;
  margin-top: 30px;
  color: green;
  font-size: 25px;
  font-weight: 600;
}
.text-wrapper{
  margin: 0 auto;
  max-width: 50%;
  text-align: left;
  font-size: 16px;
}
</style>
