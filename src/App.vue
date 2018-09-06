<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Calendar/>
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Calendar from './components/Calendar'

// import * as script from './js/script.js';

// script();

export default {
  name: 'App',
  components: {
    HelloWorld,
    Calendar
  }
}
</script>

<style lang="scss">
@import './scss/style';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
