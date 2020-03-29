<template>
    <div class="text-column">
        <p class="article-title">
            {{title}}
        </p>
        <p class="article-body">
            {{text}}
        </p>
    </div>
</template>

<script>
export default {
  name: 'ArticleListItemText',
  props: {
    title: String,
    text: String,
  },
};
</script>

<style lang='scss'>
@import '../styles/variables.scss';

.text-column {
    text-align: left;
    flex: 2;
    .article-title {
        color: $green-1;
        margin-bottom: 1rem;
        @include subheader;
    };
    .article-body {
        @include body;
    }
}
</style>
