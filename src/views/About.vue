<template>
  <div class="about">
    <MainTitle title="O nas"/>
    <ArticleListItemText
    v-for="(item, index) in articles"
    :key="index"
    :text='item.text'
    :title='item.title'
    class = 'm-1rem'/>
  </div>
</template>

<script>
import MainTitle from '../components/MainTitle.vue';
import ArticleListItemText from '../components/ArticleListItemText.vue';

export default {
  components: {
    MainTitle,
    ArticleListItemText,
  },
  data() {
    return {
      articles: [
        {
          id: 1,
          title: 'Historia Koła',
          text: 'A rather long string of English text, an error message '
               + 'actually that just keeps going and going -- an error '
               + 'message to make the Energizer bunny blush (right through '
               + 'those Schwarzenegger shades)! Where was I? Oh yes, '
               + 'you\'ve got an error and all the extraneous whitespace is '
                + 'actually that just keeps going and going -- an error '
               + 'message to make the Energizer bunny blush (right through '
               + 'those Schwarzenegger shades)! Where was I? Oh yes, '
               + 'you\'ve got an error and all the extraneous whitespace is '
                + 'actually that just keeps going and going -- an error '
               + 'message to make the Energizer bunny blush (right through '
               + 'those Schwarzenegger shades)! Where was I? Oh yes, '
               + 'you\'ve got an error and all the extraneous whitespace is '
                + 'actually that just keeps going and going -- an error '
               + 'message to make the Energizer bunny blush (right through '
               + 'those Schwarzenegger shades)! Where was I? Oh yes, '
               + 'you\'ve got an error and all the extraneous whitespace is '
               + 'just gravy.  Have a nice day.',
        },
        {
          id: 2,
          title: 'Prezydium i członkowie',
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

.about {
  max-width: 50%;
  min-width: 800px;
  margin: 0 auto;
  .m-1rem{
    margin: 30px 0;
  }
}

</style>
