<template>
  <div class="navigation-wrap container" :class="`navigation-wrap-${currentPageName}`" v-if="currentPageName !== 'careers'" >
    <nav class="navigation-list" :class="`navigation-list-${currentPageName}`" v-if="currentPageName === 'services'">
      <a href="#remote-tech-staff" class="navigation-item">Remote Tech Staff</a>
      <a href="#software-development" class="navigation-item">Software Development</a>
      <a href="#infrastructure-optimisation" class="navigation-item">Infrastructure Optimization</a>
      <a href="#it-consulting" class="navigation-item">IT Consulting</a>
    </nav>
    <nav class="navigation-list" :class="`navigation-list-${currentPageName}`" v-else-if="currentPageName === 'projects'">
      <a href="#case-studies" class="navigation-item">Case studies</a>
      <a href="#customers" class="navigation-item">Our customers</a>
      <a href="#open-source" class="navigation-item">Open-source pet projects</a>
    </nav>
    <nav class="navigation-list" :class="`navigation-list-${currentPageName}`" v-else>
      <router-link to="services/#remote-tech-staff" class="navigation-item">Remote Tech <span class="mobile_hidden">Staff</span></router-link>
      <router-link to="services/#software-development" class="navigation-item">Software Development</router-link>
      <router-link to="services/#infrastructure-optimisation" class="navigation-item">Infrastructure Optimization</router-link>
      <router-link to="services/#it-consulting" class="navigation-item">IT Consulting</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'navigationList',
  mounted() {
    if ($nuxt.$route.name) {
      this.currentPageName = $nuxt.$route.name;
    }
  },
  data() {
    return {
      currentPageName: ''
    };
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .navigation-wrap {
    margin-top: 30px;
    margin-bottom: 60px;
  }

  .navigation-wrap-projects {
    @media screen and (max-width: 480px) {
      margin-bottom: 40px;
    }

    @media screen and (max-width: 420px) {
      margin-bottom: 20px;
    }
  }

  .navigation-list {
    display: flex;
    flex-direction: row;

    .navigation-item {
      margin-right: 48px;
      border-bottom: 1px solid rgba(236, 28, 36, .5);
      color: $text-color--grey-light;
      font-size: 19px;
      line-height: 24px;
      font-family: 'Poppins-Regular', sans-serif;;
      letter-spacing: -0.04em;
      text-decoration: none;
      transition: 0.3s;

      &:last-child {
        margin-right: 0;
      }

      &:hover {
        border-bottom: 1px solid rgba(236, 28, 36, 1);
      }
    }
  }

  .navigation-list-projects {
    justify-content: flex-start;
  }

  @media screen and (max-width: 1130px) {
    .mobile_hidden {
      display: none;
    }
  }

  @media screen and (max-width: 1090px) {
    .navigation-list {
      justify-content: space-between;

      .navigation-item {
        margin-right: 15px;
      }
    }

    .navigation-list-projects {
      justify-content: flex-start;

      .navigation-item {
        margin-right: 35px;
      }
    }
  }

  @media only screen and (max-width: 970px) {
    .navigation-list {
      .navigation-item {
        font-size: 14px;
        line-height: 24px;
        letter-spacing: -0.03em;
        background-position-y: 4px;
      }
    }

    .navigation-list-projects {
      .navigation-item {
        margin-right: 25px;
      }
    }
  }

  @media screen and (max-width: 690px) {
    .navigation-list {
      flex-direction: column;

      .navigation-item {
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 25px;
        max-width: fit-content;

        .mobile_hidden {
          display: inline;
        }

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
</style>
