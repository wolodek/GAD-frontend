<template>
    <div class="faq-question">
        <div class="question" v-on:click="toggleAnswerVisibilty">
            {{question}}
        </div>
        <div class="answer" :class="{ opened: opened }">
            {{answer}}
        </div>
    </div>
</template>

<script>
export default {
  name: 'FaqQuestion',
  props: {
    question: String,
    answer: String,
  },
  data() {
    return {
      opened: false,
    };
  },
  methods: {
    toggleAnswerVisibilty() {
      this.opened = !this.opened;
    },
  },
};
</script>

<style lang='scss'>
@import '../styles/variables.scss';

.faq-question {
    width: 50%;
    text-align: left;
    margin: 25px auto;
    .question {
        @include headline;
        color: $green-1;
        cursor: pointer;
    }
    .answer {
        @include body;
        overflow: hidden;
        max-height: 0;
        opacity: 0;
        transition: all 0.3s ease;
    }
    .opened {
        max-height: 500px;
        opacity: 1;
        padding: 15px 0;
    }
}
</style>
