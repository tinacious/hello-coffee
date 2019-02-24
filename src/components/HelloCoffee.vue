<template>
  <div>
    <h1>☕️ Coffee</h1>

    <Loading v-if="loading" />

    <div class="coffees">
      <div class="coffees__entry" v-for="entry in entries" :key="entry.name">
        <h2>{{ entry.name }}</h2>

        <ul class="coffees__metadata">
          <li class="coffees__metadata-item coffees__country">{{ getFlag(entry.country) }} {{ entry.country }}</li>
          <li class="coffees__metadata-item coffees__roaster">🔥{{ entry.roaster }}</li>
          <li class="coffees__metadata-item coffees__rating">{{ getStars(entry.rating) }}</li>
        </ul>

        <div class="coffees__image-wrapper">
          <img class="coffees__image" v-bind:src="entry.photo" v-bind:alt="`Photo of ${entry.name} coffee`">
        </div>

        <div class="coffees__tasting-notes">
          {{ entry.tastingNotes }}
        </div>

        <div class="coffees__description" v-html="entry.description"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { Coffee } from '../services/Coffee';
import { Stars } from '../mixins/stars';

import Loading from  "@/components/Loading";

export default {
  name: "HelloCoffee",

  mixins: [Stars],

  components: {
    Loading
  },

  data() {
    return {
      loading: true,
      entries: []
    }
  },

  methods: {
    /**
     * Get all of the coffees ☕️
     */
    _initViewData() {
      Coffee.get().then((coffees) => {
        this.entries = coffees;
      })
      .finally(() => {
        this.loading = false;
      });
    },

    getFlag(country) {
      const k = country.toLowerCase().replace(' ', '_');
      const countryFlagMap = {
        colombia: '🇨🇴',
        costa_rica: '🇨🇷',
        el_salvador: '🇸🇻',
        ethiopia: '🇪🇹',
        guatemala: '🇬🇹',
        kenya: '🇰🇪',
        tanzania: '🇹🇿',
      };

      const flag = countryFlagMap[k];
      if (!flag) {
        console.warn(`No flag for country ${country}`);
      }

      return flag || '';
    },
  },

  created() {
    this._initViewData();
  }
};
</script>

<style scoped lang="scss">
@import '../styles/vars';

.coffees {
  &__entry {
    margin-bottom: 80px;
  }

  &__metadata {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &__metadata-item {
    display: inline-block;
    margin: 0;
    margin-right: 40px;

    &:last-child {
      margin-right: 0;
    }
  }

  &__tasting-notes {
    font-style: italic;
    text-align: center;
    color: $brown;
  }

  &__description {
    font-size: 1.1em;
    text-align: center;
  }

  &__image-wrapper {
    max-width: 330px;
    margin: 0 auto;
  }

  &__image {
    box-sizing: border-box;
    max-width: 100%;
    // max-width: 330px;
    display: block;
    margin: 30px auto;
    border-radius: 6px;
    border: 2px solid $white;
    filter: drop-shadow(6px 6px 6px rgba($black, 0.6));
  }
}
</style>
