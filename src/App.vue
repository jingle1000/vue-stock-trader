<template>
  <div id="app">
    <nav-bar></nav-bar>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <router-link to="/complaint">File Complaint</router-link>
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
</style>
