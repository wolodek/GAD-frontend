<template>
    <div class="article-list-item-wrapper">
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
  name: 'ArticleListItem',
  props: {
    date: String,
    title: String,
    text: String,
  },
});
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
}
</style>
