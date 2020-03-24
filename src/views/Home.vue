<template>
  <div class="home">
    <div class="hero-wrapper">
      <img class="baner" src="../assets/baner.png" alt="">
    </div>
    <ArticleComponent title="'hackaton'" date="'30.02'" text="'lorem ipsum" />
  </div>
</template>

<script>
import ArticleComponent from '../components/ArticleComponent.vue';

export default {
  components: {
    ArticleComponent,
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
