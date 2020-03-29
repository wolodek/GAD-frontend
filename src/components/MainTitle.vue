<template>
  <p class="main-title">{{title}}</p>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style lang='scss'>
@import '../styles/variables.scss';

  .main-title {
    @include headline;
    margin-top: 1rem;
  }
</style>
