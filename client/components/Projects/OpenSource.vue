<template>
  <section id="open-source" class="open-source">
    <div class="container">
      <div class="open-source__top-text-content">
        <h3 class="open-source__main-title">Our code - available in open source - is used by many other companies.</h3>
        <div class="open-source__github-wrap">
          <p class="open-source__description">
            70+ of <span>Mad Devs'</span> pet projects have been shared with <br class="open-source__descktop-break"> the community via <span class="open-source__mobile-icon-wrapper">GitHub. <a class="open-source__github-icon-mobile" href="https://github.com/maddevsio" target="_blank"></a></span>
          </p>
          <a class="open-source__github-icon" href="https://github.com/maddevsio" target="_blank"></a>
        </div>
      </div>
      <div class="open-source__projects row">
        <div class="col-xl-4 col-lg-4 col-md-6" v-for="(openSource, i) in openSources" :key="i">
          <div class="open-source__project" :class="`open-source__project-${openSource.projectName}`">
            <a class="open-source__project-link" :href="openSource.link" target="_blank">
              <div class="open-source__content-wrap">
                <div :class="`open-source__icon open-source__${openSource.projectName}`"></div>
              </div>
              <p class="open-source__paragraph" v-html="openSource.description">{{ openSource.description }}</p>
            </a>
          </div>
        </div>
      </div>
      <a class="open-source__github-link" href="https://github.com/maddevsio" target="_blank">View more on GitHub</a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'OpenSource',
  data() {
    return {
      openSources: [
        {
          projectName: 'mad-location',
          link: 'https://github.com/maddevsio/mad-location-manager',
          description: 'А library for GPS and accelerometer data "fusion" with a Kalman filter.'
        },
        {
          projectName: 'comedian',
          link: 'https://github.com/maddevsio/comedian',
          description: 'A <span>team-management</span> system leveraging Slack and Telegram bot functionalities to enable remote standups and track daily performance.'
        },
        {
          projectName: 'ariadna',
          link: 'https://github.com/maddevsio/ariadna',
          description: 'An <span>open-source</span> geocoder, built on top of ElasticSearch, for fast geocoding and better search for CIS countries.'
        },
        {
          projectName: 'id-match',
          link: 'https://github.com/maddevsio/idmatch',
          description: 'An open source tool enabling ID cards recognition to ensure security on your premises.'
        },
        {
          projectName: 'your-cast',
          link: 'https://github.com/maddevsio/yourcast.tv',
          description: 'A solution to create lists of YouTube videos and stream them online in just a few seconds.'
        },
        {
          projectName: 'heimdall',
          link: 'https://github.com/maddevsio/heimdall',
          description: 'A <span>security-monitoring</span> solution for Ethereum smart contracts.'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';
@import '../../assets/styles/_openSourceIcons';

.open-source {
  padding-bottom: 108px;
  background: $bgcolor--white;

  &__main-title,
  &__description,
  &__github-link {
    text-align: center;
  }

  &__main-title {
    @include h2_title;
    padding-bottom: 15px;
  }

  &__top-text-content {
    margin-bottom: 40px;
  }

  &__description,
  &__paragraph,
  &__github-link {
    font-family: 'Poppins-Regular';
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.02em;
    color: $text-color--black-lighter;

    span {
      white-space: nowrap;
    }
  }

  &__mobile-icon-wrapper {
    position: relative;
  }

  &__github-wrap {
    display: flex;
    justify-content: center;
    margin-right: -13px;
  }

  &__github-icon,
  &__github-icon-mobile {
    @include github-icon;
  }

  &__github-link,
  &__github-icon,
  &__icon {
    display: block;
  }

  &__github-icon {
    width: 77px;
    height: 79px;
    margin-top: -24px;
    margin-left: -1px;
  }

  &__github-icon-mobile {
    width: 35px;
    height: 35px;
    display: none;
    position: absolute;
    top: -4px;
    right: -32px;
  }

  &__github-link {
    color: $text-color--red;
  }

  &__content-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 31px;
  }

  &__project-link {
    display: block;
    text-decoration: none;
    height: 100%;
    padding: 32px 32px 60px;
  }

  &__projects {
    margin-bottom: 56px;
  }

  &__project {
    width: 100%;
    height: 100%;
    min-height: 260px;
    display: flex;
    flex-direction: column;
    background-color: $bgcolor--white-darken;
    transition: 0.4s;

    &:hover  {
      .open-source__paragraph {
        color: $text-color--white-darken;
      }
    }

    @media only screen and (max-width: 767px) {
      min-height: unset;
    }
  }

  &__project-mad-location {
    &:hover {
      background-color: $project-hover-bg-color--blue;

      .open-source__mad-location {
        @include mad-location-white;
      }
    }
  }

  &__project-comedian {
    &:hover {
      background-color: $project-hover-bg-color--blue-dimmed;

      .open-source__comedian {
        @include comedian-white;
      }
    }
  }

  &__project-ariadna {
    &:hover {
      background-color: $project-hover-bg-color--blue-light;

      .open-source__ariadna {
        @include ariadna-white;
      }
    }
  }

  &__project-id-match {
    &:hover {
      background-color: $project-hover-bg-color--black;

      .open-source__id-match {
        @include id-match-white;
      }
    }
  }

  &__project-your-cast {
    &:hover {
      background-color: $project-hover-bg-color--pink;

      .open-source__your-cast  {
        @include your-cast-white;
      }
    }
  }

  &__project-heimdall {
    &:hover {
      background-color: $project-hover-bg-color--violet;

      .open-source__heimdall {
        @include heimdall-white;
      }
    }
  }

  &__icon {
    width: 229px;
    height: 50px;
  }

  &__mad-location {
    @include mad-location;
  }

  &__comedian {
    @include comedian;
  }

  &__ariadna {
    @include ariadna;
  }

  &__id-match {
    @include id-match;
  }

  &__your-cast {
    @include your-cast;
  }

  &__heimdall {
    @include heimdall;
  }

  @media only screen and (max-width: 834px) {
    padding-bottom: 80px;
    
    &__top-text-content {
      margin-bottom: 30px;
    }

    &__github-icon {
      width: 55px;
    }
  }

  @media only screen and (max-width: 690px) {
    &__github-wrap {
      margin-right: 0;
    }
    
    &__github-icon,
    &__descktop-break {
      display: none;
    }

    &__github-icon-mobile {
      display: block;
    }
  }

  @media only screen and (max-width: 578px) {
    padding-bottom: 55px;

    &__projects {
      margin-bottom: 36px;
    }
  }

  @media only screen and (max-width: 400px) {
    &__description {
      width: 277px;
    }
  }
}
</style>
