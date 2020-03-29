<template>
  <div id="app">
    <Navbar />
    <router-view id='page' />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default Vue.extend({
  components: { Navbar, Footer },
});
</script>

<style lang="scss">
@import './styles/reset.scss';

html {
  font-size: 16px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  #page {
    min-height: 100vh;
  }
}

</style>
