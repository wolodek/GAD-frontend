<template>
  <div id="navbar-wrapper" class="flex-row">
    <a href="/">
      <img alt="Gad logo" src="../assets/gad-logo.png" />
    </a>
    <div id="menu-wrapper" class="flex-row">
      <div id="menu-options-wrapper" class="flex-row">
        <router-link
          v-for="(option, index) in menuOptions"
          v-bind:key="index"
          :to="option.link"
          class="menu-option"
        >{{ option.label }}</router-link>
      </div>
      <div id="icons-search-wrapper" class="flex-row">
        <div id="icons-wrapper">
          <SocialIcon :link="''" :icon="'youtube'" />
          <SocialIcon :link="''" :icon="'facebook-f'"  />
          <SocialIcon :link="''" :icon="'instagram'"  />
        </div>
        <div class="search-box">
          <input type="text" placeholder="type to search" />
          <a href="#">
            <img src="../assets/search.svg" alt="" class='i'>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SocialIcon from './SocialIcon.vue';

export default {
  name: 'Navbar',
  data() {
    return {
      menuOptions: [
        {
          label: 'Strona Główna',
          link: '/',
        },
        {
          label: 'Aktualności',
          link: 'news',
        },
        {
          label: 'O nas',
          link: 'about',
        },
        {
          label: 'FAQ',
          link: 'faq',
        },
      ],
    };
  },
  components: {
    SocialIcon,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.flex-row {
  display: flex;
  flex-direction: row;
  align-items: center;
}

#navbar-wrapper {
  height: 150px;
  padding: 0px 2%;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  img {
    max-width: auto;
    max-height: 100px;
  }
  #menu-wrapper {
    #menu-options-wrapper {
      a {
        text-decoration: none;
        font-weight: bold;
        color: #42b983;
        margin-right: 30px;
        font-size: 22px;

        &.router-link-exact-active {
          color: #2c3e50;
        }
      }
    }
    #icons-search-wrapper {
      position: relative;
      #icons-wrapper {
        margin-right: 40px;
        display: flex;
        flex-direction: row;
        // .icon {
        //   width: auto;
        //   height: 30px;
        //   margin-right: 23px;
        // }
      }
      #input {
        width: 10px;
        height: 30px;
        background: red;
      }
    }
    .search-box {
      z-index: 10;
      position: absolute;
      right: 0px;
      display: flex;
      background-color: white;
      height: 20px;
      padding: 10px;
      &:hover,
      &:focus-within {
        input {
          border-left: 1px solid grey;
          width: 170px;
          padding: 0 6px;
          color: #0e1010;
        }
      }
      .i {
        vertical-align: middle;
        color: #34495e;
        width: 20px;
        height: 20px;
        &:hover,
        &:focus-within {
          color: #0a0e11;
          float: right;
          display: flex;
        }
      }
      input {
        border: none;
        background: none;
        outline: none;
        float: left;
        padding: 0;
        color: white;
        font-size: 16px;
        transition: 0.4s;
        width: 0px;
      }
    }
  }
}
</style>
