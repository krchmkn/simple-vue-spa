<template>
  <main class="container">
    <Header />
    <div class="container__content">
      <router-view></router-view>
    </div>
  </main>
</template>

<script>
import Header from '@/components/Header';

export default {
  components: { Header }
}
</script>

<style lang="scss">
  @import "reset-css";

  .container {
    margin: 0 auto;
    max-width: 800px;
    min-width: 320px;
    box-sizing: border-box;
    font-family: sans-serif;
    color: #1a202c;

    &__content {
      padding: 25px;
    }

    & h1 {
      font-size: 32px;
      padding-bottom: 50px;
      font-weight: 100;
    }

    & h2 {
      font-size: 22px;
      font-weight: 100;
    }

    & a {
      color: #42b983;
      text-decoration: none;
      border-bottom: 1px solid #42b983;
    }
  }
</style>
