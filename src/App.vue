<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view/>
  </div>
</template>

<script>
import Nav from "./components/Nav"
export default {
 components: {
   NavBar: Nav,
 }
}
</script>
<style>
body {
  background: #eeeeee !important;
}
.card {
    border: none;
    border-radius: 15px;
}
</style>
