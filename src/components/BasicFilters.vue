<template>
  <div class="basic-filters-wrapper">
      <div v-on:click="setFilterActive(option.filterName, option.id)"
      v-bind:class="{ active: activeFilterId === option.id }"
      class="option"
      v-for="option in options"
      :key="option.id">
        {{option.text}}
      </div>
  </div>
</template>

<script>
export default {
  name: 'BasicFilters',
  data() {
    return {
      activeFilterId: 0,
      options: [
        {
          id: 0,
          text: 'Wszystko',
          filterName: 'all',
        },
        {
          id: 1,
          text: 'Artykuły',
          filterName: 'articles',
        },
        {
          id: 2,
          text: 'Wydarzenia',
          filterName: 'events',
        },
      ],
    };
  },
  methods: {
    setFilterActive(filterName, filterId) {
      console.log(filterName, filterId);
      this.activeFilterId = filterId;
    },
  },
};
</script>

<style lang='scss'>
  @import '../styles/variables.scss';

  .basic-filters-wrapper{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 70px;
    .option {
      @include title;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 150px;
      height: 65px;
      cursor: pointer;
      color: $black; &:nth-of-type(2) {
        border-left: 1px solid lightgray;
        border-right: 1px solid lightgray;
      }

    }
    .active {
      color: $white;
      background-color: $green-1;
    }
  }
</style>
