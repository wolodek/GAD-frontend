<template>
<div>
    <a :href="link" :class="`${icon} icon-button`">
        <font-awesome-icon :icon="['fab', icon]" />
        <span></span>
    </a>
</div>

</template>

<script>
export default {
  name: 'SocialIcon',
  props: {
    link: String,
    icon: String,
  },
};
</script>

<style lang='scss'>
@import '../styles/variables.scss';


/* Wrapper */
.icon-button {
  background-color: $white;
  border-radius: 2.7rem;
  cursor: pointer;
  display: flex;
  font-size: 1.5rem;
  height: 2.7rem;
  line-height: 2.7rem;
  margin: 0 5px;
  position: relative;
  text-align: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 2.7rem;
  justify-content: center;
  align-items: center;
  svg {
    position: absolute;
    background: none;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
    z-index: 10;
    color: $green-1;
  }
  span {
    background-color: $green-1;
    border-radius: 0;
    display: block;
    height: 0;
    left: 50%;
    margin: 0;
    position: absolute;
    top: 50%;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
    width: 0;
  }
  &:hover {
    span {
      width: 2.7rem;
      height: 2.7rem;
      border-radius: 2.7rem;
      margin: -1.35rem;
    }
    svg {
      color: $white;
      fill: $white;
    }
  }
}
</style>
