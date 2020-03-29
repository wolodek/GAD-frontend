<template>
  <div class="news">
    <MainTitle title="Aktualności"/>
    <ArticleList viewType="news" />
  </div>
</template>

<script>
import MainTitle from '../components/MainTitle.vue';
import ArticleList from '../components/ArticleList.vue';

export default {
  components: {
    ArticleList,
    MainTitle,
  },
};
</script>
