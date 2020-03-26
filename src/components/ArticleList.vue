<template>
  <div id='list-wrapper'>
    <ArticleListItem v-for="(item) in articles"
    :key="item.id"
    :date='item.date'
    :title='item.title'
    :text='item.text'/>
  </div>
</template>

<script>
import ArticleListItem from './ArticleListItem.vue';

export default {
  components: {
    ArticleListItem,
  },
  data() {
    return {
      articles: [
        {
          id: 1,
          date: '30.02',
          title: 'Gadanina',
          text: 'A rather long string of English text, an error message '
               + 'actually that just keeps going and going -- an error '
               + 'message to make the Energizer bunny blush (right through '
               + 'those Schwarzenegger shades)! Where was I? Oh yes, '
               + 'you\'ve got an error and all the extraneous whitespace is '
               + 'just gravy.  Have a nice day.',
        },
        {
          id: 2,
          date: '15.08',
          title: 'Hackaton',
          text: 'A rather long string of English text, an error message '
               + 'actually that just keeps going and going -- an error '
               + 'message to make the Energizer bunny blush (right through '
               + 'those Schwarzenegger shades)! Where was I? Oh yes, '
               + 'you\'ve got an error and all the extraneous whitespace is '
               + 'just gravy.  Have a nice day.',
        },
      ],

    };
  },
};
</script>

<style lang='scss'>
@import '../styles/variables.scss';
#list-wrapper{
  width: 50%;
  min-width: 800px;
  margin: 70px auto;
}
</style>
