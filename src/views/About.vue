<template>
  <div class="about">
    <h1>About</h1>
    <p>
      Proof of Concept app by <a class="link" href="https://tinaciousdesign.com" target="_blank">Tinacious Design</a> to test out Contentful and Vue.js
    </p>
  </div>
</template>

<style lang="scss">
@import "../styles/vars";

.about {
  text-align: center;
}

.link {
  font-weight: 700;
  color: $brown;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}
</style>
