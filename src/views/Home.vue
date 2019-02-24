<template>
  <div class="home">
    <HelloCoffee msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloCoffee from "@/components/HelloCoffee.vue";

export default {
  name: "home",
  components: {
    HelloCoffee
  }
};
</script>
