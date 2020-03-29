<template>
    <div class="article-list-item-wrapper">
        <div class="date-column" v-if="date">
            {{date}}
        </div>
        <ArticleListItemText :title='title' :text='text' />
    </div>
</template>

<script>
import ArticleListItemText from './ArticleListItemText.vue';

export default {
  name: 'ArticleListItem',
  props: {
    date: String,
    title: String,
    text: String,
  },
  components: {
    ArticleListItemText,
  },
};
</script>

<style lang='scss'>
@import '../styles/variables.scss';

.article-list-item-wrapper {
    display: flex;
    flex-direction: row;
    text-align: center;
    margin-bottom: 40px;
    .date-column {
        @include headline;
        flex:1;
        color: $green-1;
    }
}
</style>
