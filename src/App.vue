<template>
  <div id="app" class="app">
    <nav class="nav">
      <div class="container">
        <router-link class="nav__link" to="/">Coffee</router-link>
        <router-link class="nav__link" to="/about">About</router-link>
      </div>
    </nav>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
@import "./styles/vars";
@import "./styles/layout";
@import "./styles/typography";

* {
  box-sizing: border-box;
}

body {
  background: url("./assets/retina_wood.png");
  color: $black;
  margin: 0;
}

.app {
  font-size: 130%;
  font-family: 'freight-text-pro', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  @include container;
}

.nav {
  background: $brown;
  text-align: center;
  border-bottom: 4px solid darken($brown, 10%);

  &__link {
    display: inline-block;
    padding: 10px 20px;
    font-weight: bold;
    color: rgba($white, 0.6);
    text-decoration: none;

    &:hover {
      color: $white;
      text-decoration: underline;
    }

    &.router-link-exact-active {
      color: $white;
    }
  }
}
</style>
