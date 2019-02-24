<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>

  </div>
</template>

<script>
import { Coffee } from '../services/Coffee';

Coffee.get().then((coffees) => {
  console.table(coffees)
})

export default {
  name: "HelloCoffee",
  props: {
    msg: String
  }
};
</script>

<style scoped lang="scss">
</style>
