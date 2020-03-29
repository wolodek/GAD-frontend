<template>
  <div class="faq">
    <MainTitle title="F.A.Q."/>
    <FaqQuestion
    :question="'Gdzie nocą tutpa jeż'"
    :answer = "answer" />
    <FaqQuestion
    :question="'Gdzie nocą tutpa jeż'"
    :answer = "answer" />
  </div>
</template>

<script>
import MainTitle from '../components/MainTitle.vue';
import FaqQuestion from '../components/FaqQuestion.vue';

export default {
  components: {
    MainTitle,
    FaqQuestion,
  },
  data() {
    return {
      answer: 'siemka co tam u ciebie kurna byku',
    };
  },
  name: 'Faq',
};
</script>
<style lang="scss">

</style>
