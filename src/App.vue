<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <HelloWorld/> -->
     <!-- <FormSample></FormSample> -->
     <!-- <Index></Index> -->
     <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
np
<script>
import HelloWorld from './components/HelloWorld'
// import FormSample from "./components/kForm";
//import Index from "./components/form/index"
import Index from "./components/tree/index"
export default {
  name: 'App',
  components: {
    HelloWorld,
    // FormSample,
    Index
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
