<template>
  <div class="home">
    <div class="hero-wrapper">
      <img class="baner" src="../assets/baner.png" alt="">
    </div>
    <ArticleList />
  </div>
</template>

<script>
import ArticleList from '../components/ArticleList.vue';

export default {
  components: {
    ArticleList,
  },
  name: 'Home',
  mounted() {
    console.log(document.getElementById('navbar-wrapper').offsetHeight);
  },
  computed: {
    navbarHeight() {
      console.log(document.getElementById('navbar-wrapper'));
      return document.getElementById('navbar-wrapper');
    },
  },
};
</script>
<style lang="scss">
 .hero-wrapper {
   height: calc(100vh - 150px);
 }
  .baner {
    width:100%;
    height: 100%;
  }
</style>
