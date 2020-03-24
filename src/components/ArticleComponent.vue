<template>
    <div class="single-article-wrapper">
        <div class="date-column">
            {{date}}
        </div>
        <div class="text-column">
            <p class="article-title">
                {{title}}
            </p>
            <p class="article-body">
                {{text}}
            </p>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'ArticleComponent',
  props: {
    date: String,
    title: String,
    text: String,
  },
});
</script>

<style lang='scss'>

</style>
